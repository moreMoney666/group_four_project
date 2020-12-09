import Mock from 'mockjs'
import banner from './rightBanner.json'
Mock.mock('/mock/banner',{code:200,data:banner})