import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrders } from '../redux/actions/orderActions';

const OrderPage = () => {
    const dispatch = useDispatch();

    const orderList = useSelector((state) => state.orderList);
    const { loading, error, orders } = orderList;

    useEffect(() => {
        dispatch(listOrders());
    }, [dispatch]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl mb-4">Orders</h1>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div className="text-red-500">{error}</div>
            ) : (
                <div>
                    {orders.map((order) => (
                        <div key={order._id} className="border p-4 mb-4">
                            <h2 className="text-lg">Order #{order._id}</h2>
                            <p>Status: {order.status}</p>
                            <p>Total: ${order.total}</p>
                            <div>
                                {order.items.map((item) => (
                                    <div key={item.menu._id}>
                                        <p>{item.menu.name} x {item.quantity}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrderPage;