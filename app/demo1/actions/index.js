import $ from 'jquery';


function receive_info(customer, json) {
  return {
    type: "RECEIVE_INFO",
    context:{
      fetching: false,
      data: json
    }
  };
}

function fetch_info(id) {
  console.log("不改变状态直接渲染静态页面，让ajax请求异步获取数据");
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
        $.get("/api/users",function(data){
            dispatch(receive_info(id,data));
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
