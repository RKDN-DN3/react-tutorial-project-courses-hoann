import classnames from 'classnames/bind';

import styles from './pagination.module.scss';

const cx = classnames.bind(styles);
const Follower = ({ avatar_url, html_url, login }) => {
    return (
        <article className={cx('card')}>
            <img src={avatar_url} alt={login} />
            <h4>${login}</h4>
            <a href={html_url} className={cx('btn')}>
                view profile
            </a>
        </article>
    );
};

export default Follower;
