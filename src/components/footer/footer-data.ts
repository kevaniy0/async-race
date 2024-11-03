import { ElementParams } from '../../utils/dom';

const githubLink = 'https://github.com/kevaniy0';
export const footerParams: ElementParams<'footer'> = { tag: 'footer', classNames: ['footer'] };
export const footerlogoParams: ElementParams<'a'> = {
    tag: 'a',
    classNames: ['footer-logo'],
    href: githubLink,
};

export const footerCopyright: ElementParams<'p'> = {
    tag: 'p',
    classNames: ['copyright'],
    textContent: '©   2024',
};
