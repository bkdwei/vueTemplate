import VueRouter from 'vue-router';

// 新闻模块
import news from '../components/news/news';
import index from '../components/news/index';
import zhibo from '../components/zhibo/zhibo';


let routes = [
    {
        path: '/',
        redirect: '/news'
    },
    {
        path: '/news',
        component: news,
        children: [
            {
                path: '',
                redirect: 'index'
            }
        ]
    },
    {
        path: '/zhibo',
        component: zhibo,
        meta: {
            title: '直播'
        }
    }
];

let router = new VueRouter({
    routes
});

router.afterEach($route => {
    document.title = $route.meta.title;
});

export default router;
