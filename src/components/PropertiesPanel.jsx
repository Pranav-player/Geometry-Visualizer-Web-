import { useState } from "react";
import { shapeData } from "../data/shapeData";
import { calculateShapeValues } from "../utils/shapeCalculator";
import "./PropertiesPanel.css";

function PropertiesPanel({ shape, params, onParamChange }) {
  const [activeTab, setActiveTab] = useState("controls");
  const data = shapeData[shape];

  if (!data) return null;

  return (
    <div className="properties-panel">
      <div className="tab-buttons">
        <button
          className={`tab-btn ${activeTab === "controls" ? "active" : ""}`}
          onClick={() => setActiveTab("controls")}
        >
          Controls
        </button>
        <button
          className={`tab-btn ${activeTab === "info" ? "active" : ""}`}
          onClick={() => setActiveTab("info")}
        >
          Info & Stats
        </button>
      </div>

      {activeTab === "controls" && (
        <div className="controls-panel">
          <div className="controls-section">
            <h4>Parameters</h4>
            <div className="controls-list">
              {data.parameters.map((param) => (
                <div key={param.id} className="control-group">
                  <label htmlFor={param.id}>
                    {param.name}
                    <span className="param-unit">({param.unit})</span>
                  </label>
                  <input
                    id={param.id}
                    type="range"
                    min={param.min}
                    max={param.max}
                    step={param.step}
                    value={params[param.id] || param.min}
                    onChange={(e) => onParamChange(param.id, e.target.value)}
                    className="slider"
                  />
                  <input
                    type="number"
                    min={param.min}
                    max={param.max}
                    step={param.step}
                    value={params[param.id] || param.min}
                    onChange={(e) => onParamChange(param.id, e.target.value)}
                    className="number-input"
                  />
                  {shape === "circle" && param.id === "radius" && (
                    <div className="inline-results">
                      <div className="inline-result-item">
                        <span>Diameter</span>
                        <strong>
                          {(2 * (params.radius || param.min)).toFixed(2)} px
                        </strong>
                      </div>
                      <div className="inline-result-item">
                        <span>Area</span>
                        <strong>
                          {(
                            Math.PI *
                            (params.radius || param.min) *
                            (params.radius || param.min)
                          ).toFixed(2)}{" "}
                          px²
                        </strong>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="calculations-section">
            <h4>Calculated Values</h4>
            <div className="calculations-list">
              {calculateShapeValues(shape, params).map((calc, idx) => (
                <div key={idx} className="calculation-item">
                  <div className="calc-label">{calc.label}</div>
                  <div className="calc-value">
                    {calc.value}
                    {calc.unit && (
                      <span className="calc-unit">{calc.unit}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "info" && (
        <div className="info-panel">
          <h4>{data.name}</h4>

          <div className="info-section">
            <h5>Live Calculations</h5>
            <div className="calculations-list">
              {calculateShapeValues(shape, params).map((calc, idx) => (
                <div key={idx} className="calculation-item">
                  <div className="calc-label">{calc.label}</div>
                  <div className="calc-value">
                    {calc.value}
                    {calc.unit && (
                      <span className="calc-unit">{calc.unit}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="info-section">
            <h5>Description</h5>
            <p>{data.description}</p>
          </div>

          <div className="info-section">
            <h5>Formulas</h5>
            <div className="formulas">
              {data.formulas.map((formula, idx) => (
                <div key={idx} className="formula">
                  <strong>{formula.name}:</strong>
                  <code>{formula.equation}</code>
                </div>
              ))}
            </div>
          </div>

          <div className="info-section">
            <h5>Properties</h5>
            <ul className="properties-list">
              {data.properties.map((prop, idx) => (
                <li key={idx}>
                  <strong>{prop.name}:</strong> {prop.value}
                </li>
              ))}
            </ul>
          </div>

          <div className="info-section">
            <h5> Facts & Theories</h5>
            <ul className="facts-list">
              {data.facts.map((fact, idx) => (
                <li key={idx}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertiesPanel;
