const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    const { restaurant, items, total } = req.body;
    try {
        const order = await Order.create({
            user: req.user.id,
            restaurant,
            items,
            total,
        });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate('restaurant items.menu');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
