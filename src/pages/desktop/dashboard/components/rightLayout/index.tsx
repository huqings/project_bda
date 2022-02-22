import React, { useState, useEffect, Fragment } from "react";
import * as echarts from "echarts";
import Stack from "@mui/material/Stack";
import classes from "./styles.module.less";
import box_title from "@/assets/images/box_title.png";

export interface Props {
  data1?: number;
  data2?: number;
  data3?: number;
  data4?: number;
}

const rightLayout = (props: Props) => {
  useEffect(() => {
    requestInit();
  }, []);

  const requestInit = () => {
    const eChart1 = echarts.init(document.getElementById("right-chart1")!);
    eChart1.setOption({
      legend: {
        left: "center",
        bottom: 0,
        textStyle: {
          color: "#59BAF2",
        },
        itemStyle: {},
      },
      dataset: {
        source: [
          ["正常待租", 30],
          ["骑行中", 15],
          ["未投放", 15],
          ["故障", 40],
        ],
      },
      series: [
        {
          type: "pie",
          radius: ["50%", "80%"],
          top: "-20%",
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            borderColor: "#fff",
            borderRadius: 10,
            borderWidth: 2,
            normal: {
              color: function (params: any) {
                const colorList = ["#0096FF", "#006CFF", "#0041FB", "#04E0F9"];
                return colorList[params.dataIndex];
              },
            },
          },
          emphasis: {
            label: {
              show: true,
              color: '#59BAF2',
              formatter : "{b}\n{d}%"
            },
          },
        },
      ],
    });
    eChart1.resize({
      height: "auto",
      width: "auto",
    });
    const eChart2 = echarts.init(document.getElementById("right-chart2")!);
    eChart2.setOption({
      legend: {
        left: "center",
        bottom: 0,
        textStyle: {
          color: "#59BAF2",
        },
      },
      dataset: {
        source: [
          ["超出区域", 23],
          ["离线", 86.5],
          ["站外", 41.1],
          ["电池异常", 24.1],
        ],
      },
      series: [
        {
          type: "pie",
          radius: ["50%", "80%"],
          top: "-20%",
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            normal: {
              color: function (params: any) {
                const colorList = ["#B9FCEF", "#60D2FF", "#6AFA8F", "#00CCCA"];
                return colorList[params.dataIndex];
              },
            },
          },
          emphasis: {
            label: {
              show: true,
              color: '#59BAF2',
              formatter : "{b}\n{d}%"
            },
          },
        },
      ],
    });
    eChart2.resize({
      height: "auto",
      width: "auto",
    });
    const eChart3 = echarts.init(document.getElementById("right-chart3")!);
    eChart3.setOption({
      legend: {
        left: "center",
        bottom: 0,
        textStyle: {
          color: "#59BAF2",
        },
      },
      dataset: {
        source: [
          ["未知电量", 11],
          ["正常电量", 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
          ["中等电量", 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
          ["低电量", 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
        ],
      },
      series: [
        {
          type: "pie",
          radius: ["50%", "80%"],
          top: "-20%",
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            normal: {
              color: function (params: any) {
                const colorList = ["#7D42FD", "#E61FFB", "#34CFE8", "#2352FD"];
                return colorList[params.dataIndex];
              },
            },
          },
          emphasis: {
            label: {
              show: true,
              color: '#59BAF2',
              formatter : "{b}\n{d}%"
            },
          },
        },
      ],
    });
    eChart3.resize({
      height: "auto",
      width: "auto",
    });
    const eChart4 = echarts.init(document.getElementById("right-chart4")!);
    eChart4.setOption({
      legend: {
        left: "center",
        bottom: 0,
        textStyle: {
          color: "#59BAF2",
        },
      },
      dataset: {
        source: [
          ["沉淀1天", 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
          ["沉淀3天", 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
          ["沉淀5天", 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
          ["7天以上", 55.2, 67.1, 69.2, 72.4, 53.9, 39.1],
        ],
      },
      series: [
        {
          type: "pie",
          radius: ["50%", "80%"],
          top: "-20%",
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            normal: {
              color: function (params: any) {
                const colorList = ["#2081F5", "#13BDF6", "#BA4FFC", "#F4CA82"];
                return colorList[params.dataIndex];
              },
            },
          },
          emphasis: {
            label: {
              show: true,
              color: '#59BAF2',
              formatter : "{b}\n{d}%"
            },
          },
        },
      ],
    });
    eChart4.resize({
      height: "auto",
      width: "auto",
    });
    window.addEventListener("resize", function () {
      eChart1.resize();
      eChart2.resize();
      eChart3.resize();
      eChart4.resize();
    });
  };

  return (
    <Fragment>
      <div className={classes.alarmtatistics}>
         <Stack direction="row" justifyContent={"space-between"}>
          <div id="right-chart1" className={classes.chart}></div>
          <div id="right-chart2" className={classes.chart}></div>
        </Stack>
        <Stack direction="row" justifyContent={"space-between"}>
          <div id="right-chart3" className={classes.chart}></div>
          <div id="right-chart4" className={classes.chart}></div>
        </Stack>

        <Stack direction="row" justifyContent={"center"}>
          <img className={classes.boxtitleicon} src={box_title}></img>
          <div className={classes.boxtitle}>实时告警车辆</div>
        </Stack>

        <Stack direction="row" justifyContent={"space-between"}>
          <span className={classes.boxlisttitle}>地区</span>
          <span className={classes.boxlisttitle}>车辆编号</span>
          <span className={classes.boxlisttitle}>告警时间</span>
          <span className={classes.boxlisttitle}>告警类型</span>
          <span className={classes.boxlisttitle}>上报位置</span>
        </Stack>
        {["", "", "", "", ""].map((e, i) => {
          return (
            <Stack key={i} direction="row" justifyContent={"space-between"}>
              <span className={classes.boxlistitem}>长沙市</span>
              <span className={classes.boxlistitem}>4302005894</span>
              <span className={classes.boxlistitem}>11-18 12:23</span>
              <span className={classes.boxlistitem}>震动报警</span>
              <span className={classes.boxlistitem}>湖南长沙...</span>
            </Stack>
          );
        })} 
      </div>
    </Fragment>
  );
};

export default rightLayout;
