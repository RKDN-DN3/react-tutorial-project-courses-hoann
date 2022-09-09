import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import styles from './navbar.module.scss';
import { LINKS, SOCIALS } from '../../data';

const cx = classNames.bind(styles);

function Navbar() {
    const [show, setShow] = useState(true);
    return (
        <div className={cx('wrapper')}>
            <nav
                style={{
                    backgroundColor: 'white',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s linear',
                }}
            >
                <div className={cx('navbar')}>
                    <div className={cx('header')}>
                        <span className={cx('name')}>Ngọc</span>
                        <span className={cx('name')} style={{ color: '#2379c9', flex: 1 }}>
                            Hòa
                        </span>
                        {show ? (
                            <FaBars
                                className={cx('navbar-icon')}
                                size="20"
                                color="#49a6e9"
                                onClick={() => setShow(false)}
                            />
                        ) : (
                            <FaBars
                                className={cx('navbar-icon')}
                                size="20"
                                color="#49a6e9"
                                style={{ transform: 'rotate(90deg)' }}
                                onClick={() => setShow(true)}
                            />
                        )}
                    </div>
                    <div>
                        <ul className={cx('links', !show && 'isShow')}>
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
