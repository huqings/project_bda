import React, { useState, useEffect, Fragment } from "react";
import styles from "./styles.module.less";
import { Stack } from "@mui/material";
import topBackground from "@/assets/images/l_top_bg.png";
import iconCloud from "@/assets/images/icon_cloud.png";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

export interface Props {
  data1?: number;
  data2?: number;
  data3?: number;
  data4?: number;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  color: 'white',
  bgcolor: "#15318a",
  border: "1px solid #39dff9",
  boxShadow: 24,
  p: 1,
};

const topLayout = (props: Props) => {
  useEffect(() => {}, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.top}>
      <img src={topBackground} alt="" />
      <div className={styles.box}>
        <Stack direction="row" justifyContent={"space-between"}>
          <Stack direction="row">
            <div
              className={styles.logoText}
            >
              小黄鸭出行
            </div>
            <div className={styles.selectText}>
              <Button
                onClick={handleOpen}
                endIcon={
                  <svg
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
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
            <div
              className={styles.topData}
              style={{
                marginLeft: "2.5rem",
              }}
            >
              <Stack direction="column">
                <span className={styles.title}>骑行总人数</span>
                <Stack direction="row" alignItems={"flex-end"}>
                  <span className={styles.description}>15891</span>
                  <span className={styles.subtitle}>人</span>
                </Stack>
              </Stack>
            </div>
            <div
              className={styles.topData}
              style={{
                marginLeft: "1.5rem",
              }}
            >
              <Stack direction="column">
                <span className={styles.title}>骑行总时长</span>
                <Stack direction="row" alignItems={"flex-end"}>
                  <span className={styles.description}>15891</span>
                  <span className={styles.subtitle}>H</span>
                </Stack>
              </Stack>
            </div>
            <div
              className={styles.topData}
              style={{
                marginLeft: "1.8rem",
              }}
            >
              <Stack direction="column">
                <span className={styles.title}>累计出行次数</span>
                <Stack direction="row" alignItems={"flex-end"}>
                  <span className={styles.description}>15891</span>
                  <span className={styles.subtitle}>次</span>
                </Stack>
              </Stack>
            </div>
            <div
              className={styles.topData}
              style={{
                marginLeft: "2.0rem",
              }}
            >
              <Stack direction="column">
                <span className={styles.title}>累计骑行里程</span>
                <Stack direction="row" alignItems={"flex-end"}>
                  <span className={styles.description}>15891</span>
                  <span className={styles.subtitle}>km</span>
                </Stack>
              </Stack>
            </div>
          </Stack>
          <div className={styles.cloud}>
            <Stack direction="row">
              <div className={styles.cloudLeft}>
                <Stack direction="column">
                  <span className={styles.cloudText}>18:08:08</span>
                  <span className={styles.cloudTextGey}>2021.10.14</span>
                </Stack>
              </div>
              <div className={styles.cloudMiddle}></div>
              <Stack direction="row">
                <img src={iconCloud} className={styles.cloudImg} alt="" />
                <Stack direction="column">
                  <span className={styles.cloudText}>PM 2.5</span>
                  <span className={styles.cloudText}>27℃</span>
                </Stack>
              </Stack>
            </Stack>
          </div>
        </Stack>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <p>长沙市</p>
          <p>贵州市</p>
        </Box>
      </Modal>
    </div>
  );
};

export default topLayout;
