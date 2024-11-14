import { fillGarageSection } from '.';
import createCar from '../../api/garage/createCar';
import getAllCars from '../../api/garage/getAllCars';
import getCar from '../../api/garage/getCar';
import updateCar from '../../api/garage/updateCar';
import Button from '../../components/button';
import Input from '../../components/input';
import { createElement } from '../../utils/dom';
import * as GARAGE from './garage-data';
import './style.scss';
import updateTotalCars from './update-total-cars';

const createForm = (section: HTMLElement): HTMLFormElement => {
    const form = createElement(GARAGE.form);

    const labelCreate = createElement(GARAGE.labelCreate);
    labelCreate.onclick = (event) => event.preventDefault();
    const inputCreate = Input(GARAGE.inputCreate);
    const buttonCreate = Button(GARAGE.buttonCreate);
    buttonCreate.addEventListener('click', () => {
        const name = inputCreate.value;
        createCar(name).then(() => {
            getAllCars().then((data) => {
                fillGarageSection(section, data);
                updateTotalCars(data.total);
                inputCreate.value = '';
            });
        });
    });
    labelCreate.append(inputCreate, buttonCreate);

    const labelUpdate = createElement(GARAGE.labelUpdate);
    labelUpdate.onclick = (event) => event.preventDefault();
    const inputUpdate = Input(GARAGE.inputUpdate);
    const buttonUpdate = Button(GARAGE.buttonUpdate);
    buttonUpdate.disabled = true;
    buttonUpdate.addEventListener('click', () => {
        const idCar = inputUpdate.dataset.carId;
        const newName = inputUpdate.value;
        getCar(Number(idCar)).then(({ id, color }) => {
            updateCar(id, newName, color)
                .then(() => getAllCars())
                .then((data) => {
                    fillGarageSection(section, data);
                    inputUpdate.value = '';
                    buttonUpdate.disabled = true;
                });
        });
    });
    labelUpdate.append(inputUpdate, buttonUpdate);
    form.append(labelCreate, labelUpdate);
    return form;
};

export default createForm;
