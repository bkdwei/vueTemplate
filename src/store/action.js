import * as types from "./types.js"
import Vue from 'vue';
import VueResource from 'vue-resource';
import axios from 'axios'



Vue.use(VueResource);
export const hideTitle1 = ({
  commit
}) => {
  //异步的函数
  commit(types.HIDE_TITLE);
  console.log("in hideTitle1()");

}
//初始化首页的数据
export const initHomeData = ({
  state,
  commit
}) => {

  Vue.http.get('https://www.easy-mock.com/mock/59dc291c1de3d46fa94c84d5/jiemiannews/toutiao').then(res => {
    let body = res.data;
    if (body.reason === "成功的返回") {
      state.initLoad = true;
      let newList = body.result.data.map(item => {
        return {
          img: item.thumbnail_pic_s,
          url: item.url,
          title: item.title
        };
      });
      console.log(newList);
      commit('SET_SWIPERLIST', {
        list: newList
      });
      let newMarqueeList = newList.map(item => {
        return item.title

      });
      commit('SET_MARQUEELIST', {
        list: newMarqueeList
      });

      let newPanelList = body.result.data.map(item => {
        return {
          src: item.thumbnail_pic_s,
          title: item.title,
          url: item.url,
          desc: item.category
        };
      });
      commit('SET_PANELLIST', {
        list: newPanelList
      });
    }
  });

}
//上拉刷新数据
export const infiniteHomeData = ({
  state,
  commit
}) => {
  console.log("infiniteHomeData" + state.initLoad);
  Vue.http.get(`https://www.easy-mock.com/mock/59dc291c1de3d46fa94c84d5/jiemiannews/toutiao`).then(res => {
    let body = res.body;
    let data;
    if (body.code === 200) {
      data = body.list.filter(item => (item.addata === null && item.picInfo.length > 0)).map(item => {
        return {
          src: item.picInfo[0].url,
          title: item.title,
          url: getUrl(item),
          desc: item.category
        };
      });
      commit('SET_INITLOAD', {
        finish: false
      });
      commit('CONCAT_PANELLIST', {
        list: data
      });

    }

  });
}
//下拉刷新数据
export const refreshHomeData = ({
  state,
  commit
}) => {
  console.log("refreshHomeData" + state.initLoad);
  Vue.http.jsonp( `http://3g.163.com/touch/jsonp/sy/recommend/0-9.html`, {
    params: {
      miss: 0,
      refresh: type
    }
  } ).then( res => {
    let body = res.body;
    if ( body.code === 200 ) {
      data = body.list.filter( item => ( item.addata === null && item.picInfo.length > 0 ) ).map( item => {
        return {
          src: item.picInfo[ 0 ].url,
          title: item.title,
          url: getUrl( item ),
          desc: item.category
        };
      });

    }
  } );
}
