import { getElement } from '../../utils/dom';

const getButtons = (): HTMLButtonElement[] => {
    const buttons: HTMLButtonElement[] = [];
    const createButton = getElement('.button-create') as HTMLButtonElement;
    const updateButton = getElement('.button-update') as HTMLButtonElement;
    const raceButton = getElement('.button__race') as HTMLButtonElement;
    const resetButton = getElement('.button__reset') as HTMLButtonElement;
    const generateCarsButton = getElement('.generate-cars-button') as HTMLButtonElement;
    const winnersPageButton = getElement('.button-winners') as HTMLButtonElement;
    const paginationLeftButton = getElement('.pagination-button__left') as HTMLButtonElement;
    const paginationRightButton = getElement('.pagination-button__right') as HTMLButtonElement;
    buttons.push(
        createButton,
        updateButton,
        raceButton,
        resetButton,
        generateCarsButton,
        winnersPageButton,
        paginationLeftButton,
        paginationRightButton
    );
    return buttons;
};

export const blockButtons = () => {
    const buttons = getButtons();
    const disabledButtons = buttons.filter((item) => item.disabled !== true);
    disabledButtons.forEach((item) => {
        item.setAttribute('disabled', 'true');
        item.classList.add('disabled-during-race');
    });
};

export const unblockButtons = () => {
    const buttons = getButtons();
    const disabledButtons = buttons.filter((item) => {
        return item.classList.contains('disabled-during-race');
    });
    disabledButtons.forEach((item) => {
        item.removeAttribute('disabled');
        item.classList.remove('disabled-during-race');
    });
};
