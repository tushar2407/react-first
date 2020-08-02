// import { DISHES } from '../shared/dishes';
// no longer needed when using redux thunk 
// as ActionCreators.js will take the responsibilty

import * as ActionTypes from './ActionTypes';

export const Dishes= (state = {
        isLoading: true,
        errMess: null,
        dishes: []
    },action) =>{
    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading:false, errMess:null, dishes:action.payload}
        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading :true, errMess:null, dishes:[]};
        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading:false, errMess:action.payload, dishes:[]};
        default:
            return state;
    }
}

/**
 * ... is a spread function
 * So when we say {...state, blah blah}
    This means that a new object of state is made,
    Some changes according to blah blah is done
    and then that object is returned
    => simply and immutable object is made of the variable following
    the "...", that variable itslef is not mutated 
 */