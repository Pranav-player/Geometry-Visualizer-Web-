import { shapeData } from "../data/shapeData";
import "./ShapeDetailsModal.css";

function ShapeDetailsModal({ shapeId, onClose }) {
  const data = shapeData[shapeId];

  if (!data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-header">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
        </div>

        <div className="modal-body">
          <section className="modal-section">
            <h3>Formulas & Equations</h3>
            <div className="formulas-grid">
              {data.formulas.map((formula, idx) => (
                <div key={idx} className="formula-card">
                  <div className="formula-name">{formula.name}</div>
                  <div className="formula-equation">{formula.equation}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="modal-section">
            <h3>Properties</h3>
            <div className="properties-grid">
              {data.properties.map((prop, idx) => (
                <div key={idx} className="property-card">
                  <div className="property-name">{prop.name}</div>
                  <div className="property-value">{prop.value}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="modal-section">
            <h3>Facts & Theories</h3>
            <div className="facts-list">
              {data.facts.map((fact, idx) => (
                <div key={idx} className="fact-item">
                  <span className="fact-number">{idx + 1}</span>
                  <p>{fact}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ShapeDetailsModal;
