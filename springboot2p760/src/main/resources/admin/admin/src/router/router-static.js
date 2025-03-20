import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import fangwuleixing from '@/views/modules/fangwuleixing/list'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import chaoshishangpin from '@/views/modules/chaoshishangpin/list'
    import bianminfuwu from '@/views/modules/bianminfuwu/list'
    import dingdanxinxi from '@/views/modules/dingdanxinxi/list'
    import dongwuxinxi from '@/views/modules/dongwuxinxi/list'
    import fankuiyijian from '@/views/modules/fankuiyijian/list'
    import dongwuzhonglei from '@/views/modules/dongwuzhonglei/list'
    import fuwuleixing from '@/views/modules/fuwuleixing/list'
    import wuyerenyuan from '@/views/modules/wuyerenyuan/list'
    import fangwuxinxi from '@/views/modules/fangwuxinxi/list'
    import cheweixinxi from '@/views/modules/cheweixinxi/list'
    import jiaofeixinxi from '@/views/modules/jiaofeixinxi/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import shangpinfenlei from '@/views/modules/shangpinfenlei/list'
    import discusschaoshishangpin from '@/views/modules/discusschaoshishangpin/list'
    import discussdongwuxinxi from '@/views/modules/discussdongwuxinxi/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/fangwuleixing',
        name: '房屋类型',
        component: fangwuleixing
      }
      ,{
	path: '/news',
        name: '社区公告',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/chaoshishangpin',
        name: '超市商品',
        component: chaoshishangpin
      }
      ,{
	path: '/bianminfuwu',
        name: '便民服务',
        component: bianminfuwu
      }
      ,{
	path: '/dingdanxinxi',
        name: '订单信息',
        component: dingdanxinxi
      }
      ,{
	path: '/dongwuxinxi',
        name: '动物信息',
        component: dongwuxinxi
      }
      ,{
	path: '/fankuiyijian',
        name: '反馈意见',
        component: fankuiyijian
      }
      ,{
	path: '/dongwuzhonglei',
        name: '动物种类',
        component: dongwuzhonglei
      }
      ,{
	path: '/fuwuleixing',
        name: '服务类型',
        component: fuwuleixing
      }
      ,{
	path: '/wuyerenyuan',
        name: '物业人员',
        component: wuyerenyuan
      }
      ,{
	path: '/fangwuxinxi',
        name: '房屋信息',
        component: fangwuxinxi
      }
      ,{
	path: '/cheweixinxi',
        name: '车位信息',
        component: cheweixinxi
      }
      ,{
	path: '/jiaofeixinxi',
        name: '缴费信息',
        component: jiaofeixinxi
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/shangpinfenlei',
        name: '商品分类',
        component: shangpinfenlei
      }
      ,{
	path: '/discusschaoshishangpin',
        name: '超市商品评论',
        component: discusschaoshishangpin
      }
      ,{
	path: '/discussdongwuxinxi',
        name: '动物信息评论',
        component: discussdongwuxinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
