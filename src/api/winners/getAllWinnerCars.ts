import url, { WinnerList } from './winners-data';

const getAllWinnerCars = (): Promise<WinnerList> => {
    const fullURL = `${url}`;
    return fetch(fullURL)
        .then((response) => response.json())
        .then((data: WinnerList) => data);
};

export default getAllWinnerCars;
