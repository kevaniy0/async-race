import url from './garage-data';

export const getCar = (id: number) => {
    const fullURL = `${url}/${id}`;
    return fetch(fullURL).then((response) => response.json());
};

export default getCar;
