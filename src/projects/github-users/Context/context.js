import { useEffect, useState, useContext, createContext } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from 'react-loading';

import dataUser from './data/user';
import repos from './data/repo';
import followers from './data/followers';

const AppContext = createContext();
const rootUrl = 'https://api.github.com';

function AppProvider({ children }) {
    const { loginWithRedirect, isAuthenticated, logout, user, isLoading } = useAuth0();

    const [githubUser, setGithubUser] = useState(dataUser);
    const [githubRepo, setGithubRepo] = useState(repos);
    const [githubFollow, setGithubFollow] = useState(followers);

    const [requests, setRequests] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    //check request
    const checkRequest = () => {
        axios(`${rootUrl}/rate_limit`).then((data) => {
            setRequests(data.data.rate.remaining);
        });
    };
    const searchGithubUser = async (value) => {
        setLoading(true);
        const url = `${rootUrl}/users/${value}`;
        const res = await axios(url).catch(() => {
            setError({ error: true, msg: 'There Is No User With That Username' });
            setGithubUser(dataUser);
            setLoading(false);
        });
        if (res) {
            setGithubUser(res.data);
            getFollowers(`${url}/followers?per_page=100`);
            getRepo(`${url}/repos?per_page=100`);
            setError({});
            setLoading(false);
        } else {
            setError({ error: true, msg: 'There Is No User With That Username' });
        }
    };

    const getFollowers = async (url) => {
        const res = await axios(url);
        if (res) {
            setGithubFollow(res.data);
        }
    };

    const getRepo = async (url) => {
        const res = await axios(url);
        if (res) {
            setGithubRepo(res.data);
        }
    };

    useEffect(() => {
        checkRequest();
    }, []);

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20rem' }}>
                <Loading type="spinningBubbles" color="#2caeba" />
            </div>
        );
    }

    return (
        <AppContext.Provider
            value={{ loading, githubUser, githubRepo, githubFollow, requests, searchGithubUser, error }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
