(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3fe77953"],{"31e0":function(t,e,n){"use strict";n.r(e);n("8e6e"),n("ac6a"),n("456d");var r=n("bd86"),o=n("7f04");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var i={name:"goods-setting-type",components:{PageHeader:function(){return n.e("chunk-2d0b2b4a").then(n.bind(null,"24f8"))},PageMain:function(){return n.e("chunk-2d0c26da").then(n.bind(null,"49ed"))},PageFooter:function(){return n.e("chunk-2d2102da").then(n.bind(null,"b77f"))}},data:function(){return{table:[],loading:!0,page:{current:1,size:0,total:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var e=this;this.$store.dispatch("careyshop/db/databasePage",{user:!0}).then(function(t){e.page.size=t.get("size").value()||25}).then(function(){e.handleSubmit()})},methods:{handleRefresh:function(t){var e=this;0<arguments.length&&void 0!==t&&t&&this.page.current-1&&this.page.current--,this.$nextTick(function(){e.$refs.header.handleFormSubmit()})},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick(function(){e.$refs.header.handleFormSubmit()})},handleSort:function(t){var e=this;this.order=t,this.$nextTick(function(){e.$refs.header.handleFormSubmit()})},handleSubmit:function(t,e){var n=this;1<arguments.length&&void 0!==e&&e&&(this.page.current=1),this.loading=!0,Object(o.c)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t,{},this.order,{page_no:this.page.current,page_size:this.page.size})).then(function(t){n.page.total=t.data.total_result,n.table=0<t.data.total_result?t.data.items:[]}).finally(function(){n.loading=!1})}}},d=n("2877"),s=Object(d.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",{attrs:{"is-back-to-top":!0}},[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{"table-data":t.table,loading:t.loading},on:{sort:t.handleSort,refresh:t.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",current:t.page.current,loading:t.loading,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},[],!1,null,null,null);e.default=s.exports},"7f04":function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"e",function(){return a}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return d}),n.d(e,"d",function(){return s});var r=n("b775");function o(t){return Object(r.a)({url:"/v1/goods_type",method:"post",params:{method:"add.goods.type.item"},data:{type_name:t}})}function a(t){return Object(r.a)({url:"/v1/goods_type",method:"post",params:{method:"set.goods.type.item"},data:t})}function i(t){return Object(r.a)({url:"/v1/goods_type",method:"post",params:{method:"del.goods.type.list"},data:{goods_type_id:t}})}function d(t){return Object(r.a)({url:"/v1/goods_type",method:"post",params:{method:"get.goods.type.list"},data:t})}function s(t){return Object(r.a)({url:"/v1/goods_type",method:"post",params:{method:"get.goods.type.select"},data:t})}}}]);