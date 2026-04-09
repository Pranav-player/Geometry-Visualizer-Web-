import { useState } from "react";
import "./EquationInput.css";

function EquationInput({ onAddEquation, onRemoveEquation, equations }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleAddEquation = () => {
    if (!inputValue.trim()) {
      setError("Please enter an equation");
      return;
    }

    try {
      // Basic validation of equation syntax
      validateEquation(inputValue);
      onAddEquation(inputValue.trim());
      setInputValue("");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const validateEquation = (equation) => {
    // Allow basic mathematical functions
    const allowedChars =
      /^[x0-9+\-*/().,\s\s^sqrt|sin|cos|tan|log|abs|PI|E]*$/i;
    if (!allowedChars.test(equation)) {
      throw new Error("Invalid characters in equation");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddEquation();
    }
  };

  return (
    <div className="equation-input">
      <h3>Graph Functions</h3>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setError("");
          }}
          onKeyPress={handleKeyPress}
          placeholder="Enter equation (e.g., y = x^2, y = sin(x))"
          className="equation-field"
        />
        <button onClick={handleAddEquation} className="add-btn">
          Add
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {equations.length > 0 && (
        <div className="equations-list">
          <h4>Active Equations:</h4>
          <ul>
            {equations.map((eq, idx) => (
              <li key={idx} className="equation-item">
                <span className="equation-text">{eq}</span>
                <button
                  className="remove-btn"
                  onClick={() => onRemoveEquation(idx)}
                  title="Remove equation"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="equation-help">
        <p>
          <strong>Examples:</strong>
        </p>
        <ul>
          <li>y = x^2</li>
          <li>y = sin(x)</li>
          <li>y = 1/x</li>
          <li>y = sqrt(x)</li>
        </ul>
      </div>
    </div>
  );
}

export default EquationInput;
