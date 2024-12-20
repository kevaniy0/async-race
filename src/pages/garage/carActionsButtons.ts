import { fillGarageSection } from '.';
import deleteCar from '../../api/garage/deleteCar';
import getAllCars from '../../api/garage/getAllCars';
import getCar from '../../api/garage/getCar';
import deleteWinnerCar from '../../api/winners/deleteCar';
import getAllWinnerCars from '../../api/winners/getAllWinnerCars';
import { WinnerCar } from '../../api/winners/winners-data';
import Button from '../../components/button';
import { getState } from '../../state';
import { createElement, getElement } from '../../utils/dom';
import {
    actionsContainer,
    deleteButton as deleteBTN,
    selectButton as selectBTN,
} from './garage-data';
import updateTotalCars from './update-total-cars';

const createActionButtons = (section: HTMLElement, id: number): HTMLDivElement => {
    const container = createElement(actionsContainer);
    const selectButton = Button(selectBTN);
    selectButton.addEventListener('click', () => {
        const updateInput = getElement('.input-update') as HTMLInputElement;
        const updateButton = getElement('.button-update') as HTMLButtonElement;
        updateButton.disabled = false;
        updateInput.focus();
        getCar(id).then((data) => {
            const inputColor = getElement('.color-picker__update') as HTMLInputElement;
            inputColor.value = data.color;
            updateInput.value = data.name;
        });
        updateInput.dataset.carId = String(id);
    });
    const deleteButton = Button(deleteBTN);
    deleteButton.addEventListener('click', () => {
        deleteCar(id)
            .then(() => {
                const state = getState();
                return getAllCars(state.garagePage);
            })
            .then((data) => {
                if (data.collection.length === 0 && data.page === 1) {
                    const raceButton = getElement('.button__race') as HTMLButtonElement;
                    raceButton.disabled = true;
                    return getAllCars();
                }
                if (data.collection.length === 0) {
                    return getAllCars(data.page - 1);
                }

                return data;
            })
            .then((data) => {
                updateTotalCars(data.total);
                fillGarageSection(section, data);
                getAllWinnerCars().then((winners: WinnerCar[]) => {
                    const winner = winners.find((item: WinnerCar) => item.id === id);
                    if (winner) deleteWinnerCar(id);
                });
            });
    });

    container.append(selectButton, deleteButton);

    return container;
};

export default createActionButtons;
