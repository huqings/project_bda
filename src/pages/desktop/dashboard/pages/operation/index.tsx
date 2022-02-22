import react, { useEffect } from "react";
import * as echarts from "echarts";
import classNames from "./styles.module.less";

import Stack from "@mui/material/Stack";
import box_title from "@/assets/images/box_title.png";

import map_china from "@/mock/map_china.json";

const Index = (params: any) => {
  useEffect(() => {
    requestInit();
  }, []);

  const requestInit = () => {
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

    const layout_top_chart_left_f = echarts.init(
      document.getElementById("layout-top-chart-left-f")!
    );
    layout_top_chart_left_f.setOption({
      legend: {
        top: "20rem",
        right: "20rem",
        orient: "vertical",
        textStyle: {
          color: "#59BAF2",
        },
        itemStyle: {},
      },
      dataset: {
        source: [
          ["已处理", 30],
          ["未处理", 15],
          ["处理中", 15],
        ],
      },
      series: [
        {
          type: "pie",
          radius: ["35%", "60%"],
          label: {
            show: false,
            position: "center",
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
                const colorList = ["#FEC715", "#38BC81", "#FC4D4E"];
                return colorList[params.dataIndex];
              },
            },
          },
          emphasis: {
            label: {
              show: true,
              color: "#59BAF2",
              formatter: "{c}个\n设备总数",
            },
          },
        },
      ],
    });
    layout_top_chart_left_f.resize({
      height: "auto",
      width: "auto",
    });

    const layout_top_chart_left_s = echarts.init(
      document.getElementById("layout-top-chart-left-s")!
    );
    layout_top_chart_left_s.setOption({
      legend: {
        top: "20rem",
        right: "20rem",
        orient: "vertical",
        textStyle: {
          color: "#59BAF2",
        },
        itemStyle: {},
      },
      dataset: {
        source: [
          ["圈内", 30],
          ["维修仓", 15],
          ["处罚点", 15],
          ["圈外", 15],
          ["圈内", 15],
        ],
      },
      series: [
        {
          type: "pie",
          radius: ["35%", "60%"],
          label: {
            show: false,
            position: "center",
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
                const colorList = [
                  "#60D2FF",
                  "#2352FD",
                  "#F4CA82",
                  "#7D42FD",
                  "#6AFA8F",
                ];
                return colorList[params.dataIndex];
              },
            },
          },
          emphasis: {
            label: {
              show: true,
              color: "#59BAF2",
              formatter: "{c}个\n设备总数",
            },
          },
        },
      ],
    });
    layout_top_chart_left_s.resize({
      height: "auto",
      width: "auto",
    });

    const bottom_left_echart = echarts.init(
      document.getElementById("bottom_left_echart")!
    );
    bottom_left_echart.setOption({
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
    bottom_left_echart.resize({
      height: "auto",
      width: "auto",
    });

    const bottom_right_echart = echarts.init(
      document.getElementById("bottom_right_echart")!
    );
    bottom_right_echart.setOption({
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
    bottom_right_echart.resize({
      height: "auto",
      width: "auto",
    });

    window.addEventListener("resize", function () {
      mapChart.resize();
      layout_top_chart_left_f.resize();
      layout_top_chart_left_s.resize();
      bottom_left_echart.resize();
      bottom_right_echart.resize();
    });
  };

  return (
    <div>
      <div className={classNames.root}>
        <div className={classNames.container}>
          <div className={classNames.layoutTop}>
            <div className={classNames.left}>
              <div className={classNames.widget}>
                <Stack direction="row" justifyContent={"center"}>
                  <img
                    className={classNames.box_title_img}
                    src={box_title}
                  ></img>
                  <div className={classNames.box_title}>故障车辆</div>
                </Stack>
                <div
                  id="layout-top-chart-left-f"
                  className={classNames.chart}
                ></div>
              </div>
              <div className={classNames.widget}>
                <Stack direction="row" justifyContent={"center"}>
                  <img
                    className={classNames.box_title_img}
                    src={box_title}
                  ></img>
                  <div className={classNames.box_title}>调度车辆</div>
                </Stack>
                <div
                  id="layout-top-chart-left-s"
                  className={classNames.chart}
                ></div>
              </div>
            </div>
            <div className={classNames.middle}>
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
            <div className={classNames.right}>
              <div className={classNames.widget}>
                <Stack direction="row" justifyContent={"center"}>
                  <img
                    className={classNames.box_title_img}
                    src={box_title}
                  ></img>
                  <div className={classNames.box_title}>超区车辆</div>
                </Stack>
                <div className={classNames.box_content}>
                  <div className={classNames.table_header}>
                    <span>序号</span>
                    <span>时间</span>
                    <span>车辆编号</span>
                    <span>位置</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                </div>
              </div>
              <div className={classNames.widget}>
                <Stack direction="row" justifyContent={"center"}>
                  <img
                    className={classNames.box_title_img}
                    src={box_title}
                  ></img>
                  <div className={classNames.box_title}>处罚点车辆</div>
                </Stack>
                <div className={classNames.box_content}>
                  <div className={classNames.table_header}>
                    <span>序号</span>
                    <span>时间</span>
                    <span>车辆编号</span>
                    <span>位置</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                  <div className={classNames.table_item}>
                    <span>1</span>
                    <span>11-18 12:23</span>
                    <span>4301234554</span>
                    <span>长沙市芙蓉区古汉国际...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classNames.layoutBottom}>
            <Stack spacing={2} direction="row">
              <div className={classNames.bottom_left_echart}>
                <Stack direction="row" justifyContent={"center"}>
                  <img
                    className={classNames.box_title_img}
                    src={box_title}
                  ></img>
                  <div className={classNames.box_title}>运营换电概览</div>
                </Stack>
                <div id="bottom_left_echart" className={classNames.chart}></div>
              </div>
              <div className={classNames.bottom_right_echart}>
                <Stack direction="row" justifyContent={"center"}>
                  <img
                    className={classNames.box_title_img}
                    src={box_title}
                  ></img>
                  <div className={classNames.box_title}>出仓维修</div>
                </Stack>
                <div
                  id="bottom_right_echart"
                  className={classNames.chart}
                ></div>
              </div>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
