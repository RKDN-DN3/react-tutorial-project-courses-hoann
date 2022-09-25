import { useState, useEffect } from 'react';
import Loading from 'react-loading';
import { useNavigate } from 'react-router-dom';

import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

function GithubUsers() {
    const [loading, setLoading] = useState(true);
    const [login, setLogin] = useState(false);

    const navigate = useNavigate();
    if (login) {
        navigate('/github-users/login');
        // return (
        //     <div style={{ display: 'flex', justifyContent: 'center' }}>
        //         <Loading type="spinningBubbles" color="#2caeba"></Loading>
        //     </div>
        // );
    }

    return (
        <div>
            <Dashboard />
        </div>
    );
}

export default GithubUsers;
