import { createElement, ElementParams } from '../../utils/dom';
import './style.scss';

const Button = (params: ElementParams<'button'>, callback?: () => void): HTMLButtonElement => {
    const button = callback ? createElement({ ...params, callback }) : createElement(params);
    button.setAttribute('type', 'button');
    return button;
};

export default Button;
