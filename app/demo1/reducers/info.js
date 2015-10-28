import { combineReducers } from 'redux';
const initialState = [[{}],
                      [],
                      [],
                      []];

//Reducers receive a action then use data passed by action to change state.

//The parameter 'state' is the previous state while the return value of the
//reducer is the new state
export default function info(state = initialState, action) {
    switch (action.type) {
    case "FETCH_INFO":
        state.fetching=action.context.fetching;
        return state;
    case "RECEIVE_INFO":
      state = action.context.data;
        return state;
    default:
        return state;
    }
}
