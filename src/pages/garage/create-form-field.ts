import { fillGarageSection } from '.';
import createCar from '../../api/garage/createCar';
import getAllCars from '../../api/garage/getAllCars';
import Button from '../../components/button';
import Input from '../../components/input';
import { createElement } from '../../utils/dom';
import * as GARAGE from './garage-data';
import './style.scss';
import updateTotalCars from './update-total-cars';

const createForm = (section: HTMLElement): HTMLFormElement => {
    const form = createElement(GARAGE.form);

    const labelCreate = createElement(GARAGE.labelCreate);
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
    const inputUpdate = Input(GARAGE.inputUpdate);
    const buttonUpdate = Button(GARAGE.buttonUpdate);
    labelUpdate.append(inputUpdate, buttonUpdate);
    form.append(labelCreate, labelUpdate);
    return form;
};

export default createForm;
