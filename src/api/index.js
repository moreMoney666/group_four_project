import Ajax from "@/ajax/ajax";
import mockAjax from "@/ajax/mockAjax";
import { mock } from "mockjs";

export const reqBannerList = () => mockAjax.get("/banner");
//登录接口
export const reqLogin = (phone, password) => {
  return Ajax.post("/login", { phone, password });
};
//注册接口
export const reqRegister = (userInfo) => {
  return Ajax.post("/register", userInfo);
};

export const reqCode = (phone) => {
  return Ajax.post("/code", phone);
};

export const reqSearch = (search) => {
  return Ajax.get("/search", search);
};

// 请求全部分区数据
export const reqRegion = () => {
  return Ajax.get("/region");
};

// 视频
export const reqVideomsg = (bvid) => {
  return Ajax({
    url: `/video/info/${bvid}`,
    method: "get",
  });
};

// 分区动态数据显示
// dynamic
// 请求方式 get
// 参数  rid 分区id必填
export const reqdynamic = (rid) => {
  return Ajax({
    url: `/dynamic/?rid=${rid}`,
    method: "get",
  });
};

//测试接口
// reqdynamic(5)

// 分区排行榜数据
// rank
// 请求方式 get
// rid 排行榜的分区的id **必填**
export const reqrank = (rid) => {
  return Ajax({
    url: `/rank/?rid=${rid}`,
    method: "get",
  });
};

// reqrank(1)
