(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e648e272"],{1213:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"e",function(){return o}),r.d(e,"m",function(){return i}),r.d(e,"f",function(){return s}),r.d(e,"g",function(){return d}),r.d(e,"k",function(){return u}),r.d(e,"l",function(){return c}),r.d(e,"b",function(){return l}),r.d(e,"j",function(){return g}),r.d(e,"i",function(){return h}),r.d(e,"h",function(){return f}),r.d(e,"d",function(){return m}),r.d(e,"c",function(){return p});var a=r("b775");function n(t){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"add.storage.directory.item"},data:t})}function o(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"desc",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"storage_id";return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.directory.select"},data:{order_type:t,order_field:e}})}function i(t,e){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"set.storage.directory.default"},data:{storage_id:t,is_default:e}})}function s(t){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.list"},data:t})}function d(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.navi"},data:{storage_id:t,is_layer:e}})}function u(t,e){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"rename.storage.item"},data:{storage_id:t,name:e}})}function c(t){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"set.storage.cover"},data:{storage_id:t}})}function l(t){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"clear.storage.cover"},data:{storage_id:t}})}function g(t,e){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"move.storage.list"},data:{storage_id:t,parent_id:e}})}function h(t){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.thumb.url"},data:t})}function f(t,e){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.thumb.info"},data:{url:t,source:e}})}function m(t){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"del.storage.list"},data:{storage_id:t}})}function p(t){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"clear.storage.thumb"},data:{storage_id:t}})}},"3ea4":function(t,e,r){"use strict";r.r(e);r("8e6e"),r("ac6a"),r("456d");var a=r("bd86"),n=r("1213");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}var i={name:"system-storage-storage",components:{PageHeader:function(){return r.e("chunk-6cc32c5e").then(r.bind(null,"a140"))},PageMain:function(){return r.e("chunk-646cb789").then(r.bind(null,"55ef"))},PageFooter:function(){return r.e("chunk-2d2102da").then(r.bind(null,"b77f"))}},data:function(){return{loading:!0,storageId:0,table:[],navi:[],page:{current:1,size:100,total:0}}},mounted:function(){this.handleSubmit()},watch:{storageId:{handler:function(t){var e=this;Object(n.g)(t).then(function(t){e.navi=t.data})}}},methods:{handleRefresh:function(t,e){var r=this,a=0<arguments.length&&void 0!==t?t:null,n=1<arguments.length&&void 0!==e&&e;this.$nextTick(function(){r.$refs.header.form.storage_id=a||0,r.$refs.header.handleFormSubmit(n)})},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick(function(){e.$refs.header.handleFormSubmit()})},handleClearName:function(){this.$refs.header.form.name=null},handleSubmit:function(t,e){var r=this;1<arguments.length&&void 0!==e&&e&&(this.page.current=1),this.loading=!0,Object(n.f)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach(function(t){Object(a.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},t,{page_no:this.page.current,page_size:this.page.size})).then(function(t){r.page.total=t.data.total_result,r.table=0<t.data.total_result?t.data.items:[]}).finally(function(){r.loading=!1,r.storageId=t?t.storage_id:0})}}},s=r("2877"),d=Object(s.a)(i,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("cs-container",{attrs:{"is-back-to-top":!0}},[r("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading},on:{submit:t.handleSubmit},slot:"header"}),r("page-main",{attrs:{loading:t.loading,"table-data":t.table,"navi-data":t.navi,"storage-id":t.storageId},on:{refresh:t.handleRefresh,clearName:t.handleClearName}}),r("page-footer",{attrs:{slot:"footer",current:t.page.current,loading:t.loading,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},[],!1,null,null,null);e.default=d.exports}}]);