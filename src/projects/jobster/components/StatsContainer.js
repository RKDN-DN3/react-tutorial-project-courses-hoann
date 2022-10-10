import classnames from 'classnames/bind';
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import styles from './components.module.scss';

const cx = classnames.bind(styles);
const StatsContainer = () => {
    // const { stats } = useSelector((store) => store.allJobs);
    const stats = {};
    const defaultStats = [
        {
            title: 'pending applications',
            count: stats.pending || 0,
            icon: <FaSuitcaseRolling />,
            color: '#e9b949',
            bcg: '#fcefc7',
        },
        {
            title: 'interviews scheduled',
            count: stats.interview || 0,
            icon: <FaCalendarCheck />,
            color: '#647acb',
            bcg: '#e0e8f9',
        },
        {
            title: 'jobs declined',
            count: stats.declined || 0,
            icon: <FaBug />,
            color: '#d66a6a',
            bcg: '#ffeeee',
        },
    ];

    return (
        <div className={cx('stats-main')}>
            {defaultStats.map((item, index) => {
                const { count, title, icon, color, bcg } = item;
                return (
                    <article color={color} className={cx(`card-${index}`)} key={index}>
                        <header className={cx('header')}>
                            <span className={cx('count')}>{count}</span>
                            <span className={cx('icon')}>{icon}</span>
                        </header>
                        <h5 className={cx('title')}>{title}</h5>
                    </article>
                );
            })}
        </div>
    );
};
export default StatsContainer;
