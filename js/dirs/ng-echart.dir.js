/**
 * zwzhai
 */


App
    .directive("echartPaging", function (CharTheme) {

        return {
            restrict: "AE",
            transclude: true,
            scope:{
                chartType: "@",
                option:"=",
                width:"=",
                height:"=",
                refresh:"="
            },
            link: function (scope, element, attrs) {

                console.log(scope.chartType);

                // 使用
                require(
                    [
                        'echarts',
                        'echarts/chart/'+scope.chartType // 按需加载模块
                    ],
                    function (ec) {
                        // 基于准备好的dom，初始化echarts图表
                        //console.log('echarts/chart/'+scope.chartType);
                        element[0].style.display ="block";
                        element[0].style.width =  scope.width  || "";
                        element[0].style.height = scope.height ||  "400px";
                        var myChart = ec.init(element[0],CharTheme.Blue);


                        scope.option=scope.option?scope.option:"";
                        // 为echarts对象加载数据
                        myChart.setOption(scope.option);
                        scope.$watch("refresh",function(newD,oldD){
                            if(newD){
                                myChart.setOption(scope.option,true);
                                scope.refresh = false;
                            }

                        });
                    }
                );
            }
        }
    });