/**
 * Gradient Animation Plugin
 * A lightweight, dependency-free JavaScript library for creating smooth CSS linear gradient transitions.
 * ES6+ version with modern API design and requestAnimationFrame-based animation.
 */

/**
 * Animates a CSS linear gradient transition on an element.
 *
 * @param {Object} options - Animation configuration
 * @param {string|Element} options.element - CSS selector or DOM element
 * @param {Object} options.from - Starting gradient state
 * @param {Array<Array<number>>} options.from.colors - Array of RGB color arrays [[R,G,B], [R,G,B]]
 * @param {Array<number>} options.from.positions - Color stop positions [0-100, 0-100]
 * @param {number} options.from.angle - Gradient angle in degrees
 * @param {Object} options.to - Ending gradient state
 * @param {Array<Array<number>>} options.to.colors - Array of RGB color arrays [[R,G,B], [R,G,B]]
 * @param {Array<number>} options.to.positions - Color stop positions [0-100, 0-100]
 * @param {number} options.to.angle - Gradient angle in degrees
 * @param {number} [options.duration=1000] - Animation duration in milliseconds
 * @param {Function} [options.easing] - Easing function (default: linear)
 * @returns {{ promise: Promise<void>, cancel: Function }} Controller object
 */
const changeGradient = (options) => {
  // Input validation
  if (!options || typeof options !== 'object') {
    throw new Error('changeGradient requires an options object');
  }

  const { element, from, to, duration = 1000, easing = (t) => t } = options;

  if (!element) {
    throw new Error('element is required');
  }

  if (!from || !to) {
    throw new Error('from and to gradient states are required');
  }

  if (!from.colors || !Array.isArray(from.colors) || from.colors.length < 2) {
    throw new Error('from.colors must be an array with at least 2 RGB color arrays');
  }

  if (!to.colors || !Array.isArray(to.colors) || to.colors.length < 2) {
    throw new Error('to.colors must be an array with at least 2 RGB color arrays');
  }

  // Get the DOM element
  const el = typeof element === 'string' ? document.querySelector(element) : element;

  if (!el) {
    throw new Error(`Element not found: ${element}`);
  }

  // Destructure start values
  const [fromColorTop, fromColorBottom] = from.colors;
  const [fromPosTop, fromPosBottom] = from.positions || [0, 100];
  const fromAngle = from.angle ?? 180;

  // Destructure end values
  const [toColorTop, toColorBottom] = to.colors;
  const [toPosTop, toPosBottom] = to.positions || [0, 100];
  const toAngle = to.angle ?? 180;

  // Destructure RGB values
  const [fromRTop, fromGTop, fromBTop] = fromColorTop;
  const [fromRBottom, fromGBottom, fromBBottom] = fromColorBottom;
  const [toRTop, toGTop, toBTop] = toColorTop;
  const [toRBottom, toGBottom, toBBottom] = toColorBottom;

  // Animation state
  let animationId = null;
  let cancelled = false;
  let startTime = null;

  // Linear interpolation helper
  const lerp = (start, end, progress) => start + (end - start) * progress;

  // Create promise for completion
  const promise = new Promise((resolve, reject) => {
    const animate = (timestamp) => {
      if (cancelled) {
        reject(new Error('Animation cancelled'));
        return;
      }

      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const progress = easing(rawProgress);

      // Interpolate all values
      const currentRTop = Math.round(lerp(fromRTop, toRTop, progress));
      const currentGTop = Math.round(lerp(fromGTop, toGTop, progress));
      const currentBTop = Math.round(lerp(fromBTop, toBTop, progress));

      const currentRBottom = Math.round(lerp(fromRBottom, toRBottom, progress));
      const currentGBottom = Math.round(lerp(fromGBottom, toGBottom, progress));
      const currentBBottom = Math.round(lerp(fromBBottom, toBBottom, progress));

      const currentPosTop = Math.round(lerp(fromPosTop, toPosTop, progress));
      const currentPosBottom = Math.round(lerp(fromPosBottom, toPosBottom, progress));
      const currentAngle = Math.round(lerp(fromAngle, toAngle, progress));

      // Apply gradient using template literal
      el.style.background = `linear-gradient(${currentAngle}deg, rgba(${currentRTop},${currentGTop},${currentBTop},1) ${currentPosTop}%, rgba(${currentRBottom},${currentGBottom},${currentBBottom},1) ${currentPosBottom}%)`;

      if (rawProgress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        resolve();
      }
    };

    animationId = requestAnimationFrame(animate);
  });

  // Cancel function
  const cancel = () => {
    cancelled = true;
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  };

  return { promise, cancel };
};

// Common easing functions
const easings = {
  linear: (t) => t,
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => t * (2 - t),
  easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeInCubic: (t) => t * t * t,
  easeOutCubic: (t) => (--t) * t * t + 1,
  easeInOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
};

// ES6 Module exports
export { changeGradient, easings };
export default changeGradient;
