import Button from '../../components/button';
import Input from '../../components/input';
import { createElement } from '../../utils/dom';
import * as GARAGE from './garage-data';
import './style.scss';

const createForm = (): HTMLFormElement => {
    const form = createElement(GARAGE.form);

    const labelCreate = createElement(GARAGE.labelCreate);
    const inputCreate = Input(GARAGE.inputCreate);
    const buttonCreate = Button(GARAGE.buttonCreate);
    labelCreate.append(inputCreate, buttonCreate);

    const labelUpdate = createElement(GARAGE.labelUpdate);
    const inputUpdate = Input(GARAGE.inputUpdate);
    const buttonUpdate = Button(GARAGE.buttonUpdate);
    labelUpdate.append(inputUpdate, buttonUpdate);
    form.append(labelCreate, labelUpdate);
    return form;
};

export default createForm;
