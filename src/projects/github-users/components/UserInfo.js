import classnames from 'classnames/bind';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

import styles from './userInfo.module.scss';

import { useGlobalContext } from '../Context/context';

const cx = classnames.bind(styles);
function UserInfo() {
    const { githubUser } = useGlobalContext();

    return (
        <div className={cx('section')}>
            <div className={cx('section-center')}>
                <div className={cx('item')}>
                    <span style={{ backgroundColor: 'rgb(255, 224, 240)', color: 'rgb(218, 74, 145)' }}>
                        <GoRepo size={24} />
                    </span>
                    <div>
                        <h3>{githubUser.public_repos}</h3>
                        <p>Repos</p>
                    </div>
                </div>
                <div className={cx('item')}>
                    <span style={{ backgroundColor: '#e0fcff', color: '#2caeba' }}>
                        <FiUsers size={24} />
                    </span>
                    <div>
                        <h3>{githubUser.followers}</h3>
                        <p>Followers</p>
                    </div>
                </div>
                <div className={cx('item')}>
                    <span style={{ backgroundColor: 'rgb(230, 230, 255)', color: 'rgb(93, 85, 250)' }}>
                        <FiUserPlus size={24} />
                    </span>
                    <div>
                        <h3>{githubUser.following}</h3>
                        <p>Following</p>
                    </div>
                </div>
                <div className={cx('item')}>
                    <span style={{ backgroundColor: 'rgb(255, 251, 234)', color: 'rgb(240, 180, 41)' }}>
                        <GoGist size={24} />
                    </span>
                    <div>
                        <h3>{githubUser.public_gists}</h3>
                        <p>Gists</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
