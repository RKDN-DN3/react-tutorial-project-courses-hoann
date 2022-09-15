import { useState, useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import styles from './submenu.module.scss';
import { useGlobalContext } from './context';

const cx = classnames.bind(styles);

function SubMenu() {
    const container = useRef(null);

    const {
        page: { page, links },
        location,
        isSubmenuOpen,
    } = useGlobalContext();

    const [columns, setColumns] = useState('col-2');

    useEffect(() => {
        setColumns('col-2');
        const submenu = container.current;
        const { center, bottom } = location;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;
        if (links.length === 3) {
            setColumns('col-3');
        }
        if (links.length > 3) {
            setColumns('col-4');
        }
    }, [page, location, links]);

    return (
        <aside ref={container} className={cx('submenu', isSubmenuOpen && 'show')}>
            <section>
                <h4 style={{ textTransform: 'capitalize' }}>{page}</h4>
                <div className={cx('submenu-center', columns)}>
                    {links.map((link, index) => {
                        return (
                            <a key={index} href={link.url}>
                                {link.icon}
                                {link.label}
                            </a>
                        );
                    })}
                </div>
            </section>
        </aside>
    );
}

export default SubMenu;
