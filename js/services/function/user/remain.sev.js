App
    .factory("RemainSev",function($http,$q,Util,SERVER) {

        return{
            getRemain : function(data){


                return  Util.getWithCredentials(SERVER.url.honey+"/dap/fc/liuCuns",data);
            }


        }

    });