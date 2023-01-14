(function () {

var myChart=echarts.init(document.getElementById("reason"));

var data=[69.4, 69, 62,43,40.8,22.2];
var className=['对新生概念感兴趣','有收藏习惯/有热爱的IP','认为大势所趋/运筹帷幄','想追赶潮流','社交功能/个性化展示','满足炫耀的心理需求'];
var defaultData=[100,100,100,100,100,100];
option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                // params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' <br/>'
                params[0].seriesName + ' : ' + params[0].value + '%'
        }
    },
    backgroundColor: '#0c0e29',
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
                fontSize: 16
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: className
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '14'
            },
            formatter: function(value) {
                return value + ' %';
            },
        },
        data: data
    }],
    series: [{
        name: '购买动机占比',
        type: 'pictorialBar',
        zlevel: 1,
        itemStyle: {
            normal: {
                barBorderRadius: 0,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: "#10A9EB"
                    },
                    {
                        offset: 1,
                        color: "#10EBE3"
                    }
                ])
            },

        },
        symbol: 'rich', //图形类型，带圆角的矩形
        symbolMargin: '3', //图形垂直间隔
        symbolRepeat: true, //图形是否重复
        symbolSize: [5, 20], //图形元素的尺寸
        barWidth: 20,
        data: data
    },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: defaultData,
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,1)',
                    barBorderRadius: 0,
                }
            },
        },
    ]
};

myChart.setOption(option,true);

window.onresize=function () {
    myChart.resize();
}
})();