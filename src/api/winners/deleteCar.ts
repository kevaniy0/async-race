import url from './winners-data';

const deleteWinnerCar = async (id: number) => {
    const fullURL = `${url}/${id}`;

    try {
        await fetch(fullURL, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log('Данная машина не была победителем');
    }
};

export default deleteWinnerCar;
