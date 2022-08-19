import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './home.module.scss';

const cx = classNames.bind(styles);
function Course({ data }) {
    return (
        <Link to={data.path} className={cx('course')}>
            <img className={cx('preview')} src={data.img} alt=""></img>
            <div className={cx('info')}>
                <span>{data.name}</span>
            </div>
        </Link>
    );
}

export default Course;
