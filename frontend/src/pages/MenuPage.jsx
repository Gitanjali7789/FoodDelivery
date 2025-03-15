import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMenu } from '../redux/actions/menuActions';
import { addToCart } from '../redux/actions/cartActions';

const MenuPage = ({ match }) => {
    const dispatch = useDispatch();
    const restaurantId = match.params.restaurantId;

    const menuList = useSelector((state) => state.menuList);
    const { loading, error, menuItems } = menuList;

    useEffect(() => {
        dispatch(listMenu(restaurantId));
    }, [dispatch, restaurantId]);

    const addToCartHandler = (menuItem) => {
        dispatch(addToCart(menuItem));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl mb-4">Menu</h1>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div className="text-red-500">{error}</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {menuItems.map((menuItem) => (
                        <div key={menuItem._id} className="border p-4">
                            <h2 className="text-lg">{menuItem.name}</h2>
                            <p>{menuItem.description}</p>
                            <p>${menuItem.price}</p>
                            <button
                                onClick={() => addToCartHandler(menuItem)}
                                className="text-white bg-blue-500 p-2"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuPage;