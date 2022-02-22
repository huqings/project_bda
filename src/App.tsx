import React, { useState, Fragment } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import TopWidget from "./pages/desktop/dashboard/components/topWidget";
import Routers from "./config/router";
import imgBackground from "./assets/images/bg.png";
import "./utils/flexible";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const [pageIndex, setPageIndex] = useState("");

  const onChangePage = (e: any) => {
    setPageIndex(e);
    navigate(`/${e}`);
  };

  return (
    <Fragment>
      <Box
        style={{
          background: `url("${imgBackground}")`,
        }}
        className={"container"}
      >
        <TopWidget
          title={"小黄鸭共享出行可视化平台"}
          pageIndex={pageIndex}
          changePage={onChangePage}
        />

      {<Routers />}
      </Box>
    </Fragment>
  );
}

export default App;
