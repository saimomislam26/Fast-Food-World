import * as actionTypes from './actionType';
import DISHES from '../Component/data/dishes';

export const addComment = (dishId, author, rating, comment) => {
    return {
        type: actionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            author: author,
            rating: rating,
            comment: comment
        }
    }
}

export const loadDishes = dishes => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes
    }
}

export const dishLoading = () => {
    return {
        type: actionTypes.LOADING_DISHES
    }
}

export const fetchDishes = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(loadDishes(DISHES))
        }, 2000);


        dispatch(dishLoading());

    }
}