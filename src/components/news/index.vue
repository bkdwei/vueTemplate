<template>
<transition name="fade">
	<div class="index">

		<scroller class="pos"
		  ref="scroller"
		  :refreshText="'刷新内容'"
		  :on-refresh="refresh"
		  :on-infinite="infinite">

			<!-- 轮播海报 -->

			<Swiper :list="swiperList"
			  :auto="true"
			  :loop="true">{{ this.swiperList }}</Swiper>

			<!-- 滚动新闻 -->
			<div class="gundongxinwen">
				<div class="p">
					<p>即时快讯</p>
				</div>
				<div class="gundongtiao">
					<Marquee class="marquee">
						<MarqueeItem v-for="(item,i) in marqueeList"
						  :key="i">{{item}}</MarqueeItem>
					</Marquee>
				</div>
			</div>
			<!-- 图文列表 -->
			<div class="tuwenlist">
				<Panel :list="panelList"
				  type="1"></Panel>
			</div>
		</scroller>

	</div>
</transition>
</template>

<script>
function getUrl( item ) {
	let url;
	if ( item.type === 'doc' ) {
		url = `/news/${item.docid}`;
	} else if ( item.type === 'photoset' ) {
		url = `/photoview/${item.typeid}`;
	}
	return url;
}

import {
	Swiper,
	Marquee,
	MarqueeItem,
	Panel
} from 'vux';

let typeList = [ 'A', 'B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08', 'B09', 'B10' ];
let key = 0;
let type = 'A';

function getType() {
	key++;
	if ( key === typeList.length ) {
		key = 0;
	}
	type = typeList[ key ];
}
import {
	mapState,
	mapGetters,
	mapActions,
	mapMutations,
} from 'vuex'

export default {
	data() {
		return {
			pageIndex: 0
		};
	},

	computed: {
		...mapState( [ 'swiperList', 'marqueeList', 'panelList', 'initLoad' ] ),
		...mapMutations( [ 'SET_SWIPERLIST',
			'SET_MARQUEELIST', 'SET_PANELLIST', 'CONCAT_PANELLIST'
		] ),
		...mapActions( [ 'initHomeData',
			'infiniteHomeData', 'refreshHomeData'
		] )
	},
	methods: {
		refresh() {
			getType();
			this.pageIndex = 0;
			this.$store.dispatch( 'refreshHomeData' );
			this.$refs.scroller.finishPullToRefresh();
			this.$vux.toast.text( `成功刷新${this.panelList.length}条数据`, 'top' );
		},

		infinite() {
			if ( !this.initLoad ) {
				this.$refs.scroller.finishInfinite();
				return;
			}
			this.pageIndex++;
			let start = this.pageIndex * 10;
			let end = start + 10;
			this.$store.dispatch( 'infiniteHomeData' );
			this.$refs.scroller.finishInfinite();
		}
	},
	components: {
		Swiper,
		Marquee,
		MarqueeItem,
		Panel
	},
	created() {
		this.$store.dispatch( 'initHomeData' );
	}
};
</script>

<style lang="less">
#app {
    .index {
        position: absolute;
        width: 100%;
        top: 46px;
        bottom: 0;
        overflow: hidden;
    }
    .gundongxinwen {
        height: 50px;
    }
    .p {
        float: left;
        color: red;
        width: 6%;
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        height: 50px;
        font-size: 15px;
        line-height: 13px;
    }
    .gundongtiao {
        float: left;
        height: 50px;
    }
    .marquee {
        margin: 15px;
        color: #333;
    }

    .weui-media-box__hd,
    .weui-media-box__hd img {
        width: 102px;
        height: 78px;
    }

    .weui-media-box__title {
        white-space: normal;
    }

    .pos {
        position: relative;
        left: 0;
        top: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

}
</style>
