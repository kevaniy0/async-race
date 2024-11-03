import './style.scss';
import { createElemet } from '../../utils/dom';
import { headerParams, titleParams } from './header-data';

const Header = (): HTMLElement => {
    const header = createElemet(headerParams);
    const title = createElemet(titleParams);

    header.append(title);

    return header;
};

export default Header;
