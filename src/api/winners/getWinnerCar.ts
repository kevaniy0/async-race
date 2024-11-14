import url from './winners-data';

const getWinnerCar = (id: number) => {
    const fullURL = `${url}/${id}`;
    return fetch(fullURL);
};

export default getWinnerCar;
