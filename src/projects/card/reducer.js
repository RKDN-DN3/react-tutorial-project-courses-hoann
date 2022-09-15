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

        default:
            break;
    }
};

export default reducer;
