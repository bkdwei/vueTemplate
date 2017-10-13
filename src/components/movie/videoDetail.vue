<template>
<div>
	<video style="width: 100%"
	  :src="videosrc"
	  preload
	  autoplay
	  controls>
</video>
</div>
</template>
<script>
export default {
	data() {
		return {
			videosrc: ""
		};
	},
	created() {
		let docId = this.$route.params.videosrc;
		console.log( docId );
		this.videosrc = docId;
	}
};
</script>
