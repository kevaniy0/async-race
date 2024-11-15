import createCar from '../../api/garage/createCar';
import randomizeCar from '../../utils/randomizeCar';
import randomizeColor from '../../utils/randomizeColor';

export const quantityCars = 100;

export type CarData = {
    brand: string;
    models: string[];
};

const generateCars = (quatity: number) => {
    return fetch('/car-models-data.json')
        .then((response) => response.json())
        .then(async (data: CarData[]) => {
            const carPromises = [];
            for (let i = 0; i < quatity; i += 1) {
                const carName = randomizeCar(data);
                const color = randomizeColor();
                carPromises.push(createCar(carName, color));
            }
            await Promise.all(carPromises);
        });
};

export default generateCars;
