import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import styles from './sidebar.module.scss';
import { LINKS_SIDEBAR, SOCIALS } from '../../data';

const cx = classNames.bind(styles);

function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <FaBars className={cx('sidebar-btn')} onClick={() => setShowSidebar(!showSidebar)} />
                <button className={cx('show-modal-btn')} onClick={() => setShowModal(!showModal)}>
                    SHOW MODAL
                </button>
            </div>
            <div className={cx('modal', showModal && 'show-modal')}>
                <div className={cx('modal-container')}>
                    <h3 style={{ textTransform: 'capitalize' }}>modal content</h3>
                    <FaTimes className={cx('modal-close')} onClick={() => setShowModal(!showModal)} />
                </div>
            </div>
            <aside className={cx('sidebar', showSidebar && 'show-sidebar')}>
                <div className={cx('sidebar-header')}>
                    <span className={cx('name')}>Ngọc</span>
                    <span className={cx('name')} style={{ color: '#2379c9', flex: 1 }}>
                        Hòa
                    </span>
                    <FaTimes className={cx('sidebar-close')} onClick={() => setShowSidebar(!showSidebar)} />
                </div>
                <ul className={cx('links')}>
                    {LINKS_SIDEBAR.map((link) => (
                        <li key={link.id}>
                            <Link to={link.url}>
                                {link.icon}
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className={cx('social-icons')}>
                    {SOCIALS.map((social) => (
                        <li key={social.id}>
                            <Link to={social.url}>{social.icon}</Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
}

export default Sidebar;
