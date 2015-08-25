AppFilter.filter("serviceTypeInfo",function(){
    return function(name){
        var obj = JSON.parse(name);
        if(obj.id == "1"){
            return "订阅号";
        }
        else if(obj.id == '0'){
            return "订阅号";
        }else{
            return "服务号";
        }
    }
});





AppFilter.filter("trustAsRes",function($sce){
    return function(res){
        return  $sce.trustAsResourceUrl(res)
    }
});


