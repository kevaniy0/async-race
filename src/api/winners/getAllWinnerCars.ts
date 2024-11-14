import url from './winners-data';

const getAllWinnerCars = () => {
    const fullURL = `${url}`;
    return fetch(fullURL).then((response) => response.json());
};

export default getAllWinnerCars;
