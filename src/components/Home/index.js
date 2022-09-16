import classNames from 'classnames/bind';

import styles from './home.module.scss';
import { publicRoutes } from '../../routes';
import Course from './Course';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <span
                style={{
                    textAlign: 'center',
                    fontSize: '2rem',
                    fontWeight: 600,
                    marginTop: '30px',
                    marginBottom: '3rem',
                }}
            >
                All project in Reactjs course
            </span>
            <div className={cx('courses')}>
                {publicRoutes
                    .filter((name) => name.name && name.name !== 'Home')
                    .map((p, index) => (
                        <Course key={index} data={p}></Course>
                    ))}
            </div>
        </div>
    );
}

export default Home;
