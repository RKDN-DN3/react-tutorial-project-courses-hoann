import classnames from 'classnames/bind';
import { useAuth0 } from '@auth0/auth0-react';

import styles from './navbar.module.scss';

const cx = classnames.bind(styles);
function Navbar() {
    const { logout, user } = useAuth0();
    console.log(user);
    return (
        <nav className={cx('navbar')}>
            <img src={user.picture} alt=""></img>
            <h4>
                Welcome,
                <strong>
                    {user.given_name} {user.family_name}
                </strong>
            </h4>
            <button onClick={() => logout({ returnTo: 'http://localhost:3000/github-users/login' })}>Logout</button>
        </nav>
    );
}

export default Navbar;
