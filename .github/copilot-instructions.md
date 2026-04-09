# Copilot Instructions for Geometry Visualizer - Premium Edition

## Project Overview

Geometry Visualizer is a premium interactive React application for exploring mathematical shapes with real-time visualization, parameter controls, educational content, AND a built-in graphing calculator. Features a modern dark theme with purple/indigo accents.

## Tech Stack

- React 18
- Vite 5
- HTML5 Canvas
- CSS3 with CSS Variables
- Custom equation parser

## Project Structure

```
src/
├── components/
│   ├── Canvas/         # Shape visualization + graphing
│   ├── ShapeSelector/  # Shape selection UI
│   ├── PropertiesPanel/# Controls and info
│   └── EquationInput/  # Graphing calculator
├── utils/
│   ├── shapeDrawer.js  # Shape rendering
│   ├── equationParser.js# Equation evaluation
├── data/
│   └── shapeData.js    # Shape metadata
└── App.jsx             # Main component
```

## Key Features Implemented

1. **Premium Dark Theme** - Modern dark UI with CSS variables
2. **Geometry Shapes** - 7 interactive shapes with real-time updates
3. **Graphing Calculator** - Plot mathematical functions
4. **Interactive Canvas** - Zoom (50%-500%), pan, coordinate display
5. **Dual Mode** - Switch between geometry and graphing modes
6. **Educational Content** - Formulas, properties, facts for shapes
7. **Responsive Design** - Works on all screen sizes

## Running the Project

### Development

```bash
npm run dev
```

Access at http://localhost:5173

### Production Build

```bash
npm run build
npm run preview
```

## Component Responsibilities

- **Canvas.jsx** - Renders shapes + equations, handles zoom/pan
- **ShapeSelector.jsx** - Shape selection buttons
- **PropertiesPanel.jsx** - Property controls and info
- **EquationInput.jsx** - Equation input with examples
- **shapeDrawer.js** - Shape rendering functions
- **equationParser.js** - Safe equation evaluation
- **shapeData.js** - Shape metadata (formulas, properties, facts)

## Supported Mathematical Functions

- Trigonometric: sin, cos, tan, asin, acos, atan
- Hyperbolic: sinh, cosh, tanh
- Other: sqrt, abs, log, ln, exp
- Constants: PI, E
- Exponentiation: ^

## Design System

CSS Variables in `:root`:

- Primary colors: `--primary-color`, `--primary-light`, `--primary-dark`
- Backgrounds: `--bg-primary`, `--bg-secondary`, `--bg-tertiary`, `--bg-quaternary`
- Text: `--text-primary`, `--text-secondary`, `--text-tertiary`
- Borders: `--border-color`, `--border-light`

## Adding New Shapes

1. Add drawing function in `src/utils/shapeDrawer.js`
2. Add shape data to `src/data/shapeData.js` (params, formulas, properties, facts)
3. Add default params to `App.jsx` state
4. Shapes render in the Canvas when selected

## Adding New Functions to Parser

1. Update `src/utils/equationParser.js` with new function
2. Add validation patterns
3. Add examples to `EquationInput` help section

## Known Limitations

- Canvas 600x400px
- Polygon 3-12 sides
- Equation evaluation in real-time (no symbolic math)

## Browser Requirements

- Modern browser (Chrome, Firefox, Safari, Edge)
- HTML5 Canvas support
- ES6+ JavaScript

## Performance Notes

- Canvas rendering optimized for zoom levels
- Grid drawing efficient at all scales
- Equation evaluation uses Function constructor (safe)
- CSS variables enable fast theme changes

## Future Enhancements

- Color picker for functions
- Export as PNG/SVG
- Calculation display
- Animation modes
- Statistics tools
- Save/load functionality
