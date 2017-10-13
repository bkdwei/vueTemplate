<template>
<div id="app">
	<ViewBox>
		<!-- 标题栏 -->
		<XHeader :title="title" slot="header" class="header">
			{{ this.title }}

			<span slot="overwrite-left">
           <img src="./assets/catalog1.jpg" height="32px"></img>
      </span>

			<span slot="right">
          <span slot="overwrite-left">
            <img src="./assets/search.jpg" height="32px"></img>
          </span>
			</span>

		</XHeader>

		<div class="content">
			<router-view></router-view>
		</div>

		<!-- 底部按钮 -->
		<Tabbar slot="bottom">
			<TabbarItem selected link="/news">
				<span slot="icon">
            <img src="./assets/news.jpg"></img>
          </span>
				<span slot="label">新闻</span>
			</TabbarItem>
			<TabbarItem show-dot link="/movie">
				<span slot="icon">
            <img src="./assets/bofang1.jpg"></img>
          </span>
				<span slot="label">视听</span>
			</TabbarItem>

		</Tabbar>
	</ViewBox>
</div>
</template>

<script>
import router from './router';
import {
	XHeader,
	Tabbar,
	TabbarItem,
	ViewBox
} from 'vux';
import {
	mapState,
	mapGetters,
	mapActions,
	mapMutations
} from 'vuex';

export default {
	data() {
		return {

		};
	},
	computed: {
		...mapState(['title']),
		...mapMutations(['setTitle'])
	},
	methods: {
		...mapActions(['hideTitle1'])
	},
	router,
	created() {},
	components: {
		XHeader,
		Tabbar,
		TabbarItem,
		ViewBox
	}
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body,
html {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}

#app {
    height: 100%;

    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
    }

    .content {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 46px;
        overflow: hidden;
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 999;
    }

}
</style>
