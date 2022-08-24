import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './tours.module.scss';

const cx = classNames.bind(styles);

function Item({ data, handleRemoveTour }) {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className={cx('content')}>
            <img style={{ width: '100%', borderRadius: '5px 5px 0 0' }} src={data.image} alt={data.name}></img>
            <div className={cx('information')}>
                <div className={cx('info')}>
                    <span className={cx('title')}>{data.name}</span>
                    <span className={cx('price')}>${data.price}</span>
                </div>
                <div className={cx('intro')}>
                    {readMore ? data.info : `${data.info.substring(0, 200)}...`}{' '}
                    <span className={cx('read-more')} onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'Show less' : 'Read more'}
                    </span>
                </div>
                <button className={cx('not-interest-btn')} onClick={() => handleRemoveTour(data.id)}>
                    Not Interested
                </button>
            </div>
        </div>
    );
}

export default Item;
