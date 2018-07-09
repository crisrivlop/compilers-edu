import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Caller from './components/Caller.vue';
import EduNavigator from './components/Navigator.vue';
import EduFooter from './components/Footer.vue';
import EduCard from './components/Card.vue';


Vue.component('edu-test',Test);
Vue.component('edu-caller',Caller);
Vue.component('edu-nav',EduNavigator);
Vue.component('edu-footer',EduFooter);
Vue.component('edu-card',EduCard);


import Home from './view/Home.vue';
import Lex from './view/Lex.vue';
import Scanner from './view/Scanner.vue';
import Test from './view/Test.vue';



Vue.use(VueRouter);

const routes = [
  {path:'/', component: Home},
  {path:'/lex', component: Lex},
  {path:'/scanner', component: Scanner},
  {path:'/test', component: Test}
];

const router = new VueRouter({routes});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
