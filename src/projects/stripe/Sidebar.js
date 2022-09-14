import classnames from 'classnames/bind';
import styles from './sidebar.module.scss';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const cx = classnames.bind(styles);

function Sidebar() {
    const { showModal, closeModal, SUB_LINKS } = useGlobalContext();
    return (
        <div className={cx('sidebar-wrapper', showModal && 'show')}>
            <aside className={cx('sidebar')}>
                <button className={cx('close-btn')} onClick={closeModal}>
                    <FaTimes />
                </button>
                <div className={cx('sidebar-links')}>
                    {SUB_LINKS.map((item, index) => {
                        return (
                            <article key={index}>
                                <h4>{item.page}</h4>
                                <div className={cx('sidebar-sublinks')}>
                                    {item.links.map((link, index) => {
                                        const { url, icon, label } = link;
                                        return (
                                            <a key={index} href={url}>
                                                {icon}
                                                {label}
                                            </a>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;
