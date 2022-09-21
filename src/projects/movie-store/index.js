import { AppProvider } from './context';
import Search from './Search';
import Movies from './Movies';

function MovieStore() {
    return (
        <div style={{ paddingTop: '5rem' }}>
            <AppProvider>
                <Search />
                <Movies />
            </AppProvider>
        </div>
    );
}

export default MovieStore;
