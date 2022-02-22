import React, { useState, useEffect, Fragment } from "react";
import * as echarts from "echarts";
import classes from "./style.module.less";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

import map_china from "@/mock/map_china.json";
import map_changsha from "@/mock/map_changsha.json";
import map_guangzhou from "@/mock/map_guangzhou.json";

export interface Props {
  data1?: number;
  data2?: number;
  data3?: number;
  data4?: number;
}

const middleLayout = (props: Props) => {
  useEffect(() => {
    requestInit();
  }, []);

  const requestInit = () => {
    const eChart = echarts.init(document.getElementById("middle-chart1")!);
    const mapJson: any = map_china;
    echarts.registerMap("map", mapJson);

    const datas = [
      { name: "长沙", value: [112.93, 28.23, 421] },
      { name: "广州", value: [113.23, 23.16, 277] },
      { name: "武汉", value: [114.31, 30.52, 273] },
    ];

    eChart.setOption({
      title: {
        show: false,
      },
      tooltip: {
        trigger: "item",
        showDelay: 0,
        transitionDuration: 0.2,
        backgroundColor: '#1e4c9c',
        textStyle: {
          color: '#ffffff'
        }
      },
      visualMap: {
        show: false,
      },
      toolbox: {
        show: false,
      },
      geo: {
        top: "180rem",
        map: "map",
        zoom: 1.4,
        label: {
          normal: {
            show: true,
            color: 'white'
          },
          emphasis: {
            show: false,
          },
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: "rgba(2,37,101,.5)",
            borderColor: "rgba(112,187,252,.5)",
          },
          emphasis: {
            areaColor: "#15328a",
          },
        },
      },
      series: [
        // {
        //   type: "map",
        //   mapType: "china",
        //   // layoutCenter: ["50%", "50%"],
        //   zoom: 1.2,
        //   roam: true,
        //   itemStyle: {
        //     normal: {
        //       areaColor: "#0c274b",
        //       borderColor: "#1cccff",
        //       borderWidth: 1,
        //     },
        //     emphasis: {
        //       areaColor: "#02102b",
        //       label: {
        //         color: "#fff",
        //       },
        //     },
        //   },
        // },
        // {
        //   type: "effectScatter",
        //   coordinateSystem: "geo",
        //   zlevel: 2,
        //   symbolSize: 10,
        //   rippleEffect: {
        //     //坐标点动画
        //     period: 3,
        //     scale: 5,
        //     brushType: "fill",
        //   },
        //   label: {
        //     normal: {
        //       show: false,
        //       position: "right",
        //       formatter: "{b}",
        //       color: "#b3e2f2",
        //       fontWeight: "bold",
        //       fontSize: 12,
        //     },
        //   },

        //   data: datas,
        //   itemStyle: {
        //     //坐标点颜色
        //     normal: {
        //       show: true,
        //       color: "#ff8003",
        //       shadowBlur: 20,
        //       shadowColor: "#fff",
        //     },
        //     emphasis: {
        //       areaColor: "#f00",
        //     },
        //   },
        // },
        // {
        //   type: "lines",
        //   zlevel: 3,
        //   symbol: "circle",
        //   symbolSize: [5, 5],
        //   color: "#ff8003",
        //   opacity: 1,
        //   label: {
        //     show: true,
        //     padding: [10, 20],
        //     color: "#fff",
        //     backgroundColor: "#1a3961",
        //     borderColor: "#aee9fb",
        //     borderWidth: 1,
        //     borderRadius: 6,
        //     formatter(params: any) {
        //       let arr = [
        //         params.name,
        //         "总数：" + params.value + "辆",
        //       ];
        //       return arr.join("\n");
        //     },
        //     textStyle: {
        //       align: "left",
        //       lineHeight: 20,
        //     },
        //   },
        //   lineStyle: {
        //     type: "solid",
        //     color: "#fff",
        //     width: 0.5,
        //     opacity: 1,
        //   },
        //   data: [
        //     {
        //       name: "长沙",
        //       coords: [
        //         [112.93, 28.23],
        //         [120.24, 16.55],
        //       ],
        //       value: 421,
        //     },
        //   ],
        // },
      ],
    });

    eChart.resize({
      height: "auto",
      width: "auto",
    });

    window.addEventListener("resize", function () {
      eChart.resize();
    });
  };

  return (
    <div className={classes.map}>
      <Stack direction={"column"}>
        <Stack direction={"row"} justifyContent="center">
          <span className={classes.title}>全部车辆</span>
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent={"center"}
          >
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
            >
              <path
                d="M971.733333 417.493333a463.573333 463.573333 0 0 0-27.306666-88.106666 450.56 450.56 0 0 0-42.666667-79.786667 42.666667 42.666667 0 1 0-70.613333 47.786667 400.213333 400.213333 0 0 1 35.413333 64 386.133333 386.133333 0 0 1 21.333333 72.106666 386.346667 386.346667 0 0 1-21.333333 226.773334 393.6 393.6 0 0 1-35.413333 65.28 384 384 0 0 1-103.893334 103.893333 382.72 382.72 0 0 1-429.226666 0A386.773333 386.773333 0 0 1 158.08 661.333333a386.133333 386.133333 0 0 1-21.333333-72.106666 386.346667 386.346667 0 0 1 21.333333-226.56 393.6 393.6 0 0 1 35.413333-65.28 384 384 0 0 1 103.893334-103.893334 382.72 382.72 0 0 1 429.226666 0 42.666667 42.666667 0 1 0 47.786667-70.613333 458.24 458.24 0 0 0-79.786667-42.666667 463.573333 463.573333 0 0 0-88.106666-27.306666 469.333333 469.333333 0 0 0-189.013334 0 463.573333 463.573333 0 0 0-88.106666 27.306666 458.24 458.24 0 0 0-79.786667 42.666667 463.146667 463.146667 0 0 0-126.72 126.72 450.56 450.56 0 0 0-42.666667 79.786667 469.333333 469.333333 0 0 0 0 365.226666 450.56 450.56 0 0 0 42.666667 79.786667 463.146667 463.146667 0 0 0 126.72 126.72 458.24 458.24 0 0 0 79.786667 42.666667 469.333333 469.333333 0 0 0 365.226666 0 458.24 458.24 0 0 0 79.786667-42.666667 463.146667 463.146667 0 0 0 126.72-126.72 450.56 450.56 0 0 0 42.666667-79.786667 469.333333 469.333333 0 0 0 27.306666-277.333333z"
                fill="#ffffff"
                p-id="2665"
              ></path>
              <path
                d="M512 512V256a42.666667 42.666667 0 0 0-85.333333 0v298.666667a42.666667 42.666667 0 0 0 42.666666 42.666666h298.666667a42.666667 42.666667 0 0 0 0-85.333333z"
                fill="#ffffff"
              ></path>
            </svg>
            <span className={classes.time}>2021-01-10 12:28:07</span>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent="center"
          alignItems={"flex-end"}
        >
          <div className={classes.dynamicNumber}>{5}</div>
          <div className={classes.dynamicNumber}>{8}</div>
          <div className={classes.dynamicNumber}>{5}</div>
          <div className={classes.dynamicDot}>{","}</div>
          <div className={classes.dynamicNumber}>{5}</div>
          <div className={classes.dynamicNumber}>{5}</div>
          <div className={classes.dynamicNumber}>{5}</div>
          <div className={classes.dynamicDot}>{","}</div>
          <div className={classes.dynamicNumber}>{5}</div>
          <div className={classes.dynamicNumber}>{5}</div>
          <div className={classes.dynamicUnit}>{"辆"}</div>
        </Stack>
      </Stack>
      <div id="middle-chart1" className={classes.chart}></div>
    </div>
  );
};

export default middleLayout;
