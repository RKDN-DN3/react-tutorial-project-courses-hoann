import { AppProvider } from './context';

import Navbar from './Navbar';
import Container from './CardContainer';

function Card() {
    return (
        <>
            <AppProvider>
                <Navbar />
                <Container />
            </AppProvider>
        </>
    );
}

export default Card;
