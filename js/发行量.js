var myChart=echarts.init(document.getElementById("circulation"));

let colors = ['#10EBE3',
    '#269ed9'];
let yNameOne = '发行数量（万）';
let yNameTwo = '发行总额（万元）';
let xData = [2021.8, 2021.9, 2021.1, 2021.11, 2021.12, 2022.1, 2022.2, 2022.3, 2022.4, 2022.5, 2022.6];
let yData = {
    one: [12.3, 83.2, 56.3, 47.7, 33.5, 70.3, 103.9, 269.1, 313.2, 496.9, 285.4],
    two:  [31.3, 155.8, 1430.7, 618.4, 723.1, 607.1, 1686.3, 2921.4, 11161.3, 14739.8, 9922.9],
};
let splitNumber = 5; // 分割段
//计算最大值
function calMax(arr) {
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    let interval = (max - min) / splitNumber; // 平均值
    max = Math.ceil(max + interval); // 向上取整
    return max;
}

//计算最小值
function calMin(arr) {
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    let interval = (max - min) / splitNumber; // 平均值
    min = min > 0 ? min : Math.floor(min - interval); // 向下取整
    // console.log(min, max, interval);
    return min;
}
option = {
    backgroundColor:"#0c0e29",
    title: {
        text: '图五  2021-2022年各月份国内数字藏品发行数量',
        top: '1',
        x: 'left',
        textStyle: { color: '#fff', fontSize: '20', fontWeight: 'bold' },
    },
    color: colors,
    grid: {
        top: '15%',
        bottom: '5%',
        left: '80',
        right: '80',
    },
    legend: {
        top: '7%',
        textStyle: {
            color: '#fff',
            margin: '10',
        },
    },
    toolbox: {

        iconStyle: {
            borderColor: '#fff',
            fontSize: '22px',
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
    },
    xAxis: {
        type: 'category',
        axisTick: { show: false },
        axisLabel: {
            textStyle: { color: '#fff', fontSize: 14 },
            rotate: 0,//倾斜度
        },
        axisLine: {
            show: true,
            lineStyle: { color: '#fff' },
        },
        data: xData,
    },
    yAxis: [
        {
            name: yNameOne,
            type: 'value',
            position: 'left',
            min: 0,
            max: calMax(yData.one),
            splitNumber: splitNumber,
            interval:
                (calMax(yData.one) - (calMin(yData.one) > 0 ? 0 : calMin(yData.one))) / splitNumber,
            splitLine: {
                lineStyle: { type: 'dashed', color: '#707070' },
            },
            axisLabel: {
                // formatter: '{value}mm',
                formatter: function (value, index) {
                    return (value + '').indexOf('.') != -1 ? value.toFixed(1) : value;
                },
                textStyle: { color: colors[0], fontSize: 14 },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[0],
                    width: 2,
                },
            },
            axisTick: { show: false },
        },
        {
            name: yNameTwo,
            type: 'value',
            position: 'right',
            min: 0,
            max: calMax(yData.two),
            splitNumber: splitNumber,
            interval:
                (calMax(yData.two) - (calMin(yData.two) < 0 ? calMin(yData.two) : 0)) / splitNumber,
            splitLine: { show: false },
            axisLabel: {
                // formatter: '{value}°C',
                formatter: function (value, index) {
                    return (value + '').indexOf('.') != -1 ? value.toFixed(1) : value;
                    //return parseInt(value) + '%';
                },
                textStyle: { color: colors[1], fontSize: 14 },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[1],
                    width: 2,
                },
            },
            axisTick: { show: false },
        },
    ],
    series: [
        {
            name: yNameOne,
            type: 'bar',
            barWidth: '30%',
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: {
                            //数值样式
                            color: colors[0],
                            fontSize: 14,
                            fontWeight: 400,
                        },
                    },
                },
            },
            data: yData.one,
        },
        {
            name: yNameTwo,
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    label: {
                        show: false, //开启显示
                        position: 'top', //在上方显示
                        textStyle: {
                            //数值样式
                            color: colors[1],
                            fontSize: 16,
                            fontWeight: 400,
                        },
                    },
                },
            },
            data: yData.two,
        },
    ],
};

myChart.setOption(option,true);

window.onresize=function () {
    myChart.resize();
}