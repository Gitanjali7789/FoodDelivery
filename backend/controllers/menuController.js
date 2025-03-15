const Menu = require('../models/Menu');

exports.getMenuByRestaurant = async (req, res) => {
    try {
        const menu = await Menu.find({ restaurant: req.params.restaurantId });
        res.json(menu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
