import { CarData } from '../pages/garage/generateCars';

const randomizeCar = (data: CarData[]): string => {
    const brand = data[Math.floor(Math.random() * data.length)];
    const model = brand.models[Math.floor(Math.random() * brand.models.length)];
    return `${brand.brand} ${model}`;
};

export default randomizeCar;
