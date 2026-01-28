# Gradient Animation Plugin

A lightweight, dependency-free JavaScript library for creating smooth CSS linear gradient transitions.

![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Dependencies](https://img.shields.io/badge/Dependencies-None-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## Overview

**Gradient Animation Plugin** provides a powerful utility function that enables smooth, frame-by-frame transitions between CSS linear gradients. Unlike instant CSS changes, this plugin creates fluid animations by incrementally adjusting color values, positions, and angles over time.

### Key Features

- **Zero Dependencies** — Pure vanilla JavaScript with no external libraries required
- **Lightweight** — Single function, minimal footprint (~2KB)
- **Full Control** — Animate colors, positions, and gradient angles simultaneously
- **Easy Integration** — Works with any HTML element via CSS selectors
- **Cross-Browser** — Compatible with all modern browsers

---

## Demo

Transform your UI with smooth gradient transitions:

```
Before:  ████████████████  →  After:  ████████████████
         [Gold → Pink]              [Blue → Purple]
         180° angle                  270° angle
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **JavaScript (ES5+)** | Core animation logic and DOM manipulation |
| **CSS3 Linear Gradients** | Visual rendering with RGBA color support |
| **Browser DOM API** | Element selection and style application |

---

## Installation

Simply include the script in your HTML file:

```html
<script src="gradient_plugin.js"></script>
```

No build tools, package managers, or configuration required.

---

## Usage

### Basic Syntax

```javascript
changeGradient(
  element,              // CSS selector string
  currentTop,           // Current top color [R, G, B]
  currentBottom,        // Current bottom color [R, G, B]
  currentPercentageTop, // Current top position (0-100)
  currentPercentageBottom, // Current bottom position (0-100)
  currentGrade,         // Current angle in degrees
  destTop,              // Destination top color [R, G, B]
  destBottom,           // Destination bottom color [R, G, B]
  destPercentageTop,    // Destination top position (0-100)
  destPercentageBottom, // Destination bottom position (0-100)
  destGrade,            // Destination angle in degrees
  velocity              // Animation speed (ms per frame)
);
```

### Example

```javascript
// Animate a background gradient from gold/pink to blue/purple
changeGradient(
  '#hero-section',
  [253, 183, 26],   // Gold (top)
  [211, 22, 131],   // Pink (bottom)
  0,                // Top position: 0%
  86,               // Bottom position: 86%
  180,              // Angle: 180°
  [66, 134, 244],   // Blue (top) - destination
  [156, 39, 176],   // Purple (bottom) - destination
  0,                // Top position: 0%
  100,              // Bottom position: 100%
  270,              // Angle: 270° - destination
  10                // Speed: 10ms per frame
);
```

### HTML Setup

```html
<div id="hero-section" style="
  width: 100%;
  height: 400px;
  background: linear-gradient(180deg, rgba(253,183,26,1) 0%, rgba(211,22,131,1) 86%);
">
  <!-- Your content here -->
</div>

<script src="gradient_plugin.js"></script>
<script>
  // Trigger animation on page load or event
  changeGradient('#hero-section', [253,183,26], [211,22,131], 0, 86, 180,
                 [66,134,244], [156,39,176], 0, 100, 270, 10);
</script>
```

---

## Parameters Reference

| Parameter | Type | Description |
|-----------|------|-------------|
| `element` | `String` | CSS selector for target element (e.g., `'#myDiv'`, `'.container'`) |
| `currentTop` | `Array[3]` | RGB values of current gradient's start color `[R, G, B]` |
| `currentBottom` | `Array[3]` | RGB values of current gradient's end color `[R, G, B]` |
| `currentPercentageTop` | `Number` | Current position of start color (0-100%) |
| `currentPercentageBottom` | `Number` | Current position of end color (0-100%) |
| `currentGrade` | `Number` | Current gradient angle in degrees (0-360) |
| `destTop` | `Array[3]` | Destination RGB for start color `[R, G, B]` |
| `destBottom` | `Array[3]` | Destination RGB for end color `[R, G, B]` |
| `destPercentageTop` | `Number` | Target position of start color (0-100%) |
| `destPercentageBottom` | `Number` | Target position of end color (0-100%) |
| `destGrade` | `Number` | Target gradient angle in degrees (0-360) |
| `velocity` | `Number` | Milliseconds between animation frames (lower = faster) |

---

## Use Cases

- **Hero Sections** — Create eye-catching animated backgrounds
- **Theme Transitions** — Smoothly switch between light/dark modes
- **Interactive UI** — Respond to user actions with gradient animations
- **Loading States** — Visual feedback during async operations
- **Landing Pages** — Add dynamic visual appeal to marketing pages

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest |
| Edge | Latest |
| Opera | Latest |

---

## Project Structure

```
gradient-animation/
├── README.md              # Documentation
└── gradient_plugin.js     # Core plugin (single file)
```

---

## Skills Demonstrated

This project showcases proficiency in:

- **Vanilla JavaScript** — DOM manipulation, intervals, and animation loops
- **CSS3** — Advanced gradient syntax and dynamic styling
- **Algorithm Design** — Frame-by-frame interpolation logic
- **Clean Code** — Self-contained, modular function design
- **Documentation** — Clear API reference and usage examples

---

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

Built with JavaScript and a passion for smooth user experiences.
