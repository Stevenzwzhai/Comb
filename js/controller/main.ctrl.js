/**
 * @desc 全局ctrl
 * @auth sherlock221b
 */


App.controller("MainCtrl",function($rootScope,$scope,$window,$modal,SERVER,$location,$state,Util,toastrConfig,toastr){


    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };



    var init = function(){
        $rootScope.menuList = Util.getLgObj("menuList") || [];

        //导航条单例
        $scope.closeNavOther = true;


    }


    //错误判断
    $rootScope.$watch("error",function(newData){
        //服务器错误
        if(newData && newData == 401){
            $rootScope.toastError("请重新登录");
        }
    })


    //提示框
    toastrConfig.positionClass = "toast-bottom-center";
    toastrConfig.maxOpened = 1;
    $rootScope.toastSuccess = function(content,timeOut){
        toastr.success(content,{
            timeOut : timeOut || 2500,
            positionClass: 'toast-bottom-center'
        });
    }



    $rootScope.toastError = function(content,timeOut){
        toastr.error(content,{
            timeOut : timeOut || 2500,
            positionClass: 'toast-bottom-center'
        });
    }


    $rootScope.toastInfo = function(content,timeOut){
        toastr.info(content,{
            timeOut : timeOut || 2500,
            positionClass: 'toast-bottom-center'
        });
    }


    $rootScope.goState = function(name){
        if($rootScope.settingLayer){
            $rootScope.settingLayer = false;
        }
        $state.go(name);
    }


    //模态弹窗
    $rootScope.dialog = function(templateUrl,controllerName,resolve){
        var option = {};
        if(controllerName){
            option = {
                templateUrl: templateUrl,
                controller  : controllerName,
                resolve : resolve || {},
                backdrop : 'static'
            };
        }
        else{
            option = {
                templateUrl: templateUrl
            };
        }
        var modalInstance = $modal.open(option);
        return modalInstance;
    }


    //路由监听器
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
            console.log("change...");
            //滚动顶部
            $window.scrollTo(0,0);


            console.log(toState.name);

            if(toState.name  != "app.auth.login"){
                //检测权限
                var menuList = Util.getLgObj("menuList");
                if(!menuList){
                    //阻止路由继续完成
                    event.preventDefault();
                    $rootScope.toastError("您没有权限,请重新登录!",1500);
                    $state.go("app.auth.login");
                }
            }



        })



    //登出
    $rootScope.loginOut = function(){
            $state.go("app.auth.login");
    }




    //初始化
    init();



});