'use strict';

String.prototype.subAfter = function(item){
  return this.substring(this.indexOf(item)+1);
};

function getFormData($form) {
  var unindexed_array = $form.serializeArray();
  var indexed_array = {};
  $.map(unindexed_array, function(n, i) {
    indexed_array[n['name']] = n['value'];
  });

  return indexed_array;
}


function getFormDataWithFile($form,file_id){
    var unindexed_array = $form.serializeArray();
   // console.log(unindexed_array);
    var oData = new FormData();
   // console.log(oData);
    var fileInput = document.getElementById(file_id);
    console.log(fileInput);
    var file = fileInput.files[0];
   // console.log(file);
    oData.append(file_id, file);
    $.map(unindexed_array, function(n, i){
        oData.append([n['name']],n['value']);
    });
   // console.log(oData);
    let current_url = window.location.href.toString();//获取当前页面customer的URL并转为字符串
    console.log(current_url);
    let cust_id = current_url.subAfter("#");//取url字符串中＃之后的部分，即要从前端页面传的参数
    console.log(cust_id);
    oData.append("customer_id",cust_id);//在oData中追加customer_id,即传参到了galery这个页面
    return oData;

}

var url;
var method;
var id;

function loadDataFromRemote(){
  $.ajax({
    url: '/api/gallerys',
    type: "get",
    success: function(data){
      $('#dg').datagrid('loadData',data);
    }
  });

}


function searchData() {
  console.log("search");
  var $form = $("#ff");
  var data = getFormData($form);
  $.ajax({
    url: '/api/gallerys',
    type: "get",
    data: data,
    success: function(data){
      $('#dg').datagrid('loadData',data);
    }
  });

}

function newGallery() {
  $('#dlg').dialog('open').dialog('center').dialog('setTitle','New Gallery');
  $('#fm').form('clear');

  url = '/api/gallerys';
  method="POST";
  id = 0;

}

function editGallery() {
  console.log("editGallery");
    var row = $('#dg').datagrid('getSelected');
    console.log(row);
    if (row) {
      delete row.image;
    $('#dlg').dialog('open').dialog('center').dialog('setTitle','Edit Gallery');
        $('#fm').form('load',row);
      url = '/api/gallerys/'+row.id;
      method="PUT";
      id=row.id;
  }else{
    $.messager.alert('Info','Please select a gallery !');
  }
}


function saveGallery() {
  var $form = $("#fm");
    var oData = getFormDataWithFile($form,"image");
   // console.log(oData);
  if($form.form('validate')) {
      var oReq = new XMLHttpRequest();
      oReq.open(method, url, true);
      console.log(oReq.open(method, url, true));
    oReq.onload = function(oEvent) {
      if (oReq.status == 200) {
        $('#dlg').dialog('close');
        // close the dialog
        loadDataFromRemote();
      } else {
        console.log("upload failed");
      }
    };
      oReq.send(oData);
  }
}
function destroyGallery(){
  var row = $('#dg').datagrid('getSelected');
  if (row){
    $.messager.confirm('Confirm','Are you sure you want to destroy this gallery?',function(r){
      if (r){
        $.ajax({
          url: "/api/gallerys/"+row.id,
                    type: 'DELETE',
                    success: function(){
                      $('#dg').datagrid('reload');
                      loadDataFromRemote();
                    }
                });
            }
        });
    }else{
      $.messager.alert('Info','Please select a gallery !');
    }


}


$(document).ready(function(){
  $('#dg').datagrid({
    singleSelect: true,
    pagination: true,
    columns:[[{
      field:'title',
      title:'title'
    }, {
      field:'customer',
      title:'customer',
      formatter:function(val,row){
        return row.customer == null ? "":row.customer.name;
      }
    }]],
    toolbar: [{
      iconCls: 'icon-add',
      handler: newGallery
    },'-',{
      iconCls: 'icon-edit',
      handler: editGallery
    },'-',{
      iconCls: 'icon-remove',
      handler: destroyGallery
    }]
  });
  loadDataFromRemote();
});
