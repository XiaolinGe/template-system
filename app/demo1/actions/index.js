import $ from 'jquery';

export const RECEIVE_INFO = 'RECEIVE_INFO';
export const FETCH_INFO = 'FETCH_INFO';
export const SELECT_USER = 'SELECT_USER';

function receiveInfo(customer, json) {
  return {
    type: RECEIVE_INFO,
    data: json
  };
}

export function fetchInfo(customer) {
  return dispatch => {
    return fetch("/api/customers/"+customer)
      .then(response => response.json())
      .then(json => dispatch(receiveInfo(customer, json)));
  };
}

export function fetchInfoIfNeeded(customer) {
  return (dispatch, getState) => {
      return dispatch(fetchInfo(customer));
  };
}

export function test(id) {
    return { type: "TEST", text:id };
}



export function deleteTodo(id) {
    return (dispatch, state) => {
        $.get("/api/users",function(data){
            dispatch(receiveInfo(id,data));
        });
        dispatch(test(id));
    };

}


function fetchPosts(reddit) {
  return dispatch => {
    dispatch(requestPosts(reddit));
    return fetch(`http://www.reddit.com/r/${reddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(reddit, json)));
  };
}
