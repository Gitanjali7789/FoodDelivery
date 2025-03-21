import axios from 'axios';
import {
    MENU_LIST_REQUEST,
    MENU_LIST_SUCCESS,
    MENU_LIST_FAIL,
} from '../constants/menuConstants';

export const listMenu = (restaurantId) => async (dispatch) => {
    try {
        dispatch({ type: MENU_LIST_REQUEST });
        const { data } = await axios.get(`/api/restaurants/${restaurantId}/menu`);
        dispatch({ type: MENU_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: MENU_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};