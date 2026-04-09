import { useEffect, useRef } from "react";
import { drawShape } from "../utils/shapeDrawer";
import "./ShapeGallery.css";

function ShapeGallery({
  selectedShape,
  onShapeChange,
  onShapeDetailsClick,
  shapeParams,
}) {
  const canvases = useRef({});

  const shapes = [
    { id: "circle", name: "Circle" },
    { id: "rectangle", name: "Rectangle" },
    { id: "square", name: "Square" },
    { id: "triangle", name: "Triangle" },
    { id: "ellipse", name: "Ellipse" },
    { id: "polygon", name: "Polygon" },
    { id: "line", name: "Line" },
    { id: "parabola", name: "Parabola" },
    { id: "hyperbola", name: "Hyperbola" },
    { id: "sinwave", name: "Sine Wave" },
    { id: "coswave", name: "Cosine Wave" },
    { id: "exponential", name: "Exponential" },
    { id: "logarithm", name: "Logarithm" },
  ];

  useEffect(() => {
    shapes.forEach((shape) => {
      const canvas = canvases.current[shape.id];
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      const params = shapeParams[shape.id] || {};

      // Clear canvas with soft paper tone background
      ctx.fillStyle = "#fff9f0";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid border
      ctx.strokeStyle = "#dcccb8";
      ctx.lineWidth = 1;
      ctx.strokeRect(0, 0, canvas.width, canvas.height);

      // Draw centered shape
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(0.8, 0.8);

      // Draw grid
      ctx.strokeStyle = "rgba(138, 103, 66, 0.08)";
      ctx.lineWidth = 0.5;
      const gridSize = 20;
      for (let i = -canvas.width / 2; i < canvas.width / 2; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(i, -canvas.height / 2);
        ctx.lineTo(i, canvas.height / 2);
        ctx.stroke();
      }
      for (let i = -canvas.height / 2; i < canvas.height / 2; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(-canvas.width / 2, i);
        ctx.lineTo(canvas.width / 2, i);
        ctx.stroke();
      }

      // Draw axes
      ctx.strokeStyle = "#cebba2";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, -canvas.height / 2);
      ctx.lineTo(0, canvas.height / 2);
      ctx.stroke();

      // Draw shape
      ctx.fillStyle = "none";
      ctx.strokeStyle = "#0f4d3a";
      ctx.lineWidth = 2;
      drawShape(ctx, shape.id, params);

      ctx.restore();
    });
  }, [shapeParams, shapes]);

  return (
    <div className="shape-gallery">
      <h3>Shape Gallery</h3>
      <div className="gallery-grid">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className={`gallery-item ${selectedShape === shape.id ? "active" : ""}`}
            title={`Click to select ${shape.name}`}
          >
            <div
              className="gallery-canvas-wrapper"
              onClick={() => onShapeChange(shape.id)}
            >
              <canvas
                ref={(el) => (canvases.current[shape.id] = el)}
                width={140}
                height={100}
                className="gallery-canvas"
              />
            </div>
            <div className="gallery-footer">
              <div className="gallery-label">{shape.name}</div>
              <button
                className="gallery-info-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onShapeDetailsClick(shape.id);
                }}
                title={`View ${shape.name} details`}
              >
                ℹ️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShapeGallery;
