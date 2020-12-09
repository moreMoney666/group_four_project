// import ajax from './ajax'
// import ajaxMock  from './ajaxMock'
// import home from './home'
// //定义mock相关
// export const reqBanners = ()=> ajaxMock.get('/mock/banner')
// export default{
//   home
// }


import mockAjax from '@/ajax/mockAjax';

export const reqBannerList = () => {
  return mockAjax.get('/banner')
}