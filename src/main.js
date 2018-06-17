// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/stylus/index.styl'
import './common/icon/iconfont.css'
import MuseUi from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'


Vue.config.productionTip = false
Vue.use(MuseUi);

router.beforeEach((to,from,next)=>{
  console.log(to.name);
  if(!localStorage.getItem('user')&& (to.name!='login')){
    next('/');
  }else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
