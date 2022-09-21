import { Fragment } from 'react';
import classNames from 'classnames/bind';

import styles from './home.module.scss';
import { publicRoutes } from '../../routes';
import Course from './Course';

const cx = classNames.bind(styles);

function Home() {
    const allType = [...new Set(publicRoutes.filter((item) => item.display).map((item) => item.type))];
    return (
        <div className={cx('wrapper')}>
            {allType.map((router, index) => (
                <Fragment key={index}>
                    <span
                        style={{
                            textAlign: 'center',
                            fontSize: '2rem',
                            fontWeight: 600,
                            marginTop: '30px',
                            marginBottom: '3rem',
                            textTransform: 'capitalize',
                        }}
                    >
                        {router}
                    </span>
                    <div className={cx('courses')}>
                        {publicRoutes
                            .filter((name) => name.display && name.type === router)
                            .map((p, index) => (
                                <Course key={index} data={p}></Course>
                            ))}
                    </div>
                </Fragment>
            ))}
        </div>
    );
}

export default Home;
