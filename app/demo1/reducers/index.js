import { combineReducers } from 'redux';
import home from './home';
import info from './info';
const rootReducer = combineReducers({
    home,
    info
});

export default rootReducer;
