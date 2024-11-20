import { getElement } from '../utils/dom';
import extractPageNumber from '../utils/extractPageNumber';

const LOCAL_KEY = 'asyncRaceStateStorage_KEY';
type StateType = {
    garagePage: number;
    inputValues: {
        create: string;
        createColor: string;
        update: string;
        updateColor: string;
    };
};
const localState: StateType = {
    garagePage: 1,
    inputValues: {
        create: '',
        createColor: '',
        update: '',
        updateColor: '',
    },
};

const createStorage = () => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(localState));
};

export const getState = (): StateType => {
    const state = localStorage.getItem(LOCAL_KEY)!;
    return JSON.parse(state) as StateType;
};

export const saveState = () => {
    const inputCreate = (getElement('.input-create') as HTMLInputElement).value;
    const inputCreateColor = (getElement('.color-picker__create') as HTMLInputElement).value;
    const inputUpdateColor = (getElement('.color-picker__update') as HTMLInputElement).value;
    const updateInput = (getElement('.input-update') as HTMLInputElement).value;
    const garagePage = getElement('.current-page').textContent!;
    const pageNumber = extractPageNumber(garagePage);

    const state = getState();
    state.garagePage = Number(pageNumber);
    state.inputValues.create = inputCreate;
    state.inputValues.createColor = inputCreateColor;
    state.inputValues.updateColor = inputUpdateColor;
    state.inputValues.update = updateInput;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(state));
};

export const updateInputsState = (): void => {
    const state = getState();
    const inputCreate = getElement('.input-create') as HTMLInputElement;
    const inputUpdate = getElement('.input-update') as HTMLInputElement;
    const inputCreateColor = getElement('.color-picker__create') as HTMLInputElement;
    const inputUpdateColor = getElement('.color-picker__update') as HTMLInputElement;
    inputCreate.value = state.inputValues.create;
    inputCreateColor.value = state.inputValues.createColor;
    inputUpdate.value = state.inputValues.update;
    inputUpdateColor.value = state.inputValues.updateColor;
};
export default createStorage;
