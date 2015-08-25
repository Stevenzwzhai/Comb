/**
 * 首页业务
 */

App.controller("IndexCtrl",function($rootScope,$scope,Util,SERVER,VERSION,IndexSev){

    IndexSev.loadData().then(function(res){
        $rootScope.toastSuccess(res.bizData.msg);
    },function(err){

    });


});