import react, { useEffect, useState, Fragment } from "react";
import {
  useLocation,
  useNavigate
} from "react-router-dom";
import classNames from "./styles.module.less";

import TopBg from "@/assets/images/top_bg.png";
import TopBtn from "@/assets/images/top_btn.png";
import TopBtnSelected from "@/assets/images/top_btn_selected.png";
import TopBtnRight from "@/assets/images/top_btn_right.png";
import TopBtnSelectedRight from "@/assets/images/top_btn_selected_right.png";

interface IParams {
  pageIndex: string;
  changePage: any;
  title: string;
}

enum pageNameEnum {
  user = 'user',
  bicycle = 'bicycle',
  site = 'site',
  operation = 'operation'
}

const Index = (params: IParams) => {
  let location = useLocation()
  const navigate = useNavigate();

  const [ pageName, setPageName ] = useState('')

  useEffect(() => {
    setPageName(location.pathname.slice(1))
  }, [location.pathname]);

  const toNavigate = () => {
    navigate("/")
  }

  return (
    <Fragment>
      <div className={classNames.top_box}>
        <div className={classNames.top_img}>
          <img src={TopBg} alt=""></img>
        </div>
        <div className={classNames.top_text}>
          <p onClick={toNavigate}>{params.title}</p>
        </div>
      </div>
      <div className={classNames.top_btn}>
        <div className={classNames.top_btn_img}>
          <img
            src={pageName === (pageNameEnum.user) ? TopBtnSelected : TopBtn}
            alt=""
          ></img>
          <img
            src={pageName === (pageNameEnum.bicycle) ? TopBtnSelected : TopBtn}
            alt=""
          ></img>
          <span style={{ width: "9.2rem" }}></span>
          <img
            src={pageName === (pageNameEnum.site) ? TopBtnSelectedRight : TopBtnRight}
            alt=""
          ></img>
          <img
            src={pageName === (pageNameEnum.operation) ? TopBtnSelectedRight : TopBtnRight}
            alt=""
          ></img>
        </div>
        <div className={classNames.top_btn_text}>
          <span
            style={{
              marginRight: "1.5rem",
              cursor: "pointer",
              color: pageName === (pageNameEnum.user) ? "#69E2FB" : "white",
            }}
            onClick={() => params.changePage('user')}
          >
            用户统计
          </span>
          <span
            style={{
              cursor: "pointer",
              color: pageName === (pageNameEnum.bicycle) ? "#69E2FB" : "white",
            }}
            onClick={() => params.changePage('bicycle')}
          >
            车辆统计
          </span>
          <span style={{ width: "10.5rem" }}></span>
          <span
            style={{
              cursor: "pointer",
              color: pageName === (pageNameEnum.site) ? "#69E2FB" : "white",
            }}
            onClick={() => params.changePage('site')}
          >
            站点统计
          </span>
          <span
            style={{
              marginLeft: "1.5rem",
              cursor: "pointer",
              color: pageName === (pageNameEnum.operation) ? "#69E2FB" : "white",
            }}
            onClick={() => params.changePage('operation')}
          >
            运维统计
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
