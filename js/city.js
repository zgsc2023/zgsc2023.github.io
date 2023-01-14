(function () {
    var myChart = echarts.init(document.getElementById("city"));

const chartData = [
    {
        value: 10.1,
        name: '一线城市'
    },
    {
        value: 24.5,
        name: '新一线城市'
    },
    {
        value: 19.9,
        name: '二线城市'
    },
    {
        value: 20,
        name: '三线城市'
    },
    {
        value: 16.1,
        name: '四线城市'
    },
    {
        value: 9.5,
        name: '五线及以下'
    }
]
const colorList = ['#115FEA', '#10A9EB', '#10EBE3', '#3eb693', '#19aba5', '#b4d346']
const sum = chartData.reduce((per, cur) => per + cur.value, 0)
const gap = (1 * sum) / 100
const pieData1 = []
const pieData2 = []
const gapData = {
    name: '',
    value: gap,
    itemStyle: {
        color: 'transparent'
    }
}
for (let i = 0; i < chartData.length; i++) {
    // 第一圈数据
    pieData1.push({
        ...chartData[i],
        itemStyle: {
            borderRadius: 10
        }
    })
    pieData1.push(gapData)

    // 第二圈数据
    pieData2.push({
        ...chartData[i],
        itemStyle: {
            color: colorList[i],
            opacity: 0.21
        }
    })
    pieData2.push(gapData)
}
console.log(pieData2)

option = {
    backgroundColor: '#0c0e29',
    tooltip: {
        show: false
        // backgroundColor: 'rgba(255, 255, 255)',
        // textStyle: {
        //     color: '#FC7D3F'#FC7D3F
        // }
    },
    legend: {
        show: true,
        right: '15%',
        top: 'center',
        align: 'left',
        itemGap: 20,
        // icon: 'rect',
        itemWidth: 20,
        itemHeight: 7,
        // symbolKeepAspect: false,
        textStyle: {
            // 个
            color: '#D8DDE3',
            rich: {
                name: {
                    verticalAlign: 'right',
                    align: 'left',
                    width: 100,
                    fontSize: 14,
                    color: '#D8DDE3'
                },
                percent: {
                    padding: [0, 0, 0, 8],
                    color: '#D8DDE3'
                }
            },
            borderWidth: 53 // 间距的宽度
        },
        formatter: name => {
            console.log(name)
            console.log(chartData)
            const item = chartData.find(i => {
                return i.name === name
            })
            const p = ((item.value / sum) * 100).toFixed(0)
            return '{name|' + name + '}' + '{percent|' + p + '}' + '%'
        }
    },
    graphic: {
        elements: [
            // {
            //     type: 'image',
            //     z: 3,
            //     style: {
            //         image: imgSrc,
            //         width: 70,
            //         height: 70
            //     },
            //     top: 'middle',
            //     left: 'center',
            //     scale: [1.5, 1.5]
            // }
        ]
    },
    grid: {
        top: 35,
        right: 30,
        bottom: 20,
        left: 30
    },
    color: colorList,
    series: [
        {
            name: '消息来源',
            type: 'pie',
            roundCap: true,
            radius: ['66%', '70%'],
            center: ['40%', '53%'],
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            data: pieData1
        },
        {
            type: 'pie',
            radius: ['66%', '54%'],
            center: ['40%', '53%'],
            gap: 1.71,
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            silent: true,
            data: pieData2
        },
        {
            type: 'pie',
            center: ['40%', '53%'],
            radius: [0, '45.6%'],
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                color: 'rgba(75, 126, 203,.1)'
            },
            silent: true,
            data: [
                {
                    value: 100,
                    name: ''
                }
            ]
        }
    ]
}

myChart.setOption(option, true);

window.onresize = function () {
    myChart.resize();
};
})();