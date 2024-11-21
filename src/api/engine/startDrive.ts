import url, { DriveResponse } from './engine-data';

const startDrive = (id: number) => {
    const fullUrl = `${url}?id=${id}&status=drive`;
    return fetch(fullUrl, {
        method: 'PATCH',
    })
        .then((response) => {
            if (response.status === 200) response.json();
            if (response.status === 500) return { success: false };
            throw new Error(`${response.status} - ${response.text}`);
        })
        .then((data: DriveResponse) => data)
        .catch((error: Error) => error.message);
};

export default startDrive;
