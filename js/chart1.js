var myChart=echarts.init(document.getElementById("chartone"));

option = {
    color:
        [
            '#FFF80B', '#10EBE3'
        ],

    title: {
        text: '图四  OpenSea与LooksRare日交易额',
        textStyle: {
            color: '#fff'
        },
        subtext: '十万美元'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        left:"50%",
        textStyle: {
            color:'#fff'
        },
        data: ['OpenSea', 'LooksRare']

    },
    toolbox: {
        show: true,
        feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: false }
        }
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            // prettier-ignore
            data: ['2022/3/27', '2022/3/28', '2022/3/29', '2022/3/30', '2022/3/31', '2022/4/1', '2022/4/2', '2022/4/3', '2022/4/4', '2022/4/5', '2022/4/6', '2022/4/7', '2022/4/8', '2022/4/9', '2022/4/10', '2022/4/11', '2022/4/12', '2022/4/13', '2022/4/14', '2022/4/15', '2022/4/16', '2022/4/17', '2022/4/18', '2022/4/19', '2022/4/20', '2022/4/21', '2022/4/22', '2022/4/23', '2022/4/24', '2022/4/25', '2022/4/26'],
            axisLabel:{
                textStyle:{
                    color:'#fff'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel:{
                textStyle:{
                    color:'#fff'
                }
            }
        }
    ],
    series: [
        {
            name: 'OpenSea',
            type: 'bar',
            data: [
                1219.51, 1260.16, 1463.41, 1967.48, 1528.46, 1674.8, 1772.36, 1650.41, 1520.33, 1341.46, 1268.29, 1105.69, 1203.25, 1097.56, 1000, 1024.39, 837.398, 1000, 1008.13, 1292.68, 674.797, 991.87, 1008.13, 1081.3, 1292.68, 1065.04, 1073.17, 845.528, 975.61, 796.748, 73.1707    ],

            markPoint: {
                data: [
                    { type: 'max', name: 'Max',label:{
                            textBorderWidth:2,
                            textBorderColor:"#FFF80B"
                        } },
                    { type: 'min', name: 'Min' ,label:{
                            textBorderWidth:2,
                            textBorderColor:"#FFF80B"
                        }},

                ],



            },
            markLine: {
                data: [{ type: 'average', name: 'Avg',label:{
                        color:"#FFF80B"
                    } }]
            }
        },
        {
            name: 'LooksRare',
            type: 'bar',
            data: [
                1544.72, 1130.08, 1365.85, 1243.9, 1707.32, 2121.95, 2390.24, 2796.75, 2593.5, 2032.52, 1650.41, 1788.62, 1691.06, 1479.67, 1414.63, 1178.86, 1024.39, 1268.29, 1073.17, 926.829, 2235.77, 1699.19, 2056.91, 1853.66, 1853.66, 1829.27, 1967.48, 1821.14, 2130.08, 1455.28, 439.024
            ],
            markPoint: {

                data: [
                    {
                        name: 'Max',
                        value: 2796.5,
                        xAxis: 7,
                        yAxis: 2800,
                        color:"#fff",
                        itemStyle:{
                            borderWidth:0,
                            textColor:'#fff'
                        },
                        label:{
                            textBorderWidth:2,
                            textBorderColor:"#10EBE3"
                        }



                    },

                    { name: 'Min',
                        value: 439.02,
                        xAxis: 30,
                        yAxis: 400,
                        color:"#fff",
                        itemStyle:{
                            borderWidth:0,
                        },
                        label:{
                            textBorderWidth:2,
                            textBorderColor:"#10EBE3"
                        }

                    },
                ],
            },

            markLine: {
                data: [{ type: 'average', name: 'Avg',label:{
                       color:"#10EBE3"
                    }
                }]
            }
        }
    ]
};
myChart.setOption(option,true);

window.onresize=function (){
    myChart.resize();
}