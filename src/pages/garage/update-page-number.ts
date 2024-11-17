import { getElement } from '../../utils/dom';

const updatePageNumber = (page: number) => {
    const title = getElement('.current-page');
    title.textContent = `Page #(${page})`;
};
export default updatePageNumber;
