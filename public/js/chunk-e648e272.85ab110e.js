(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e648e272"],{1213:function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"e",function(){return o}),a.d(e,"m",function(){return i}),a.d(e,"f",function(){return s}),a.d(e,"g",function(){return d}),a.d(e,"k",function(){return u}),a.d(e,"l",function(){return c}),a.d(e,"b",function(){return l}),a.d(e,"j",function(){return g}),a.d(e,"i",function(){return h}),a.d(e,"h",function(){return f}),a.d(e,"d",function(){return m}),a.d(e,"c",function(){return p});var r=a("b775");function n(t){return Object(r.a)({url:"/v1/storage",method:"post",params:{method:"add.storage.directory.item"},data:t})}function o(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"desc",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"storage_id";return Object(r.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.directory.select"},data:{order_type:t,order_field:e}})}function i(t,e){return Object(r.a)({url:"/v1/storage",method:"post",params:{method:"set.storage.directory.default"},data:{storage_id:t,is_default:e}})}function s(t){return Object(r.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.list"},data:t})}function d(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;return Object(r.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.navi"},data:{storage_id:t,is_layer:e}})}function u(t,e){return Object(r.a)({url:"/v1/storage",method:"post",params:{method:"rename.storage.item"},data:{storage_id:t,name:e}})}function c(t,e){return Object(r.a)({url:"/v1/storage",method:"post",params:{method:"set.storage.cover"},data:{storage_id:t,parent_id:e}})}function l(t){return Object(r.a)({url:"/v1/storage",method:"post",params:{method:"clear.storage.cover"},data:{storage_id:t}})}function g(t,e){return Object(r.a)({url:"/v1/storage",method:"post",params:{method:"move.storage.list"},data:{storage_id:t,parent_id:e}})}function h(t){return Object(r.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.thumb.url"},data:t})}function f(t,e){return Object(r.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.thumb.info"},data:{url:t,source:e}})}function m(t){return Object(r.a)({url:"/v1/storage",method:"post",params:{method:"del.storage.list"},data:{storage_id:t}})}function p(t){return Object(r.a)({url:"/v1/storage",method:"post",params:{method:"clear.storage.thumb"},data:{storage_id:t}})}},"3ea4":function(t,e,a){"use strict";a.r(e);a("8e6e"),a("ac6a"),a("456d");var r=a("bd86"),n=a("1213");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var i={name:"system-storage-storage",components:{PageHeader:function(){return a.e("chunk-6cc32c5e").then(a.bind(null,"a140"))},PageMain:function(){return a.e("chunk-4100a0c6").then(a.bind(null,"55ef"))},PageFooter:function(){return a.e("chunk-2d2102da").then(a.bind(null,"b77f"))}},data:function(){return{loading:!0,storageId:0,table:[],navi:[],page:{current:1,size:0,total:0}}},mounted:function(){var a=this;this.$store.dispatch("careyshop/db/databasePage",{user:!0}).then(function(t){var e=t.get("size").value();a.page.size=e||50}).finally(function(){a.handleSubmit()})},watch:{storageId:{handler:function(t){var e=this;Object(n.g)(t).then(function(t){e.navi=t.data})}}},methods:{handleRefresh:function(t,e){var a=this,r=0<arguments.length&&void 0!==t?t:null,n=1<arguments.length&&void 0!==e&&e;this.$nextTick(function(){a.$refs.header.form.storage_id=r||0,a.$refs.header.handleFormSubmit(n)})},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick(function(){e.$refs.header.handleFormSubmit()})},handleClearName:function(){this.$refs.header.form.name=null},handleSubmit:function(t,e){var a=this;1<arguments.length&&void 0!==e&&e&&(this.page.current=1),this.loading=!0,Object(n.f)(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(a,!0).forEach(function(t){Object(r.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},t,{page_no:this.page.current,page_size:this.page.size})).then(function(t){a.page.total=t.data.total_result,a.table=0<t.data.total_result?t.data.items:[]}).finally(function(){a.loading=!1,a.storageId=t?t.storage_id:0})}}},s=a("2877"),d=Object(s.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("cs-container",{attrs:{"is-back-to-top":!0}},[a("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading},on:{submit:t.handleSubmit},slot:"header"}),a("page-main",{attrs:{loading:t.loading,"table-data":t.table,"navi-data":t.navi,"storage-id":t.storageId},on:{refresh:t.handleRefresh,clearName:t.handleClearName}}),a("page-footer",{attrs:{slot:"footer",current:t.page.current,loading:t.loading,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},[],!1,null,null,null);e.default=d.exports}}]);