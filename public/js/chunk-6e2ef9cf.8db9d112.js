(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6e2ef9cf"],{"0781":function(e,t,o){e.exports=o.p+"img/logo_100.18c454b3.png"},2017:function(e,t,o){"use strict";var n=o("b12d");o.n(n).a},"9ed6":function(e,t,o){"use strict";o.r(t);var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login-logo"},[t("img",{attrs:{src:o("0781"),alt:"logo"}})])}],r=(o("8e6e"),o("ac6a"),o("456d"),o("a481"),o("bd86")),s=(o("ae83"),o("ca00")),i=o("2f62");function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}var l={name:"loginbox",data:function(){return{loginForm:{username:"admin",password:"admin888",code:"",redomStr:""},checked:!1,code:{src:"",value:"",len:4,type:"text"},loginRules:{username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,message:"密码长度最少为6位",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"},{min:4,max:4,message:"验证码长度为4位",trigger:"blur"}]},passwordType:"password",loading:!1}},created:function(){this.refreshCode()},methods:function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(o,!0).forEach(function(e){Object(r.a)(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}({},Object(i.b)("careyshop/account",["login"]),{refreshCode:function(){this.loginForm.redomStr=s.a.randomLenNum(this.code.len,!0),this.code.value=s.a.randomLenNum(this.code.len),this.loginForm.code=this.code.value},showPassword:function(){""===this.passwordType?this.passwordType="password":this.passwordType=""},handleLogin:function(){var t=this;this.$refs.loginForm.validate(function(e){e&&(t.loading=!0,t.login({username:t.loginForm.username,password:t.loginForm.password}).then(function(){t.$store.dispatch("careyshop/account/load"),t.$router.replace(t.$route.query.redirect||"/")}).catch(function(){t.loading=!1}))})}})},c=o("2877"),u={name:"login",components:{loginBox:Object(c.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{"status-icon":"",rules:t.loginRules,model:t.loginForm,"label-width":"0",size:"default"}},[o("el-form-item",{attrs:{prop:"username"}},[o("el-input",{attrs:{size:"small","auto-complete":"off",placeholder:"请输入账号"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin()}},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}},[o("i",{staticClass:"fa fa-user-circle-o",attrs:{slot:"prefix"},slot:"prefix"})])],1),o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{attrs:{size:"small",type:t.passwordType,"auto-complete":"off",placeholder:"请输入密码"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin()}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}},[o("i",{staticClass:"el-icon-view el-input__icon",attrs:{slot:"suffix"},on:{click:t.showPassword},slot:"suffix"}),o("i",{staticClass:"fa fa-keyboard-o",attrs:{slot:"prefix"},slot:"prefix"})])],1),o("el-form-item",{attrs:{prop:"code"}},[o("el-row",{attrs:{span:34}},[o("el-col",{attrs:{span:14}},[o("el-input",{attrs:{size:"small",maxlength:t.code.len,"auto-complete":"off",placeholder:"请输入验证码"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin()}},model:{value:t.loginForm.code,callback:function(e){t.$set(t.loginForm,"code",e)},expression:"loginForm.code"}},[o("i",{staticClass:"fa fa-shield",attrs:{slot:"prefix"},slot:"prefix"})])],1),o("el-col",{attrs:{span:10}},[o("div",{staticClass:"login-code"},["text"===t.code.type?o("span",{staticClass:"login-code-img",on:{click:t.refreshCode}},[t._v(t._s(t.code.value))]):o("img",{staticClass:"login-code-img",attrs:{src:t.code.src,alt:""},on:{click:t.refreshCode}})])])],1)],1),o("el-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("记住账号")]),o("el-form-item",[o("el-button",{staticClass:"login-submit",attrs:{type:"primary",size:"small",loading:t.loading},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("登 录\n    ")])],1)],1)},[],!1,null,null,null).exports},data:function(){return{activeName:"user"}},mounted:function(){this.$notify({title:"Demo 演示提示",dangerouslyUseHTMLString:!0,message:'<p>为避免相同账号多人登录而被踢下线，可使用账号"admin1~admin45"进行登录，密码全部为"admin888"。</p>',position:"bottom-right",duration:0})}},d=(o("2017"),Object(c.a)(u,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login-container"},[o("div",{staticClass:"login-border"},[o("div",{staticClass:"login-main"},[e._m(0),o("loginBox")],1)])])},n,!1,null,null,null));t.default=d.exports},b12d:function(e,t,o){}}]);