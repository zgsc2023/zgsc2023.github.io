var myChart=echarts.init(document.getElementById("three"));


const dataAPP = [
    [ 333, 41.78,93.4419, '阿里拍卖', 'APP'],
    [ 281, 40.96,143.6505,'百度超级链', 'APP'],
    [ 256, 21.07,390.931,  '鲸探', 'APP'],
    [ 234, 85.03,722.2299,'UTONMOS', 'APP'],
    [ 184, 210.45,34.4692,'HI元宇宙', 'APP'],
    [ 99, 115.95,2.9454,'小红书', 'APP'],
    [ 98, 30.19, 22.2182,'故纸堆', 'APP'],
    [ 65, 50.86, 45.1939,'千寻数藏', 'APP'],
    [ 63, 60.22,19.5800,'HOTDOG', 'APP'],
    [ 61, 27.70, 15.4152,'芒果TV', 'APP'],
    [ 48, 35.43, 19.2501,'非同艺术', 'APP'],
    [ 58, 39.01, 55.4767,'超维空间', 'APP'],
    [ 50, 30.70, 17.2866,'小度寻宇', 'APP'],
    [ 20, 21.55, 14.1739,'百度网盘', 'APP'],
    [ 57, 45.65, 50.6405,'数藏中国', 'APP']
];
const dataGZH = [
    [111, 46.87,  4.3615, '虚猕', '公众号'],
    [ 83, 148.03,28.6096, '雪崩数藏', '公众号'],
    [ 82, 57.18, 33.0590, '灵境藏品', '公众号'],
    [ 60, 18.58, 29.8352, '时藏', '公众号'],
    [ 51, 150.13, 16.8773, '文博数藏', '公众号'],
    [ 36, 63.85, 17.1271, '超洞世界', '公众号'],
    [ 23, 106.90, 23.6233, '乐享艺术', '公众号']
];

const schema = [
    { name: 'total', index: 2, text: '发行总数' },
    { name: 'price', index: 1, text: '平均价格' },
    { name: 'kind', index: 0, text: '发行款数' },
    { name: 'apporach', index: 3, text: '平台' },
    { name: 'way', index: 4, text: '主要发售渠道' }
];

const itemStyle = {
    opacity: 0.8,
    shadowBlur: 10,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: 'rgba(0,0,0,0.6)'
};

option = {
    color: ['#269ed9', '#10EBE3'],
    legend: {
        top: 10,
        data: ['APP','公众号'],
        textStyle: {
            fontSize: 16,
            color:'#fff'
        }
    },
    grid: {
        left: '10%',
        right: 150,
        top: '18%',
        bottom: '10%'
    },
    tooltip: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        formatter: function (param) {
            var value = param.value;
            // prettier-ignore
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + schema[3].text + '：' + value[3] + '<br>'
                + '</div>'
                + schema[0].text + '：' + value[2] + ' w'+'<br>'
                + schema[2].text + '：' + value[0] + '<br>'
                + schema[1].text + '：' + value[1] + ' ¥' + '<br>'
                + schema[4].text + '：' + value[4] + '<br>';
        }
    },
    xAxis: {
        type: 'value',
        name: '发行款数',
        nameGap: 20,
        axisLabel:{
            textStyle:{
                color:'#fff'
            }
        },
        nameTextStyle: {
            fontSize: 16,
            color: '#fff'
        },

        max: 350,
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        name: '平均价格',
        nameLocation: 'end',
        nameGap: 20,
        axisLabel:{
            textStyle:{
                color:'#fff'
            }
        },
        nameTextStyle: {
            fontSize: 16,
            color: '#fff'
        },
        max: 250,
        splitLine: {
            show: false
        }
    },
    visualMap: [
        {
            left: 'right',
            top: '10%',
            dimension: 2,
            min: 0,
            max: 750,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小：发行总数'],
            textStyle: {
                color: '#fff'
            },
            textGap: 30,
            inRange: {
                symbolSize: [18, 90]
            },
            outOfRange: {
                symbolSize: [18, 90],
                color: ['rgba(255,255,255,0.4)']
            },
            controller: {
                inRange: {
                    color: ['#269ed9']
                },
                outOfRange: {
                    color: ['#999']
                }
            }
        }
    ],
    series: [
        {
            name: 'APP',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataAPP
        },

        {
            name: '公众号',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataGZH

        }
    ]
};

myChart.setOption(option,true);

window.onresize=function () {
    myChart.resize();
}

