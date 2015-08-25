'use strict';


/**
 * 配置路由
 * @sherlock221b
 */
App.config(
    function ($stateProvider, $urlRouterProvider, VERSION) {
        $stateProvider



            //根
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'tpl/app.html?v=' + VERSION.vs
            })


            //登录
            .state('app.auth', {
                url: '/auth',
                abstract: true
            })


            .state('app.auth.login', {
                url: '/login',
                views: {
                    "@": {
                        templateUrl: 'tpl/auth/login.html?v=' + VERSION.vs,
                        controller: "LoginCtrl",
                    }
                }
            })

            .state("app.fun", {
                url: '/fun',
                templateUrl: 'tpl/function/fun.html?v=' + VERSION.vs
            })


            //基础分析
            .state('app.fun.basic', {
                url: '/basic',
                templateUrl: 'tpl/function/basic/basic.html?v=' + VERSION.vs,
                controller: "BasicCtrl"

            })


            //puv
            .state('app.fun.puv', {
                url: '/puv',
                templateUrl: 'tpl/function/basic/puv.html?v=' + VERSION.vs,
                controller: "PUVCtrl",
                resolve : {
                    Nav  : function(){
                        return { url : "#/app/fun/puv"}
                    }
                }

            })

            //用户分析
            .state('app.fun.user', {
                url: '/user',
                templateUrl: 'tpl/function/user/user.html?v=' + VERSION.vs,
                controller: "UserCtrl"
            })

            //概况
            .state('app.fun.general', {
                url: '/general',
                templateUrl: 'tpl/function/user/general.html?v=' + VERSION.vs,
                controller: "GeneralCtrl",
                resolve : {
                    Nav  : function(){  return { url : "#/app/fun/general"}  }
                }

            })
            //留存
            .state('app.fun.remain', {
                url: '/remain',
                templateUrl: 'tpl/function/user/remain.html?v=' + VERSION.vs,
                controller: "RemainCtrl",
                resolve : {
                    Nav  : function(){  return { url : "#/app/fun/remain"}  }
                }
            })
            //画像
            .state('app.fun.portrait', {
                url: '/portrait',
                templateUrl: 'tpl/function/user/portrait.html?v=' + VERSION.vs,
                controller: "PortraitCtrl",
                resolve : {
                    Nav  : function(){  return { url : "#/app/fun/portrait"}  }
                }
            })
            //业务分析
            .state('app.fun.biz', {
                url: '/biz',
                templateUrl: 'tpl/function/biz/biz.html?v=' + VERSION.vs,
                controller: "BizCtrl"

            })

            //活跃度
            .state('app.fun.vitality', {
                url: '/vitality',
                templateUrl: 'tpl/function/biz/vitality.html?v=' + VERSION.vs,
                controller: "VitalityCtrl",
                resolve : {
                    Nav  : function(){  return { url : "#/app/fun/vitality"}  }
                }

            })
            //环比分析
            .state('app.fun.compare', {
                url: '/compare',
                templateUrl: 'tpl/function/compare/compare.html?v=' + VERSION.vs,
                controller: "CompareCtrl",
                resolve : {
                    Nav  : function(){  return { url : "#/app/fun/compare"}  }
                }

            })


            //测试组件
            .state('app.test', {
                url: '/test',
                templateUrl: 'tpl/com.html?v=' + VERSION.vs
            })


        //默认跳转路由
        $urlRouterProvider.otherwise('/app/auth/login');

    }
);



