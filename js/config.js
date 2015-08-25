/**
 * App 配置
 */

//启动项
App.run(function($rootScope,VERSION,SERVER){
    $rootScope.VERSION = VERSION;

    //当前环境
    SERVER.url  = SERVER.formalUrl;


    //echart
    window.require.config({
        paths: {
            "echarts" : "http://echarts.baidu.com/build/dist"
        }
    });


});




//时间戳 更新版本的时候需要替换
App.constant("VERSION",{
    vs : "1002"
});

//主题theme
App.constant("CharTheme",{

    Blue : {
        // 默认色板
        color: [
            '#1790cf','#1bb2d8','#99d2dd','#88b0bb',
            '#1c7099','#038cc4','#75abd0','#afd6dd'
        ],

        // 图表标题
        title: {
            textStyle: {
                fontWeight: 'normal',
                color: '#1790cf'
            }
        },

        // 值域
        dataRange: {
            color:['#1178ad','#72bbd0']
        },

        // 工具箱
        toolbox: {
            color : ['#1790cf','#1790cf','#1790cf','#1790cf']
        },

        // 提示框
        tooltip: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
                lineStyle : {          // 直线指示器样式设置
                    color: '#1790cf',
                    type: 'dashed'
                },
                crossStyle: {
                    color: '#1790cf'
                },
                shadowStyle : {                     // 阴影指示器样式设置
                    color: 'rgba(200,200,200,0.3)'
                }
            }
        },

        // 区域缩放控制器
        dataZoom: {
            dataBackgroundColor: '#eee',            // 数据背景颜色
            fillerColor: 'rgba(144,197,237,0.2)',   // 填充颜色
            handleColor: '#1790cf'     // 手柄颜色
        },

        // 网格
        grid: {
            borderWidth: 0
        },

        // 类目轴
        categoryAxis: {
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#1790cf'
                }
            },
            splitLine: {           // 分隔线
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: ['#eee']
                }
            }
        },

        // 数值型坐标轴默认参数
        valueAxis: {
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#1790cf'
                }
            },
            splitArea : {
                show : true,
                areaStyle : {
                    color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
                }
            },
            splitLine: {           // 分隔线
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: ['#eee']
                }
            }
        },

        timeline : {
            lineStyle : {
                color : '#1790cf'
            },
            controlStyle : {
                normal : { color : '#1790cf'},
                emphasis : { color : '#1790cf'}
            }
        },

        // K线图默认参数
        k: {
            itemStyle: {
                normal: {
                    color: '#1bb2d8',          // 阳线填充颜色
                    color0: '#99d2dd',      // 阴线填充颜色
                    lineStyle: {
                        width: 1,
                        color: '#1c7099',   // 阳线边框颜色
                        color0: '#88b0bb'   // 阴线边框颜色
                    }
                }
            }
        },

        map: {
            itemStyle: {
                normal: {
                    areaStyle: {
                        color: '#ddd'
                    },
                    label: {
                        textStyle: {
                            color: '#c12e34'
                        }
                    }
                },
                emphasis: {                 // 也是选中样式
                    areaStyle: {
                        color: '#99d2dd'
                    },
                    label: {
                        textStyle: {
                            color: '#c12e34'
                        }
                    }
                }
            }
        },

        force : {
            itemStyle: {
                normal: {
                    linkStyle : {
                        color : '#1790cf'
                    }
                }
            }
        },

        chord : {
            padding : 4,
            itemStyle : {
                normal : {
                    borderWidth: 1,
                    borderColor: 'rgba(128, 128, 128, 0.5)',
                    chordStyle : {
                        lineStyle : {
                            color : 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                },
                emphasis : {
                    borderWidth: 1,
                    borderColor: 'rgba(128, 128, 128, 0.5)',
                    chordStyle : {
                        lineStyle : {
                            color : 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                }
            }
        },

        gauge : {
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, '#1bb2d8'],[0.8, '#1790cf'],[1, '#1c7099']],
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                splitNumber: 10,   // 每份split细分多少段
                length :12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length : 18,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer : {
                length : '90%',
                color : 'auto'
            },
            title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#333'
                }
            },
            detail : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto'
                }
            }
        },

        textStyle: {
            fontFamily: '微软雅黑, Arial, Verdana, sans-serif'
        }
    }
});


//数据服务地址
App.constant("SERVER", {
    url : {},

    //测试
    testUrl : {
        honey  : "http://dapw-pro.thinkjoy.com.cn/admin",
        honeyHack  : "http://dapw-pro.thinkjoy.com.cn/show",
        ucm : "http://ucw-dev.thinkjoy.com.cn",
        local : "./data",
        cookieDomain : "http://dapw-pro.thinkjoy.com.cn/admin"
    },

    //正式
    formalUrl : {

        honey  : "http://dapw-pro.thinkjoy.com.cn/admin",
        honeyHack  : "http://dapw-pro.thinkjoy.com.cn/show",
        ucm : "http://ucw-dev.thinkjoy.com.cn",
        local : "./data",
        cookieDomain : "http://dapw-pro.thinkjoy.com.cn/admin"
    },

    //配置
    info : {
        AppKey: "dap",
        Product: "dap"
    }
});



App.config(function($httpProvider){
    //配置拦截器
    $httpProvider.interceptors.push("AjaxInterceptors");
});


App.config(function ($httpProvider) {
    //$httpProvider.defaults.withCredentials = true;
});


//配置loading 加载
App.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
}])





/** 组件项目 **/