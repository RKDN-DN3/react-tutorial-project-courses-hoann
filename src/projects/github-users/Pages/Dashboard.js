import { Fragment } from 'react';
import Loading from 'react-loading';

import Navbar from '../components/Navbar';
import Search from '../components/Search';
import UserInfo from '../components/UserInfo';
import Info from '../components/Info';
import Language from '../components/LanguageChart';

import { useGlobalContext } from '../Context/context';

function Dashboard() {
    const { loading } = useGlobalContext();
    return (
        <div>
            <Navbar />
            <Search />
            {!loading ? (
                <Fragment>
                    <UserInfo />
                    <Info />
                    <Language />
                </Fragment>
            ) : (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20rem' }}>
                    <Loading type="spinningBubbles" color="#2caeba" />
                </div>
            )}
        </div>
    );
}

export default Dashboard;
