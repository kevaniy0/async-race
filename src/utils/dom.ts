export type Callback = () => void;
export type ElementParams<T extends keyof HTMLElementTagNameMap> = {
    tag: T;
    classNames: string[];
    textContent?: string;
    callback?: Callback;
    href?: string;
};

export const createElement = <T extends keyof HTMLElementTagNameMap>(
    params: ElementParams<T>
): HTMLElementTagNameMap[T] => {
    const element = document.createElement(params.tag);
    params.classNames.forEach((item) => element.classList.add(item));
    if (params.textContent) element.textContent = params.textContent;
    if (params.callback) element.addEventListener('click', params.callback);
    if (element instanceof HTMLAnchorElement && params.href) {
        element.href = params.href;
    }

    return element;
};

export const createSVG = (classes: string[], svgID: string, color?: string) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    classes.forEach((item) => svg.classList.add(item));
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    svg.append(use);
    if (color) svg.setAttribute('fill', color);
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `icons/sprite.svg#${svgID}`);
    return svg;
};
export const getElement = <T extends HTMLElement>(
    selector: string,
    parent: Document | HTMLElement = document
): T => {
    const element = parent.querySelector<T>(selector);
    if (!element) throw new Error(`Element with selector "${selector}" not found`);
    return element as T;
};
