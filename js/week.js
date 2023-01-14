(function () {

var myChart=echarts.init(document.getElementById("week"));
// prettier-ignore
    const hours = [
        '12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a', '10a', '11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'
    ];
// prettier-ignore
    const days = [
        '周日', '周一', '周二',
        '周三', '周四', '周五', '周六'
    ];
// prettier-ignore
    const data = [
        [0, 0, 3],
        [0, 9, 4],
        [0, 10, 20],
        [0, 11, 20],
        [0, 12, 83],
        [0, 13, 29],
        [0, 14, 69],
        [0, 15, 27],
        [0, 16, 21],
        [0, 17, 12],
        [0, 18, 27],
        [0, 19, 7],
        [0, 20, 47],
        [0, 21, 7],
        [1, 0, 3],
        [1, 9, 6],
        [1, 10, 53],
        [1, 11, 41],
        [1, 12, 139],
        [1, 13, 35],
        [1, 14, 65],
        [1, 15, 38],
        [1, 16, 15],
        [1, 17, 13],
        [1, 18, 18],
        [1, 19, 7],
        [1, 20, 33],
        [1, 21, 3],
        [2, 0, 6],
        [2, 9, 1],
        [2, 10, 48],
        [2, 11, 85],
        [2, 12, 152],
        [2, 13, 46],
        [2, 14, 65],
        [2, 15, 50],
        [2, 16, 32],
        [2, 17, 7],
        [2, 18, 8],
        [2, 19, 12],
        [2, 20, 45],
        [2, 21, 2]
        ,
        [3, 0, 3],
        [3, 9, 3],
        [3, 10, 81],
        [3, 11, 59],
        [3, 12, 141],
        [3, 13, 44],
        [3, 14, 99],
        [3, 15, 65],
        [3, 16, 33],
        [3, 17, 14],
        [3, 18, 29],
        [3, 19, 16],
        [3, 20, 38],
        [3, 21, 3],
        [3, 22, 1],
        [4, 0, 3],
        [4, 9, 1],
        [4, 10, 64],
        [4, 11, 73],
        [4, 12, 142],
        [4, 13, 45],
        [4, 14, 94],
        [4, 15, 63],
        [4, 16, 41],
        [4, 17, 19],
        [4, 18, 20],
        [4, 19, 18],
        [4, 20, 31],
        [4, 21, 3],
        [4, 22, 3],
        [5, 0, 2],
        [5, 9, 1],
        [5, 10, 74],
        [5, 11, 85],
        [5, 12, 135],
        [5, 13, 46],
        [5, 14, 74],
        [5, 15, 68],
        [5, 16, 38],
        [5, 17, 9],
        [5, 18, 27],
        [5, 19, 8],
        [5, 20, 21],
        [5, 21, 8],
        [6, 0, 0],
        [6, 9, 8],
        [6, 10, 37],
        [6, 11, 35],
        [6, 12, 106],
        [6, 13, 37],
        [6, 14, 69],
        [6, 15, 45],
        [6, 16, 26],
        [6, 17, 14],
        [6, 18, 17],
        [6, 19, 10],
        [6, 20, 38],
        [6, 21, 8]
    ];
    const title = [];
    const singleAxis = [];
    const series = [];

    days.forEach(function (day, idx) {
        title.push({
            textBaseline: 'middle',
            top: ((idx + 0.5) * 100) / 7 + '%',
            text: day,
            textStyle:{
                color:"#fff",
            },

        });
        singleAxis.push({
            left: 130,
            type: 'category',
            boundaryGap: false,
            data: hours,
            top: (idx * 100) / 7 + 5 + '%',
            height: 100 / 7 - 10 + '%',
            axisLabel: {
                interval: 2,
                color: '#fff',
            }

        });
        series.push({
            singleAxisIndex: idx,
            coordinateSystem: 'singleAxis',
            type: 'scatter',
            data: [],
            symbolSize: function (dataItem) {
                return dataItem[1]*0.4;
            }
        });
    });
    data.forEach(function (dataItem) {
        series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
    });
    option = {

        color:
            [
                '#2E10EB',
                '#115FEA',
                '#10A9EB',
                '#10EBE3',
                '#3eb693',
                '19aba5',
                '#b4d346'
            ],
        tooltip: {
            position: 'top'
        },
        title: title,
        singleAxis: singleAxis,
        textStyle: {
            color: '#fff'
        },
        series: series
    };
myChart.setOption(option,true);

window.onresize=function () {
    myChart.resize();
};
})();
