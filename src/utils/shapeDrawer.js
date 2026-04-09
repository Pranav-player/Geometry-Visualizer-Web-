export function drawShape(ctx, shape, params) {
  ctx.fillStyle = "none";
  ctx.strokeStyle = "#667eea";
  ctx.lineWidth = 2;

  switch (shape) {
    case "circle":
      drawCircle(ctx, params);
      break;
    case "rectangle":
      drawRectangle(ctx, params);
      break;
    case "triangle":
      drawTriangle(ctx, params);
      break;
    case "line":
      drawLine(ctx, params);
      break;
    case "square":
      drawSquare(ctx, params);
      break;
    case "ellipse":
      drawEllipse(ctx, params);
      break;
    case "polygon":
      drawPolygon(ctx, params);
      break;
    case "parabola":
      drawParabola(ctx, params);
      break;
    case "hyperbola":
      drawHyperbola(ctx, params);
      break;
    case "sinwave":
      drawSineWave(ctx, params);
      break;
    case "coswave":
      drawCosineWave(ctx, params);
      break;
    case "exponential":
      drawExponential(ctx, params);
      break;
    case "logarithm":
      drawLogarithm(ctx, params);
      break;
    default:
      break;
  }
}

function drawCircle(ctx, params) {
  ctx.beginPath();
  ctx.arc(params.centerX, params.centerY, params.radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

function drawRectangle(ctx, params) {
  ctx.fillRect(params.x, params.y, params.width, params.height);
  ctx.strokeRect(params.x, params.y, params.width, params.height);
}

function drawSquare(ctx, params) {
  ctx.fillRect(params.x, params.y, params.side, params.side);
  ctx.strokeRect(params.x, params.y, params.side, params.side);
}

function drawTriangle(ctx, params) {
  ctx.beginPath();
  ctx.moveTo(params.x1, params.y1);
  ctx.lineTo(params.x2, params.y2);
  ctx.lineTo(params.x3, params.y3);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function drawLine(ctx, params) {
  ctx.beginPath();
  ctx.moveTo(params.x1, params.y1);
  ctx.lineTo(params.x2, params.y2);
  ctx.stroke();
}

function drawEllipse(ctx, params) {
  ctx.beginPath();
  ctx.ellipse(
    params.centerX,
    params.centerY,
    params.radiusX,
    params.radiusY,
    0,
    0,
    Math.PI * 2,
  );
  ctx.fill();
  ctx.stroke();
}

function drawPolygon(ctx, params) {
  const { sides, radius, centerX, centerY } = params;
  const angle = (Math.PI * 2) / sides;

  ctx.beginPath();
  for (let i = 0; i < sides; i++) {
    const x = centerX + radius * Math.cos(i * angle - Math.PI / 2);
    const y = centerY + radius * Math.sin(i * angle - Math.PI / 2);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

// Mathematical curve functions
function drawParabola(ctx, params) {
  const { a, h, k } = params;
  let first = true;

  for (let x = -300; x <= 300; x += 2) {
    const y = a * (x - h) * (x - h) + k;
    if (first) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      first = false;
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();
}

function drawHyperbola(ctx, params) {
  const { a, b, h, k } = params;
  const step = 2;

  // Right branch
  let first = true;
  for (let x = a; x <= 300; x += step) {
    const discriminant = ((x - h) * (x - h)) / (a * a) - 1;
    if (discriminant >= 0) {
      const y = k + b * Math.sqrt(discriminant);
      if (first) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        first = false;
      } else {
        ctx.lineTo(x, y);
      }
    }
  }
  ctx.stroke();

  // Right branch lower part
  first = true;
  for (let x = a; x <= 300; x += step) {
    const discriminant = ((x - h) * (x - h)) / (a * a) - 1;
    if (discriminant >= 0) {
      const y = k - b * Math.sqrt(discriminant);
      if (first) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        first = false;
      } else {
        ctx.lineTo(x, y);
      }
    }
  }
  ctx.stroke();

  // Left branch
  first = true;
  for (let x = -300; x <= -a; x += step) {
    const discriminant = ((x - h) * (x - h)) / (a * a) - 1;
    if (discriminant >= 0) {
      const y = k + b * Math.sqrt(discriminant);
      if (first) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        first = false;
      } else {
        ctx.lineTo(x, y);
      }
    }
  }
  ctx.stroke();

  // Left branch lower part
  first = true;
  for (let x = -300; x <= -a; x += step) {
    const discriminant = ((x - h) * (x - h)) / (a * a) - 1;
    if (discriminant >= 0) {
      const y = k - b * Math.sqrt(discriminant);
      if (first) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        first = false;
      } else {
        ctx.lineTo(x, y);
      }
    }
  }
  ctx.stroke();
}

function drawSineWave(ctx, params) {
  const { amplitude, frequency, phase, vertical } = params;
  let first = true;

  for (let x = -300; x <= 300; x += 1) {
    const y = amplitude * Math.sin(frequency * (x - phase)) + vertical;
    if (first) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      first = false;
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();
}

function drawCosineWave(ctx, params) {
  const { amplitude, frequency, phase, vertical } = params;
  let first = true;

  for (let x = -300; x <= 300; x += 1) {
    const y = amplitude * Math.cos(frequency * (x - phase)) + vertical;
    if (first) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      first = false;
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();
}

function drawExponential(ctx, params) {
  const { a, scale, h, k } = params;
  let first = true;

  for (let x = -50; x <= 50; x += 0.5) {
    const y = scale * Math.pow(a, x - h) + k;
    if (y > -300 && y < 300) {
      if (first) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        first = false;
      } else {
        ctx.lineTo(x, y);
      }
    }
  }
  ctx.stroke();
}

function drawLogarithm(ctx, params) {
  const { base, scale, h, k } = params;
  let first = true;

  for (let x = 0.1; x <= 300; x += 0.5) {
    const y = (scale * Math.log(x - h)) / Math.log(base) + k;
    if (y > -300 && y < 300) {
      if (first) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        first = false;
      } else {
        ctx.lineTo(x, y);
      }
    }
  }
  ctx.stroke();
}
