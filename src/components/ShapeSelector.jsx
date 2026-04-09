import "./ShapeSelector.css";

function ShapeSelector({ selectedShape, onShapeChange }) {
  const shapes = [
    { id: "circle", name: "Circle", icon: "●" },
    { id: "rectangle", name: "Rectangle", icon: "▭" },
    { id: "square", name: "Square", icon: "▢" },
    { id: "triangle", name: "Triangle", icon: "△" },
    { id: "ellipse", name: "Ellipse", icon: "⬭" },
    { id: "polygon", name: "Polygon", icon: "⬟" },
    { id: "line", name: "Line", icon: "—" },
    { id: "parabola", name: "Parabola", icon: "∽" },
    { id: "hyperbola", name: "Hyperbola", icon: "⊸" },
    { id: "sinwave", name: "Sine Wave", icon: "∿" },
    { id: "coswave", name: "Cosine Wave", icon: "≈" },
    { id: "exponential", name: "Exponential", icon: "ℯ" },
    { id: "logarithm", name: "Logarithm", icon: "㏒" },
  ];

  return (
    <div className="shape-selector">
      <h3>Select Shape</h3>

      <div className="shapes-grid">
        {shapes.map((shape) => (
          <button
            key={shape.id}
            className={`shape-btn ${selectedShape === shape.id ? "active" : ""}`}
            onClick={() => onShapeChange(shape.id)}
            title={shape.name}
          >
            <span className="shape-icon">{shape.icon}</span>
            <span className="shape-name">{shape.name}</span>
          </button>
        ))}
      </div>
      
    </div>
  );
}

export default ShapeSelector;
