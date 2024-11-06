import { createElement } from '../../utils/dom';
import { footerCopyright, footerlogoParams, footerParams } from './footer-data';
import './style.scss';

const Footer = (): HTMLElement => {
    const footer = createElement(footerParams);
    const copyright = createElement(footerCopyright);
    const logo = createElement(footerlogoParams);
    logo.setAttribute('target', '_black');

    footer.append(copyright, logo);

    return footer;
};

export default Footer;
