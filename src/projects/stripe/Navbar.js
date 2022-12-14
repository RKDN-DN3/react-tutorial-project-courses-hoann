import classnames from 'classnames/bind';
import styles from './navbar.module.scss';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const cx = classnames.bind(styles);
function Navbar() {
    const { openSubmenu, closeSubmenu, openModal } = useGlobalContext();

    const handleDisplaySubmenu = (e) => {
        const text = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        openSubmenu(text, { center, bottom });
    };

    const handleOpenModal = () => {
        openModal();
    };

    const handleSubmenu = (e) => {
        if (!e.target.classList.contains(cx('link-btn'))) {
            closeSubmenu();
        }
    };

    return (
        <div className={cx('wrapper')} onMouseOver={handleSubmenu}>
            <div className={cx('nav-center')}>
                <div className={cx('nav-header')}>
                    <img
                        src="https://react-projects-13-stripe-submenus.netlify.app/static/media/logo.1090473d.svg"
                        className={cx('nav-logo')}
                        alt=""
                    />
                    <button className={cx('btn', 'toggle-btn')} onClick={handleOpenModal}>
                        <FaBars />
                    </button>
                </div>
                <ul className={cx('nav-links')}>
                    <li>
                        <button className={cx('link-btn')} onMouseOver={handleDisplaySubmenu}>
                            products
                        </button>
                    </li>
                    <li>
                        <button className={cx('link-btn')} onMouseOver={handleDisplaySubmenu}>
                            developers
                        </button>
                    </li>
                    <li>
                        <button className={cx('link-btn')} onMouseOver={handleDisplaySubmenu}>
                            company
                        </button>
                    </li>
                </ul>
                <button className={cx('btn', 'signing-btn')}>Sign in</button>
            </div>
        </div>
    );
}

export default Navbar;
