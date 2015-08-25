/**
 * App 配置
 */

//启动项
App.run(function($rootScope,VERSION,SERVER){
    $rootScope.VERSION = VERSION;

    //当前环境
    SERVER.url  = SERVER.testUrl;
});




//时间戳 更新版本的时候需要替换
App.constant("VERSION",{
    vs : "1001"
});


//数据服务地址
App.constant("SERVER", {
    url : {},
    //测试
    testUrl : {
        mp  : "./data",
        file : "http://xxx.xxx.xxx:8088/file"
    },
    //正式
    formalUrl : {
        mp  : "http://xxx.xxx.xxx:10000/mp",
        file : "http://xxx.xxx.xxx:10000/file"
    }
});



//配置http 拦截器
App.config(function($httpProvider){
    $httpProvider.interceptors.push("AjaxInterceptors");
});

//配置loading 加载
App.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
}])





/** 组件项目 **/