import classNames from 'classnames/bind';

import styles from './tours.module.scss';

const cx = classNames.bind(styles);

function Item({ data }) {
    return (
        <div className={cx('content')}>
            <img
                style={{ width: '100%', borderRadius: '5px 5px 0 0' }}
                src="http://hd.wallpaperswide.com/thumbs/old_trees_swamp-t2.jpg"
                alt={data.title}
            ></img>
            <div className={cx('info')}>
                <span className={cx('title')}>{data.title}</span>
                <span className={cx('price')}>$1,995</span>
            </div>
            <div className={cx('content')}></div>
        </div>
    );
}

export default Item;
