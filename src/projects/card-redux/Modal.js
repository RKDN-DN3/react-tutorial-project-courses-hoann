import { useDispatch } from 'react-redux';
import classnames from 'classnames/bind';

import styles from './card.module.scss';
import { hideModal } from './features/modal/modalSlice';
import { removeAll } from './features/cart/cartSlice';

const cx = classnames.bind(styles);

function Modal() {
    const dispatch = useDispatch();
    return (
        <aside className={cx('modal-container')}>
            <div className={cx('modal')}>
                <h4>remove all items from your shopping cart?</h4>
                <div className={cx('btn-container')}>
                    <button
                        type="button"
                        className={cx('btn', 'confirm-btn')}
                        onClick={() => {
                            dispatch(removeAll());
                            dispatch(hideModal());
                        }}
                    >
                        confirm
                    </button>
                    <button
                        type="button"
                        className={cx('btn', 'clear-btn')}
                        onClick={() => {
                            dispatch(hideModal());
                        }}
                    >
                        cancel
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default Modal;
