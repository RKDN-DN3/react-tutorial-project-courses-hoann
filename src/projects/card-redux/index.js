import { Provider } from 'react-redux';

import Navbar from './Navbar';
import Container from './CardContainer';
import { store } from './store';

function Card() {
    return (
        <>
            <Provider store={store}>
                <Navbar />
                <Container />
            </Provider>
        </>
    );
}

export default Card;
