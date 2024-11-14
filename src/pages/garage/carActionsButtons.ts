import { fillGarageSection } from '.';
import deleteCar from '../../api/garage/deleteCar';
import getAllCars from '../../api/garage/getAllCars';
// import updateCar from '../../api/garage/updateCar';
import Button from '../../components/button';
import { createElement } from '../../utils/dom';
import {
    actionsContainer,
    deleteButton as deleteBTN,
    selectButton as selectBTN,
} from './garage-data';
import updateTotalCars from './update-total-cars';

const createActionButtons = (section: HTMLElement, id: number): HTMLDivElement => {
    const container = createElement(actionsContainer);
    const selectButton = Button(selectBTN);
    const deleteButton = Button(deleteBTN);
    deleteButton.addEventListener('click', () => {
        deleteCar(id)
            .then(() => getAllCars())
            .then((data) => {
                updateTotalCars(data.total);
                fillGarageSection(section, data);
            });
    });

    container.append(selectButton, deleteButton);

    return container;
};

export default createActionButtons;
