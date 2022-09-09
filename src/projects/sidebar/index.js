import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import styles from './sidebar.module.scss';
import { LINKS, SOCIALS } from '../../data';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <aside className={cx('sidebar')}>
                <div className={cx('sidebar-header')}></div>
                <ul className={cx('links')}>
                    {LINKS.map((link) => (
                        <li key={link.id}>{link.text}</li>
                    ))}
                </ul>
                <ul className={cx('links')}>
                    {SOCIALS.map((social) => (
                        <li key={social.id}>{social.icon}</li>
                    ))}
                </ul>
            </aside>
        </div>
    );
}

export default Sidebar;
