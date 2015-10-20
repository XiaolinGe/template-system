function getFormData($form) {
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
    url: '/api/customers',
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
    url: '/api/customers',
    type: "get",
    data: data,
    success: function(data){
      $('#dg').datagrid('loadData',data);
    }
  });

}

function newCustomer() {
    $('#dlg').dialog('open').dialog('center').dialog('setTitle','New Customer');
    $('#fm').form('clear');
    url = '/api/customers';
    method="POST";
}

function editCustomer() {
    console.log("editCustomer");
    var row = $('#dg').datagrid('getSelected');
    if (row){
        $('#dlg').dialog('open').dialog('center').dialog('setTitle','Edit Customer');
        $('#fm').form('load',row);
        url = '/update_customer/'+row.id;
    }else{
        $.messager.alert('Info','Please select a customer !');
    }

    url = '/api/customers/';
  method="PUT";
  id=row.id;
}

function saveCustomer() {
  console.log("save Customer");
  var $form = $("#fm");
    if($form.form('validate')){
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
function destroyCustomer() {
  var row = $('#dg').datagrid('getSelected');
  if (row){
    $.messager.confirm('Confirm','Are you sure you want to destroy this customer?',function(r) {
      if (r){
        $.ajax({
          url: "/api/customers/"+row.id,
          type: 'DELETE',
          success: function(){
            $('#dg').datagrid('reload');
            loadDataFromRemote();
                    }
                });
            }
        });
    }else{
        $.messager.alert('Info','Please select a customer !');
    }


}


$(document).ready(function() {
    $('#dg').datagrid({
        singleSelect: true,
        pagination: true,
        columns:[[
            {field:'name',title:'Name',width:100},
          {field:'domain',title:'domain',width:100},
          {field:'ip',title:'ip',width:100},

        ]],
        toolbar: [{
            iconCls: 'icon-add',
            handler: newCustomer
        },'-',{
            iconCls: 'icon-edit',
            handler: editCustomer
        },'-',{
            iconCls: 'icon-remove',
            handler: destroyCustomer
        }]
    });
  loadDataFromRemote();
});
