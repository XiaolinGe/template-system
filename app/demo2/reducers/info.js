import {combineReducers} from 'redux';

const initialState = {
  "layout":{menus:[]},
  "home":[],
  "gallery":[],
  "phone":{phone_about:{},
           phone_time:{
             workingHours:[]
           },
           phone_contact:{}
           },
  "map":{}
};


export default function info(state = initialState, action) {
  switch (action.type) {
    case "FETCH_INFO":
      console.log("start to fetch data from remote site");
      state.fetching = action.context.fetching;
      return state;
    case "RECEIVE_INFO":
      state = action.context.data;
      return state;
    default:
      return state;
  }

}
