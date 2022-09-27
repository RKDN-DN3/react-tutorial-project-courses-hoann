import { Auth0Provider } from '@auth0/auth0-react';

import { AppProvider } from './Context/context';
import App from './App';
import routers from '../../config/routes';

const domain = 'ngochoa.us.auth0.com';
const clientId = 'PrecU7AVscitsPGDZa9oXOE9PG1rtkjO';
function Index() {
    return (
        <Auth0Provider domain={domain} clientId={clientId} redirectUri={`http://localhost:3000${routers.github_users}`}>
            <AppProvider>
                <App />
            </AppProvider>
        </Auth0Provider>
    );
}

export default Index;
