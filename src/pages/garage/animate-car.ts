import carState from '../../state/car-state';

const animateCar = (id: number, car: HTMLElement, time: number) => {
    const start = performance.now();
    const startPosition = parseFloat(window.getComputedStyle(car).left) || 0;
    const endPosition = car.parentElement!.offsetWidth - startPosition - 40;
    function step(timestamp: DOMHighResTimeStamp) {
        const elem = car;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / time, 1);

        const currentPosition = startPosition + progress * (endPosition - startPosition);
        elem.style.left = `${currentPosition}px`;

        if (progress < 1) {
            carState[id].animationId = requestAnimationFrame(step);
        } else {
            carState[id].animationId = null;
        }
    }
    carState[id].animationId = requestAnimationFrame(step);
};

export const stopAnimation = (id: number) => {
    if (carState[id].controller) {
        carState[id].controller.abort();
        carState[id].controller = null;
    }
    if (carState[id].animationId !== null) {
        cancelAnimationFrame(carState[id].animationId);
        carState[id].animationId = null;
    }
};

export default animateCar;
