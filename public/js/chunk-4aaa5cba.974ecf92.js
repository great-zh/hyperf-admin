(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4aaa5cba"],{"331c":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return s});var a=n("b775");function r(t){return Object(a.a)({url:"/v1/ask",method:"post",params:{method:"del.ask.item"},data:{ask_id:t}})}function o(t,e){return Object(a.a)({url:"/v1/ask",method:"post",params:{method:"reply.ask.item"},data:{ask_id:t,answer:e}})}function i(t){return Object(a.a)({url:"/v1/ask",method:"post",params:{method:"get.ask.item"},data:{ask_id:t}})}function s(t){return Object(a.a)({url:"/v1/ask",method:"post",params:{method:"get.ask.list"},data:t})}},cb92:function(t,e,n){"use strict";n.r(e);n("8e6e"),n("ac6a"),n("456d");var a=n("bd86"),r=n("2f62"),o=n("331c");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){Object(a.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var c={name:"member-ask-list",components:{PageHeader:function(){return n.e("chunk-2d0b6954").then(n.bind(null,"1e7a"))},PageMain:function(){return n.e("chunk-71b9be14").then(n.bind(null,"7f94"))},PageFooter:function(){return n.e("chunk-2d2102da").then(n.bind(null,"b77f"))}},data:function(){return{table:[],loading:!0,typeList:{0:"咨询",1:"售后",2:"投诉",3:"求购"},page:{current:1,size:25,total:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){this.handleSubmit()},methods:s({},Object(r.b)("careyshop/update",["updateData"]),{handleRefresh:function(t){var e=this;0<arguments.length&&void 0!==t&&t&&this.page.current-1&&this.page.current--,this.$nextTick(function(){e.$refs.header.handleFormSubmit()})},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick(function(){e.$refs.header.handleFormSubmit()})},handleSort:function(t){var e=this;this.order=t,this.$nextTick(function(){e.$refs.header.handleFormSubmit()})},handleSubmit:function(t,e){var n=this;1<arguments.length&&void 0!==e&&e&&(this.page.current=1),this.loading=!0,Object(o.c)(s({},t,{},this.order,{page_no:this.page.current,page_size:this.page.size})).then(function(t){n.updateData({type:"clear",name:"member-ask-list"}),n.page.total=t.data.total_result,n.table=0<t.data.total_result?t.data.items:[]}).finally(function(){n.loading=!1})}})},u=n("2877"),d=Object(u.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",{attrs:{"is-back-to-top":!0}},[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,"type-list":t.typeList},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{"table-data":t.table,loading:t.loading,"type-list":t.typeList},on:{sort:t.handleSort,refresh:t.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",current:t.page.current,loading:t.loading,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},[],!1,null,null,null);e.default=d.exports}}]);