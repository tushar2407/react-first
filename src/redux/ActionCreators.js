import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';
export const addComment = ( dishId, rating, author, comment ) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author:author,
        comment:comment
    }
});

/**
 * Below are all action creator functions
 */
// when 2 arrow funcitons are used then the after the second arrow
// it is called an inner function
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    setTimeout(()=> {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading= () => ({
    type: ActionTypes.DISHES_LOADING
});
// function that returns an action object
export const dishesFailed = (errmess) =>({
    type: ActionTypes.DISHES_FAILED,
    payload : errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});