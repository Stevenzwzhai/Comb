App.controller("CompareCtrl",function($rootScope,$scope,Util,SERVER,Nav,VERSION,CompareSev,ToolbarShareSev,ChartHelpSev){

    $rootScope.navActive = Nav.url;
    $scope.new = {
        width : "",
        height : "",
        option : "",
        refresh : false,
        chartData : ""
    };
    $scope.active = {
        width : "",
        height : "",
        option : "",
        refresh : false,
        chartData : ""
    };
    $scope.compareNewData={
            "select":"day",
            "userType":"new"
    };

    $scope.compareActiveData={
        "select":"day",
        "userType":"active"
    };
    $scope.radioModel="";

    $scope.showTime = true;

    //隐藏最近
    $scope.latelyHide = true;
    $scope.platformHide = true;

    $scope.grainList = [
        {
            name : "日环比",
            value : "day"
        },
        {
            name : "周环比",
            value : "week"
        },
        {
            name : "月环比",
            value : "month"
        }
    ];

    //$scope.rangeScope = {
    //    first : "",
    //    last  : ""
    //}

    //获取数据
    var getCompareData = function(fm){

        var compareNewData = {
            "select": fm.grain,
            "userType": "new"
        }

        var compareActiveData = {
            "select": fm.grain,
            "userType": "active"
        }



        CompareSev.getCompare(compareNewData).then(function(res){

            if(res.rtnCode=="0000000"){

                if(Util.dataLength(res.bizData)>2){
                    console.log("compareNew");
                    $scope.new.option = ChartHelpSev.barChart((res.bizData)[0],"新增用户环比增长");
                    $scope.new.refresh = true;
                    //$scope.rangeScope.first =  $scope.new.option.custom.first+"时";
                    //$scope.rangeScope.last =    $scope.new.option.custom.last+"时";
                }

                console.log("ok");
            }else{

                $rootScope.toastError(res.msg);
            }

        });
        CompareSev.getCompare(compareActiveData).then(function(res){

            if(res.rtnCode=="0000000"){

                if(Util.dataLength(res.bizData)>2){
                    console.log("compareActive");
                    $scope.active.option = ChartHelpSev.barChart((res.bizData)[0],"活跃用户环比增长");
                    $scope.active.refresh = true;
                }



                console.log("ok");
            }else{

                $rootScope.toastError(res.msg);
            }

        })
    };


    //初始化
    ToolbarShareSev.init($scope,getCompareData);

    //首次加载
    getCompareData($scope.fm);
});