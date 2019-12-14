import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Home from "./components/Home";
import WonderWoman from "./components/WonderWoman";
import MissionImpossible from "./components/MissionImpossible";
import galGadot from "./components/GalGadot";
import TomCruise from "./components/TomCruise";
import TheMartian from "./components/TheMartian";
import MattDamon from "./components/MattDamon";
import Interstellar from "./components/Interstellar";
import MattMC from "./components/MattMC";

Vue.use(VueRouter);


const routes = [
  {path: '/', component: Home},
  {path: '/wonderwoman', component: WonderWoman},
  {path: '/missionimpossible', component: MissionImpossible},
  {path: '/themartian', component: TheMartian},
  {path: '/galgadot', component: galGadot},
  {path: '/tomcruise', component: TomCruise},
  {path: '/mattdamon', component: MattDamon},
  {path: '/interstellar', component: Interstellar},
  {path: '/mattmc', component: MattMC}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app');
