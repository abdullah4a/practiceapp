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
Vue.filter("SaveSentenceCase", function(val) {
    if (!val)
        return '';
    else {
        val = val.toString()
        return val.charAt(0).toUpperCase() + val.slice(1)
    }
})

Vue.filter("MsgIncrement", function(val, input) {
    if (!val || !input)
        return "Please enter the New Value Too.";
    else
        return val + input;

})
new Vue({
    render: (h) => h(App),
}).$mount("#app");