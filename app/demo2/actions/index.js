import $ from 'jquery';



function receive_info(data) {
    console.log("成功返回数据");

  return {
    type: "RECEIVE_INFO",
    context:{
      fetching: false,
      data: data
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
        $.get("/demo2/json/info.json",function(data){
            dispatch(receive_info(data));
        });
        dispatch(fetch_info(id));
    };

}
