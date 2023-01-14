
var myChart=echarts.init(document.getElementById("pattern"));



option = {
    backgroundColor:'#0c0e29',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function (params) {
            return params[0].name + ': ' + params[0].value;
        }
    },
    xAxis: {
        data: ['限量发行', '藏品赋能', '盲盒发行', '定价发行', '拍卖', '好友助力', '求拍',  ],
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            color: '#10EBE3',
            textStyle:{
                fontSize: 18,
                color:'#fff'
            }
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false}
    },
    color: ['#10EBE3'],
    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '-130%',
        symbolClip: true,
        // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
            opacity: 0.6
        },
        label: {
            show: true,
            position: 'top',
            offset: [0, 0],
            color: '#10EBE3',
            formatter: '{c}%',
            fontSize: 20
        },
        emphasis: {
            itemStyle: {
                opacity: 1
            }
        },
        data: [73, 61.6, 48.4, 45.8, 34.4, 20.4, 16.4],
        z: 10
    }]
};
myChart.setOption(option,true);

window.onresize=function () {
    myChart.resize();
}
