import classnames from 'classnames/bind';
import styles from '../github.module.scss';

import LoginImage from '../../../assets/images/login.svg';

const cx = classnames.bind(styles);
function Login() {
    return (
        <section className={cx('main')}>
            <div className={cx('container')}>
                <img src={LoginImage} alt="" className={cx('image')}></img>
                <h1 className={cx('title')}>github user</h1>
                <button className={cx('btn-login')}>log in / sign up</button>
            </div>
        </section>
    );
}

export default Login;
