import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';
import {baseUrl} from '../shared/baseUrl';
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
    // setTimeout(()=> {
    //     dispatch(addDishes(DISHES));
    // }, 2000);
    // now communicating with the server
    return fetch(baseUrl+"dishes")
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
}
export const fetchComments = ()=> (dispatch) => {
    return fetch(baseUrl+"comments")
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
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
export const commentsFailed = (errmess) =>({
    type: ActionTypes.COMMENTS_FAILED,
    payload : errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

// export const fetchLeaders = () => (dispatch) => {
//     dispatch(leadersLoading(true));
//     return fetch(baseUrl+"leaders")
//         .then(response => response.json())
//         .then(leaders => dispatch(addDishes(leaders)));
// }

// export const leadersLoading= () => ({
//     type: ActionTypes.LEADERS_LOADING
// });
// // function that returns an action object
// export const leadersFailed = (errmess) =>({
//     type: ActionTypes.LEADERS_FAILED,
//     payload : errmess
// });

// export const addLeaders = (leaders) => ({
//     type: ActionTypes.ADD_LEADERS,
//     payload: leaders
// });

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    return fetch(baseUrl+"promos")
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading= () => ({
    type: ActionTypes.PROMOS_LOADING
});
// function that returns an action object
export const promosFailed = (errmess) =>({
    type: ActionTypes.PROMOS_FAILED,
    payload : errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});