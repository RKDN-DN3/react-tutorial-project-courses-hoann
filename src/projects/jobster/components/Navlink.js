import classnames from 'classnames/bind';
import { NavLink, Link } from 'react-router-dom';

import styles from './components.module.scss';
import links from '../utils/links';

const cx = classnames.bind(styles);
function Navlink({ toggleSidebar }) {
    return (
        <div className={cx('nav-links')}>
            {links.map((link) => {
                const { text, path, id, icon } = link;
                return (
                    <NavLink
                        to={path}
                        className={cx('nav-link', ({ isActive }) => {
                            console.log(isActive);
                            return isActive && 'active';
                        })}
                        key={id}
                        onClick={toggleSidebar}
                    >
                        <span className={cx('icon')}>{icon}</span>
                        {text}
                    </NavLink>
                );
            })}
        </div>
    );
}

export default Navlink;
