import React, { useState, useEffect, Fragment } from "react";
import * as echarts from "echarts";
import classes from "./styles.module.less";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import btn_register_user from "@/assets/images/btn_register_user.png";
import btn_active_user from "@/assets/images/btn_active_user.png";
import btn_add_user from "@/assets/images/btn_add_user.png";
import box_title from "@/assets/images/box_title.png";

export interface Props {
  data1?: number;
  data2?: number;
  data3?: number;
  data4?: number;
}

const leftLayout = (props: Props) => {
  useEffect(() => {
    requestInit();
  }, []);

  const requestInit = () => {
    const eChart = echarts.init(document.getElementById("chart1-left")!);
    eChart.setOption({
      color: ["#00A15F"],
      radar: {
        // shape: 'circle',
        indicator: [
          { name: "长沙市", max: 6500 },
          { name: "贵州市", max: 16000 },
          { name: "花都市", max: 30000 },
          { name: "冷水市", max: 38000 },
          { name: "零陵市", max: 52000 },
        ],
        name: {
          textStyle: {
            color: '#72ACD1',
          },
        },
        splitArea: {
          areaStyle: {
            color: ['#0C245E', '#0C245E', '#0C245E', '#0C245E'],
          }
        },
        axisLine: {
          lineStyle: {
            color: '#073872'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#073872'
          }
        }
      },
      series: [
        {
          type: "radar",
          data: [
            {
              name: "A",
              value: [4200, 3000, 20000, 35000, 50000],
              areaStyle: {
                color: '#00A15F',
                opacity: .3
              }
            },
          ],
        },
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
    <Fragment>
      <div className={classes.userStatistics}>
        <Stack spacing={2} direction="row" justifyContent="space-around">
          <Stack direction={"row"} alignItems="flex-start">
            <img className={classes.usericon} src={btn_register_user} />
            <Stack direction={"column"}>
              <span className={classes.title}>注册用户总数</span>
              <span
                className={classes.description}
                style={{
                  color: "#EB4B40",
                }}
              >
                43277844 →2%
              </span>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems="flex-start">
            <img className={classes.usericon} src={btn_active_user} />
            <Stack direction={"column"}>
              <span className={classes.title}>活跃用户总数</span>
              <span
                className={classes.description}
                style={{
                  color: "#FDE802",
                }}
              >
                43277844 →2%
              </span>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems="flex-start">
            <img className={classes.usericon} src={btn_add_user} />
            <Stack direction={"column"}>
              <span className={classes.title}>新增用户总数</span>
              <span
                className={classes.description}
                style={{
                  color: "#B357F4",
                }}
              >
                43277844 →2%
              </span>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent={"center"}>
          <img className={classes.boxtitleicon} src={box_title}></img>
          <div className={classes.boxtitle}>实时用户订单</div>
        </Stack>
        <Stack direction="row" justifyContent={"space-between"}>
          <span className={classes.boxlisttitle}>姓名</span>
          <span className={classes.boxlisttitle}>骑行起始时间</span>
          <span className={classes.boxlisttitle}>骑行时长</span>
          <span className={classes.boxlisttitle}>本单费用</span>
          <span className={classes.boxlisttitle}>骑行次数</span>
        </Stack>
        {["", "", "", "", ""].map((e, i) => {
          return (
            <Stack key={i} direction="row" justifyContent={"space-between"}>
              <span className={classes.boxlistitem}>谢**</span>
              <span className={classes.boxlistitem}>11-18 12:23</span>
              <span className={classes.boxlistitem}>12分钟</span>
              <span className={classes.boxlistitem}>¥ 3</span>
              <span className={classes.boxlistitem}>12次</span>
            </Stack>
          );
        })}
      </div>

      <div className={classes.hotCityStatistics}>
        <Stack direction="row" justifyContent={"center"}>
          <img className={classes.boxtitleicon} src={box_title}></img>
          <div className={classes.boxtitle}>热门城市骑行量</div>
        </Stack>
        <div id="chart1-left" className={classes.chart}></div>
        <Box pb={1} pt={1}>
          <Stack direction="row" justifyContent={"space-around"}>
            <Stack direction="column">
              <span className={classes.cityName}>长沙市</span>
              <span className={classes.cityNumber}>25886</span>
            </Stack>
            <Stack direction="column">
              <span className={classes.cityName}>长沙市</span>
              <span className={classes.cityNumber}>25886</span>
            </Stack>
            <Stack direction="column">
              <span className={classes.cityName}>长沙市</span>
              <span className={classes.cityNumber}>25886</span>
            </Stack>
            <Stack direction="column">
              <span className={classes.cityName}>长沙市</span>
              <span className={classes.cityNumber}>25886</span>
            </Stack>
            <Stack direction="column">
              <span className={classes.cityName}>长沙市</span>
              <span className={classes.cityNumber}>25886</span>
            </Stack>
          </Stack>
        </Box>
      </div>
    </Fragment>
  );
};

export default leftLayout;
