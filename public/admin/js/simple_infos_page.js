function getFormData($form) {
    var unindexed_array = $form.serializeArray();
  var indexed_array = {};
  console.log(unindexed_array);


    $.map(unindexed_array, function(n, i) {
        indexed_array[n['name']] = n['value'];
    });
  console.log(indexed_array);
    return indexed_array;
}

function getFormDataWithFile($form,file_id_1,file_id_2,file_id_3,file_id_4,file_id_5,file_id_6,file_id_7,file_id_8,file_id_9,file_id_10){
  var unindexed_array = $form.serializeArray();
  var oData = new FormData();

  var fileInput = document.getElementById(file_id_1);
  var file_1 = fileInput.files[0];

  var fileInput = document.getElementById(file_id_2);
  var file_2= fileInput.files[0];

  var fileInput = document.getElementById(file_id_3);
  var file_3 = fileInput.files[0];

  var fileInput = document.getElementById(file_id_4);
  var file_4 = fileInput.files[0];

  var fileInput = document.getElementById(file_id_5);
  var file_5 = fileInput.files[0];

  var fileInput = document.getElementById(file_id_6);
  var file_6 = fileInput.files[0];

  var fileInput = document.getElementById(file_id_7);
  var file_7 = fileInput.files[0];

  var fileInput = document.getElementById(file_id_8);
  var file_8 = fileInput.files[0];

  var fileInput = document.getElementById(file_id_9);
  var file_9 = fileInput.files[0];

  var fileInput = document.getElementById(file_id_10);
  var file_10 = fileInput.files[0];

  oData.append(file_id_1, file_1);
  oData.append(file_id_2, file_2);
  oData.append(file_id_3, file_3);
  oData.append(file_id_4, file_4);
  oData.append(file_id_5, file_5);
  oData.append(file_id_6, file_6);
  oData.append(file_id_7, file_7);
  oData.append(file_id_8, file_8);
  oData.append(file_id_9, file_9);
  oData.append(file_id_10, file_10);
  $.map(unindexed_array, function(n, i){
    oData.append([n['name']],n['value']);
  });
  return oData;

}



var url;
var method;
var id;

function loadDataFromRemote(){
  $.ajax({
    url: '/api/simple_infos',
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
    url: '/api/simple_infos',
    type: "get",
    data: data,
    success: function(data){
      $('#dg').datagrid('loadData',data);
    }
  });

}

function newSimple_info(){
    $('#dlg').dialog('open').dialog('center').dialog('setTitle','New Simple_info');
    $('#fm').form('clear');
  url = '/api/simple_infos';
  method="POST";
  id = 0;
}

function editSimple_info(){
  console.log("editSimple_info");
  var row = $('#dg').datagrid('getSelected');
  if (row){
    delete row.logo;
    delete row.about_img;
    delete row.about_icon;
    delete row.about_hoveredIcon;
    delete row.time_img;
    delete row.time_icon;
    delete row.time_hoveredIcon;
    delete row.contact_img;
    delete row.contact_icon;
    delete row.contact_hoveredIcon;
    $('#dlg').dialog('open').dialog('center').dialog('setTitle','Edit Simple_info');
    $('#fm').form('load',row);
    url = '/update_simple_info/'+row.id;
  }else{
    $.messager.alert('Info','Please select a simple_info !');
  }
  url = '/api/simple_infos';
  method="PUT";
  id=row.id;
}

function saveSimple_info(){
  console.log("save Simple_info");
  var $form = $("#fm");
  var oData = getFormDataWithFile($form,"logo","about_img","about_icon","about_hoveredIcon","time_img","time_icon","time_hoveredIcon","contact_img","contact_icon","contact_hoveredIcon");

  /*
  if($form.form('validate')) {
    var data = getFormData($form);
    if(id>0){
      url+="/"+id;
    }
    $.ajax({
      url: url,
      type: method,
      data: data,
      success: function(){
        $('#dlg').dialog('close');        // close the dialog
        loadDataFromRemote();
      }
    });
  }

  */

  if($form.form('validate')) {
    var oReq = new XMLHttpRequest();
    oReq.open(method, url, true);
    oReq.onload = function(oEvent) {
      if (oReq.status == 200) {
        $('#dlg').dialog('close');        // close the dialog
        loadDataFromRemote();
      } else {
        console.log("upload failed");
      }
    };
    oReq.send(oData);
  }
}
function destroySimple_info(){
  var row = $('#dg').datagrid('getSelected');
  if (row){
    $.messager.confirm('Confirm','Are you sure you want to destroy this simple_info?',function(r){
      if (r){
        $.ajax({
          url: "/api/simple_infos/"+row.id,
                    type: 'DELETE',
                    success: function(){
                      $('#dg').datagrid('reload');
                      loadDataFromRemote();
                    }
                });
            }
        });
    }else{
      $.messager.alert('Info','Please select a simple_info !');
    }


}


$(document).ready(function(){
  $('#dg').datagrid({
    singleSelect: true,
    pagination: true,
    columns:[[

      {field:'address',title:'address'},

      {field:'phone_en',title:'phone_en'},

      {field:'phone_cn',title:'phone_cn'},

      {field:'email',title:'email'},



      ]],
    toolbar: [{
      iconCls: 'icon-add',
      handler: newSimple_info
    },'-',{
      iconCls: 'icon-edit',
      handler: editSimple_info
    },'-',{
      iconCls: 'icon-remove',
      handler: destroySimple_info
    }]
  });
  loadDataFromRemote();

});
