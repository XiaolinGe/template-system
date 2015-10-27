function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}
var url;
var method;
var id;

function loadDataFromRemote(){
  $.ajax({
    url: '/api/logs',
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
    url: '/api/logs',
    type: "get",
    data: data,
    success: function(data){
      $('#dg').datagrid('loadData',data);
    }
  });

}

function newLog(){
    $('#dlg').dialog('open').dialog('center').dialog('setTitle','New Log');
    $('#fm').form('clear');
  url = '/api/logs';
  method="POST";
    id = 0;
}

function editLog(){
  console.log("editLog");
  var row = $('#dg').datagrid('getSelected');
  if (row){
    $('#dlg').dialog('open').dialog('center').dialog('setTitle','Edit Log');
    $('#fm').form('load',row);
    url = '/update_log/'+row.id;
  }else{
    $.messager.alert('Info','Please select a log !');
  }
  url = '/api/logs';
  method="PUT";
  id=row.id;
}

function saveLog(){
  console.log("save Log");
  var $form = $("#fm");
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
}
function destroyLog(){
  var row = $('#dg').datagrid('getSelected');
  if (row){
    $.messager.confirm('Confirm','Are you sure you want to destroy this log?',function(r){
      if (r){
        $.ajax({
          url: "/api/logs/"+row.id,
                    type: 'DELETE',
                    success: function(){
                      $('#dg').datagrid('reload');
                      loadDataFromRemote();
                    }
                });
            }
        });
    }else{
      $.messager.alert('Info','Please select a log !');
    }


}


$(document).ready(function(){
  $('#dg').datagrid({
    singleSelect: true,
    pagination: true,
    columns:[[
      {field:'operator',title:'operator'},

      {field:'action',title:'action'},

      ]],
    toolbar: [{
      iconCls: 'icon-add',
      handler: newLog
    },'-',{
      iconCls: 'icon-edit',
      handler: editLog
    },'-',{
      iconCls: 'icon-remove',
      handler: destroyLog
    }]
  });
  loadDataFromRemote();

});
