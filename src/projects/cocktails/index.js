import Cocktails from './components/Cocktails';

import { AppProvider } from './context';
import Search from './components/Search';

function Index() {
    return (
        <>
            <AppProvider>
                <Search />
                <Cocktails />
            </AppProvider>
        </>
    );
}

export default Index;
