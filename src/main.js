// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueScroller from 'vue-scroller';
import VueLazyLoad from 'vue-lazyload';
import store from './store/'


//关闭生产模式下给出的提示
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueScroller);
Vue.use(VueLazyLoad);

/* eslint-disable no-new */
new Vue({
  el: '#app',
    store,
  template: '<App/>',
  components: { App }
});
