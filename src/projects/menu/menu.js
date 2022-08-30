import classNames from 'classnames/bind';

import styles from './menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ data }) {
    console.log(data);
    const img = data.img.toString();
    return (
        <div className={cx('wrapper-menu')}>
            <img src={require(img)} alt="dsa"></img>
            <div className={cx('menu-item')}>
                <div className="header">
                    <span>{data.title}</span>
                    <span>{data.price}</span>
                </div>
                <span>{data.desc}</span>
            </div>
        </div>
    );
}

export default Menu;
