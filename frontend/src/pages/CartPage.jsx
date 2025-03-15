import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';
import { createOrder } from '../redux/actions/orderActions';

const CartPage = ({ history }) => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const checkoutHandler = () => {
        if (userInfo) {
            dispatch(createOrder(cartItems));
            history.push('/order');
        } else {
            history.push('/login');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl mb-4">Cart</h1>
            {cartItems.length === 0 ? (
                <div>Your cart is empty</div>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.menu._id} className="border p-4 mb-4">
                            <h2 className="text-lg">{item.menu.name}</h2>
                            <p>${item.menu.price}</p>
                            <button
                                onClick={() => dispatch(removeFromCart(item.menu._id))}
                                className="text-white bg-red-500 p-2"
                            >
                                Remove from Cart
                            </button>
                        </div>
                    ))}
                    <button onClick={checkoutHandler} className="text-white bg-blue-500 p-2">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartPage;