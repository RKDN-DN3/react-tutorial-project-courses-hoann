import classnames from 'classnames/bind';
import Loading from 'react-loading';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from './CartItem';
import styles from './card.module.scss';
import { removeAll } from './features/cart/cartSlice';

const cx = classnames.bind(styles);
function CardContainer() {
    const dispatch = useDispatch();
    const { isLoading, cartItems, total } = useSelector((state) => state.cart);

    if (isLoading) {
        return (
            <div className={cx('wrapper')} style={{ display: 'flex', justifyContent: 'center' }}>
                <Loading type="spinningBubbles" color="#2680c0" styles={{ alignItem: 'center' }} />
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className={cx('wrapper')}>
                <header>
                    <h2>Your Bag</h2>
                    <h4 className={cx('empty-cart')}>is currently empty</h4>
                </header>
            </div>
        );
    }
    return (
        <div className={cx('wrapper')}>
            <header>
                <h2>Your Bag</h2>
            </header>
            <div>
                {cartItems.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <footer>
                <hr />
                <div className={cx('cart-total')}>
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button className={cx('btn', 'clear-btn')} onClick={() => dispatch(removeAll())}>
                    clear cart
                </button>
            </footer>
        </div>
    );
}

export default CardContainer;
