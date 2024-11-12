import url from './garage-data';

const createCar = (name: string, color: string = 'orange') => {
    const fullURL = url;
    return fetch(fullURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, color }),
    });
};

export default createCar;
