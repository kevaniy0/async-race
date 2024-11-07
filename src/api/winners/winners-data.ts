export type WinnerCar = {
    id: number;
    wins: number;
    time: number;
};
export type WinnerList = WinnerCar[];

const url = 'http://localhost:3000/winners';
export default url;
