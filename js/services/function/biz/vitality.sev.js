App
    .factory("VitalitySev",function($http,$q,Util,SERVER) {

        return{

            getVitality : function(data){


                return  Util.getWithCredentials(SERVER.url.honey+"/dap/fc/huoYueDus",data);
            }
        }

    });