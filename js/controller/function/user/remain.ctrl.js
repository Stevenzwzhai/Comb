App.controller("RemainCtrl",function($rootScope,$scope,Util,SERVER,VERSION,Nav,RemainSev,ToolbarShareSev,ChartHelpSev){

    $rootScope.navActive = Nav.url;

    $scope.params="";
    $scope.grainList = [
        {
            name : "日",
            value : "day"
        },
        {
            name : "周",
            value : "week"
        }
    ];

    $scope.radioList = [
        {
            name : "新增用户",
            value : "new"
        },
        {
            name : "活跃用户",
            value : "active"
        }


    ];

    $scope.rangeScope = {
        first : "",
        last  : ""
    }





    var  getRemainData = function(fm){

        var data={
            "range": fm.day,
            "source":fm.from,
            "dayOrWeek":fm.grain ,
            "newOrActive":fm.userType
        };

        RemainSev.getRemain(data).then(function(res){
            if(res.rtnCode=="0000000"){
                if(Util.dataLength(res.bizData)>2){
                    $scope.params = res.bizData;


                    if(res.bizData){
                        $scope.rangeScope.first =  res.bizData[0].date;
                        $scope.rangeScope.last =     res.bizData[ res.bizData.length -1].date;
                    }
                }
            }
            else{
                $rootScope.toastError(res.msg);
            }
        });
    };


    //初始化
    ToolbarShareSev.init($scope,getRemainData);

    //初始化
    getRemainData($scope.fm);
});
App.filter("userType",function(){

    return function(result){
        if(result=="new"){
            return "新增用户";
        }else if(result == "active"){
            return "活跃用户";
        }
    };
});
App.filter("grain",function(){
    return function(result){

        if(result=="day"){
            return "天";
        }else if(result=="week"){
            return "周";
        }
    }
})