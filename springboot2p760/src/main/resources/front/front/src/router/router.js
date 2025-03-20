import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import shangpinfenleiList from '../pages/shangpinfenlei/list'
import shangpinfenleiDetail from '../pages/shangpinfenlei/detail'
import shangpinfenleiAdd from '../pages/shangpinfenlei/add'
import chaoshishangpinList from '../pages/chaoshishangpin/list'
import chaoshishangpinDetail from '../pages/chaoshishangpin/detail'
import chaoshishangpinAdd from '../pages/chaoshishangpin/add'
import dongwuzhongleiList from '../pages/dongwuzhonglei/list'
import dongwuzhongleiDetail from '../pages/dongwuzhonglei/detail'
import dongwuzhongleiAdd from '../pages/dongwuzhonglei/add'
import dongwuxinxiList from '../pages/dongwuxinxi/list'
import dongwuxinxiDetail from '../pages/dongwuxinxi/detail'
import dongwuxinxiAdd from '../pages/dongwuxinxi/add'
import cheweixinxiList from '../pages/cheweixinxi/list'
import cheweixinxiDetail from '../pages/cheweixinxi/detail'
import cheweixinxiAdd from '../pages/cheweixinxi/add'
import fuwuleixingList from '../pages/fuwuleixing/list'
import fuwuleixingDetail from '../pages/fuwuleixing/detail'
import fuwuleixingAdd from '../pages/fuwuleixing/add'
import bianminfuwuList from '../pages/bianminfuwu/list'
import bianminfuwuDetail from '../pages/bianminfuwu/detail'
import bianminfuwuAdd from '../pages/bianminfuwu/add'
import jiaofeixinxiList from '../pages/jiaofeixinxi/list'
import jiaofeixinxiDetail from '../pages/jiaofeixinxi/detail'
import jiaofeixinxiAdd from '../pages/jiaofeixinxi/add'
import fangwuleixingList from '../pages/fangwuleixing/list'
import fangwuleixingDetail from '../pages/fangwuleixing/detail'
import fangwuleixingAdd from '../pages/fangwuleixing/add'
import fangwuxinxiList from '../pages/fangwuxinxi/list'
import fangwuxinxiDetail from '../pages/fangwuxinxi/detail'
import fangwuxinxiAdd from '../pages/fangwuxinxi/add'
import wuyerenyuanList from '../pages/wuyerenyuan/list'
import wuyerenyuanDetail from '../pages/wuyerenyuan/detail'
import wuyerenyuanAdd from '../pages/wuyerenyuan/add'
import dingdanxinxiList from '../pages/dingdanxinxi/list'
import dingdanxinxiDetail from '../pages/dingdanxinxi/detail'
import dingdanxinxiAdd from '../pages/dingdanxinxi/add'
import fankuiyijianList from '../pages/fankuiyijian/list'
import fankuiyijianDetail from '../pages/fankuiyijian/detail'
import fankuiyijianAdd from '../pages/fankuiyijian/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'shangpinfenlei',
					component: shangpinfenleiList
				},
				{
					path: 'shangpinfenleiDetail',
					component: shangpinfenleiDetail
				},
				{
					path: 'shangpinfenleiAdd',
					component: shangpinfenleiAdd
				},
				{
					path: 'chaoshishangpin',
					component: chaoshishangpinList
				},
				{
					path: 'chaoshishangpinDetail',
					component: chaoshishangpinDetail
				},
				{
					path: 'chaoshishangpinAdd',
					component: chaoshishangpinAdd
				},
				{
					path: 'dongwuzhonglei',
					component: dongwuzhongleiList
				},
				{
					path: 'dongwuzhongleiDetail',
					component: dongwuzhongleiDetail
				},
				{
					path: 'dongwuzhongleiAdd',
					component: dongwuzhongleiAdd
				},
				{
					path: 'dongwuxinxi',
					component: dongwuxinxiList
				},
				{
					path: 'dongwuxinxiDetail',
					component: dongwuxinxiDetail
				},
				{
					path: 'dongwuxinxiAdd',
					component: dongwuxinxiAdd
				},
				{
					path: 'cheweixinxi',
					component: cheweixinxiList
				},
				{
					path: 'cheweixinxiDetail',
					component: cheweixinxiDetail
				},
				{
					path: 'cheweixinxiAdd',
					component: cheweixinxiAdd
				},
				{
					path: 'fuwuleixing',
					component: fuwuleixingList
				},
				{
					path: 'fuwuleixingDetail',
					component: fuwuleixingDetail
				},
				{
					path: 'fuwuleixingAdd',
					component: fuwuleixingAdd
				},
				{
					path: 'bianminfuwu',
					component: bianminfuwuList
				},
				{
					path: 'bianminfuwuDetail',
					component: bianminfuwuDetail
				},
				{
					path: 'bianminfuwuAdd',
					component: bianminfuwuAdd
				},
				{
					path: 'jiaofeixinxi',
					component: jiaofeixinxiList
				},
				{
					path: 'jiaofeixinxiDetail',
					component: jiaofeixinxiDetail
				},
				{
					path: 'jiaofeixinxiAdd',
					component: jiaofeixinxiAdd
				},
				{
					path: 'fangwuleixing',
					component: fangwuleixingList
				},
				{
					path: 'fangwuleixingDetail',
					component: fangwuleixingDetail
				},
				{
					path: 'fangwuleixingAdd',
					component: fangwuleixingAdd
				},
				{
					path: 'fangwuxinxi',
					component: fangwuxinxiList
				},
				{
					path: 'fangwuxinxiDetail',
					component: fangwuxinxiDetail
				},
				{
					path: 'fangwuxinxiAdd',
					component: fangwuxinxiAdd
				},
				{
					path: 'wuyerenyuan',
					component: wuyerenyuanList
				},
				{
					path: 'wuyerenyuanDetail',
					component: wuyerenyuanDetail
				},
				{
					path: 'wuyerenyuanAdd',
					component: wuyerenyuanAdd
				},
				{
					path: 'dingdanxinxi',
					component: dingdanxinxiList
				},
				{
					path: 'dingdanxinxiDetail',
					component: dingdanxinxiDetail
				},
				{
					path: 'dingdanxinxiAdd',
					component: dingdanxinxiAdd
				},
				{
					path: 'fankuiyijian',
					component: fankuiyijianList
				},
				{
					path: 'fankuiyijianDetail',
					component: fankuiyijianDetail
				},
				{
					path: 'fankuiyijianAdd',
					component: fankuiyijianAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
