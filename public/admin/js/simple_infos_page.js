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
