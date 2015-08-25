'use strict';

/**
 * 模块配置
 * @sherlock221b
 */




var App = angular.module('App', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'angular-loading-bar',
    "toastr",
    'ngCookies',
    'app.dir',
    'app.filter'
]);







/**
 * 指令模块
 */
var AppDir = angular.module('app.dir',[]);


/**
 * 过滤器模块
 */
var AppFilter = angular.module('app.filter',[]);
