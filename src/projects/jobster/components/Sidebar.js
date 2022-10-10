import classnames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './components.module.scss';
import logo from '../assets/logo.svg';
import NavLink from './Navlink';

const cx = classnames.bind(styles);
function Sidebar() {
    const { isSidebarOpen } = useSelector((state) => state.user);
    return (
        <div className={cx('sidebar-main')}>
            <div className={cx('sidebar-container', isSidebarOpen || 'show-sidebar')}>
                <div className={cx('content')}>
                    <header>
                        <img src={logo} alt="jobster logo" className={cx('logo-sidebar')} />
                    </header>
                    <NavLink />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
