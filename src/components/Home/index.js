import classNames from 'classnames/bind';

import styles from './home.module.scss';
import Birthdate from '../../birthdate-reminder';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Birthdate />
        </div>
    );
}

export default Home;
