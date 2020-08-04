import { createStore } from 'redux';
// when reducer was required, i.e. when dishes.js, comments.js, promotions.js, leaders.js weren't there
import { Reducer, initalState } from './reducer';
// once dishes.js, comments.js, leaders.js, promotions.js are made
import { Dishes } from './dishes';
import {Comments} from './comments';
import {Leaders} from './leaders';
import {Promotions} from './promotions';
import { combineReducers, applyMiddleware } from 'redux'; // for combining the 4 reducers

// redux think and logger
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// redux-forms revisited
import { createForms } from 'react-redux-form'; // createForms is a reducer
import { InitialFeedback } from './forms';
export const ConfigureStore = () => {
    const store= createStore(
        // Reducer,
        // initalState
        combineReducers({
            dishes:Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback:InitialFeedback
            }) // now adding a new action to reset the form
            // go to MainComponent
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
    // now go to app.js file
}
