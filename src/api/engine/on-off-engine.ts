import url, { EngineResponse } from './engine-data';

export type SwitchEngine = {
    idCar: number;
    status: 'started' | 'stopped';
};

const switchStatusEngine = (
    params: SwitchEngine,
    signal?: AbortSignal
): Promise<string | EngineResponse> => {
    const fullURL = `${url}?id=${params.idCar}&status=${params.status}`;
    return fetch(fullURL, {
        method: 'PATCH',
        signal,
    })
        .then((response) => {
            if (response.status === 200) return response.json();
            throw new Error(`${response.status} - ${response.text}`);
        })
        .then((data: EngineResponse) => data)
        .catch((error: Error) => error.message);
};

export default switchStatusEngine;
