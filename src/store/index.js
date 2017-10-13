import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './action'
import * as types from './types'


Vue.use(Vuex)

const state ={
 abc: "界面新闻", //首页新闻标题
 title:"新闻头条",
 loadStatus:"已连接",
 swiperList: [],
 marqueeList: [],
 panelList: [],
 pageIndex: 0,
 initLoad: false,
 videoNewsList:[
   {
     imgsrc: "./assets/shiping.jpg",
     videosrc:"static/test.mp4",
     title:"松下广告"
   },
   {
     imgsrc: "./assets/shiping.jpg",
     videosrc:"static/html5第三章（标签、页面结构).mp4",
     title:"html5第三章（标签、页面结构).mp4"
   }
 ]
}




export default new Vuex.Store({
  state ,
  getters,
  actions,
  mutations
})
