export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
    state.itemsPrice = addDecimals(
        state.cartItems.reduce((x, item) => x + item.qty * item.price, 0)
    );

    state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
    state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));
    state.totalPrice = addDecimals(
        Number(state.itemsPrice) +
            Number(state.shippingPrice) +
            Number(state.taxPrice)
    );
};
