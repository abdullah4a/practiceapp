import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.filter("Capt", function(val) {
    if (!val)
        return val.toUpperCase();
})
Vue.filter("Dollars", function(val) {
    if (!val)
        return "No Salary"
    else
        return val = val / 164.17;
})
Vue.filter("SaveSentenceCase", function(val) {
    if (!val)
        return '';/// Save the 
    else {
        val = val.toString()
        return val.charAt(0).toUpperCase() + val.slice(1)
    }
})

new Vue({
    render: (h) => h(App),
}).$mount("#app");