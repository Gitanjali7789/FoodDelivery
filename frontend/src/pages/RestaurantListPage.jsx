import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRestaurants } from '../redux/actions/restaurantActions';

const RestaurantListPage = () => {
    const dispatch = useDispatch();

    const restaurantList = useSelector((state) => state.restaurantList);
    const { loading, error, restaurants } = restaurantList;

    useEffect(() => {
        dispatch(listRestaurants());
    }, [dispatch]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl mb-4">Restaurants</h1>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div className="text-red-500">{error}</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {restaurants.map((restaurant) => (
                        <div key={restaurant._id} className="border p-4">
                            <h2 className="text-lg">{restaurant.name}</h2>
                            <p>{restaurant.address}</p>
                            <p>{restaurant.cuisine}</p>
                            <a href={`/menu/${restaurant._id}`} className="text-blue-500">View Menu</a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RestaurantListPage;