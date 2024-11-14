import url, { Car } from './garage-data';

export const getCar = (id: number) => {
    const fullURL = `${url}/${id}`;
    return fetch(fullURL).then((response) => response.json().then((data: Car) => data));
};

export default getCar;
