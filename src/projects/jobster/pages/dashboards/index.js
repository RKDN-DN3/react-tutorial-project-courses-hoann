import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import styles from './dashboard.module.scss';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const cx = classnames.bind(styles);
function Dashboard({ children }) {
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.user);
    useEffect(() => {
        if (!user) {
            navigate('/jobster/register');
        }
    }, [user]);
    return (
        <div className={cx('dashboard')}>
            <Sidebar />
            <div>
                <Navbar />
                <div className={cx('dashboard-page')}>{children}</div>
            </div>
        </div>
    );
}

export default Dashboard;
