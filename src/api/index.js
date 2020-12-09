import ajax from '@/ajax/ajax.js'

// 请求搜索视频数据
export const reqSearch = (search) => {
    return ajax.get('/search',search)
}

// 请求全部分区数据
export const reqRegion = () => {
    return ajax.get('/region')
}