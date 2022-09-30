import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import styles from './pages.module.scss';
import logo from '../assets/logo.svg';
import main from '../assets/main.svg';

const cx = classnames.bind(styles);
function Landing() {
    return (
        <div className={cx('main')}>
            <nav>
                <img src={logo} alt="jobster logo" className={cx('logo')} />
            </nav>
            <div className={cx('container', 'page')}>
                {/* info */}
                <div className={cx('info')}>
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy
                        craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.
                    </p>
                    <Link to="/jobster/register" className={cx('btn', 'btn-hero')}>
                        Login/Register
                    </Link>
                </div>
                <img src={main} alt="job hunt" className={cx('img', 'main-img')} />
            </div>
        </div>
    );
}

export default Landing;
