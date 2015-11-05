'use strict';

String.prototype.subAfter = function(item) {
    return this.substring(this.indexOf(item)+1);
};




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

function getFormDataWithFile($form) { //save调用的方法，即将所填的表单里面的数据取出
    var unindexed_array = $form.serializeArray();
    var oData = new FormData();
    var file_ids =Array.from(arguments).slice(1);//get all file ids
    file_ids.map(function(file_id){
        var fileInput = document.getElementById(file_id);
        var file = fileInput.files[0];
        if(file != undefined){
            oData.append(file_id, file);        
        }
    });
    
    $.map(unindexed_array, function(n, i){
        oData.append([n['name']],n['value']);
    });
    
    let current_url = window.location.href.toString();
    console.log(current_url);
    let cust_id = current_url.subAfter("#");
    console.log(cust_id);       
    oData.append("customer_id",cust_id);//从当前页面的url中获取的cust_id,将其拼入到oData中
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

function newSimple_info() {    
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
        console.log(row);
        $('#dlg').dialog('open').dialog('center').dialog('setTitle','Edit Simple_info');
        $('#fm').form('load',row);
        method="PUT";
        url = '/api/simple_infos/'+row.id;
        id=row.id;
    }else{
        $.messager.alert('Info','Please select a simple_info !');
    }

}

function saveSimple_info(){
    console.log("save Simple_info");
    var $form = $("#fm");
    var oData = getFormDataWithFile($form,"logo","about_img","about_icon",
                                    "about_hoveredIcon","time_img","time_icon",
                                    "time_hoveredIcon","contact_img","contact_icon",
                                    "contact_hoveredIcon");
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


$(document).ready(function() {

    
    $('#dg').datagrid({
        singleSelect: true,
        pagination: true,
        columns:[[

            {field:'address',title:'address'},

            {field:'phone_en',title:'phone_en'},

            {field:'phone_cn',title:'phone_cn'},

            {field:'email',title:'email'},
            {field:'customer_id',
                title:'customer',
                formatter:function(val,row){
                    return row.customer == null ? "":row.customer.name;
                }
            }

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

    /*
    $('#customer_id').combobox( {
        url:'/api/customers',
        valueField:'id',
        textField:'name',
        method:'GET'
    });

    */
});

