<template>
<div id="movie">
	<router-view></router-view>
	<ul>
		<li v-for="(aVideoNewsList, index) in videoNewsList"
		  :key="aVideoNewsList.name">
			<router-link :to="{name:'videoDetail',params:{videosrc:aVideoNewsList.videosrc}}">
				<img src="../../assets/shiping.jpg"
				  alt="gh"></img>
				<p>{{ aVideoNewsList.title }}</p>
			</router-link>
		</li>
	</ul>
</div>
</template>

<script>
import {
	mapState,
} from 'vuex';

export default {
	data() {
		return {

		};
	},
	computed: {
		...mapState( [ 'videoNewsList' ] ),
	},

	created() {
		console.log( "videoNewsList" );
	}
};
</script>

<style lang="less">
#movie {
    }
</style>
