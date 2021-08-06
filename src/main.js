import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.filter("Capt", function(val) {
    return val.toUpperCase();
})
Vue.filter("Dollars", function(val) {
    if (!val)
        return "No Salary"
    else
        return val = val / 164.17;
})
new Vue({
    render: (h) => h(App),
}).$mount("#app");