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
    url: '/api/users',
    type: "get",
    success: function(data){
      $('#dg').datagrid('loadData',data);
    }
  });

}


function searchData(){
  console.log("search");
  var $form = $("#ff");
  var data = getFormData($form);
  $.ajax({
    url: '/api/users',
    type: "get",
    data: data,
    success: function(data){
      $('#dg').datagrid('loadData',data);
    }
  });

}

function newUser(){
    $('#dlg').dialog('open').dialog('center').dialog('setTitle','New User');
    $('#fm').form('clear');
    url = '/api/users';
    method="POST";
    id = 0;
}

function editUser(){
    console.log("editUser");
    var row = $('#dg').datagrid('getSelected');
    if (row){
        $('#dlg').dialog('open').dialog('center').dialog('setTitle','Edit User');
        $('#fm').form('load',row);
        url = '/api/users';
        method="PUT";
        id=row.id;
    }else{
        $.messager.alert('Info','Please select a user !');
    }

}

function saveUser(){
   console.log("save User");
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
function destroyUser(){
    var row = $('#dg').datagrid('getSelected');
    if (row){
        $.messager.confirm('Confirm','Are you sure you want to destroy this user?',function(r){
            if (r){
                $.ajax({
                    url: "/api/users/"+row.id,
                    type: 'DELETE',
                    success: function(){
                      $('#dg').datagrid('reload');
                      loadDataFromRemote();
                    }
                });
            }
        });
    }else{
        $.messager.alert('Info','Please select a user !');
    }


}


$(document).ready(function(){
  $('#dg').datagrid({
    singleSelect: true,
    pagination: true,
    columns:[[
      {field:'name',title:'Name',width:100},
      {field:'password',title:'Password',width:100},
    ]],
    toolbar: [{
      iconCls: 'icon-add',
      handler: newUser
    },'-',{
      iconCls: 'icon-edit',
      handler: editUser
    },'-',{
      iconCls: 'icon-remove',
      handler: destroyUser
    }]
  });
  loadDataFromRemote();

});
