import * as types from './types'

export const setTitle=(state,playload) =>{
	//只能同步的函数
		state.title = playload.title;
		console.log("mm:"+state.title)
	}
	export const 	HIDE_TITLE=state => {
		state.title ="hide title"
	}
  export const 	SET_SWIPERLIST=(state,playload) => {
    state.swiperList = playload.list
  }
  export const 	SET_MARQUEELIST=(state,playload) => {
    state.marqueeList = playload.list
  }
  export const 	SET_PANELLIST=(state,playload) => {
    state.panelList = playload.list
  }
  export const 	CONCAT_PANELLIST=(state,playload) => {
    state.panelList=state.panelList.concat( playload );
    }
  export const 	SET_INITLOAD=(state,playload) => {
    state.initLoad=playload.finish;
    }
