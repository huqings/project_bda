import react, { useEffect } from "react";
import * as echarts from "echarts";
import classNames from "./styles.module.less";

import Stack from "@mui/material/Stack";
import box_title from "@/assets/images/box_title.png";
import icon_trend from "@/assets/images/icon_trend.png";

import map_china from "@/mock/map_china.json";
import map_changsha from "@/mock/map_changsha.json";
import map_guangzhou from "@/mock/map_guangzhou.json";

const Index = (params: any) => {
  useEffect(() => {
    requestInit();
  }, []);

  const requestInit = () => {
    const chartMap = echarts.init(document.getElementById("chartMap")!);
    const mapJson: any = map_china;
    echarts.registerMap("map", mapJson);

    const datas = [
      { name: "长沙", value: [112.93, 28.23, 421] },
      { name: "广州", value: [113.23, 23.16, 277] },
      { name: "武汉", value: [114.31, 30.52, 273] },
    ];

    chartMap.setOption({
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
        zoom: 1.8,
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
    });

    chartMap.resize({
      height: "auto",
      width: "auto",
    });

    const layout_top_left_echart1 = echarts.init(
      document.getElementById("layout_top_left_echart1")!
    );
    layout_top_left_echart1.setOption({
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
          radius: ["25%", "50%"],
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
                const colorList = ["#0096FF", "#006CFF", "#0041FB", "#04E0F9"];
                return colorList[params.dataIndex];
              },
            },
          },
          emphasis: {
            label: {
              show: true,
              color: "#59BAF2",
              formatter: "{b}\n{d}%",
            },
          },
        },
      ],
    });
    layout_top_left_echart1.resize({
      height: "auto",
      width: "auto",
    });
    const layout_top_left_echart2 = echarts.init(
      document.getElementById("layout_top_left_echart2")!
    );
    layout_top_left_echart2.setOption({
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
          radius: ["25%", "50%"],
          label: {
            show: false,
            position: "center",
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
              color: "#59BAF2",
              formatter: "{b}\n{d}%",
            },
          },
        },
      ],
    });
    layout_top_left_echart2.resize({
      height: "auto",
      width: "auto",
    });
    const layout_top_left_echart3 = echarts.init(
      document.getElementById("layout_top_left_echart3")!
    );
    layout_top_left_echart3.setOption({
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
          radius: ["25%", "50%"],
          label: {
            show: false,
            position: "center",
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
              color: "#59BAF2",
              formatter: "{b}\n{d}%",
            },
          },
        },
      ],
    });
    layout_top_left_echart3.resize({
      height: "auto",
      width: "auto",
    });
    const layout_top_left_echart4 = echarts.init(
      document.getElementById("layout_top_left_echart4")!
    );
    layout_top_left_echart4.setOption({
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
          radius: ["25%", "50%"],
          label: {
            show: false,
            position: "center",
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
              color: "#59BAF2",
              formatter: "{b}\n{d}%",
            },
          },
        },
      ],
    });
    layout_top_left_echart4.resize({
      height: "auto",
      width: "auto",
    });
    const layout_middle_left_echart = echarts.init(
      document.getElementById("layout_middle_left_echart")!
    );
    layout_middle_left_echart.setOption({
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
          ["正常", 30],
          ["告警", 15],
          ["离线", 15]
        ],
      },
      series: [
        {
          type: "pie",
          radius: ["35%", "60%"],
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
                const colorList = ["#2452FD", "#E71FFC", "#35CFE9"];
                return colorList[params.dataIndex];
              },
            },
          },
          emphasis: {
            label: {
              show: true,
              color: '#59BAF2',
              formatter : "{c}个\n设备总数"
            },
          },
        },
      ],
    });
    layout_middle_left_echart.resize({
      height: "auto",
      width: "auto",
    });
    const layout_middle_right_echart = echarts.init(
      document.getElementById("layout_middle_right_echart")!
    );
    layout_middle_right_echart.setOption({
      dataset: {
        source: [
          ["score", "amount", "product"],
          [57.1, 78254, "花都区"],
          [74.4, 41032, "衡南县"],
          [50.1, 12755, "衡阳县"],
          [89.7, 20145, "武冈市"],
          [68.1, 79146, "零陵区"],
          [19.6, 91852, "冷水滩"],
          [10.6, 101852, "长沙县"],
          [32.7, 20112, "长沙市"],
        ],
      },
      xAxis: { name: "amount", show: false },
      yAxis: {
        type: "category",
        axisLabel: {
          color: "white",
        },
      },
      visualMap: {
        show: false,
        orient: "horizontal",
        left: "center",
        min: 10,
        max: 100,
        text: ["High Score", "Low Score"],
        dimension: 0,
        inRange: {
          color: [
            "#00D7EC",
            "#7E42FF",
            "#F4C982",
            "#83F219",
            "#ED675C",
            "#E71FFA",
            "#1B66CB",
            "#FBECC5",
          ],
        },
      },
      series: [
        {
          type: "bar",
          encode: {
            x: "amount",
            y: "product",
          },
        },
      ],
    });
    layout_middle_right_echart.resize({
      height: "auto",
      width: "auto",
    });
    window.addEventListener("resize", function () {
      layout_top_left_echart1.resize();
      layout_top_left_echart2.resize();
      layout_top_left_echart3.resize();
      layout_top_left_echart4.resize();
      chartMap.resize();
      layout_middle_left_echart.resize();
      layout_middle_right_echart.resize();
    });
  };

  return (
    <div className={classNames.root}>
      <div className={classNames.container}>
        <div className={classNames.layout_top}>
          <div className={classNames.left_echart}>
            <Stack direction="row" justifyContent={"center"}>
              <img className={classNames.box_title_img} src={box_title}></img>
              <div className={classNames.box_title}>车辆信息</div>
            </Stack>
            <Stack direction="row" justifyContent={"space-between"}>
              <div
                id="layout_top_left_echart1"
                className={classNames.chart}
              ></div>
              <div
                id="layout_top_left_echart2"
                className={classNames.chart}
              ></div>
            </Stack>
            <Stack direction="row" justifyContent={"space-between"}>
              <div
                id="layout_top_left_echart3"
                className={classNames.chart}
              ></div>
              <div
                id="layout_top_left_echart4"
                className={classNames.chart}
              ></div>
            </Stack>
          </div>
          <div className={classNames.right_echart}>
            <div
              id="chartMap"
              className={classNames.chart}
            ></div>
          </div>
        </div>
        <div className={classNames.layout_middle}>
          <div className={classNames.left_echart}>
            <Stack direction="row" justifyContent={"center"}>
              <img className={classNames.box_title_img} src={box_title}></img>
              <div className={classNames.box_title}>告警状态</div>
            </Stack>
            <div
              id="layout_middle_left_echart"
              className={classNames.chart}
            ></div>
          </div>
          <div className={classNames.right_echart}>
            <Stack direction="row" justifyContent={"center"}>
              <img className={classNames.box_title_img} src={box_title}></img>
              <div className={classNames.box_title}>故障设备区域分布情况</div>
            </Stack>
            <div
              id="layout_middle_right_echart"
              className={classNames.chart}
            ></div>
          </div>
        </div>
        <div className={classNames.layout_bottom}>
          <div className={classNames.left_echart}>
            <Stack direction="row" justifyContent={"center"}>
              <img className={classNames.box_title_img} src={box_title}></img>
              <div className={classNames.box_title}><img src={icon_trend} alt='' />骑行里程排名前5位</div>
            </Stack>
            <div className={classNames.box_content}>
              <div className={classNames.table_header}>
                <span>排名</span>
                <span>车牌号</span>
                <span>里程数（km）</span>
              </div>
              <div className={classNames.table_item}>
                <span>1</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
              <div className={classNames.table_item}>
                <span>2</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
              <div className={classNames.table_item}>
                <span>3</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
              <div className={classNames.table_item}>
                <span>4</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
              <div className={classNames.table_item}>
                <span>5</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
            </div>
          </div>
          <div className={classNames.middle_f_echart}>
            <Stack direction="row" justifyContent={"center"}>
              <img className={classNames.box_title_img} src={box_title}></img>
              <div className={classNames.box_title}><img src={icon_trend} alt='' />骑行次数车辆前5位</div>
            </Stack>
            <div className={classNames.box_content}>
              <div className={classNames.table_header}>
                <span>排名</span>
                <span>车牌号</span>
                <span>次数（km）</span>
              </div>
              <div className={classNames.table_item}>
                <span>1</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
              <div className={classNames.table_item}>
                <span>2</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
              <div className={classNames.table_item}>
                <span>3</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
              <div className={classNames.table_item}>
                <span>4</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
              <div className={classNames.table_item}>
                <span>5</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
            </div>
          </div>
          <div className={classNames.middle_s_echart}>
            <Stack direction="row" justifyContent={"center"}>
              <img className={classNames.box_title_img} src={box_title}></img>
              <div className={classNames.box_title}><img src={icon_trend} alt='' />骑行时长排名前5位</div>
            </Stack>
            <div className={classNames.box_content}>
              <div className={classNames.table_header}>
                <span>排名</span>
                <span>车牌号</span>
                <span>时长（km）</span>
              </div>
              <div className={classNames.table_item}>
                <span>1</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
              <div className={classNames.table_item}>
                <span>2</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
              <div className={classNames.table_item}>
                <span>3</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
              <div className={classNames.table_item}>
                <span>4</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
              <div className={classNames.table_item}>
                <span>5</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
            </div>
          </div>
          <div className={classNames.right_echart}>
            <Stack direction="row" justifyContent={"center"}>
              <img className={classNames.box_title_img} src={box_title}></img>
              <div className={classNames.box_title}><img src={icon_trend} alt='' />无订单车辆排名前5位</div>
            </Stack>
            <div className={classNames.box_content}>
              <div className={classNames.table_header}>
                <span>排名</span>
                <span>车牌号</span>
                <span>天数</span>
              </div>
              <div className={classNames.table_item}>
                <span>1</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
              <div className={classNames.table_item}>
                <span>2</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
              <div className={classNames.table_item}>
                <span>3</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
              <div className={classNames.table_item}>
                <span>4</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
              <div className={classNames.table_item}>
                <span>5</span>
                <span>湘A.25731</span>
                <span>123.8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
