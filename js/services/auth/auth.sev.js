/**
 * sherlock221b
 */

App.factory("AuthSev",function(SERVER,$q,$http,Util) {

    return{


        /**
         * 登录
         * @param userName
         * @param passWord
         * @returns {*}
         */
        login : function(userName,passWord){
            var defer= $q.defer();

            //sh1加密
            //passWord = new jsSHA(passWord, "TEXT").getHash("SHA-1", "HEX");
            var data = {
                "Username" : userName,
                "Password" : passWord,
                "From" : window.location.href,
                //"From" : "http://localhost:7160/honeyComb/index.html#/app/fun/general",
                "AppKey" : SERVER.info.AppKey,
                "Product" : SERVER.info.Product
            };

            $http.post(SERVER.url.ucm+"/login/do",data)
                .success(function(result){
                    defer.resolve(result);
                })
                .error(function(err){
                    defer.reject(err);
                });
            return defer.promise;

        },


        /**
         * 查询当前用户菜单列表
         * @returns {*}
         */
        getMenuList  : function(){
            return Util.getWithCredentials(SERVER.url.local+"/ucm/queryUserMenus.json");

        }

    }
});