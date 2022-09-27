import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from 'react-loading';
import { useNavigate } from 'react-router-dom';

import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

function GithubUsers() {
    const { loginWithRedirect, isAuthenticated, logout, user, isLoading } = useAuth0();

    const navigate = useNavigate();
    if (!isAuthenticated) {
        return <Login />;
    }

    return (
        <div>
            <Dashboard />
        </div>
    );
}

export default GithubUsers;
