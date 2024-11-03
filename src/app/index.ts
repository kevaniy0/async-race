import './style.scss';
import Footer from '../components/footer';
import Header from '../components/header';
import Main from '../components/main';
import { createElemet } from '../utils/dom';
import containerParams from './app-data';

const App = () => {
    const container = createElemet(containerParams);
    const header = Header();
    const main = Main();
    const footer = Footer();

    container.append(header, main, footer);
    document.body.append(container);
};

export default App;
