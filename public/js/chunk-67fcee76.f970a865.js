(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-67fcee76"],{"550a":function(t,n,e){"use strict";e.r(n);var r=e("ca00"),i=e("f86b"),a={name:"setting-logistics-region",components:{PageMain:function(){return e.e("chunk-6ca5c109").then(e.bind(null,"1c42"))}},data:function(){return{tree:[],loading:!0}},mounted:function(){this.handleSubmit()},methods:{handleRefresh:function(){var t=this;this.$nextTick(function(){t.handleSubmit()})},handleSubmit:function(){var n=this;this.loading=!0,Object(i.d)({region_id:1}).then(function(t){n.tree=t.data.length?r.a.formatDataToTree(t.data,"region_id","parent_id",{key:"parent_id",value:[1]}):[],n.$refs.main&&(n.$refs.main.filterText="",n.$refs.main.resetForm(),n.$refs.main.resetElements())}).finally(function(){n.loading=!1})}}},o=e("2877"),u=Object(o.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("cs-container",{attrs:{"is-back-to-top":!0}},[e("page-main",{ref:"main",attrs:{"tree-data":t.tree,loading:t.loading},on:{refresh:t.handleRefresh}})],1)},[],!1,null,null,null);n.default=u.exports},f86b:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"f",function(){return a}),e.d(n,"b",function(){return o}),e.d(n,"c",function(){return u}),e.d(n,"d",function(){return d}),e.d(n,"e",function(){return s});var r=e("b775");function i(t){return Object(r.a)({url:"/v1/region",method:"post",params:{method:"add.region.item"},data:t})}function a(t){return Object(r.a)({url:"/v1/region",method:"post",params:{method:"set.region.item"},data:t})}function o(t){return Object(r.a)({url:"/v1/region",method:"post",params:{method:"del.region.list"},data:{region_id:t}})}function u(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return Object(r.a)({url:"/v1/region",method:"post",params:{method:"get.region.list"},data:t})}function d(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return Object(r.a)({url:"/v1/region",method:"post",params:{method:"get.region.son.list"},data:t})}function s(t){return Object(r.a)({url:"/v1/region",method:"post",params:{method:"set.region.index"},data:{region_id:t}})}}}]);