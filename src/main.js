import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

//导入全局样式
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/index.css";
import { userInfo } from 'os';

//导入路由组件
import HeroList from './views/heroes/List.vue';
import EquipList from './views/equips/List.vue';
import WeaponList from './views/weapons/List.vue';

//Vue.use()注册VueRouter插件
Vue.use(VueRouter);

//创建路由对象
const router=new VueRouter({
  //设置精确的激活类样式
  linkExactActiveClass:'active',
  //创建路由规则
  routes:[
    {path:'/',redirect:'/heroes'},
    {path:'/heroes',component:HeroList},
    {path:'/equips',component:EquipList},
    {path:'/weapons',component:WeaponList}
  ]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
