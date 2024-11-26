import url, { WinnerUpdate } from './winners-data';

const updateWinner = (id: number, params: WinnerUpdate) => {
    const fullURL = `${url}/${id}`;
    return fetch(fullURL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });
};

export default updateWinner;
