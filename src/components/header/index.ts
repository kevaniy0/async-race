import './style.scss';
import { createElement } from '../../utils/dom';
import { headerParams, titleParams } from './header-data';
import Menu from '../menu';

const Header = (): HTMLElement => {
    const header = createElement(headerParams);
    const title = createElement(titleParams);
    const menu = Menu();

    header.append(title, menu);

    return header;
};

export default Header;
