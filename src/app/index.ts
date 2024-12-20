import './style.scss';
import Footer from '../components/footer';
import Header from '../components/header';
import Main from '../components/main';
import { createElement } from '../utils/dom';
import containerParams from './app-data';
import { createRouter, Route } from '../router';
import renderGaragePage from '../pages/garage';
import pages from '../router/pages';
import renderWinnersPage from '../pages/winners';
import createStorage from '../state';

const routes: Route[] = [
    { path: pages.GARAGE, callback: renderGaragePage },
    { path: pages.WINNERS, callback: renderWinnersPage },
];
export const router = createRouter(routes);

const App = () => {
    createStorage();
    const container = createElement(containerParams);
    const header = Header();
    const main = Main();
    const footer = Footer();

    container.append(header, main, footer);
    document.body.append(container);

    router.navigate('/garage');
};

export default App;
