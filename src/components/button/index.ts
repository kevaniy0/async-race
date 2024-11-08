import { createElement, ElementParams } from '../../utils/dom';
import './style.scss';

const Button = (params: ElementParams<'button'>, callback?: () => void): HTMLButtonElement => {
    const button = callback ? createElement({ ...params, callback }) : createElement(params);
    return button;
};

export default Button;
