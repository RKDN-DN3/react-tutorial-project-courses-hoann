import { useEffect, useState, useContext, createContext } from 'react';
import axios from 'axios';

import dataUser from './data/user';
import repos from './data/repo';
import followers from './data/followers';

const AppContext = createContext();
const rootUrl = 'https://api.github.com';

function AppProvider({ children }) {
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
            setTimeout(() => {
                setGithubUser(res.data);
                getFollowers(`${url}/followers`);
                getRepo(`${url}/repos?per_page=100`);
                setError({});
                setLoading(false);
            }, 2000);
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
