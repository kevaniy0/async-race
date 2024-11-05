import './style.scss';
import { createElemet } from '../../utils/dom';
import { headerParams, titleParams } from './header-data';
import Menu from '../menu';

const Header = (): HTMLElement => {
    const header = createElemet(headerParams);
    const title = createElemet(titleParams);
    const menu = Menu();

    header.append(title, menu);

    return header;
};

export default Header;
