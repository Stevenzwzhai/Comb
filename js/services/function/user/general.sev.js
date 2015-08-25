App
    .factory("GeneralSev",function($http,$q,Util,SERVER){

        return {

            getGeneral : function(data){
                return  Util.getWithCredentials(SERVER.url.honey+"/dap/fc/gaiKuangData",data);
            }

        }

    });