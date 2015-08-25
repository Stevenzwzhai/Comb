
App.service("ToolbarShareSev",function(){

    return  {

        init : function($scope,dataFun,defaultValue){

            $scope.fm  = defaultValue || {
                    "from":"all",
                    "day":"30",
                    "userType":"new",
                    "grain" : "day"
                };
            $scope.startTime="";
            $scope.endTime="";

            //检测from
            $scope.$watch('fm.from', function (newData,oldData) {
                if(newData && newData != oldData){
                    dataFun($scope.fm);
                }
            });
            //30 60 90
            $scope.$watch('fm.day', function (newData,oldData) {
                if(newData && newData != oldData){

                    dataFun($scope.fm);
                }
            });

            //日周月
            $scope.$watch('fm.grain', function (newData,oldData) {
                if(newData && newData != oldData){
                    dataFun($scope.fm);
                }
            });

            //new active
            $scope.$watch('fm.userType', function (newData,oldData) {
                if(newData && newData != oldData){
                    dataFun($scope.fm);
                }
            });


        }

    }





});



