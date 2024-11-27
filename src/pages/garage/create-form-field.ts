import { fillGarageSection } from '.';
import createCar from '../../api/garage/createCar';
import getAllCars from '../../api/garage/getAllCars';
import getCar from '../../api/garage/getCar';
import updateCar from '../../api/garage/updateCar';
import Button from '../../components/button';
import ColorPicker from '../../components/colorPicker';
import { colorCreate, colorUpdate } from '../../components/colorPicker/colorPicker-data';
import Input from '../../components/input';
import { getState } from '../../state';
import { createElement, getElement } from '../../utils/dom';
import * as GARAGE from './garage-data';
import './style.scss';
import updateTotalCars from './update-total-cars';

const createForm = (section: HTMLElement): HTMLFormElement => {
    const form = createElement(GARAGE.form);

    const labelCreate = createElement(GARAGE.labelCreate);
    labelCreate.onclick = (event) => event.preventDefault();
    const inputCreate = Input(GARAGE.inputCreate);
    const inputColorCreate = ColorPicker(colorCreate);
    const buttonCreate = Button(GARAGE.buttonCreate);
    buttonCreate.addEventListener('click', () => {
        const name = inputCreate.value;
        createCar(name, inputColorCreate.value).then(() => {
            const state = getState();
            getAllCars(state.garagePage).then((data) => {
                const raceButton = getElement('.button__race') as HTMLButtonElement;
                raceButton.disabled = false;
                fillGarageSection(section, data);
                updateTotalCars(data.total);
                inputCreate.value = '';
                inputColorCreate.value = 'black';
            });
        });
    });
    labelCreate.append(inputCreate, inputColorCreate, buttonCreate);

    const labelUpdate = createElement(GARAGE.labelUpdate);
    labelUpdate.onclick = (event) => event.preventDefault();
    const inputUpdate = Input(GARAGE.inputUpdate);
    const inputColorUpdate = ColorPicker(colorUpdate);
    const buttonUpdate = Button(GARAGE.buttonUpdate);
    buttonUpdate.disabled = true;
    buttonUpdate.addEventListener('click', () => {
        const idCar = inputUpdate.dataset.carId;
        const newName = inputUpdate.value;
        const newColor = inputColorUpdate.value;
        getCar(Number(idCar)).then(({ id }) => {
            updateCar(id, newName, newColor)
                .then(() => {
                    const state = getState();
                    return getAllCars(state.garagePage);
                })
                .then((data) => {
                    fillGarageSection(section, data);
                    inputUpdate.value = '';
                    buttonUpdate.disabled = true;
                    inputColorUpdate.value = 'black';
                });
        });
    });
    labelUpdate.append(inputUpdate, inputColorUpdate, buttonUpdate);
    form.append(labelCreate, labelUpdate);
    return form;
};

export default createForm;
