import Vue from 'vue';

const component = {
    install(Vue) {
        Vue.component("V8Editor", require("./src/V8Editor").default);
    }
};

Vue.use(component);

export default component;