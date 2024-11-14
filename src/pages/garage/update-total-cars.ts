import { getElement } from '../../utils/dom';

const updateTotalCars = (total: number) => {
    const title = getElement('.garage-title');
    title.textContent = `Garage (${total})`;
};
export default updateTotalCars;
