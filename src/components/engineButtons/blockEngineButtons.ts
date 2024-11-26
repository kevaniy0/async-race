const blockEngineButtons = () => {
    const startButtons = Array.from(
        document.body.querySelectorAll('.engine-button__start')
    ) as HTMLButtonElement[];
    startButtons.forEach((item) => {
        item.setAttribute('disabled', 'true');
    });
    const stopButtons = Array.from(
        document.body.querySelectorAll('.engine-button__stop')
    ) as HTMLButtonElement[];
    stopButtons.forEach((item) => {
        item.removeAttribute('disabled');
    });
};

export default blockEngineButtons;
