import classnames from 'classnames/bind';

import styles from './components.module.scss';

const cx = classnames.bind(styles);
const JobInfo = ({ icon, text }) => {
    return (
        <div className={cx('job-info')}>
            <span className={cx('icon')}>{icon} </span>
            <span className={cx('text')}>{text} </span>
        </div>
    );
};
export default JobInfo;
