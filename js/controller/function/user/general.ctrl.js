
App.controller("GeneralCtrl",function($rootScope,$scope,Util,SERVER,VERSION,GeneralSev,Nav,ToolbarShareSev,ChartHelpSev){

    $rootScope.navActive = Nav.url;

    $scope.generalChart = {
        width : "",
        height : "",
        option : "",
        refresh : false,
        chartData : ""
    };

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
            name : "新增用户",
            value : "newAdd"
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



    //获取图表数据
    var getLineData = function(fm){

       var data={
            "range": fm.day,
            "source":fm.from,
            "dayWeekMonth":fm.grain ,
            "newOrActive":fm.userType
        };

        GeneralSev.getGeneral(data).then(function(res){
            if(res.rtnCode=="0000000"){
                //配置图表
                if(res.bizData){

                    if(Util.dataLength(res.bizData) > 2){

                        $scope.generalChart.option = ChartHelpSev.lineChart(res.bizData);
                        $scope.generalChart.refresh = true;


                        $scope.rangeScope.first =  $scope.generalChart.option.custom.first;
                        $scope.rangeScope.last =    $scope.generalChart.option.custom.last;

                    }

                }


               //console.log($scope.option);
            }
            else{
                $rootScope.toastError(res.msg);
            }
        });
    };

    //初始化
    ToolbarShareSev.init($scope,getLineData);


    //渲染图表
    getLineData($scope.fm);

});



