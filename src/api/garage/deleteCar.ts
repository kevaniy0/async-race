import url from './garage-data';

const deleteCar = (id: number) => {
    const fullURL = `${url}/${id}`;
    return fetch(fullURL, {
        method: 'DELETE',
    });
};

export default deleteCar;
