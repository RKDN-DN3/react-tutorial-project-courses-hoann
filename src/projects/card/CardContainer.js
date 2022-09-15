import classnames from 'classnames/bind';
import Loading from 'react-loading';

import CartItem from './CartItem';
import styles from './card.module.scss';
import { useGlobalContext } from './context';

const cx = classnames.bind(styles);

function CardContainer() {
    const { loading, cart, total } = useGlobalContext();

    if (loading) {
        return <Loading type="spinningBubbles" color="#2680c0" styles={{ alignItem: 'center' }} />;
    }

    return (
        <div className={cx('wrapper')}>
            <header>
                <h2>Your Bag</h2>
            </header>
            <div>
                {cart.map((item) => (
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
                <button className={cx('btn', 'clear-btn')}>clear cart</button>
            </footer>
        </div>
    );
}

export default CardContainer;
