import react, { useEffect, useState } from "react";

import * as echarts from "echarts";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import classNames from "./styles.module.less";
import box_title from "@/assets/images/box_title.png";
import icon_trend from "@/assets/images/icon_trend.png";
import map_china from "@/mock/map_china.json";
import map_changsha from "@/mock/map_changsha.json";
import { ClassNames } from "@emotion/react";

interface IParams {}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  color: "white",
  bgcolor: "#15318a",
  border: "1px solid #39dff9",
  boxShadow: 24,
  p: 1,
};

const Index = (params: IParams) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const mapChart = echarts.init(document.getElementById("chart-map")!);
    const mapJson: any = map_china;
    echarts.registerMap("map", mapJson);

    const datas = [
      { name: "长沙", value: [112.93, 28.23, 421] },
      { name: "广州", value: [113.23, 23.16, 277] },
      { name: "武汉", value: [114.31, 30.52, 273] },
    ];

    mapChart.setOption({
      title: {
        show: false,
      },
      tooltip: {
        trigger: "item",
        showDelay: 0,
        transitionDuration: 0.2,
      },
      visualMap: {
        show: false,
      },
      toolbox: {
        show: false,
      },
      geo: {
        top: "30%",
        map: "map",
        zoom: 1.4,
        label: {
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
            areaColor: "rgba(2,37,101,.8)",
          },
        },
      },
      series: [],
    });

    mapChart.resize({
      height: "auto",
      width: "auto",
    });

    const eChartLeft = echarts.init(document.getElementById("chart-left")!);
    eChartLeft.setOption({
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
    eChartLeft.resize({
      height: "auto",
      width: "auto",
    });

    const chart_middle_l = echarts.init(
      document.getElementById("chart-middle-l")!
    );
    chart_middle_l.setOption({
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
    chart_middle_l.resize({
      height: "auto",
      width: "auto",
    });

    const chart_middle_r = echarts.init(
      document.getElementById("chart-middle-r")!
    );
    chart_middle_r.setOption({
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
    chart_middle_r.resize({
      height: "auto",
      width: "auto",
    });

    const chart_right = echarts.init(document.getElementById("chart-right")!);
    chart_right.setOption({
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
    chart_right.resize({
      height: "auto",
      width: "auto",
    });

    window.addEventListener("resize", function () {
      mapChart.resize();
      eChartLeft.resize();
      chart_middle_l.resize();
      chart_middle_r.resize();
      chart_right.resize();
    });
  };

  return (
    <div className={classNames.root}>
      <div className={classNames.container}>
        <div className={classNames.chartMap}>
          <div id="chart-map" className={classNames.map}></div>
        </div>
        <div className={classNames.selectAreaBox}>
          <div className={classNames.area}>
            <Button
              onClick={handleOpen}
              endIcon={
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                >
                  <path
                    d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
                    fill="#ffffff"
                  ></path>
                </svg>
              }
            >
              {"全国"}
            </Button>
          </div>
          <div className={classNames.number}>
            <div className={classNames.up}>
              <span>全部车辆</span>
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
                <span>2021-01-10 12:28:07</span>
              </Stack>
            </div>
            <div className={classNames.down}>
              <div className={classNames.text}>8</div>
              <div className={classNames.text}>8</div>
              <div className={classNames.text}>8</div>
              <div className={classNames.dot}>,</div>
              <div className={classNames.text}>8</div>
              <div className={classNames.text}>8</div>
              <div className={classNames.text}>8</div>
              <div className={classNames.dot}>,</div>
              <div className={classNames.text}>8</div>
              <div className={classNames.text}>8</div>
              <div className={classNames.text}>8</div>
              <div className={classNames.unit}>辆</div>
            </div>
          </div>
          <div className={classNames.filterBox}>
            <div className={classNames.item}>
              <div
                className={classNames.dot}
                style={{
                  backgroundColor: "#37B87D",
                }}
              ></div>
              <div>A点</div>
              <div>进车辆≥</div>
              <div>出车辆≥</div>
            </div>
            <div className={classNames.item}>
              <div
                className={classNames.dot}
                style={{
                  backgroundColor: "#FDCF6C",
                }}
              ></div>
              <div>B点</div>
              <div>进车辆≥</div>
              <div>出车辆≥</div>
            </div>
            <div className={classNames.item}>
              <div
                className={classNames.dot}
                style={{
                  backgroundColor: "#FC4C4E",
                }}
              ></div>
              <div>C点</div>
              <div>进车辆≥</div>
              <div>出车辆≥</div>
            </div>
            <div className={classNames.action}>
              <Button
                variant="outlined"
                startIcon={
                  <svg
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z"
                      fill="#01D8FF"
                    ></path>
                  </svg>
                }
              >
                查询
              </Button>
              <Button variant="outlined">全部站点</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames.container}>
        <div className={classNames.chartLeft}>
          <Stack direction="row" justifyContent={"center"}>
            <img className={classNames.box_title_img} src={box_title}></img>
            <div className={classNames.box_title}>
              <img src={icon_trend} alt="" />
              热门站点排行
            </div>
          </Stack>
          <div id="chart-left" className={classNames.chart}></div>
        </div>
        <div className={classNames.chartMiddleL}>
          <Stack direction="row" justifyContent={"center"}>
            <img className={classNames.box_title_img} src={box_title}></img>
            <div className={classNames.box_title}>
              <img src={icon_trend} alt="" />
              闲置站点排行
            </div>
          </Stack>
          <div id="chart-middle-l" className={classNames.chart}></div>
        </div>
        <div className={classNames.chartMiddleR}>
          <Stack direction="row" justifyContent={"center"}>
            <img className={classNames.box_title_img} src={box_title}></img>
            <div className={classNames.box_title}>
              <img src={icon_trend} alt="" />
              进车辆站点排行
            </div>
          </Stack>
          <div id="chart-middle-r" className={classNames.chart}></div>
        </div>
        <div className={classNames.chartRight}>
          <Stack direction="row" justifyContent={"center"}>
            <img className={classNames.box_title_img} src={box_title}></img>
            <div className={classNames.box_title}>
              <img src={icon_trend} alt="" />
              出车辆站点排行
            </div>
          </Stack>
          <div id="chart-right" className={classNames.chart}></div>
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <p>长沙市</p>
          <p>贵州市</p>
        </Box>
      </Modal>
    </div>
  );
};

export default Index;
