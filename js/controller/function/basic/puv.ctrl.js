App.controller("PUVCtrl",function($rootScope,$scope,Util,SERVER,BasicSev,Nav,VERSION,ChartHelpSev,ToolbarShareSev){

    $rootScope.navActive = Nav.url;

    $scope.pv = {
        width : "",
        height : "",
        option : "",
        refresh : false,
        chartData : ""
    };
    $scope.uv = {
        width : "",
        height : "",
        option : "",
        refresh : false,
        chartData : ""
    };

    $scope.generalShow=true;
    $scope.platformHide=true;

    $scope.rangeScope = {
        first : "",
        last  : ""
    }


    var sort = function(data){

        var arrKey = [];
        var arrValue=[];
        var strJson={};

        for(var item in data){

            arrKey.push(item);
            arrValue.push((data)[item]);
        }
        arrKey.sort(function(a,b){return a-b;});
        console.log(arrKey);
        $scope.rangeScope.first =  arrKey[0]+"时";
        $scope.rangeScope.last =    arrKey[arrKey.length-1]+"时";
        for(var i=0;i<arrKey.length;i++){

            strJson[arrKey[i]+"时"] = arrValue[i];
            console.log(strJson[arrKey[i]]);
        }
        return strJson;
    }


    //获取数据
    var getBasicData = function(fm){

        var pvData = {
            "range":fm.day,
            "dataType":"pv"
        };

        var uvData = {
            "range":fm.day,
            "dataType":"uv"
        };
        BasicSev.getPV(pvData).then(function(res){

            if(res.rtnCode=="0000000"){

                if(Util.dataLength(res.bizData)>2){

                    var data = res.bizData;
                    if(fm.day=="today"){
                        data=sort(res.bizData);
                        console.log(data);
                    }
                    $scope.pv.option = ChartHelpSev.lineChart(data,"浏览量(PV)");
                    $scope.pv.refresh = true;

                    if(fm.data!="today"){
                        $scope.rangeScope.first =  $scope.pv.option.custom.first;
                        $scope.rangeScope.last =    $scope.pv.option.custom.last;
                    }


                }


            }else{

                $rootScope.toastError(res.msg);
            }

        });
        BasicSev.getUV(uvData).then(function(res){

            if(res.rtnCode=="0000000"){

                if(Util.dataLength(res.bizData)>2){


                    var data = res.bizData;
                    if(fm.day=="today"){
                        data=sort(res.bizData);
                        console.log(data);
                    }
                    $scope.uv.option = ChartHelpSev.lineChart(data,"访客数(UV)");
                    $scope.uv.refresh = true;
                    console.log("ok");
                }


            }else{

                $rootScope.toastError(res.msg);
            }

        })
    };

    //初始化
    ToolbarShareSev.init($scope,getBasicData);
    //渲染图表
    getBasicData($scope.fm);

});