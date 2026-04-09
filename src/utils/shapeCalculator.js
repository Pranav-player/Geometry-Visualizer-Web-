export function calculateShapeValues(shapeId, params) {
  switch (shapeId) {
    case "circle":
      return calculateCircle(params);
    case "rectangle":
      return calculateRectangle(params);
    case "square":
      return calculateSquare(params);
    case "triangle":
      return calculateTriangle(params);
    case "ellipse":
      return calculateEllipse(params);
    case "polygon":
      return calculatePolygon(params);
    case "line":
      return calculateLine(params);
    case "parabola":
      return calculateParabola(params);
    case "hyperbola":
      return calculateHyperbola(params);
    case "sinwave":
      return calculateSineWave(params);
    case "coswave":
      return calculateCosineWave(params);
    case "exponential":
      return calculateExponential(params);
    case "logarithm":
      return calculateLogarithm(params);
    default:
      return [];
  }
}

function calculateCircle(params) {
  const r = params.radius;
  return [
    { label: "Radius", value: r.toFixed(2), unit: "px" },
    { label: "Diameter", value: (2 * r).toFixed(2), unit: "px" },
    { label: "Circumference", value: (2 * Math.PI * r).toFixed(2), unit: "px" },
    { label: "Area", value: (Math.PI * r * r).toFixed(2), unit: "px²" },
  ];
}

function calculateRectangle(params) {
  const w = params.width;
  const h = params.height;
  const d = Math.sqrt(w * w + h * h);
  return [
    { label: "Width", value: w.toFixed(2), unit: "px" },
    { label: "Height", value: h.toFixed(2), unit: "px" },
    { label: "Perimeter", value: (2 * (w + h)).toFixed(2), unit: "px" },
    { label: "Area", value: (w * h).toFixed(2), unit: "px²" },
    { label: "Diagonal", value: d.toFixed(2), unit: "px" },
  ];
}

function calculateSquare(params) {
  const s = params.side;
  const d = s * Math.sqrt(2);
  return [
    { label: "Side Length", value: s.toFixed(2), unit: "px" },
    { label: "Perimeter", value: (4 * s).toFixed(2), unit: "px" },
    { label: "Area", value: (s * s).toFixed(2), unit: "px²" },
    { label: "Diagonal", value: d.toFixed(2), unit: "px" },
  ];
}

function calculateTriangle(params) {
  const x1 = params.x1,
    y1 = params.y1;
  const x2 = params.x2,
    y2 = params.y2;
  const x3 = params.x3,
    y3 = params.y3;

  const a = Math.sqrt((x2 - x3) ** 2 + (y2 - y3) ** 2);
  const b = Math.sqrt((x1 - x3) ** 2 + (y1 - y3) ** 2);
  const c = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

  const perimeter = a + b + c;
  const s = perimeter / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return [
    { label: "Side A", value: a.toFixed(2), unit: "px" },
    { label: "Side B", value: b.toFixed(2), unit: "px" },
    { label: "Side C", value: c.toFixed(2), unit: "px" },
    { label: "Perimeter", value: perimeter.toFixed(2), unit: "px" },
    { label: "Area", value: area.toFixed(2), unit: "px²" },
  ];
}

function calculateEllipse(params) {
  const a = params.radiusX;
  const b = params.radiusY;
  const h = Math.sqrt((a - b) ** 2 / (a + b) ** 2);
  const circumference =
    Math.PI * (a + b) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));

  return [
    { label: "Semi-major Axis (a)", value: a.toFixed(2), unit: "px" },
    { label: "Semi-minor Axis (b)", value: b.toFixed(2), unit: "px" },
    { label: "Area", value: (Math.PI * a * b).toFixed(2), unit: "px²" },
    {
      label: "Circumference (approx)",
      value: circumference.toFixed(2),
      unit: "px",
    },
    {
      label: "Eccentricity",
      value: Math.sqrt(1 - (b / a) ** 2).toFixed(4),
      unit: "",
    },
  ];
}

function calculatePolygon(params) {
  const n = params.sides;
  const r = params.radius;
  const sideLength = 2 * r * Math.sin(Math.PI / n);
  const interiorAngle = ((n - 2) * 180) / n;
  const apothem = r * Math.cos(Math.PI / n);
  const area = (n * sideLength * apothem) / 2;
  const perimeter = n * sideLength;

  return [
    { label: "Number of Sides", value: n.toFixed(0), unit: "" },
    { label: "Circumradius", value: r.toFixed(2), unit: "px" },
    { label: "Side Length", value: sideLength.toFixed(2), unit: "px" },
    { label: "Apothem (inradius)", value: apothem.toFixed(2), unit: "px" },
    { label: "Perimeter", value: perimeter.toFixed(2), unit: "px" },
    { label: "Area", value: area.toFixed(2), unit: "px²" },
    { label: "Interior Angle", value: interiorAngle.toFixed(2), unit: "°" },
  ];
}

