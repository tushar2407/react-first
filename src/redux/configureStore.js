import { createStore } from 'redux';
// when reducer was required, i.e. when dishes.js, comments.js, promotions.js, leaders.js weren't there
import { Reducer, initalState } from './reducer';
// once dishes.js, comments.js, leaders.js, promotions.js are made
import { Dishes } from './dishes';
import {Comments} from './comments';
import {Leaders} from './leaders';
import {Promotions} from './promotions';
import { combineReducers } from 'redux'; // for combining the 4 reducers
export const ConfigureStore = () => {
    const store= createStore(
        // Reducer,
        // initalState
        combineReducers({
            dishes:Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );
    return store;
    // now go to app.js file
}
