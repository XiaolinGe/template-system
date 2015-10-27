import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {applyMiddleware } from 'redux';

export default function configureStore(initialState) {
    const loggerMiddleware = createLogger();

    const createStoreWithMiddleware = applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )(createStore);

    const store = createStoreWithMiddleware(rootReducer,initialState);
    return store;
}
