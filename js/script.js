$(function () {
  /* 函数调用实例 */
  /* 今日到馆 */
  var x1 = ['8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时'];
  var data1 = [101, 102, 103, 100, 108, 110, 120, 100, 110, 80, 70]; // 入馆
  var data2 = [20, 10, 30, 100, 10, 20, 50, 200, 150, 200, 205]; // 出馆

  linechartForGraph1E2(x1, data1, data2, 'graph1');

  /* 22类借书量 */
  // name
  var data21 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'N', 'O', 'P', 'Q', 'R', 'T', 'U', 'V', 'X', 'Z'];
  // value
  var data22 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2];

  piechartForGraph2(data21, data22, 'graph2');

  /* 读者类别 */

  // name
  var data31 = ['学生', '上杭南阳射山分馆读者', '普通', '馆外读者', '特殊读者', '个别', '工作人员', '社保卡', '上杭县公安局读者', '一般读者', '老年活动中心分馆'];
  // value
  var data32 = [50, 140, 230, 89, 15, 10, 20, 340, 50, 140, 123];
  piechartForGraph3(data31, data32, 'graph3');

});

/* 折线图 for 今日到馆 */
function linechartForGraph1(x, ydata, obj) {

  var myChart = echarts.getInstanceByDom(document.getElementById(obj));
  if (myChart === undefined) {
    var myChart = echarts.init(document.getElementById(obj));
  }

  var option = {
    title: {
      //      text: name,
      //      x: 'center',
      textStyle: {
        fontSize: 20,
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{c}',
      textStyle: {
        fontSize: 30
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: x,
      axisLabel: {
        textStyle: {
          fontSize: 18,
          color: 'white'
        }
      }
    },
    yAxis: {
      show: true,
      name: '人数',
      nameLocation: 'end',
      nameTextStyle: {
        color: '#efefef'
      },
      scale: true,
      type: 'value',
      splitLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          fontSize: 16,
          color: 'white'
        }
      }
    },
    label: {
      normal: {
        show: true,
        //        offset: [0, -10],
        textStyle: {
          fontSize: 30,
          color: '#fff'
        }
      }

    },
    series: [
      {
        name: '',
        type: 'line',
        smooth: true,
        data: ydata,
        symbolSize: 12,
        lineStyle: {
          normal: {
            width: 3,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 2,
            color: '#03a9f4'
          }
        },
        label: {
          normal: {
            show: true,
            position: 'top',
            color: '#f7ff16',
            fontSize: 20
          }
        },
        }
    ],
    //    animation: false
  };
  myChart.setOption(option);
}

function linechartForGraph1E2(x, data1, data2, obj) {

  var myChart = echarts.getInstanceByDom(document.getElementById(obj));
  if (myChart === undefined) {
    var myChart = echarts.init(document.getElementById(obj));
  }
  var data3 = [];
  for (var i in data2) {
    data3[i] = -data2[i];
  }

  var option = {
    title: {
      //      text: name,
      //      x: 'center',
      textStyle: {
        fontSize: 20,
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{c}',
      textStyle: {
        fontSize: 30
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: x,
      axisLabel: {
        textStyle: {
          fontSize: 18,
          color: 'white'
        }
      }
    },
    yAxis: {
      show: true,
      name: '人数',
      nameLocation: 'end',
      nameTextStyle: {
        color: '#efefef'
      },
      scale: true,
      type: 'value',
      splitLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          fontSize: 16,
          color: 'white'
        }
      }
    },
    label: {
      normal: {
        show: true,
        //        offset: [0, -10],
        textStyle: {
          fontSize: 30,
          color: '#fff'
        }
      }

    },
    series: [
      {
        name: '',
        type: 'line',
        smooth: true,
        data: data1,
        symbolSize: 12,
        lineStyle: {
          normal: {
            width: 3,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 2,
            color: '#03a9f4'
          }
        },
        label: {
          normal: {
            show: true,
            position: 'top',
            color: '#f7ff16',
            fontSize: 20
          }
        },
        },
      {
        name: '',
        type: 'line',
        smooth: true,
        data: data3,
        symbolSize: 12,
        lineStyle: {
          normal: {
            width: 3,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 2,
            color: '#39ffe1'
          }
        },
        label: {
          normal: {
            show: true,
            position: 'top',
            color: '#f7ff16',
            fontSize: 20
          }
        },
        }
    ],
    //    animation: false
  };
  myChart.setOption(option);
}

/* 饼图 for 22大类总借书量 */
function piechartForGraph2(data1, data2, obj) {
  var myChart = echarts.getInstanceByDom(document.getElementById(obj));
  if (myChart === undefined) {
    var myChart = echarts.init(document.getElementById(obj));
  }

  /* 组合数组 */
  var data3 = [];
  for (var i in data1) {
    data3[i] = {
      value: data2[i],
      name: data1[i]
    }
  }

  var option = {
    //    tooltip: {
    //        trigger: 'item',
    //        formatter: "{a} <br/>{b}: {c} ({d}%)"
    //    },
    //    legend: {
    //             orient: 'vertical',
    //            x: 'left',
    //            data: yList
    //    },
    series: [
      {
        //        name: name,
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['50%', '60%'],
        data: data3,
        label: {
          normal: {
            formatter: '{b}:{per|{c} ({d}%)}',
            //            backgroundColor: '#eee',
            //                    borderColor: '#aaa',
            //                    borderWidth: 1,
            //                    borderRadius: 4,
            //                        padding: [2,2],
            rich: {
              hr: {
                borderColor: '#aaa',
                width: '100%',
                borderWidth: 0.5,
                height: 0,
              },
              per: {
                color: '#eee',
                backgroundColor: '#334455',
                padding: [2, 4],
                borderRadius: 4,
                fontWeight: 'bold'
              }
            },
            textStyle: {
              fontSize: 14,
              color: '#f7ff16'
            }
          }
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
        }
    ]
  };

  myChart.setOption(option);
}

/* 饼图 for 读者类别 */
function piechartForGraph3(data1, data2, obj) {
  var myChart = echarts.getInstanceByDom(document.getElementById(obj));
  if (myChart === undefined) {
    var myChart = echarts.init(document.getElementById(obj));
  }

  /* 组合数组 */
  var data3 = [];
  for (var i in data1) {
    data3[i] = {
      value: data2[i],
      name: data1[i]
    }
  }

  var option = {
    //    tooltip: {
    //        trigger: 'item',
    //        formatter: "{a} <br/>{b}: {c} ({d}%)"
    //    },
    //    legend: {
    //             orient: 'vertical',
    //            x: 'left',
    //            data: yList
    //    },
    series: [
      {
        //        name: name,
        type: 'pie',
        radius: [30, 110],
        center: ['50%', '40%'],
        roseType: 'radius',
        data: data3,
        label: {
          normal: {
            formatter: '{b}\n{per|{c} ({d}%)}',
            //            backgroundColor: '#eee',
            //                    borderColor: '#aaa',
            //                    borderWidth: 1,
            //                    borderRadius: 4,
            //                        padding: [2,2],
            rich: {
              hr: {
                borderColor: '#aaa',
                width: '100%',
                borderWidth: 0.5,
                height: 0,
              },
              per: {
                color: '#eee',
                backgroundColor: '#334455',
                padding: [2, 4],
                borderRadius: 4,
                fontWeight: 'bold'
              }
            },
            textStyle: {
              fontSize: 14,
              color: '#f7ff16'
            }
          }
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
        }
    ]
  };

  myChart.setOption(option);
}
