const url = 'http://127.0.0.1:3000/engine';
export type EngineResponse = {
    velocity: number;
    distance: number;
};
export type DriveResponse = {
    success: boolean;
};
export default url;
