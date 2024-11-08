import './style.scss';
import { createElement, ElementParams } from '../../utils/dom';

const Input = (params: ElementParams<'input'>): HTMLInputElement => {
    const input = createElement(params);
    return input;
};

export default Input;
