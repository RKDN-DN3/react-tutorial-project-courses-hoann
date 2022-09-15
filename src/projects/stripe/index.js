import Navbar from './Navbar';
import Hero from './Hero';
import Submenu from './Submenu';
import Sidebar from './Sidebar';

import { AppProvider } from './context';

function Stripe() {
    return (
        <>
            <AppProvider>
                <Navbar />
                <Hero />
                <Submenu />
                <Sidebar />
            </AppProvider>
        </>
    );
}

export default Stripe;
