import classnames from 'classnames/bind';
import styles from './navbar.module.scss';
import { FaBars } from 'react-icons/fa';

const cx = classnames.bind(styles);
function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav-center')}>
                <div className={cx('nav-header')}>
                    <img
                        src="https://react-projects-13-stripe-submenus.netlify.app/static/media/logo.1090473d.svg"
                        className={cx('nav-logo')}
                        alt=""
                    />
                    <button className={cx('btn', 'toggle-btn')}>
                        <FaBars />
                    </button>
                </div>
                <ul className={cx('nav-links')}>
                    <li>
                        <button className={cx('link-btn')}>products</button>
                    </li>
                    <li>
                        <button className={cx('link-btn')}>developers</button>
                    </li>
                    <li>
                        <button className={cx('link-btn')}>company</button>
                    </li>
                </ul>
                <button className={cx('btn', 'signin-btn')}>Sign in</button>
            </div>
        </div>
    );
}

export default Navbar;
