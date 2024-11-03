import { createElemet } from '../../utils/dom';
import { footerCopyright, footerlogoParams, footerParams } from './footer-data';
import './style.scss';

const Footer = (): HTMLElement => {
    const footer = createElemet(footerParams);
    const copyright = createElemet(footerCopyright);
    const logo = createElemet(footerlogoParams);
    logo.setAttribute('target', '_black');

    footer.append(copyright, logo);

    return footer;
};

export default Footer;