function calculateLine(params) {
  const x1 = params.x1,
    y1 = params.y1;
  const x2 = params.x2,
    y2 = params.y2;

  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const slope = x2 - x1 !== 0 ? (y2 - y1) / (x2 - x1) : Infinity;
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;

  return [
    { label: "Length", value: length.toFixed(2), unit: "px" },
    {
      label: "Slope (m)",
      value: slope === Infinity ? "∞" : slope.toFixed(4),
      unit: "",
    },
    { label: "Angle", value: angle.toFixed(2), unit: "°" },
    { label: "Midpoint X", value: midX.toFixed(2), unit: "px" },
    { label: "Midpoint Y", value: midY.toFixed(2), unit: "px" },
  ];
}

function calculateParabola(params) {
  const a = params.a;
  const h = params.h;
  const k = params.k;
  const focus_distance = 1 / (4 * a);
  const focus_y = k + focus_distance;
  const directrix_y = k - focus_distance;

  return [
    { label: "Coefficient (a)", value: a.toFixed(4), unit: "" },
    { label: "Vertex (h)", value: h.toFixed(2), unit: "px" },
    { label: "Vertex (k)", value: k.toFixed(2), unit: "px" },
    { label: "Focus Y", value: focus_y.toFixed(2), unit: "px" },
    { label: "Directrix Y", value: directrix_y.toFixed(2), unit: "px" },
    { label: "Opens", value: a > 0 ? "Upward" : "Downward", unit: "" },
  ];
}

function calculateHyperbola(params) {
  const a = params.a;
  const b = params.b;
  const h = params.h;
  const k = params.k;
  const c = Math.sqrt(a * a + b * b);
  const eccentricity = c / a;

  return [
    { label: "Scale A", value: a.toFixed(2), unit: "" },
    { label: "Scale B", value: b.toFixed(2), unit: "" },
    { label: "Center (h)", value: h.toFixed(2), unit: "px" },
    { label: "Center (k)", value: k.toFixed(2), unit: "px" },
    { label: "Distance to Foci (c)", value: c.toFixed(2), unit: "" },
    { label: "Eccentricity", value: eccentricity.toFixed(4), unit: "" },
  ];
}

function calculateSineWave(params) {
  const amplitude = params.amplitude;
  const frequency = params.frequency;
  const period = (2 * Math.PI) / frequency;
  const wavelength = period;

  return [
    { label: "Amplitude", value: amplitude.toFixed(2), unit: "" },
    { label: "Frequency", value: frequency.toFixed(4), unit: "rad/px" },
    { label: "Period", value: period.toFixed(2), unit: "px" },
    { label: "Wavelength", value: wavelength.toFixed(2), unit: "px" },
    { label: "Max Value", value: amplitude.toFixed(2), unit: "" },
    { label: "Min Value", value: (-amplitude).toFixed(2), unit: "" },
  ];
}

function calculateCosineWave(params) {
  const amplitude = params.amplitude;
  const frequency = params.frequency;
  const period = (2 * Math.PI) / frequency;
  const wavelength = period;

  return [
    { label: "Amplitude", value: amplitude.toFixed(2), unit: "" },
    { label: "Frequency", value: frequency.toFixed(4), unit: "rad/px" },
    { label: "Period", value: period.toFixed(2), unit: "px" },
    { label: "Wavelength", value: wavelength.toFixed(2), unit: "px" },
    { label: "Max Value", value: amplitude.toFixed(2), unit: "" },
    { label: "Min Value", value: (-amplitude).toFixed(2), unit: "" },
  ];
}

function calculateExponential(params) {
  const a = params.a;
  const scale = params.scale;
  const h = params.h;
  const k = params.k;
  const doubleTime = Math.abs(Math.log(2) / Math.log(a));

  return [
    { label: "Base (a)", value: a.toFixed(4), unit: "" },
    { label: "Vertical Scale", value: scale.toFixed(4), unit: "" },
    { label: "Horizontal Shift", value: h.toFixed(2), unit: "px" },
    { label: "Vertical Shift", value: k.toFixed(2), unit: "" },
    {
      label: "Growth Type",
      value: a > 1 ? "Exponential Growth" : "Exponential Decay",
      unit: "",
    },
    {
      label: "Half-life / Doubling Time",
      value: doubleTime.toFixed(2),
      unit: "",
    },
  ];
}

function calculateLogarithm(params) {
  const base = params.base;
  const scale = params.scale;
  const h = params.h;
  const k = params.k;

  return [
    { label: "Base", value: base.toFixed(4), unit: "" },
    { label: "Vertical Scale", value: scale.toFixed(4), unit: "" },
    { label: "Horizontal Shift", value: h.toFixed(2), unit: "px" },
    { label: "Vertical Shift", value: k.toFixed(2), unit: "" },
    { label: "Vertical Asymptote", value: `x = ${h.toFixed(2)}`, unit: "" },
    { label: "Domain", value: `(${h.toFixed(2)}, ∞)`, unit: "" },
  ];
}
