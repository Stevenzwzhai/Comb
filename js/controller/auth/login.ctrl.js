/**
 * sherlock221b
 * 8.15
 */

App.controller("LoginCtrl",function($rootScope,$scope,Util,ipCookie,$q,$state,SERVER,AuthSev){


    $scope.fm = {
        "userName"  : "",
        "passWord"  : "",
        "isAuto" : false
    }


    $scope.isSubmit =  false;


    var baseUrl;

    //登录
    $scope.login = function(){

        $scope.isSubmit =  true;


        AuthSev
            .login($scope.fm.userName,$scope.fm.passWord)

            //登陆
            .then(function(res){

                console.log('res=',res);

                if(res.rtnCode == "0000000"){
                    var url,access_token;
                    if(res.bizData.url){
                        baseUrl =  res.bizData.url;
                        access_token = Util.getParamByName(baseUrl,"iauth-embed-token");
                    }
                    else {
                        access_token = res.bizData.value;
                    }

                    access_token ? "" : $rootScope.toastError("token为空!");

                    //写入本地
                    ipCookie('iauth-embed-token',access_token, { expires: 20000 , path : "/"});

                    //远程写入cookie
                    Util.writeCookie({url:SERVER.url.cookieDomain,name : "iauth-access-token", value : access_token});



                    //存储本地用户信息
                    if($scope.fm.isAuto){
                            Util.setLgObj("user",$scope.fm);

                      }
                    else{
                        Util.removeLg("user");
                    }





                }
                else{
                    return $q.reject(res.msg);
                }

                return AuthSev.getMenuList();
            })

            //右侧菜单列表
            .then(function(menuList){

                //缓存本地
                Util.setLgObj("menuList",menuList);
                $rootScope.menuList = menuList;
                $scope.isSubmit =  false;

                //配置前往位置
                $state.go("app.fun.general");


            },function(msg){
                $rootScope.toastError(msg);
                $scope.isSubmit =  false;

            });



    }
       var user;
       if( user = Util.getLgObj("user")){
        $scope.fm = user;
        }


});

