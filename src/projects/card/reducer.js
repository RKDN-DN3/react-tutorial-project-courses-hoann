const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true,
            };
        case 'DISPLAY_ITEMS':
            return {
                ...state,
                loading: false,
                cart: action.payload,
            };
        case 'GET_TOTALS':
            let { total, amount } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, amount } = cartItem;
                    const itemTotal = price * amount;

                    cartTotal.total += itemTotal;
                    cartTotal.amount += amount;
                    return cartTotal;
                },
                {
                    total: 0,
                    amount: 0,
                },
            );
            total = parseFloat(total.toFixed(2));
            return { ...state, total, amount };
        case 'REMOVE':
            return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
        case 'CLEAR_ALL':
            return { ...state, cart: [] };
        case 'TOGGLE_AMOUNT':
            let tempCart = state.cart
                .map((cartItem) => {
                    if (cartItem.id === action.payload.id) {
                        if (action.payload.type === 'inc') {
                            return { ...cartItem, amount: cartItem.amount + 1 };
                        }
                        if (action.payload.type === 'dec') {
                            return { ...cartItem, amount: cartItem.amount - 1 };
                        }
                    }
                    return cartItem;
                })
                .filter((cartItem) => cartItem.amount !== 0);
            return { ...state, cart: tempCart };

        default:
            break;
    }
};

export default reducer;
