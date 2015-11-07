function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

function getFormDataWithFile($form,file_id) {
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
  return oData;
}


var url;
var method;
var id;

function loadDataFromRemote(){
  $.ajax({
    url: '/api/templates',
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
    url: '/api/templates',
    type: "get",
    data: data,
    success: function(data){
      $('#dg').datagrid('loadData',data);
    }
  });

}

function newTemplate(){
    $('#dlg').dialog('open').dialog('center').dialog('setTitle','New Template');
    $('#fm').form('clear');
  url = '/api/templates';
  method="POST";
    id = 0;
}

function editTemplate(){
  console.log("editTemplate");
  var row = $('#dg').datagrid('getSelected');
  if (row){
    $('#dlg').dialog('open').dialog('center').dialog('setTitle','Edit Template');
    $('#fm').form('load',row);
    url = '/update_template/'+row.id;
  }else{
    $.messager.alert('Info','Please select a template !');
  }
  url = '/api/templates';
  method="PUT";
  id=row.id;
}

function saveTemplate() {
  console.log("save Template");
  var $form = $("#fm");
  var oData = getFormDataWithFile($form,"template_folder");
  console.log(oData);
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

function destroyTemplate(){
  var row = $('#dg').datagrid('getSelected');
  if (row){
    $.messager.confirm('Confirm','Are you sure you want to destroy this template?',function(r){
      if (r){
        $.ajax({
          url: "/api/templates/"+row.id,
                    type: 'DELETE',
                    success: function(){
                      $('#dg').datagrid('reload');
                      loadDataFromRemote();
                    }
                });
            }
        });
    }else{
      $.messager.alert('Info','Please select a template !');
    }

}


$(document).ready(function(){
  $('#dg').datagrid({
    singleSelect: true,
    pagination: true,
    columns:[[
      {field:'name',title:'name'},

      {field:'template_folder',title:'template'},

      ]],
    toolbar: [{
      iconCls: 'icon-add',
      handler: newTemplate
    },'-',{
      iconCls: 'icon-edit',
      handler: editTemplate
    },'-',{
      iconCls: 'icon-remove',
      handler: destroyTemplate
    }]
  });
  loadDataFromRemote();

});
