(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f513df5e"],{aed4:function(t,e,r){"use strict";r.d(e,"a",function(){return o}),r.d(e,"d",function(){return a}),r.d(e,"b",function(){return u}),r.d(e,"c",function(){return i}),r.d(e,"f",function(){return s}),r.d(e,"e",function(){return d});var n=r("b775");function o(t){return Object(n.a)({url:"/v1/support",method:"post",params:{method:"add.support.item"},data:t})}function a(t){return Object(n.a)({url:"/v1/support",method:"post",params:{method:"set.support.item"},data:t})}function u(t){return Object(n.a)({url:"/v1/support",method:"post",params:{method:"del.support.list"},data:{support_id:t}})}function i(t){return Object(n.a)({url:"/v1/support",method:"post",params:{method:"get.support.list"},data:t})}function s(t,e){return Object(n.a)({url:"/v1/support",method:"post",params:{method:"set.support.status"},data:{support_id:t,status:e}})}function d(t,e){return Object(n.a)({url:"/v1/support",method:"post",params:{method:"set.support.sort"},data:{support_id:t,sort:e}})}},f266:function(t,e,r){"use strict";r.r(e);r("8e6e"),r("ac6a"),r("456d");var n=r("bd86"),o=r("aed4");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var u={name:"system-aided-support",components:{PageHeader:function(){return r.e("chunk-2d0dec65").then(r.bind(null,"86a2"))},PageMain:function(){return r.e("chunk-76fe70d4").then(r.bind(null,"b5904"))}},data:function(){return{loading:!0,table:[],order:{order_type:void 0,order_field:void 0}}},mounted:function(){this.handleSubmit()},methods:{handleRefresh:function(){var t=this;this.$nextTick(function(){t.$refs.header.handleFormSubmit()})},handleSort:function(t){var e=this;this.order=t,this.$nextTick(function(){e.$refs.header.handleFormSubmit()})},handleSubmit:function(t){var e=this;this.loading=!0,Object(o.c)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(r,!0).forEach(function(t){Object(n.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},t,{},this.order)).then(function(t){e.table=0<t.data.length?t.data:[]}).finally(function(){e.loading=!1})}}},i=r("2877"),s=Object(i.a)(u,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("cs-container",{attrs:{"is-back-to-top":!0}},[r("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading},on:{submit:t.handleSubmit},slot:"header"}),r("page-main",{attrs:{loading:t.loading,"table-data":t.table},on:{sort:t.handleSort,refresh:t.handleRefresh}})],1)},[],!1,null,null,null);e.default=s.exports}}]);