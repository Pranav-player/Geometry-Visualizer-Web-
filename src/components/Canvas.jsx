import { useEffect, useRef, useState } from "react";
import { drawShape } from "../utils/shapeDrawer";
import { evaluateEquation } from "../utils/equationParser";
import "./Canvas.css";

function Canvas({ shape, params, equations = [] }) {
  const canvasRef = useRef(null);
  const [zoom, setZoom] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: null, y: null });

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const graphX = (x - canvas.width / 2) / zoom - panX;
    const graphY = (canvas.height / 2 - y) / zoom - panY;

    setMousePos({ x: graphX.toFixed(2), y: graphY.toFixed(2) });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setZoom((prev) => Math.max(0.5, Math.min(5, prev * delta)));
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(5, prev * 1.2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(0.5, prev / 1.2));
  };

  const handleReset = () => {
    setZoom(1);
    setPanX(0);
    setPanY(0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Clear canvas
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Save context state
    ctx.save();

    // Apply transformations
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(zoom, zoom);
    ctx.translate(panX, -panY);

    // Draw grid
    drawGrid(ctx, canvas.width, canvas.height, zoom);

    // Draw axes
    drawAxes(ctx, canvas.width, canvas.height);

    // Draw equations
    equations.forEach((equation, index) => {
      drawEquation(ctx, equation, index, canvas.width, canvas.height);
    });

    // Draw shape
    ctx.fillStyle = "#0f4d3a";
    ctx.strokeStyle = "#8a6742";
    ctx.lineWidth = 2 / zoom;
    drawShape(ctx, shape, params);

    ctx.restore();
  }, [shape, params, zoom, panX, panY, equations]);

  return (
    <div className="canvas-container">
      <div className="canvas-controls">
        <div className="zoom-controls">
          <button className="zoom-btn" onClick={handleZoomOut} title="Zoom Out">
            −
          </button>
          <span className="zoom-level">{(zoom * 100).toFixed(0)}%</span>
          <button className="zoom-btn" onClick={handleZoomIn} title="Zoom In">
            +
          </button>
          <button className="zoom-btn" onClick={handleReset} title="Reset View">
            Reset
          </button>
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="canvas"
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
      />

      <div className="canvas-info">
        <div className="canvas-info-left">
          <span>Canvas: 600x400px</span>
          {mousePos.x !== null && (
            <span className="coordinate-display">
              x: {mousePos.x}, y: {mousePos.y}
            </span>
          )}
        </div>
        <div className="canvas-info-right">
          {equations.length > 0 && (
            <span>{equations.length} equation(s) active</span>
          )}
        </div>
      </div>
    </div>
  );
}

function drawGrid(ctx, width, height, zoom) {
  ctx.strokeStyle = "rgba(120, 95, 68, 0.12)";
  ctx.lineWidth = 0.5 / zoom;
  const gridSize = 40 / zoom;

  for (let i = -width / 2; i < width / 2; i += gridSize) {
    ctx.beginPath();
    ctx.moveTo(i, -height / 2);
    ctx.lineTo(i, height / 2);
    ctx.stroke();
  }

  for (let i = -height / 2; i < height / 2; i += gridSize) {
    ctx.beginPath();
    ctx.moveTo(-width / 2, i);
    ctx.lineTo(width / 2, i);
    ctx.stroke();
  }

  // Draw grid labels
  ctx.fillStyle = "rgba(74, 58, 44, 0.52)";
  ctx.font = `${12 / zoom}px Manrope`;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";

  for (let i = -5; i <= 5; i++) {
    if (i !== 0) {
      ctx.fillText(i, i * gridSize, 3 / zoom);
    }
  }
}

function drawAxes(ctx, width, height) {
  ctx.strokeStyle = "#5f4a37";
  ctx.lineWidth = 1.5 / (ctx.canvas.width / 600);

  // X-axis
  ctx.beginPath();
  ctx.moveTo(-width / 2, 0);
  ctx.lineTo(width / 2, 0);
  ctx.stroke();

  // Y-axis
  ctx.beginPath();
  ctx.moveTo(0, -height / 2);
  ctx.lineTo(0, height / 2);
  ctx.stroke();

  // Draw origin
  ctx.fillStyle = "#5f4a37";
  ctx.beginPath();
  ctx.arc(0, 0, 2, 0, Math.PI * 2);
  ctx.fill();
}

function drawEquation(ctx, equation, index, width, height) {
  const colors = ["#0f4d3a", "#8a6742", "#c48d4d", "#155f49", "#663f2c"];
  const color = colors[index % colors.length];

  ctx.strokeStyle = color;
  ctx.lineWidth = 2 / (ctx.canvas.width / 600);
  ctx.beginPath();

  let started = false;
  for (let x = -width / 2; x < width / 2; x += 1) {
    try {
      const y = -evaluateEquation(equation, x);

      if (!isNaN(y) && isFinite(y)) {
        if (!started) {
          ctx.moveTo(x, y);
          started = true;
        } else {
          ctx.lineTo(x, y);
        }
      } else {
        started = false;
      }
    } catch (e) {
      started = false;
    }
  }

  ctx.stroke();
}

export default Canvas;
