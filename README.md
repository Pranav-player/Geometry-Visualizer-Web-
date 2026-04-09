# 🎨 Geometry Visualizer - Premium Edition

An interactive web application for exploring mathematical geometry concepts AND graphing mathematical functions in real-time. Features a premium dark theme interface, interactive canvas with zoom/pan, and a built-in graphing calculator.

## ✨ Premium Features

### 📊 **Graphing Calculator**

- Plot multiple mathematical functions simultaneously
- Supports: sin, cos, tan, sqrt, abs, log, exp, and more
- Real-time equation input with live graphing
- Example: `y = x^2`, `y = sin(x)`, `y = 1/x`

### 🔍 **Interactive Canvas**

- **Zoom & Pan**: Scroll wheel zooming (50%-500%)
- **Real-time Coordinates**: Mouse position display in graph space
- **Intelligent Grid**: Scale-aware grid with labels
- **Quick Reset**: Return to default view with one click

### 🎨 **Modern Premium Design**

- Dark theme with purple/indigo accents
- Glass-morphism effects with backdrop blur
- Smooth animations and transitions
- Professional gradient text and visual effects

### ✨ **Real-time Shape Visualization**

- 7 different geometric shapes with instant preview
- Interactive sliders and number inputs for parameters

### 📚 **Educational Content**

- Geometric formulas and equations
- Shape properties and characteristics
- Mathematical facts and theories
- Historical context and applications

🎯 **Supported Shapes**

- Circle
- Rectangle
- Square
- Triangle
- Ellipse
- Regular Polygon
- Line Segment

## Tech Stack

- **React 18** - UI framework
- **Vite** - Fast build tool and dev server
- **HTML5 Canvas** - Shape rendering
- **CSS3** - Modern styling with animations

## Installation

1. Navigate to the project directory
2. Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Building for Production

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Canvas.jsx              # Canvas rendering component
│   ├── Canvas.css
│   ├── ShapeSelector.jsx       # Shape selection buttons
│   ├── ShapeSelector.css
│   ├── PropertiesPanel.jsx     # Properties and info panel
│   └── PropertiesPanel.css
├── utils/
│   └── shapeDrawer.js          # Shape drawing utilities
├── data/
│   └── shapeData.js            # Shape metadata and information
├── App.jsx                     # Main application component
├── App.css
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## 🎮 How to Use

### Geometry Mode

1. **Select a Shape** - Click shape buttons in the sidebar
2. **Adjust Parameters** - Use sliders or type values directly
3. **Explore Info** - Switch to Info tab for formulas and facts
4. **Watch Updates** - Changes render instantly on canvas

### Graphing Mode

1. **Enter Equation** - Type equation like `y = x^2`
2. **Add Function** - Click "Add" to plot
3. **Compare Functions** - Add multiple equations
4. **Navigate** - Use zoom controls or scroll wheel
5. **Remove Plots** - Click ✕ to delete equations

## Features Breakdown

### Canvas

- 600x400px coordinate system
- Grid background for reference
- X and Y axes for orientation
- Real-time shape rendering

### Control Panel

- Parameter sliders for precise control
- Number inputs for direct value entry
- Live preview of all changes

### Information Panel

- Comprehensive shape descriptions
- Mathematical formulas with LaTeX notation
- Properties list with values
- Educational facts and theories

## Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## 🔮 Future Enhancements

- 🎨 Custom function colors
- 📸 Export graphs as images
- 🧮 Calculation display (area, perimeter, etc.)
- 📱 Enhanced mobile UI
- 💾 Save/load workspaces
- 📊 Statistics and analysis tools
- ▶️ Animation modes

## Educational Value

This tool is perfect for:

- Students learning geometry
- Teachers demonstrating geometric concepts
- Visual learners exploring mathematical shapes
- Anyone curious about geometry applications

## License

MIT License - Feel free to use and modify

## Author

Created as an educational geometry visualization tool inspired by Desmos and similar mathematical tools.

---

**Happy Learning! 📐✨**
# Geometry-Visualizer-Web-
