import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import store from "./store";
import AllMailInbox from "./components/AllMailInbox.vue";
import AllMailSent from "./components/AllMailSent.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import { initContract } from "./utils";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Toast);

const routes = [
  { path: "/", component: AllMailInbox, name: "inbox" },
  { path: "/inbox", component: AllMailInbox, name: "inbox" },
  { path: "/sent", component: AllMailSent, name: "sent" },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

window.nearInitPromise = initContract().then(() => {
  new Vue({
    render: (h) => h(App),
    store,
    router,
  }).$mount("#app");
});
