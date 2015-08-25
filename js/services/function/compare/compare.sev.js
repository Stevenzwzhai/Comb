App
    .factory("CompareSev",function($http,$q,Util,SERVER) {

        return{
            getCompare : function(data){


                return  Util.getWithCredentials(SERVER.url.honey+"/dap/fc/huanBis",data);
            }


        }

    });