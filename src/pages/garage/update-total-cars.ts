import { getElement } from '../../utils/dom';

const updateTotalCars = (total: string) => {
    const title = getElement('.garage-title');
    title.textContent = `Garage (${total})`;
};
export default updateTotalCars;
