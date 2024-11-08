import Button from '../../components/button';
import { createElement } from '../../utils/dom';
import * as GARAGE from './garage-data';

const createRaceButtons = (): HTMLDivElement => {
    const field = createElement(GARAGE.buttonField);
    const buttonRace = Button(GARAGE.buttonRace);
    const buttonReset = Button(GARAGE.buttonReset);
    const buttonGenerateCars = Button(GARAGE.buttonGenerateCars);
    field.append(buttonRace, buttonReset, buttonGenerateCars);
    return field;
};

export default createRaceButtons;
