# Gradient Animation Plugin

A lightweight, dependency-free JavaScript library for creating smooth CSS linear gradient transitions.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Dependencies](https://img.shields.io/badge/Dependencies-None-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## Overview

**Gradient Animation Plugin** provides a powerful utility function that enables smooth, frame-by-frame transitions between CSS linear gradients. Unlike instant CSS changes, this plugin creates fluid animations by interpolating color values, positions, and angles over time using `requestAnimationFrame` for optimal performance.

### Key Features

- **Zero Dependencies** — Pure vanilla JavaScript with no external libraries required
- **Lightweight** — Single function, minimal footprint (~3KB)
- **Modern API** — Clean options object with destructuring support
- **Promise-based** — Async/await compatible with completion callbacks
- **Cancellable** — Stop animations mid-flight with the cancel function
- **Easing Support** — Built-in easing functions for natural motion
- **requestAnimationFrame** — Smooth, 60fps animations synced to display refresh
- **Full Control** — Animate colors, positions, and gradient angles simultaneously
- **ES6 Modules** — Native import/export support

---

## Demo

**[Live Demo](https://jlaran.github.io/gradient-animation/test.html)** — Try it in your browser!

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
| **JavaScript (ES6+)** | Core animation logic with modern syntax |
| **requestAnimationFrame** | Smooth, performant animation loop |
| **CSS3 Linear Gradients** | Visual rendering with RGBA color support |
| **ES6 Modules** | Native import/export support |

---

## Installation

### ES6 Module (Recommended)

```javascript
import changeGradient, { easings } from './gradient_plugin.js';
```

### Script Tag (Legacy)

```html
<script type="module">
  import changeGradient from './gradient_plugin.js';
  // Your code here
</script>
```

---

## Usage

### Basic Syntax

```javascript
const { promise, cancel } = changeGradient({
  element: '#hero-section',      // CSS selector or DOM element
  from: {
    colors: [[253, 183, 26], [211, 22, 131]],  // [top RGB, bottom RGB]
    positions: [0, 86],           // Color stop positions (%)
    angle: 180                    // Gradient angle (degrees)
  },
  to: {
    colors: [[66, 134, 244], [156, 39, 176]],
    positions: [0, 100],
    angle: 270
  },
  duration: 1000,                 // Animation duration (ms)
  easing: easings.easeInOutQuad   // Optional easing function
});
```

### Using Promises

```javascript
// Async/await
async function animateGradient() {
  const { promise } = changeGradient({
    element: '#background',
    from: {
      colors: [[255, 0, 0], [0, 0, 255]],
      positions: [0, 100],
      angle: 90
    },
    to: {
      colors: [[0, 255, 0], [255, 255, 0]],
      positions: [0, 100],
      angle: 180
    },
    duration: 2000
  });

  await promise;
  console.log('Animation complete!');
}

// Promise chain
changeGradient({ /* options */ })
  .promise
  .then(() => console.log('Done!'))
  .catch((err) => console.log('Cancelled:', err.message));
```

### Cancelling Animations

```javascript
const { promise, cancel } = changeGradient({
  element: '#hero',
  from: { colors: [[255, 0, 0], [0, 0, 255]], angle: 0 },
  to: { colors: [[0, 255, 0], [255, 255, 0]], angle: 360 },
  duration: 5000
});

// Cancel after 2 seconds
setTimeout(() => {
  cancel();
}, 2000);

// Handle cancellation
promise.catch((err) => {
  if (err.message === 'Animation cancelled') {
    console.log('Animation was cancelled');
  }
});
```

### Using Easing Functions

```javascript
import changeGradient, { easings } from './gradient_plugin.js';

// Available easings:
// - easings.linear (default)
// - easings.easeInQuad
// - easings.easeOutQuad
// - easings.easeInOutQuad
// - easings.easeInCubic
// - easings.easeOutCubic
// - easings.easeInOutCubic

changeGradient({
  element: '#box',
  from: { colors: [[100, 100, 100], [50, 50, 50]], angle: 45 },
  to: { colors: [[200, 100, 50], [150, 50, 100]], angle: 135 },
  duration: 1500,
  easing: easings.easeInOutCubic
});

// Or provide a custom easing function
changeGradient({
  element: '#box',
  from: { colors: [[100, 100, 100], [50, 50, 50]], angle: 45 },
  to: { colors: [[200, 100, 50], [150, 50, 100]], angle: 135 },
  duration: 1500,
  easing: (t) => 1 - Math.pow(1 - t, 3)  // Custom ease-out cubic
});
```

### Complete HTML Example

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    #hero-section {
      width: 100%;
      height: 400px;
      background: linear-gradient(180deg, rgba(253,183,26,1) 0%, rgba(211,22,131,1) 86%);
    }
  </style>
</head>
<body>
  <div id="hero-section">
    <h1>Welcome</h1>
  </div>

  <script type="module">
    import changeGradient, { easings } from './gradient_plugin.js';

    // Animate on page load
    changeGradient({
      element: '#hero-section',
      from: {
        colors: [[253, 183, 26], [211, 22, 131]],
        positions: [0, 86],
        angle: 180
      },
      to: {
        colors: [[66, 134, 244], [156, 39, 176]],
        positions: [0, 100],
        angle: 270
      },
      duration: 1500,
      easing: easings.easeInOutQuad
    });
  </script>
</body>
</html>
```

---

## API Reference

### `changeGradient(options)`

Creates a smooth gradient animation on the specified element.

#### Parameters

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `element` | `String \| Element` | Yes | — | CSS selector or DOM element |
| `from` | `Object` | Yes | — | Starting gradient state |
| `from.colors` | `Array<Array<number>>` | Yes | — | RGB arrays `[[R,G,B], [R,G,B]]` |
| `from.positions` | `Array<number>` | No | `[0, 100]` | Color stop positions `[0-100, 0-100]` |
| `from.angle` | `number` | No | `180` | Gradient angle in degrees |
| `to` | `Object` | Yes | — | Ending gradient state |
| `to.colors` | `Array<Array<number>>` | Yes | — | RGB arrays `[[R,G,B], [R,G,B]]` |
| `to.positions` | `Array<number>` | No | `[0, 100]` | Color stop positions `[0-100, 0-100]` |
| `to.angle` | `number` | No | `180` | Gradient angle in degrees |
| `duration` | `number` | No | `1000` | Animation duration in milliseconds |
| `easing` | `Function` | No | `linear` | Easing function `(t: number) => number` |

#### Returns

```typescript
{
  promise: Promise<void>,  // Resolves when animation completes
  cancel: () => void       // Stops the animation immediately
}
```

### `easings`

Object containing built-in easing functions:

| Easing | Description |
|--------|-------------|
| `linear` | Constant speed (default) |
| `easeInQuad` | Slow start, accelerating |
| `easeOutQuad` | Fast start, decelerating |
| `easeInOutQuad` | Slow start and end |
| `easeInCubic` | Slower start, more acceleration |
| `easeOutCubic` | Faster start, more deceleration |
| `easeInOutCubic` | Smoother slow start and end |

---

## Use Cases

- **Hero Sections** — Create eye-catching animated backgrounds
- **Theme Transitions** — Smoothly switch between light/dark modes
- **Interactive UI** — Respond to user actions with gradient animations
- **Loading States** — Visual feedback during async operations
- **Landing Pages** — Add dynamic visual appeal to marketing pages
- **Hover Effects** — Animate gradients on user interaction

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest |
| Edge | Latest |
| Opera | Latest |

Requires ES6+ support (all modern browsers).

---

## Project Structure

```
gradient-animation/
├── README.md              # Documentation
└── gradient_plugin.js     # Core plugin (ES6 module)
```

---

## Skills Demonstrated

This project showcases proficiency in:

- **Modern JavaScript (ES6+)** — Arrow functions, destructuring, template literals, modules
- **Animation APIs** — requestAnimationFrame for smooth, performant animations
- **Promise Patterns** — Async/await, cancellation, error handling
- **API Design** — Clean options object pattern, sensible defaults
- **CSS3** — Advanced gradient syntax and dynamic styling
- **Algorithm Design** — Time-based interpolation with easing functions

---

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

Built with JavaScript and a passion for smooth user experiences.
