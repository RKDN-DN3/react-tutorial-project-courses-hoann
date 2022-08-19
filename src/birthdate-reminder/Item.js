import classNames from 'classnames/bind';

import styles from './item.module.scss';
import unnamed from '../assets/images/unnamed.png';

const cx = classNames.bind(styles);

function Item({ user }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={user.img || unnamed} alt={user.username}></img>
            <div className={cx('info')}>
                <span> {user.name}</span>
                <span className={cx('email')}> {user.email}</span>
            </div>
        </div>
    );
}

export default Item;
