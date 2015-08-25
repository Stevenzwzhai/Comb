App.
    factory("ChartHelpSev",function() {

    return{


        /**
         * 支持的格式
         * [{key:value},{key:value},{key:value}]
         * {key:value,key:value}
         *
         * @param chartData
         * @param title
         * @returns {{title: {text: (*|string), subtext: string}, tooltip: {trigger: string}, legend: {data: Array}, calculable: boolean, xAxis: *[], yAxis: *[], series: Array}|*}
         */
        lineChart : function(chartData,title){

            var datas = chartData;
            var xAxis=[],yAxis=[];
            var series=[];
            console.log(datas);
            console.log(datas instanceof Array);
            console.log(datas.length);

            if(datas instanceof Array){

                for(var i=0;i<datas.length;i++){
                    var temp=[];
                    var data = datas[i];
                    for(var item in data){
                        if(i==0){
                            xAxis.push(item);
                        }
                        temp.push(data[item]-0);
                    }

                    yAxis.push(temp);
                }

            }else{

                for(var item in datas){
                    xAxis.push(item);
                    yAxis.push(datas[item]-0);
                }

            }
            if(yAxis.length==0){
                return;
            }
            console.log(yAxis.length+"data");
            if(yAxis[0] instanceof Array){
                for(var i=0;i<yAxis.length;i++){

                    series.push({

                        name:'数量',
                        type:'line',
                        data:yAxis[i],
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    })
                }
            }else{
                series.push({

                    name:'数量',
                    type:'line',
                    data:yAxis,
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                })
            }



            //数据封装
           var  option = {
                title : {
                    text: title||"",
                    subtext: ''
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:[]
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : xAxis,
                        name : ""
                    }
                ],
                yAxis : [
                    {
                        type : 'value'

                    }
                ],
                series : series

            };

            //获得第一个最后一个
            if(xAxis && xAxis.length > 0){
                option.custom  = {
                    first : xAxis[0],
                    last : xAxis[xAxis.length -1]
                }
            }
            else{
                option.custom = {}
            }

            return option;
        },
        barChart : function(chartData,title){

            var datas = chartData;
            var xAxis=[],yAxis=[];
            var series=[];
            console.log(datas);
            console.log(datas instanceof Array);
            console.log(datas.length);

            if(datas instanceof Array){
                for(var i=0;i<datas.length;i++){
                    var temp=[];
                    var data = datas[i];

                    for(var item in data){
                        if(i==0){
                            xAxis.push(item);
                        }
                        temp.push(data[item]-0);
                    }

                    yAxis.push(temp);
                }

            }else{
                for(var item in datas){

                    xAxis.push(item);
                    yAxis.push(datas[item]-0);
                }
            }
            if(yAxis.length==0){
                return;
            }
            console.log(yAxis.length+"data");
            if(yAxis[0] instanceof Array){
                for(var i=0;i<yAxis.length;i++){

                    series.push({
                        barWidth : 10,
                        name:'数量',
                        type:'bar',
                        data:yAxis[i]
                    })
                }
            }else{
                series.push({
                    barWidth : 10,
                    name:'数量',
                    type:'bar',
                    data:yAxis
                })
            }

            //数据封装
            var  option = {
                title : {
                    text: title||"",
                    subtext: ''
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:[]
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        data : xAxis
                    }
                ],
                yAxis : [
                    {
                        type : 'value'

                    }
                ],
                series : series

            };

            //获得第一个最后一个
            if(xAxis && xAxis.length > 0){
                option.custom  = {
                    first : xAxis[0],
                    last : xAxis[xAxis.length -1]
                }
            }
            else{
                option.custom = {}
            }

            return option;
        }
    }
});

