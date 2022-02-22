import React, { Fragment } from "react";
import LoadingStyle from "./index.module.less";

const Loading = () => {
  return (
    <Fragment>
      <div className={LoadingStyle.box}>
        <div className={LoadingStyle.top__text}>======</div>
        <div className={LoadingStyle.center_text}>努力加载中，请稍后...</div>
      </div>
    </Fragment>
  );
};

export default Loading;
