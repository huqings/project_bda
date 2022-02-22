import React, { useState, useEffect, Fragment } from "react";
import * as echarts from "echarts";
import classes from "./styles.module.less";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import box_title from "@/assets/images/box_title.png";

export interface Props {
  data1?: number;
  data2?: number;
  data3?: number;
  data4?: number;
}

const bottomLayout = (props: Props) => {
  useEffect(() => {
    requestInit();
  }, []);

  const requestInit = () => {
    const eChart1 = echarts.init(document.getElementById("chart1-bottom")!);
    eChart1.setOption({
      tooltip: {
        trigger: "axis",
        backgroundColor: "transition",
        textStyle: {
          color: "#00D7E9",
        },
        borderColor: "#00D7E9",
        borderWidth: 1,
        axisPointer: {
          type: "shadow",
          shadowStyle: {
            color: "rgba(14,34,68,.5)",
            shadowColor: "rgba(14,34,68,.1)",
            shadowBlur: 5,
          },
        },
      },
      legend: {
        top: "5%",
        textStyle: {
          color: "#fff",
          fontSize: "12",
        },
      },
      grid: {
        top: "15%",
        left: "2%",
        right: "2%",
        bottom: "5%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          axisLine: {
            show: true,
            lineStyle: {
              type: "solid",
              color: "#1aaed7",
              width: "2",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#1aaed7",
            width: 100,
          },
          splitLine: {
            show: false,
          },
          boundaryGap: false,
          data: ["星期一", "星期二", "星期三", "星期四", "星期五"],
        },
      ],
      yAxis: [
        {
          type: "value",
          min: 0,
          max: 120,
          splitNumber: 6,
          splitLine: {
            show: true,
            lineStyle: {
              color: "#0e2244",
            },
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            margin: 20,
            textStyle: {
              color: "#1aaed7",
            },
          },
          axisTick: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: "本周",
          type: "line",
          showAllSymbol: true,
          symbol: "circle",
          symbolSize: 10,
          lineStyle: {
            normal: {
              color: "#A582EA",
            },
          },
          label: {
            show: false,
          },
          itemStyle: {
            color: "rgba(89,47,180,1)",
            borderColor: "rgba(89,47,180,.3)",
            borderWidth: 8,
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(89,47,180,0.8)",
                  },
                  {
                    offset: 1,
                    color: "rgba(89,47,180,0)",
                  },
                ],
                false
              ),
            },
          },
          data: [40, 30, 60, 70, 50],
        },
        {
          name: "上周",
          type: "line",
          showAllSymbol: true,
          symbol: "circle",
          symbolSize: 10,
          lineStyle: {
            normal: {
              color: "#2CABE3",
            },
          },
          label: {
            show: false,
          },
          itemStyle: {
            color: "rgba(53,108,255,1)",
            borderColor: "rgba(53,108,255,.3)",
            borderWidth: 8,
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(43,58,155,0.8)",
                  },
                  {
                    offset: 1,
                    color: "rgba(43,58,155,0)",
                  },
                ],
                false
              ),
            },
          },
          data: [80, 60, 40, 90, 75],
        },
      ],
    });
    eChart1.resize({
      height: "auto",
      width: "auto",
    });

    const eChart2 = echarts.init(document.getElementById("chart2-bottom")!);
    eChart2.setOption({
      tooltip: {
        trigger: "axis",
        backgroundColor: "transition",
        textStyle: {
          color: "#00D7E9",
        },
        borderColor: "#00D7E9",
        borderWidth: 1,
        axisPointer: {
          type: "shadow",
          shadowStyle: {
            color: "rgba(14,34,68,.5)",
            shadowColor: "rgba(14,34,68,.1)",
            shadowBlur: 5,
          },
        },
      },
      legend: {
        data: ["上月", "本月"],
        top: "5%",
        textStyle: {
          color: "#fff",
          fontSize: "12",
        },
        itemGap: 35,
      },
      grid: {
        top: "15%",
        left: "2%",
        right: "2%",
        bottom: "5%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["1月", "2月", "3月", "4月", "5月", "6月"],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 1,
              type: "solid",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            // rotate:50,
            show: true,
            splitNumber: 15,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            //formatter: '{value} %'
            show: true,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1	)",
              width: 1,
              type: "solid",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      ],
      series: [
        {
          name: "上月",
          type: "line",
          smooth: false,
          data: [8, 16, 10, 12, 7, 9],

          itemStyle: {
            normal: {
              color: "#2f89cf",
              opacity: 1,

              barBorderRadius: 5,
            },
          },

          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(89,47,180,0.8)",
                  },
                  {
                    offset: 1,
                    color: "rgba(89,47,180,0)",
                  },
                ],
                false
              ),
            },
          },
        },
        {
          name: "本月",
          type: "line",
          smooth: false,
          data: [5, 12, 6, 4, 5, 12],
          barWidth: "15",
          itemStyle: {
            normal: {
              color: "#62c98d",
              opacity: 1,
              barBorderRadius: 5,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(43,58,155,0.8)",
                  },
                  {
                    offset: 1,
                    color: "rgba(43,58,155,0)",
                  },
                ],
                false
              ),
            },
          },
        },
      ],
    });
    eChart2.resize({
      height: "auto",
      width: "auto",
    });

    window.addEventListener("resize", function () {
      eChart1.resize();
      eChart2.resize();
    });
  };

  return (
    <Grid
      container
      style={{
        marginTop: 0,
      }}
      spacing={2}
    >
      <Grid item xs={6}>
        <div className={classes.orderStatistics}>
          <Stack direction="row" justifyContent={"center"}>
            <img className={classes.boxtitleicon} src={box_title}></img>
            <div className={classes.boxtitle}>订单增长趋势</div>
          </Stack>
          <div id="chart1-bottom" className={classes.chart}></div>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className={classes.userStatistics}>
          <Stack direction="row" justifyContent={"center"}>
            <img className={classes.boxtitleicon} src={box_title}></img>
            <div className={classes.boxtitle}>用户增长趋势</div>
          </Stack>
          <div id="chart2-bottom" className={classes.chart}></div>
        </div>
      </Grid>
    </Grid>
  );
};

export default bottomLayout;
