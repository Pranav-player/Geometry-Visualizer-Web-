// Safe equation parser and evaluator for graphing calculator
export function evaluateEquation(equation, xValue) {
  try {
    // Extract the right side of the equation (after '=' if present)
    let expr = equation.includes("=")
      ? equation.split("=")[1].trim()
      : equation.trim();

    // Replace x with the actual value
    expr = expr.replace(/x/gi, `(${xValue})`);

    // Replace mathematical constants and functions
    expr = expr.replace(/PI/gi, Math.PI.toString());
    expr = expr.replace(/E/gi, Math.E.toString());

    // Replace mathematical functions
    expr = expr.replace(/sqrt\(/gi, "Math.sqrt(");
    expr = expr.replace(/sin\(/gi, "Math.sin(");
    expr = expr.replace(/cos\(/gi, "Math.cos(");
    expr = expr.replace(/tan\(/gi, "Math.tan(");
    expr = expr.replace(/abs\(/gi, "Math.abs(");
    expr = expr.replace(/log\(/gi, "Math.log10(");
    expr = expr.replace(/ln\(/gi, "Math.log(");
    expr = expr.replace(/exp\(/gi, "Math.exp(");
    expr = expr.replace(/asin\(/gi, "Math.asin(");
    expr = expr.replace(/acos\(/gi, "Math.acos(");
    expr = expr.replace(/atan\(/gi, "Math.atan(");
    expr = expr.replace(/sinh\(/gi, "Math.sinh(");
    expr = expr.replace(/cosh\(/gi, "Math.cosh(");
    expr = expr.replace(/tanh\(/gi, "Math.tanh(");

    // Replace ^ with ** for exponentiation
    expr = expr.replace(/\^/g, "**");

    // Use Function constructor for safer evaluation
    const func = new Function("Math", `return ${expr}`);
    const result = func(Math);

    return result;
  } catch (error) {
    return NaN;
  }
}

// Validate if an equation is safe to evaluate
export function isValidEquation(equation) {
  try {
    // Check for dangerous patterns
    const dangerousPatterns = [
      /import/i,
      /require/i,
      /eval/i,
      /function/i,
      /constructor/i,
      /prototype/i,
      /window/i,
      /document/i,
    ];

    for (const pattern of dangerousPatterns) {
      if (pattern.test(equation)) {
        return false;
      }
    }

    // Try to evaluate at x=0
    evaluateEquation(equation, 0);
    return true;
  } catch {
    return false;
  }
}

// Parse equation display name
export function formatEquationDisplay(equation) {
  if (equation.includes("=")) {
    return equation;
  }
  return `y = ${equation}`;
}
