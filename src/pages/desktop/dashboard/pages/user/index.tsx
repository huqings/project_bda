import react, { useEffect } from "react";
import * as echarts from "echarts";
import Stack from "@mui/material/Stack";
import classNames from "./styles.module.less";

import btn_register_user from "@/assets/images/btn_register_user.png";
import btn_active_user from "@/assets/images/btn_active_user.png";
import btn_add_user from "@/assets/images/btn_add_user.png";
import box_title from "@/assets/images/box_title.png";

import map_china from "@/mock/map_china.json";

const Index = (params: any) => {
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const mapChart = echarts.init(document.getElementById("chart-map")!);
    const mapJson: any = map_china;
    echarts.registerMap("map", mapJson);

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
        top: "25%",
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

    const eChart1 = echarts.init(document.getElementById("user-chart1")!);
    eChart1.setOption({
      tooltip: {
        trigger: "item",
        textStyle: {
          color: "#5EBBEC",
        },
        backgroundColor: "transition",
        borderColor: "#5EBBEC",
      },
      color: [
        "#7D4CF9",
        "#E433F8",
        "#40CFE7",
        "#2859F9",
        "#F2EAEA",
        "#FFA884",
        "#FF6836",
        "#D13808",
        "#7A270E",
      ],
      legend: {
        top: "5%",
        show: true,
        right: 20,
        orient: "vertical",
        textStyle: {
          color: "#5EBBEC",
        },
      },
      series: [
        {
          name: "数据",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "18",
              color: "#5EBBEC",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 20, name: "5分钟以下" },
            { value: 18, name: "10分钟以下" },
            { value: 32, name: "20分钟以下" },
            { value: 15, name: "60分钟以下" },
          ],
        },
      ],
    });
    eChart1.resize({
      height: "auto",
      width: "auto",
    });

    const eChart3 = echarts.init(document.getElementById("user-chart3")!);
    eChart3.setOption({
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

    const eChart4 = echarts.init(document.getElementById("user-chart4")!);
    eChart4.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        show: false,
        data: [
          "Direct",
          "Marketing",
          "Search Engine",
          "Email",
          "Union Ads",
          "Video Ads",
          "Baidu",
          "Google",
          "Bing",
          "Others",
        ],
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          selectedMode: "single",
          radius: ["15%", "30%"],
          label: {
            show: false,
            position: "inner",
            fontSize: 14,
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1548, name: "Search Engine" },
            { value: 775, name: "Direct" },
            { value: 679, name: "Marketing", selected: true },
          ],
        },
        {
          name: "Access From",
          type: "pie",
          radius: ["45%", "60%"],
          labelLine: {
            show: false,
            length: 30,
          },
          label: {
            show: false,
            formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
            backgroundColor: "#F6F8FC",
            borderColor: "#8C8D8E",
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              a: {
                color: "#6E7079",
                lineHeight: 22,
                align: "center",
              },
              hr: {
                borderColor: "#8C8D8E",
                width: "100%",
                borderWidth: 1,
                height: 0,
              },
              b: {
                color: "#4C5058",
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: 33,
              },
              per: {
                color: "#fff",
                backgroundColor: "#4C5058",
                padding: [3, 4],
                borderRadius: 4,
              },
            },
          },
          data: [
            { value: 1048, name: "Baidu" },
            { value: 335, name: "Direct" },
            { value: 310, name: "Email" },
            { value: 251, name: "Google" },
            { value: 234, name: "Union Ads" },
            { value: 147, name: "Bing" },
            { value: 135, name: "Video Ads" },
            { value: 102, name: "Others" },
          ],
        },
      ],
    });
    eChart4.resize({
      height: "auto",
      width: "auto",
    });

    const eChart5 = echarts.init(document.getElementById("user-chart5")!);
    eChart5.setOption({
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
    eChart5.resize({
      height: "auto",
      width: "auto",
    });

    window.addEventListener("resize", function () {
      mapChart.resize();
      eChart1.resize();
      eChart3.resize();
      eChart4.resize();
      eChart5.resize();
    });
  };

  return (
    <div className={classNames.root}>
      <div className={classNames.containter}>
        <div className={classNames.layoutTop}>
          <Stack spacing={0} direction="row">
            <div className={classNames.chartLeft}>
              <Stack direction="row" justifyContent={"center"}>
                <img className={classNames.box_title_img} src={box_title}></img>
                <div className={classNames.box_title}>用车情况统计</div>
              </Stack>
              <div id="user-chart1" className={classNames.chart}></div>
            </div>
            <div className={classNames.chartMiddle}>
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
              <div id="chart-map" className={classNames.map}></div>
            </div>
            <div className={classNames.chartRight}>
              <div className={classNames.userStatistics}>
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="space-around"
                >
                  <Stack direction={"row"} alignItems="flex-start">
                    <img
                      className={classNames.usericon}
                      src={btn_register_user}
                    />
                    <Stack direction={"column"}>
                      <span className={classNames.title}>注册用户总数</span>
                      <span
                        className={classNames.description}
                        style={{
                          color: "#EB4B40",
                        }}
                      >
                        43277844 →2%
                      </span>
                    </Stack>
                  </Stack>
                  <Stack direction={"row"} alignItems="flex-start">
                    <img
                      className={classNames.usericon}
                      src={btn_active_user}
                    />
                    <Stack direction={"column"}>
                      <span className={classNames.title}>活跃用户总数</span>
                      <span
                        className={classNames.description}
                        style={{
                          color: "#FDE802",
                        }}
                      >
                        43277844 →2%
                      </span>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="space-around"
                >
                  <Stack direction={"row"} alignItems="flex-start">
                    <img
                      className={classNames.usericon}
                      src={btn_active_user}
                    />
                    <Stack direction={"column"}>
                      <span className={classNames.title}>新增用户总数</span>
                      <span
                        className={classNames.description}
                        style={{
                          color: "#FDE802",
                        }}
                      >
                        43277844 →2%
                      </span>
                    </Stack>
                  </Stack>
                  <Stack direction={"row"} alignItems="flex-start">
                    <img className={classNames.usericon} src={btn_add_user} />
                    <Stack direction={"column"}>
                      <span className={classNames.title}>实名认证</span>
                      <span
                        className={classNames.description}
                        style={{
                          color: "#B357F4",
                        }}
                      >
                        43277844 →2%
                      </span>
                    </Stack>
                  </Stack>
                </Stack>
              </div>
              <Stack direction="row" justifyContent={"center"}>
                <img className={classNames.box_title_img} src={box_title}></img>
                <div className={classNames.box_title}>活跃用户统计</div>
              </Stack>
              <div id="user-chart3" className={classNames.chart}></div>
            </div>
          </Stack>
        </div>
      </div>
      <div className={classNames.containter}>
        <div className={classNames.layoutBottom}>
          <Stack spacing={2} direction="row">
            <div className={classNames.chartBottomLeft}>
              <Stack direction="row" justifyContent={"center"}>
                <img className={classNames.box_title_img} src={box_title}></img>
                <div className={classNames.box_title}>使用情况分布</div>
              </Stack>
              <div id="user-chart4" className={classNames.chart}></div>
            </div>
            <div className={classNames.chartBottomRight}>
              <Stack direction="row" justifyContent={"center"}>
                <img className={classNames.box_title_img} src={box_title}></img>
                <div className={classNames.box_title}>骑行时段趋势</div>
              </Stack>
              <div id="user-chart5" className={classNames.chart}></div>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Index;
