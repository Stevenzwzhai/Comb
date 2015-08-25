'use strict';


/**
 * 配置路由
 * @sherlock221b
 */
App.config(
      function ($stateProvider, $urlRouterProvider,VERSION) {

          $stateProvider
              .state('app', {
                  url: '/app',
                  abstract : true,
                  templateUrl: 'tpl/app.html?v='+VERSION.vs
              })

              //首页
              .state('app.index', {
                  url: '/index',
                  templateUrl: 'tpl/index/index.html?v='+VERSION.vs,
                  controller:"IndexCtrl"
               })

              //详情页面
              .state('app.detail', {
                  url: '/detail',
                  templateUrl: 'tpl/detail/detail.html?v='+VERSION.vs,
                  controller:"DetailCtrl"
              })


          //默认跳转路由
          $urlRouterProvider.otherwise('/app/index');

      }
  );



