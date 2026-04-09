import { useState } from "react";
import Canvas from "./components/Canvas";
import ShapeGallery from "./components/ShapeGallery";
import PropertiesPanel from "./components/PropertiesPanel";
import EquationInput from "./components/EquationInput";
import ShapeDetailsModal from "./components/ShapeDetailsModal";
import "./App.css";

function App() {
  const [selectedShape, setSelectedShape] = useState("circle");
  const [equations, setEquations] = useState([]);
  const [detailsModalShape, setDetailsModalShape] = useState(null);
  const [shapeParams, setShapeParams] = useState({
    circle: { radius: 50, centerX: 200, centerY: 150 },
    rectangle: { width: 100, height: 60, x: 150, y: 120 },
    triangle: { x1: 200, y1: 50, x2: 100, y2: 250, x3: 300, y3: 250 },
    line: { x1: 100, y1: 100, x2: 300, y2: 200 },
    square: { side: 80, x: 160, y: 110 },
    ellipse: { radiusX: 80, radiusY: 50, centerX: 200, centerY: 150 },
    polygon: { sides: 5, radius: 60, centerX: 200, centerY: 150 },
    parabola: { a: 0.5, h: 0, k: 0 },
    hyperbola: { a: 50, b: 50, h: 0, k: 0 },
    sinwave: { amplitude: 50, frequency: 0.05, phase: 0, vertical: 0 },
    coswave: { amplitude: 50, frequency: 0.05, phase: 0, vertical: 0 },
    exponential: { a: 1.2, scale: 1, h: 0, k: 0 },
    logarithm: { base: 2.718, scale: 30, h: 0, k: 0 },
  });

  const handleParamChange = (param, value) => {
    setShapeParams((prev) => ({
      ...prev,
      [selectedShape]: {
        ...prev[selectedShape],
        [param]: parseFloat(value) || 0,
      },
    }));
  };

  const handleShapeChange = (shapeId) => {
    setSelectedShape(shapeId);
  };

  const handleAddEquation = (equation) => {
    setEquations((prev) => [...prev, equation]);
  };

  const handleRemoveEquation = (index) => {
    setEquations((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-content">
          <h1>Geometry Visualizer</h1>
          <p>Explore mathematical shapes in real-time</p>
        </div>
      </header>

      <div className="app-container">
        <div className="main-content">
          <Canvas
            shape={selectedShape}
            params={shapeParams[selectedShape]}
            equations={equations}
          />
        </div>

        <div className="sidebar">
          <ShapeGallery
            selectedShape={selectedShape}
            onShapeChange={handleShapeChange}
            onShapeDetailsClick={setDetailsModalShape}
            shapeParams={shapeParams}
          />

          <EquationInput
            onAddEquation={handleAddEquation}
            onRemoveEquation={handleRemoveEquation}
            equations={equations}
          />

          <PropertiesPanel
            shape={selectedShape}
            params={shapeParams[selectedShape]}
            onParamChange={handleParamChange}
          />
        </div>
      </div>

      {detailsModalShape && (
        <ShapeDetailsModal
          shapeId={detailsModalShape}
          onClose={() => setDetailsModalShape(null)}
        />
      )}
    </div>
  );
}

export default App;
