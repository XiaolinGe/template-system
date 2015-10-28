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
    url: '/api/working_hours',
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
    url: '/api/working_hours',
    type: "get",
    data: data,
    success: function(data){
      $('#dg').datagrid('loadData',data);
    }
  });

}

function newWorking_hour(){
    $('#dlg').dialog('open').dialog('center').dialog('setTitle','New Working_hour');
    $('#fm').form('clear');
  url = '/api/working_hours';
  method="POST";
    id = 0;
}

function editWorking_hour(){
  console.log("editWorking_hour");
  var row = $('#dg').datagrid('getSelected');
  if (row){
    $('#dlg').dialog('open').dialog('center').dialog('setTitle','Edit Working_hour');
    $('#fm').form('load',row);
    url = '/update_working_hour/'+row.id;
  }else{
    $.messager.alert('Info','Please select a working_hour !');
  }
  url = '/api/working_hours';
  method="PUT";
  id=row.id;
}

function saveWorking_hour(){
  console.log("save Working_hour");
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
function destroyWorking_hour(){
  var row = $('#dg').datagrid('getSelected');
  if (row){
    $.messager.confirm('Confirm','Are you sure you want to destroy this working_hour?',function(r){
      if (r){
        $.ajax({
          url: "/api/working_hours/"+row.id,
                    type: 'DELETE',
                    success: function(){
                      $('#dg').datagrid('reload');
                      loadDataFromRemote();
                    }
                });
            }
        });
    }else{
      $.messager.alert('Info','Please select a working_hour !');
    }


}


$(document).ready(function(){
  $('#dg').datagrid({
    singleSelect: true,
    pagination: true,
    columns:[[
      {
        field:'days',
        title:'days'
      }, {
        field:'times',
        title:'times'
      }, {
        field:'customer_id',
        title:'customer_id',
        formatter:function(val,row){
        return row.customer == null ? "":row.customer.name;
      }},

      ]],
    toolbar: [{
      iconCls: 'icon-add',
      handler: newWorking_hour
    },'-',{
      iconCls: 'icon-edit',
      handler: editWorking_hour
    },'-',{
      iconCls: 'icon-remove',
      handler: destroyWorking_hour
    }]
  });
  loadDataFromRemote();

  $('#customer_id').combobox({
    url:'/api/customers',
    valueField:'id',
    textField:'name',
    method:'GET'
  });


});
