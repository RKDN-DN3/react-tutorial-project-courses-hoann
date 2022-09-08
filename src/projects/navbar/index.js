import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './navbar.module.scss';
import { LINKS, SOCIALS } from '../../data';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <nav style={{ backgroundColor: 'white', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
                <div className={cx('navbar')}>
                    <div className={cx('header')}>
                        <span className={cx('name')}>Ngọc</span>
                        <span className={cx('name')} style={{ color: '#2379c9' }}>
                            Hòa
                        </span>
                    </div>
                    <div>
                        <ul className={cx('links')}>
                            {LINKS.map((link) => (
                                <li key={link.id}>
                                    <Link className={cx('link')} to={link.url}>
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul className={cx('social')}>
                            {SOCIALS.map((social) => (
                                <li key={social.id}>
                                    <a className={cx('icon')} href={social.url}>
                                        {social.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
