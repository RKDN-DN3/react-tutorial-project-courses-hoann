import classnames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import styles from './card.module.scss';
import { increase, remove, decrease } from './features/cart/cartSlice';

const cx = classnames.bind(styles);

function CartItem({ id, img, title, price, amount }) {
    const dispatch = useDispatch();
    return (
        <article className={cx('cart-item')}>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className={cx('item-price')}>${price}</h4>
                <button className={cx('remove-btn')} onClick={() => dispatch(remove(id))}>
                    remove
                </button>
            </div>
            <div>
                <button className={cx('amount-btn')} onClick={() => dispatch(increase({ id }))}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={'2rem'} viewBox="0 0 20 20">
                        <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                    </svg>
                </button>
                <p className={cx('amount')}> {amount}</p>
                <button className={cx('amount-btn')} onClick={() => dispatch(decrease({ id }))}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={'2rem'} viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </button>
            </div>
        </article>
    );
}

export default CartItem;
