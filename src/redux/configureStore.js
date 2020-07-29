import { createStore } from 'redux';
import { Reducer, initalState } from './reducer';

export const ConfigureStore = () => {
    const store= createStore(
        Reducer,
        initalState
    );
    return store;
    // now go to app.js file
}
