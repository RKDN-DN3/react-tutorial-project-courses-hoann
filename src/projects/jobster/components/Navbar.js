import { useState } from 'react';
import classnames from 'classnames/bind';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

import { toggleSidebar, logoutUser } from '../features/user/userSlice';
import logo from '../assets/logo.svg';
import styles from './components.module.scss';

const cx = classnames.bind(styles);
function Navbar() {
    const [showLogout, setShowLogout] = useState(false);
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);

    const toggle = () => {
        dispatch(toggleSidebar());
    };

    return (
        <div className={cx('main')}>
            <div className={cx('nav-center')}>
                <button type="button" className={cx('toggle-btn')} onClick={toggle}>
                    <FaAlignLeft />
                </button>
                <div>
                    <img src={logo} alt="jobster logo" className={cx('logo-register')} />
                    <h3 className={cx('logo-text')}>dashboard</h3>
                </div>
                <div className={cx('btn-container')}>
                    <button type="button" className={cx('btn')} onClick={() => setShowLogout(!showLogout)}>
                        <FaUserCircle />
                        {user?.name}
                        <FaCaretDown />
                    </button>
                    <div className={cx('dropdown', showLogout ? 'show-dropdown' : '')}>
                        <button
                            type="button"
                            className={cx('dropdown-btn')}
                            onClick={() => dispatch(logoutUser('Logging out...'))}
                        >
                            logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
