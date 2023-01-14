(function () {

var myChart=echarts.init(document.getElementById("aaa"));

// prettier-ignore
    let dataAxis = ['4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月'];
// prettier-ignore
    let data = [87.18, 74.62, 67.69, 63.25, 89.01, 68.99, 71.60, 72.33];
    let yMax = 500;
    let dataShadow = [];
    for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
    }
    option = {
        tooltip: {
            trigger: 'axis'
        },
        title: {
            text: '图十  4-11月数字藏品市场平均价格（元）',
            left:"5%",
            textStyle: {
                color: '#fff',
            },
            subtextStyle: {
                color: '#fff',
            },
        },

        xAxis: {
            data: dataAxis,
            axisLabel: {
                inside: false,
                color: '#fff'
            },
            axisTick: {
                show: false,
                alignWithLabel: true
            },
            axisLine: {
                show: false,
            },
            z: 100
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff'
            }
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: [
            {
                type: 'bar',
                showBackground: true,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#10EBE3' },
                        { offset: 0.5, color: '#19aba5' },
                        { offset: 1, color: '#3eb693' }
                    ])
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#10A9EB' },
                            { offset: 0.7, color: '#10A9EB' },
                            { offset: 1, color: '#10EBE3' }
                        ])
                    }
                },
                data: data
            }
        ]
    };
// Enable data zoom when user click bar.
    const zoomSize = 6;
    myChart.on('click', function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
            type: 'dataZoom',
            startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
            endValue:
                dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        });
    });
    myChart.setOption(option,true);

window.onresize=function () {
    myChart.resize();
};
})();





