(function () {function c(r){r.$router.afterEach(function(t,e){b(r)}),r.$store.watch(function(r){if(r.user.current)return r.user.current},function(t,e){b(r)})}function b(r,t){t=r.$data.user;(r.$el.classList.remove("bouncer-padding-top"),t&&t.nav&&Array.isArray(t.restriction)&&t.restriction.length>1)&&t.restriction.map(function(r){return r.path}).includes(r.$router.currentRoute.path)&&r.$el.classList.add("bouncer-padding-top")}var a={data:function(){return{user:void 0}},created:function(){var t=this;this.$api.get("current-user").then(function(r){t.user=r})},computed:{showBar:function(){return this.user&&this.user.nav&&Array.isArray(this.user.restriction)&&this.user.restriction.length>1},pages:function(){var t=this;return this.showBar?this.user.restriction.filter(function(r){return r.path!=t.$router.currentRoute.path}):[]}}};if(typeof a==="function"){a=a.options}Object.assign(a,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm.showBar?_c("div",{staticClass:"bouncer-nav"},[_c("div",{staticClass:"bouncer-nav-inner"},[_c("strong",[_vm._v("Baculer vers :")]),_vm._v(" "),_vm._l(_vm.pages,function(page){return _c("div",{staticClass:"page"},[_c("k-link",{attrs:{"to":page.path}},[_vm._v(_vm._s(page.title))])],1)})],2)]):_vm._e()};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());panel.plugin("sylvainjule/bouncer",{sections:{bouncernav:a},created:function(r){function t(t,e){arguments.length>2&&void 0!==arguments[2]&&arguments[2];var n=r.$data.user;n&&Array.isArray(n.restriction)&&n.restriction.length?!function(r,t){var e="Account"==r.name||"/account"==r.path||"/logout"==r.path||"/login"==r.path;!e&&Array.isArray(t.restriction)&&t.restriction.forEach(function(t){r.path.slice(0,t.path.length)==t.path&&(e=!0)});return e}(t,n)?e?e(n.restriction[0].path):r.$router.push(n.restriction[0].path):e&&("/logout"!=t.path&&"/login"!=t.path||(r.$data.user=void 0),e()):e&&e()}function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t&&("/login"==r.$router.currentRoute.path||"/"==r.$router.currentRoute.path))return!1;r.$api.get("current-user").then(function(t){r.$data.user=t,e&&e()})}c(r),r.$router.onReady(function(){e(!0,function(){t(r.$router.currentRoute,void 0)})}),r.$router.beforeResolve(function(n,o,a){"/login"==o.path&&(r.$data.user=void 0),r.$data.user?t(n,a):e(!1,function(){t(n,a)})})}});})();