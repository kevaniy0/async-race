import url, { WinnerList } from './winners-data';

const renderWinnersList = (page: number = 1, limit: number = 7) => {
    const fullURL = `${url}?_page=${page}&_limit=${limit}`;
    let total = 0;
    return fetch(fullURL)
        .then((response) => {
            total = Number(response.headers.get('X-Total-Count'));
            return response.json();
        })
        .then((data: WinnerList) => ({
            data,
            page,
            total,
        }));
};

export default renderWinnersList;
