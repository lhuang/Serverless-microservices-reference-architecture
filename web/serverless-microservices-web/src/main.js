import Vue from 'vue';
import App from './App.vue';
import AppFooter from './components/AppFooter';
import router from './router';
import store from './store/index';

import BootstrapVue from 'bootstrap-vue';
import BlockUI from 'vue-blockui';
import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.min.css';

Vue.use(BootstrapVue);
Vue.use(BlockUI);
Vue.use(VueIziToast);

Vue.config.productionTip = false;

Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  }
});

Vue.mixin({
  methods: {
    handleScroll: function(evt, el) {
      if (window.scrollY > 100) {
        el.setAttribute(
          'class',
          'navbar navbar-light navbar-expand-lg fixed-top navbar-shrink'
        );
      } else {
        el.setAttribute(
          'class',
          'navbar navbar-light navbar-expand-lg fixed-top'
        );
      }
      //return window.scrollY > 100;
    }
  }
});

async function main() {
  //await store.dispatch('init');
  //setHttpHeaders();

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    store,
    router,
    components: { App, AppFooter }
  });
}

main();