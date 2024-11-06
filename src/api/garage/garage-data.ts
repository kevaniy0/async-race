const url = 'http://127.0.0.1:3000/garage';
export type Car = {
    name: string;
    id: number;
    color: string;
};
export type Collection = Car[];
export type CarsData = {
    collection: Collection;
    total: number;
    page: number;
};
export default url;
