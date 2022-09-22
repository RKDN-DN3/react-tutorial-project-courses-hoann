import Search from './Search';
import Buttons from './Buttons';
import Stories from './Stories';
import { AppProvider } from './context';

function HackerNew() {
    return (
        <div style={{ paddingTop: '5rem' }}>
            <AppProvider>
                <Search />
                <Buttons />
                <Stories />
            </AppProvider>
        </div>
    );
}

export default HackerNew;
