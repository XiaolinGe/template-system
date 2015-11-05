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

function newCustomer(){
    $('#dlg').dialog('open').dialog('center').dialog('setTitle','New Customer');
    $('#fm').form('clear');
  url = '/api/customers';
  method="POST";
    id = 0;
}

function editCustomer() {
  console.log("editCustomer");
    var row = $('#dg').datagrid('getSelected');
  if (row){
    $('#dlg').dialog('open').dialog('center').dialog('setTitle','Edit Customer');
    $('#fm').form('load',row);
    url = '/api/customers/'+row.id;    method="PUT";
  }else{
    $.messager.alert('Info','Please select a customer !');
  }

}


function saveCustomer() {
  console.log("save Customer");
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
function destroyCustomer() {
  var row = $('#dg').datagrid('getSelected');
  if (row){
    $.messager.confirm('Confirm','Are you sure you want to destroy this customer?',function(r){
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

function tabClose()
{
  /*双击关闭TAB选项卡*/
  window.parent.$(".tabs-inner").dblclick(function(){
    var subtitle =  window.parent.$(this).children(".tabs-closable").text();
    window.parent.$('#tabs').tabs('close',subtitle);
  });
    /*为选项卡绑定右键*/
    window.parent.$(".tabs-inner").bind('contextmenu',function(e){
      window.parent.$('#mm').menu('show', {
        left: e.pageX,
        top: e.pageY
      });

      var subtitle =$(this).children(".tabs-closable").text();

      window.parent.$('#mm').data("currtab",subtitle);
      window.parent.$('#tabs').tabs('select',subtitle);
      return false;
    });
}


function createFrame(url)
{
  var s = '<iframe scrolling="auto" frameborder="0"  src="'+url+'" style="width:100%;height:100%;"></iframe>';
  return s;
}

function addTab(subtitle,url,icon) {
  //  var row = $('#dg').datagrid('getSelected');
  //  console.log(row);
    if(!window.parent.$('#tabs').tabs('exists',subtitle)){
        window.parent.$('#tabs').tabs('add',{
            title:subtitle,
            content:createFrame(url),
            closable:true,
            icon:icon
        });
    }else{
        window.parent.$('#tabs').tabs('select',subtitle);
        window.parent.$('#mm-tabupdate').click();
    }
    tabClose();
}


function open_simple_info() {
    var row = $('#dg').datagrid('getSelected');
    if (row){
        addTab("Simple Info",'/admin/simple_infos.html#'+row.id,'icon-nav');
    }else{
        $.messager.alert('Info','Please select a customer !');
    }
}


function open_gallery() {
  var row = $('#dg').datagrid('getSelected');
    if (row){
        addTab("Gallery",'/admin/gallerys.html#'+row.id,'icon-nav');
    }else{
        $.messager.alert('Info','Please select a customer !');
    }   
}

function open_working_our() {
      var row = $('#dg').datagrid('getSelected');
    if (row){
           addTab("Working Hours",'/admin/working_hours.html#'+row.id,'icon-nav');
    }else{
        $.messager.alert('Info','Please select a customer !');
    }  
}



$(document).ready(function() {
  $('#dg').datagrid({
    singleSelect: true,
    pagination: true,
    columns:[[{
        field:'name',
        title:'name'
      }, {
        field:'domain'
        ,title:'domain'
      }, {
        field:'template_id',
        title:'template',
        formatter:function(val,row){
          return row.template == null ? "":row.template.name;
        }}]],
      toolbar: [{
          iconCls: 'icon-add',
          handler: newCustomer
      },'-',{
          iconCls: 'icon-edit',
          handler: editCustomer
      },'-',{
          iconCls: 'icon-remove',
          handler: destroyCustomer
      },'-',{
          iconCls: 'icon-add',
          handler: open_simple_info,
          text: "Simple Info"
      },'-',{
          iconCls: 'icon-add',
          handler: open_gallery,
          text: "Gallery"
      },'-',{
          iconCls: 'icon-add',
          handler: open_working_our,
          text: "Working Hours"
      }]
  });
  loadDataFromRemote();
  $('#template_id').combobox({
    url:'/api/templates',
    valueField:'id',
    textField:'name',
    method:'GET'
  });

});

