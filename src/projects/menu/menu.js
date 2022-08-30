import classNames from 'classnames/bind';

import styles from './menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ data }) {
    return (
        <div className={cx('wrapper-menu')}>
            <img className={cx('image')} src={data.image} alt={data.mainTitle}></img>
            <div className={cx('menu-item')}>
                <div className={cx('header')}>
                    <span style={{ paddingBottom: '5px', fontWeight: 700 }}>{data.mainTitle}</span>
                    <span style={{ color: '#c59d5f', fontWeight: 700 }}>${data.price}</span>
                </div>
                <span style={{ color: '#617d98' }}>
                    {data.mainTitle} {data.subTitle}
                </span>
            </div>
        </div>
    );
}

export default Menu;
