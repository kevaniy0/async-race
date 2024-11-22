type TCarState = {
    [key in number]: {
        controller: AbortController | null;
        animationId: number | null;
    };
};

const carState: TCarState = {};
export default carState;
