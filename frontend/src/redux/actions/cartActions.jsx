import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (menuItem) => (dispatch, getState) => {
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            menu: menuItem,
            quantity: 1,
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (menuId) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: menuId,
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};