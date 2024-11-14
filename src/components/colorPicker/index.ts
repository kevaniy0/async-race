import './style.scss';
import { createElement, ElementParams } from '../../utils/dom';

const ColorPicker = (params: ElementParams<'input'>): HTMLInputElement => {
    const input = createElement(params);
    input.type = 'color';
    input.addEventListener('click', (event) => {
        event.stopPropagation();
    });
    input.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;
        if (target) {
            input.setAttribute('value', target.value);
        }
    });
    return input;
};

export default ColorPicker;
