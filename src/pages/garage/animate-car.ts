let animationFrameId: number | null = null;

const animateCar = (car: HTMLElement, time: number) => {
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
            animationFrameId = requestAnimationFrame(step);
        } else {
            animationFrameId = null;
        }
    }
    animationFrameId = requestAnimationFrame(step);
};

export const stopAnimation = () => {
    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
};

export default animateCar;
