/**
 * Create the animation of a counter
 *
 * @param {object} element   Parent node of the counter
 * @param {number} total     Final counter value
 * @param {number} duration  Animation duration
 */
const Counter = (element, final, duration) => {
  const step = (number) => {
    const progress = Math.min(number / duration, 1);
    element.innerHTML = Math.floor(progress * final);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

export default Counter;
