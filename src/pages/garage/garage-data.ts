import { ElementParams } from '../../utils/dom';

export const container: ElementParams<'div'> = {
    tag: 'div',
    classNames: ['garage-container'],
};
export const title: ElementParams<'h1'> = {
    tag: 'h1',
    classNames: ['garage-title', 'title'],
    textContent: 'Garage',
};
export const page: ElementParams<'h2'> = {
    tag: 'h2',
    classNames: ['current-page', 'title'],
    textContent: 'Page',
};
export const carSection: ElementParams<'section'> = {
    tag: 'section',
    classNames: ['section-garage'],
};
export const carContainer: ElementParams<'div'> = {
    tag: 'div',
    classNames: ['car-container'],
};

export const carName: ElementParams<'p'> = {
    tag: 'p',
    classNames: ['car-name'],
};
export const carSvgClasses = ['car-image'];
export const finishSvgClasses = ['finish-image'];

export const form: ElementParams<'form'> = {
    tag: 'form',
    classNames: ['garage-form'],
};
export const labelCreate: ElementParams<'label'> = {
    tag: 'label',
    classNames: ['label', 'label-create'],
};

export const inputCreate: ElementParams<'input'> = {
    tag: 'input',
    classNames: ['input-text', 'input-create'],
};

export const buttonCreate: ElementParams<'button'> = {
    tag: 'button',
    classNames: ['button', 'button-primary', 'button-create'],
    textContent: 'CREATE',
};

export const labelUpdate: ElementParams<'label'> = {
    tag: 'label',
    classNames: ['label', 'label-update'],
};

export const inputUpdate: ElementParams<'input'> = {
    tag: 'input',
    classNames: ['input-text', 'input-update'],
};

export const buttonUpdate: ElementParams<'button'> = {
    tag: 'button',
    classNames: ['button', 'button-primary', 'button-update'],
    textContent: 'UPDATE',
};

export const buttonField: ElementParams<'div'> = {
    tag: 'div',
    classNames: ['button-field'],
};

export const buttonRace: ElementParams<'button'> = {
    tag: 'button',
    classNames: ['button', 'button-primary'],
    textContent: 'RACE',
};

export const buttonReset: ElementParams<'button'> = {
    tag: 'button',
    classNames: ['button', 'button-primary'],
    textContent: 'RESET',
};

export const buttonGenerateCars: ElementParams<'button'> = {
    tag: 'button',
    classNames: ['button', 'button-primary'],
    textContent: 'GENERATE CARS',
};

export const actionsContainer: ElementParams<'div'> = {
    tag: 'div',
    classNames: ['action-buttons-container'],
};

export const selectButton: ElementParams<'button'> = {
    tag: 'button',
    classNames: ['action-button', 'select-button', 'button'],
    textContent: 'SELECT',
};

export const deleteButton: ElementParams<'button'> = {
    tag: 'button',
    classNames: ['action-button', 'delete-button', 'button'],
    textContent: 'DELETE',
};

export const paginationWrapper: ElementParams<'div'> = {
    tag: 'div',
    classNames: ['pagination-field', 'pagination-field__garage'],
};
export const leftButton: ElementParams<'button'> = {
    tag: 'button',
    classNames: ['pagination-button', 'pagination-button__left', 'button', 'button-primary'],
    textContent: 'PREV',
};

export const rightButton: ElementParams<'button'> = {
    tag: 'button',
    classNames: ['pagination-button', 'pagination-button__right', 'button', 'button-primary'],
    textContent: 'NEXT',
};
