import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Correct import for redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { restaurantListReducer } from './reducers/restaurantReducers';
import { menuListReducer } from './reducers/menuReducers';
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer, orderListReducer } from './reducers/orderReducers';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    restaurantList: restaurantListReducer,
    menuList: menuListReducer,
    cart: cartReducer,
    orderCreate: orderCreateReducer,
    orderList: orderListReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    cart: { cartItems: cartItemsFromStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;