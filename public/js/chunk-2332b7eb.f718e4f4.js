(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2332b7eb"],{"041d":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"e",function(){return r}),n.d(e,"d",function(){return s}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u});var o=n("b775");function a(t){return Object(o.a)({url:"/v1/goods_consult",method:"post",params:{method:"del.goods.consult.list"},data:{goods_consult_id:t}})}function r(t,e){return Object(o.a)({url:"/v1/goods_consult",method:"post",params:{method:"set.goods.consult.show"},data:{goods_consult_id:t,is_show:e}})}function s(t,e){return Object(o.a)({url:"/v1/goods_consult",method:"post",params:{method:"reply.goods.consult.item"},data:{goods_consult_id:t,content:e}})}function i(t){return Object(o.a)({url:"/v1/goods_consult",method:"post",params:{method:"get.goods.consult.item"},data:{goods_consult_id:t}})}function u(t){return Object(o.a)({url:"/v1/goods_consult",method:"post",params:{method:"get.goods.consult.list"},data:t})}},e725:function(t,e,n){"use strict";n.r(e);n("8e6e"),n("ac6a"),n("456d");var o=n("bd86"),a=n("2f62"),r=n("041d");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var u={name:"goods-opinion-consult",components:{PageHeader:function(){return n.e("chunk-4980b0ba").then(n.bind(null,"3e0a"))},PageMain:function(){return n.e("chunk-c27eea18").then(n.bind(null,"04e3"))},PageFooter:function(){return n.e("chunk-2d2102da").then(n.bind(null,"b77f"))}},data:function(){return{table:[],loading:!0,typeList:{0:"商品咨询",1:"支付",2:"配送",3:"售后"},page:{current:1,size:0,total:0}}},mounted:function(){var e=this;this.$store.dispatch("careyshop/db/databasePage",{user:!0}).then(function(t){e.page.size=t.get("size").value()||25}).then(function(){e.handleSubmit()})},methods:i({},Object(a.b)("careyshop/update",["updateData"]),{handleRefresh:function(t){var e=this;0<arguments.length&&void 0!==t&&t&&this.page.current-1&&this.page.current--,this.$nextTick(function(){e.$refs.header.handleFormSubmit()})},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick(function(){e.$refs.header.handleFormSubmit()})},handleSubmit:function(t,e){var n=this;1<arguments.length&&void 0!==e&&e&&(this.page.current=1),this.loading=!0,Object(r.c)(i({},t,{page_no:this.page.current,page_size:this.page.size})).then(function(t){n.updateData({type:"clear",name:"goods-opinion-consult"}),n.page.total=t.data.total_result,n.table=0<t.data.total_result?t.data.items:[]}).finally(function(){n.loading=!1})}})},c=n("2877"),d=Object(c.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",{attrs:{"is-back-to-top":!0}},[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,"type-list":t.typeList},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{"table-data":t.table,loading:t.loading,"type-list":t.typeList},on:{refresh:t.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",current:t.page.current,loading:t.loading,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},[],!1,null,null,null);e.default=d.exports}}]);