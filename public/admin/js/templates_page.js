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

function saveTemplate(){
  console.log("save Template");
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

      {field:'template_folder',title:'template_folder'},

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
