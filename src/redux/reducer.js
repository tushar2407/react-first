import {DISHES} from '../shared/dishes';    
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';

export const initialState={
        dishes:DISHES,
        comments:COMMENTS,
        leaders:LEADERS,
        promotions: PROMOTIONS
};
// can change the entire state in reducer function
// can only make an immutable change in this and return the updated state
export const Reducer=(state = initialState, action)=>{
    return state;
};
// now make a configureState.js file 