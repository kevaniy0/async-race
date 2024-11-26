import url, { WinnerCar } from './winners-data';

const createWinner = (params: WinnerCar) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });
};

export default createWinner;
