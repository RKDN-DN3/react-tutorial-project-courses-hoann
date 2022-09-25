import { AppProvider } from './Context/context';
import App from './App';

function Index() {
    return (
        <AppProvider>
            <App />
        </AppProvider>
    );
}

export default Index;
