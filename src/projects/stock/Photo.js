import classnames from 'classnames/bind';

import styles from './stock.module.scss';

const cx = classnames.bind(styles);
function Photo({
    urls: { regular },
    alt_description,
    likes,
    user: {
        name,
        portfolio_url,
        profile_image: { medium },
    },
}) {
    return (
        <article className={cx('photo')}>
            <img src={regular} alt={alt_description} />
            <div className={cx('photo-info')}>
                <div>
                    <h4>{name}</h4>
                    <p>{likes} likes</p>
                </div>
                <a href={portfolio_url}>
                    <img src={medium} alt="" className={cx('user-img')} />
                </a>
            </div>
        </article>
    );
}

export default Photo;
