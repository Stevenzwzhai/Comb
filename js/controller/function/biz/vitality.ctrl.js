App.controller("VitalityCtrl",function($rootScope,$scope,Util,SERVER,VERSION,VitalitySev,ToolbarShareSev,Nav,ChartHelpSev){
    $rootScope.navActive = Nav.url;



    $scope.grainList = [
        {
            name : "日",
            value : "day"
        },
        {
            name : "周",
            value : "week"
        },
        {
            name : "月",
            value : "month"
        }
    ];

    $scope.radioList = [
        {
            name : "游学团活跃",
            value : "worldtour"
        },
        {
            name : "微课活跃",
            value : "wk"
        }
    ];


    $scope.vitalityChart = {
        width : "",
        height : "",
        option : "",
        refresh : false,
        chartData : ""
    };


    $scope.rangeScope = {
        first : "",
        last  : ""
    }



    $scope.platformHide = true;

    var getVitalityData = function(fm){

        var data={
            "range":fm.day,
            "dayWeekMonth":fm.grain,
            "product":fm.userType,
            "newOrActive":"new"
        };

        VitalitySev.getVitality(data).then(function(res){
            if(res.rtnCode=="0000000"){
                if(Util.dataLength(res.bizData)>2){
                    $scope.vitalityChart.option = ChartHelpSev.lineChart(res.bizData);
                    $scope.vitalityChart.refresh = true;


                    $scope.rangeScope.first =  $scope.vitalityChart.option.custom.first;
                    $scope.rangeScope.last =    $scope.vitalityChart.option.custom.last;
                }



                console.log($scope.option);
            }
            else{
                $rootScope.toastError(res.msg);
            }
        });
    };


    //初始化
    ToolbarShareSev.init($scope,getVitalityData,{
        "from":"all",
        "day":"30",
        "userType":"worldtour",
        "grain" : "day"
    });

    getVitalityData($scope.fm);
});