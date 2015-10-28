import $ from 'jquery';


function receive_info(data) {
  return {
    type: "RECEIVE_INFO",
    context:{
      fetching: false,
      data: data
    }
  };
}

function fetch_info(id) {
  return {
    type: "FETCH_INFO",
    context: {
      fetching: true
    }
  };
}


//high order function
export function getInfo(id) {
    return (dispatch, state) => {
      $.get("/website/info",function(data){

          dispatch(receive_info(data));
        });
        dispatch(fetch_info(id));
    };

}


//let xx =function (dispatch, state) {
//  $.get("/api/users",function(data){
//    dispatch(receiveInfo(1,data));
//  });
//  dispatch(test(1));
//};



//function add(base_value){

//  return function(a ,b){
//    return a+b+base_value;
//  };

//}

//add(5)(1,2);


//function f5(a,b){
//  return a+b+5;
//}
