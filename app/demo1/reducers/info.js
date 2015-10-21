import { combineReducers } from 'redux';
const initialState = {
    "home":{},
    "gallery":{},
    "phone":{},
    "map":{}
};

//Reducers receive a action then use data passed by action to change state.

//The parameter 'state' is the previous state while the return value of the
//reducer is the new state
export default function info(state = initialState, action) {
    switch (action.type) {
    case "FETCH_INFO":
        console.log("start to fetch data from remote site");
        state.fetching=action.context.fetching;
        return state;
    case "RECEIVE_INFO":
        return state;
    default:
        return state;
    }
}
