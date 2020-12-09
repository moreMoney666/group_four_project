// 所有的接口请求函数


//引入ajax接口
import Ajax from '@/ajax/Ajax'

// 分区动态数据显示
// dynamic 
// 请求方式 get
// 参数  rid 分区id必填
export const reqdynamic = (rid) => {
  return Ajax({
    url: `/dynamic/?rid=${rid}`,
    method: 'get'
  })
}

//测试接口
// reqdynamic(5)

// 分区排行榜数据
// rank
// 请求方式 get
// rid 排行榜的分区的id **必填**
export const reqrank = (rid) => {
  return Ajax({
    url: `/rank/?rid=${rid}`,
    method: 'get'
  })
}

// reqrank(1)




