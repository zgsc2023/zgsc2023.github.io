(function () {
  var myChart = echarts.init(document.getElementById("chart"));

  const chartData = [
    {
      value: 53,
      name: "PFP（Profile Picture）",
    },
    {
      value: 15,
      name: "收藏品",
    },
    {
      value: 8,
      name: "游戏",
    },
    {
      value: 8,
      name: "艺术",
    },
    {
      value: 8,
      name: "实用",
    },
    {
      value: 3,
      name: "元宇宙",
    },
    {
      value: 2,
      name: "土地",
    },
    {
      value: 2,
      name: "IP",
    },
    {
      value: 1,
      name: "其它（社交、体育、音乐…）",
    },
  ];
  const colorList = [
    "#115FEA",
    "#10a9eb",
    "#10EBE3",
    "#3eb693",
    "#19aba5",
    "#b4d346",
    "#EB9C10",
    "#9B10EB",
    "#2E10EB",
  ];
  const sum = chartData.reduce((per, cur) => per + cur.value, 0);
  const gap = (1 * sum) / 100;
  const pieData1 = [];
  const pieData2 = [];
  const gapData = {
    name: "",
    value: gap,
    itemStyle: {
      color: "transparent",
    },
  };
  for (let i = 0; i < chartData.length; i++) {
    // 第一圈数据
    pieData1.push({
      ...chartData[i],
      itemStyle: {
        borderRadius: 10,
      },
    });
    pieData1.push(gapData);

    // 第二圈数据
    pieData2.push({
      ...chartData[i],
      itemStyle: {
        color: colorList[i],
        opacity: 0.21,
      },
    });
    pieData2.push(gapData);
  }
  console.log(pieData2);

  option = {
    backgroundColor: "#0c0e29",
    tooltip: {
      show: true,
      backgroundColor: "rgba(0, 0, 0,.8)",
      textStyle: {
        color: "#fff",
      },
    },
    legend: {
      show: true,
      right: "2%",
      top: "center",
      align: "left",
      itemGap: 18,
      // icon: 'rect',
      itemWidth: 13,
      itemHeight: 7,
      // symbolKeepAspect: false,
      textStyle: {
        color: "#D8DDE3",
        rich: {
          name: {
            verticalAlign: "right",
            align: "left",
            width: 180,
            fontSize: 14,
            color: "#D8DDE3",
          },
          percent: {
            padding: [0, 0, 0, 8],
            fontSize: 14,
            color: "#D8DDE3",
          },
        },
        borderWidth: 53, // 间距的宽度
      },
      formatter: (name) => {
        console.log(name);
        console.log(chartData);
        const item = chartData.find((i) => {
          return i.name === name;
        });
        const p = ((item.value / sum) * 100).toFixed(0);
        return "{name|" + name + "}" + "{percent|" + p + "}" + "%";
      },
    },
    grid: {
      top: 35,
      right: 30,
      bottom: 20,
      left: 30,
    },
    color: colorList,
    series: [
      {
        name: "",
        type: "pie",
        roundCap: true,
        radius: ["66%", "70%"],
        center: ["30%", "45%"],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: pieData1,
      },
      {
        type: "pie",
        radius: ["66%", "54%"],
        center: ["30%", "45%"],
        gap: 1.71,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        silent: true,
        data: pieData2,
      },
      {
        type: "pie",
        center: ["30%", "45%"],
        radius: [0, "45.6%"],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        itemStyle: {
          color: "rgba(75, 126, 203,.1)",
        },
        silent: true,
        data: [
          {
            value: 100,
            name: "",
          },
        ],
      },
    ],
  };

  myChart.setOption(option, true);

  window.onresize = function () {
    myChart.resize();
  };
})();
