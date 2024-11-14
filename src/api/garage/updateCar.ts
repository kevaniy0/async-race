import url from './garage-data';

const updateCar = (id: number, name: string, color: string) => {
    const fullUrl = `${url}/${id}`;
    return fetch(fullUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, color }),
    });
};

export default updateCar;
