(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9bd94892"],{"7cd7":function(t,e,n){"use strict";n.r(e);n("ac6a"),n("5df3"),n("c5f6");var a=n("d221"),r=n("b775");var u={name:"member-user-change",components:{PageHeader:function(){return n.e("chunk-2d22dd5a").then(n.bind(null,"f8d6"))},PageMain:function(){return n.e("chunk-5f2a404a").then(n.bind(null,"b664"))}},props:{client_id:{type:[Number,String],required:!0}},watch:{client_id:{handler:function(t){this.getUserWithdrawData(t)},immediate:!0}},data:function(){return{table:[],loading:!0,username:""}},methods:{getUserWithdrawData:function(t){var e=this;this.$nextTick(function(){e.table=[],e.loading=!0,e.username=""}),Promise.all([Object(a.c)(t),function(t){return Object(r.a)({url:"/v1/withdraw_user",method:"post",params:{method:"get.withdraw.user.list"},data:{client_id:t}})}(this.client_id)]).then(function(t){e.username=t[0].data?t[0].data.username:"",e.table=t[1].data.length?t[1].data:[]}).finally(function(){e.loading=!1})}}},d=n("2877"),s=Object(d.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",{attrs:{"is-back-to-top":!0,"parent-path":"member-user-client"}},[n("page-header",{attrs:{slot:"header",username:t.username},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"table-data":t.table}})],1)},[],!1,null,null,null);e.default=s.exports},d221:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"e",function(){return u}),n.d(e,"g",function(){return d}),n.d(e,"f",function(){return s}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return c});var a=n("b775");function r(t){return Object(a.a)({url:"/v1/user",method:"post",params:{method:"add.user.item"},data:t})}function u(t){return Object(a.a)({url:"/v1/user",method:"post",params:{method:"set.user.item"},data:t})}function d(t,e){return Object(a.a)({url:"/v1/user",method:"post",params:{method:"set.user.status"},data:{client_id:t,status:e}})}function s(t,e,n){return Object(a.a)({url:"/v1/user",method:"post",params:{method:"set.user.password"},data:{client_id:t,password:e,password_confirm:n}})}function i(t){return Object(a.a)({url:"/v1/user",method:"post",params:{method:"del.user.list"},data:{client_id:t}})}function o(t){return Object(a.a)({url:"/v1/user",method:"post",params:{method:"get.user.info"},data:{client_id:t}})}function c(t){return Object(a.a)({url:"/v1/user",method:"post",params:{method:"get.user.list"},data:t})}}}]);