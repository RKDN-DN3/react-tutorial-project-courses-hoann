import classnames from 'classnames/bind';
import { FaBox, FaMapMarkerAlt, FaLink } from 'react-icons/fa';

import styles from './userInfo.module.scss';

import { useGlobalContext } from '../Context/context';

const cx = classnames.bind(styles);

function Info() {
    const { githubUser, githubFollow } = useGlobalContext();
    return (
        <div className={cx('section')}>
            <div className={cx('section-center', 'section-info')}>
                <div className={cx('user')}>
                    <div className={cx('header')}>
                        <img src={githubUser.avatar_url} alt={githubUser.name}></img>
                        <div>
                            <h4>{githubUser.name}</h4>
                            <p>@{githubUser.login}</p>
                        </div>
                        <a href={githubUser.html_url} target="blank">
                            follow
                        </a>
                    </div>
                    <p className={cx('bio')}>{githubUser.bio}</p>
                    <div className={cx('links')}>
                        <p>
                            <FaBox /> {githubUser.company}
                        </p>
                        <p>
                            <FaMapMarkerAlt /> {githubUser.location}
                        </p>
                        <a href={githubUser.blog}>
                            <FaLink /> {githubUser.blog}
                        </a>
                    </div>
                </div>
                <div className={cx('follower')}>
                    <div className={cx('followers')}>
                        {githubFollow.map((user) => (
                            <article key={user.login}>
                                <img src={user.avatar_url} alt={user.login}></img>
                                <div>
                                    <h4>{user.login}</h4>
                                    <a href={user.html_url} target="blank">
                                        {user.html_url}
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
