App
    .factory("BasicSev",function($http,$q,Util,SERVER){

        return {

            getPV : function(data){
                return  Util.getWithCredentials(SERVER.url.honey+"/dap/fc/puvs",data);
            },

            getUV : function(data){
                return  Util.getWithCredentials(SERVER.url.honey+"/dap/fc/puvs",data);
            }

        }

    });