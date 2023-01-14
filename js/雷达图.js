var myChart=echarts.init(document.getElementById("radar"));
option = {
    backgroundColor: '#0c0e29',
    title: {
        text: '',

        textAlign: 'center',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: '400',
        },
    },
    color: ['#3D91F7', '#61BE67'],
    tooltip: {},
    legend: {
        show: true,
        icon: 'circle',
        bottom: 30,
        center: 0,
        itemWidth: 14,
        itemHeight: 14,
        itemGap: 21,
        orient: 'horizontal',
        data: ['a', 'b'],
        textStyle: {
            fontSize: '50%',
            color: '#8C8C8C',
        },
    },

    radar: {
        // shape: 'circle',
        radius: ['20%', '60%'], //数组的第一项是内半径，第二项是外半径
        triggerEvent: true,
        name: {
            textStyle: {
                color: '#fff',
                fontSize: '16',
                borderRadius: 3,
                padding: [3, 5],
            },
        },
        nameGap: '40', //指示器名称和指示器轴的距离
        splitNumber: 5, //指示器轴的分割段数
        indicator: [
            { name: '发售平台合规安全问题', max: 100 },
            { name: '发售平台藏品质量问题', max: 100 },
            { name: '藏品爆款/限量程度', max: 100 },
            { name: '藏品IP本身', max: 100 },
            { name: '藏品价格', max: 100 },
            { name: '发售平台技术存储风险', max: 100 },
            { name: '市场风险防控问题', max: 100 },
            { name: '发售平台内容丰富度', max: 100 },
            { name: '藏品类型', max: 100 },
            { name: '藏品交易模式', max: 100 }
        ],
        splitArea: {
            areaStyle: {
                color: [
                    'rgba(222,134,85, 0)', // 格子背景
                ].reverse(),
            },
        },
        axisLine: {
            //指向外圈文本的分隔线样式
            lineStyle: {
                color: '#76838f45',
                cap: 'butt', //指定线段末端的绘制方式,中间空心部分
            },
        },
        splitLine: {
            lineStyle: {
                width: 2,
                color: ['#76838f45'].reverse(),
                // color: [
                //     'rgba(224,134,82, 0.1)', 'rgba(224,134,82, 0.2)',
                //     'rgba(224,134,82, 0.4)', 'rgba(224,134,82, 0.6)',
                //     'rgba(224,134,82, 0.8)', 'rgba(224,134,82, 1)'
                // ].reverse()
            },
        },
    },

    series: [
        {
            name: '考虑因素',
            type: 'radar',
            //areaStyle: {normal: {}},
            areaStyle: {
                normal: {
                    opacity: 0.8,
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                        {
                            color: '#00000000',
                            offset: 0,
                        },
                        {
                            color: '#10A9EB',
                            offset: 0.8,
                        },
                        {
                            color: '#10EBE3',
                            offset: 0.6,
                        },
                    ]),
                },
            },
            symbolSize: 0,
            lineStyle: {
                normal: {
                    color: '#4BFFFC',
                    width: 1,
                },
            },
            data: [
                {
                    value: [54.4, 52.8, 46.6, 44.6, 44.6, 41.6, 37.2, 36.2, 34.6,32.2],
                    name: '考虑因素',
                },
            ],
        },
    ],
};

myChart.setOption(option,true);

window.onresize=function () {
    myChart.resize();
}