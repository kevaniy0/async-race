import url, { CarsData, Collection } from './garage-data';

const getGarageCars = (page: number = 1, limit: number = 7) => {
    let total = 0;
    const fullURL = `${url}?_page=${page}&_limit=${limit}`;
    return fetch(fullURL)
        .then((response) => {
            if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
            total = Number(response.headers.get('X-Total-Count'));
            return response.json();
        })
        .then(
            (data: Collection) =>
                ({
                    collection: data,
                    page,
                    total,
                }) as CarsData
        )
        .catch((error: Error) => {
            throw error;
        });
};

export default getGarageCars;
