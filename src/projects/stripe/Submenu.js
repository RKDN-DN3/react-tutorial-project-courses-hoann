import classnames from 'classnames/bind';
import styles from './submenu.module.scss';
import { useGlobalContext } from './context';

const cx = classnames.bind(styles);

function SubMenu() {
    const {} = useGlobalContext();
    return (
        <aside className={cx('submenu')}>
            <section>
                <h4>{page}</h4>
                <div className={`submenu-center ${columns}`}>
                    {links.map((link, index) => {
                        const { url, icon, label } = link;
                        return (
                            <a key={index} href={url}>
                                {icon}
                                {label}
                            </a>
                        );
                    })}
                </div>
            </section>
        </aside>
    );
}

export default SubMenu;
