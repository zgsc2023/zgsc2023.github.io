var myChart=echarts.init(document.getElementById("money"));

option = {
    backgroundColor: '#0c0e29',
    title: {
        text: '图九  数藏产品价格分布（%）',
        left: '30%',
        top: 1,
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    visualMap: {
        show: false,
        min: 0,
        max: 65,
        inRange: {
            colorLightness: [0.3, 0.6]
        }
    },
    series: [
        {
            name: '价格区间',
            type: 'pie',
            radius: '55%',
            center: ['55%', '50%'],
            data: [
                { value: 63, name: '0<x<=50' },
                { value: 19, name: '50<x<=100' },
                { value: 5, name: 'x=0' },
                { value: 5, name: '150<x<=200' },
                { value: 3, name: '100<x<=150' },
                { value: 5, name: 'x>200' }

            ].sort(function (a, b) {
                return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
                color: 'rgba(255, 255, 255, 1)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 1)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: '#3eb693',
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

myChart.setOption(option,true);

window.onresize=function () {
    myChart.resize();
}