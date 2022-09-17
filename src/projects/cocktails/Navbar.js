import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './cocktails.module.scss';
import logo from './logo.svg';

const cx = classNames.bind(styles);
function Navbar({ children }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('nav-center')}>
                    <Link to="/cocktails">
                        <img src={logo} alt="" className={cx('logo')}></img>
                    </Link>
                    <ul className={cx('nav-links')}>
                        <li>
                            <Link to="/cocktails">Home</Link>
                        </li>
                        <li>
                            <Link to="/cocktails/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {children}
        </>
    );
}

export default Navbar;
