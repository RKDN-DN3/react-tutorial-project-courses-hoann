import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './menu.module.scss';
import MenuItem from './menu';
import { MENUS } from '../../data';

const cx = classNames.bind(styles);

function Menu() {
    const [menu, setMenu] = useState(MENUS);

    const handleShowItem = (type) => {
        if (type === 'all') {
            setMenu(MENUS);
            return;
        }

        return setMenu(MENUS.filter((menu) => menu.tag === type));
    };
    return (
        <div className={cx('wrapper', 'container')}>
            <span className={cx('main-title')}>Our Menu</span>
            <div className={cx('underline')}></div>
            <div className={cx('group-menu')}>
                <button className={cx('menu')} onClick={() => handleShowItem('all')}>
                    All
                </button>
                <button className={cx('menu')} onClick={() => handleShowItem('breakfast')}>
                    Breakfast
                </button>
                <button className={cx('menu')} onClick={() => handleShowItem('lunch')}>
                    Lunch
                </button>
                <button className={cx('menu')} onClick={() => handleShowItem('shakes')}>
                    Shakes
                </button>
            </div>
            <div className={cx('content')}>
                {menu.map((menuItem) => (
                    <MenuItem key={menuItem.id} data={menuItem} />
                ))}
            </div>
        </div>
    );
}

export default Menu;
