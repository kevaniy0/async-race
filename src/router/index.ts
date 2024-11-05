import { clearMain } from '../components/main';

export type Route = {
    path: string;
    callback: () => void;
};

export const createRouter = (routes: Route[]) => ({
    navigate: (path: string) => {
        const page = routes.find((item) => item.path === path);
        if (page) {
            clearMain();
            page.callback();
            if (window.location.pathname !== path) {
                window.history.pushState(null, '', path);
            }
        }
    },
});
