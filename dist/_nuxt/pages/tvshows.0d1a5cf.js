(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{331:function(t,e,r){"use strict";r.r(e);r(10),r(8),r(5),r(4),r(9),r(62);var n=r(2),o=r(61),c=r(76);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"Card",components:{},props:{item:{default:function(){return{}},type:Object},type:{default:function(){return{}},type:String},cid:{default:function(){return{}},type:String}},data:function(){return{key:"615416944a44ce93ed4100b890e43b0a",videoKey:this.item.id,scrollInvoked:0,showInfoDialog:!1,detailsDialog:!1,showNoResults:!1,trailerDialog:!1,overlay:!1,details:{}}},computed:d(d({},Object(o.b)(["isLoading"])),{},{loading:function(){return this.isLoading(this.cid)}}),methods:{getInfo:function(i){var t=this;["show"===this.type?"https://api.themoviedb.org/3/tv/".concat(i.id,"?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"):"https://api.themoviedb.org/3/movie/".concat(i.id,"?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"),"show"===this.type?"https://api.themoviedb.org/3/tv/".concat(i.id,"/credits?api_key=").concat("615416944a44ce93ed4100b890e43b0a"):"https://api.themoviedb.org/3/movie/".concat(i.id,"/credits?api_key=").concat("615416944a44ce93ed4100b890e43b0a"),"show"===this.type?"https://api.themoviedb.org/3/tv/".concat(i.id,"/similar?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"):"https://api.themoviedb.org/3/movie/".concat(i.id,"/similar?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"),"show"===this.type?"https://api.themoviedb.org/3/tv/".concat(i.id,"/reviews?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"):"https://api.themoviedb.org/3/movie/".concat(i.id,"/reviews?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"),"show"===this.type?"https://api.themoviedb.org/3/tv/".concat(i.id,"/videos?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"):"https://api.themoviedb.org/3/movie/".concat(i.id,"/videos?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US")].forEach((function(e,r){t.opts=c.a.renderObject(e,"objInfo.".concat(r)),t.$store.dispatch(c.a.sI,t.opts)}));var e="show"===this.type?i.original_name.replace(/\s/g,"-"):i.title.replace(/\s/g,"-");this.$router.push("/".concat(e))},toggleInfoDialog:function(){this.showInfoDialog=!this.showInfoDialog},toggleTrailerDialog:function(){this.trailerDialog=!this.trailerDialog}}},v=r(48),f=r(75),y=r.n(f),m=r(199),w=r(344),O=r(330),P=r(329),j=r(384),_=r(137),x=r(117),S=r(391),C=r(382),k=r(35),D=r(345),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ma-1"},[r("v-skeleton-loader",{staticClass:"mx-auto",attrs:{loading:t.loading,transition:"fade",type:"card"}},[r("v-card",{staticClass:"mx-auto"},[null!=t.item.poster_path?r("v-img",{staticClass:"white--text align-end",attrs:{width:"150",src:"https://image.tmdb.org/t/p/original"+t.item.poster_path,"lazy-src":"https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg",contain:""},on:{click:function(e){return t.getInfo(t.item)}}}):r("v-img",{staticClass:"white--text align-end",attrs:{width:"150",src:"https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg","lazy-src":"https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg",contain:""}})],1)],1),t._v(" "),r("v-dialog",{attrs:{"max-width":"900"},model:{value:t.showInfoDialog,callback:function(e){t.showInfoDialog=e},expression:"showInfoDialog"}},[r("v-img",{staticStyle:{position:"relative"},attrs:{src:t.item.backdrop}},[r("v-card",{staticClass:"px-10 ",staticStyle:{"background-color":"rgba(0,0,0,0.5)",position:"absolute"},attrs:{width:"100%",height:"100%"}},[r("v-row",{staticClass:"d-flex justify-end"},[r("v-icon",{staticClass:"pa-5",attrs:{color:"red"},on:{click:t.toggleInfoDialog}},[t._v("\n            mdi-close\n          ")])],1),t._v(" "),r("v-row",{staticClass:"d-flex"},[r("div",{staticClass:"col-3"},[r("v-img",{staticClass:"white--text align-end",attrs:{width:"175px",src:t.item.poster}}),t._v(" "),r("v-rating",{attrs:{value:t.item.vote_average/2,color:"orange",small:""}})],1),t._v(" "),r("div",{staticClass:"col-9"},[r("v-card-title",[t._v(t._s(t.item.title)+" "+t._s(t.item.name))]),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("\n              Release Date: "+t._s(t.item.release_date)+" "+t._s(t.item.first_air_date)+"\n            ")]),t._v(" "),r("v-card-text",{staticClass:"text--primary"},[t._v("\n              Overview: "+t._s(t.item.overview)+"\n            ")]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"orange",text:""},on:{click:t.toggleTrailerDialog}},[r("v-icon",[t._v("mdi-play-outline")])],1)],1)],1)])],1)],1)],1),t._v(" "),r("v-dialog",{staticClass:"d-flex justify-center",staticStyle:{position:"absolute"},attrs:{"max-width":"1090",loading:t.loading,"overlay-color":"black"},model:{value:t.trailerDialog,callback:function(e){t.trailerDialog=e},expression:"trailerDialog"}},[t.trailerDialog?r("v-container",{staticClass:"d-flex flex-column pa-0"},[t.Trailers.length<=0?r("v-sheet",{staticClass:"d-flex justify-center pa-100",attrs:{color:"red"}},[r("h1",[t._v("No Trailers availableat the time ")])]):r("v-row",[r("vue-plyr",{staticClass:"player"},[r("div",{attrs:{"data-plyr-provider":t.Trailers[0].site,"data-plyr-embed-id":t.Trailers[0].key}})])],1)],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VBtn:m.a,VCard:w.a,VCardActions:O.a,VCardSubtitle:O.b,VCardText:O.c,VCardTitle:O.d,VContainer:P.a,VDialog:j.a,VIcon:_.a,VImg:x.a,VRating:S.a,VRow:C.a,VSheet:k.a,VSkeletonLoader:D.a})},343:function(t,e,r){"use strict";r.r(e);r(10),r(8),r(5),r(4),r(9);var n=r(2),o=r(61),c=r(76);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={data:function(){return{mediaType:"show",componentId:"popularShows",popularUrl:"https://api.themoviedb.org/3/tv/popular?api_key=".concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"),currentPage:1,nextPage:0,totalPages:1,results:[]}},computed:d(d({},Object(o.b)(["getData","isLoading"])),{},{popularShows:function(){return this.loading?[]:this.getData(this.opts.componentId)},loading:function(){return this.isLoading(this.opts.componentId)}}),created:function(){this.loadPopular()},mounted:function(){},methods:{loadPopular:function(){var t="".concat(this.popularUrl,"&page=").concat(this.currentPage);this.opts=c.a.renderObject(t,this.componentId),this.$store.dispatch(c.a.grd,this.opts)},updatePage:function(){if(this.currentPage===this.nextPage)return null;this.nextPage=this.currentPage,this.opts=c.a.renderObject("".concat(this.popularUrl,"&page=").concat(this.currentPage),this.componentId),this.loadPopular()}}},v=r(48),f=r(75),y=r.n(f),m=r(329),w=r(140),O=r(383),P=r(136),j=r(382),_=r(35),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{staticClass:"d-flex justify-center"},[r("v-row",{staticClass:"d-flex justify-start",attrs:{width:"100%"}},[r("v-sheet",[t._v("Popular Shows")])],1),t._v(" "),r("v-container",{staticClass:"d-flex justify-content-center",staticStyle:{overflow:"auto","white-space":"nowrap"}},t._l(t.popularShows.results,(function(e,n){return r("div",{key:n},[r("Card",{staticStyle:{display:"inline-block"},attrs:{item:e,type:t.mediaType,cid:t.componentId,loading:t.loading}})],1)})),0),t._v(" "),r("v-pagination",{attrs:{"total-visible":7,length:t.popularShows.totalPages},on:{input:t.updatePage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),r("v-overlay",{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-progress-circular",{attrs:{size:70,width:"7",color:"purple",indeterminate:""}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{Card:r(331).default}),y()(component,{VContainer:m.a,VOverlay:w.a,VPagination:O.a,VProgressCircular:P.a,VRow:j.a,VSheet:_.a})},376:function(t,e,r){"use strict";r.r(e);r(10),r(8),r(5),r(4),r(9);var n=r(2),o=r(61),c=r(76);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={data:function(){return{mediaType:"show",componentId:"topRatedShows",topRatedUrl:"https://api.themoviedb.org/3/tv/top_rated?api_key=".concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"),currentPage:1,nextPage:0,totalPages:1,results:[]}},computed:d(d({},Object(o.b)(["getData","isLoading"])),{},{topRatedShows:function(){return this.loading?[]:this.getData(this.opts.componentId)},loading:function(){return this.isLoading(this.opts.componentId)}}),created:function(){this.loadTopRated()},mounted:function(){},methods:{loadTopRated:function(){var t="".concat(this.topRatedUrl,"&page=").concat(this.currentPage);this.opts=c.a.renderObject(t,this.componentId),this.$store.dispatch(c.a.grd,this.opts)},updatePage:function(){if(this.currentPage===this.nextPage)return null;this.nextPage=this.currentPage,this.opts=c.a.renderObject("".concat(this.topRatedUrl,"&page=").concat(this.currentPage),this.componentId),this.loadTopRated()}}},v=r(48),f=r(75),y=r.n(f),m=r(329),w=r(140),O=r(383),P=r(136),j=r(382),_=r(35),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{staticClass:"d-flex justify-center"},[r("v-row",{staticClass:"d-flex justify-start",attrs:{width:"100%"}},[r("v-sheet",[t._v("Top Rated Shows")])],1),t._v(" "),r("v-container",{staticClass:"d-flex justify-content-center",staticStyle:{overflow:"auto","white-space":"nowrap"}},t._l(t.topRatedShows.results,(function(e,n){return r("div",{key:n},[r("Card",{staticStyle:{display:"inline-block"},attrs:{item:e,type:t.mediaType,cid:t.componentId,loading:t.loading}})],1)})),0),t._v(" "),r("v-pagination",{attrs:{"total-visible":7,length:t.topRatedShows.totalPages},on:{input:t.updatePage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),r("v-overlay",{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-progress-circular",{attrs:{size:70,width:"7",color:"purple",indeterminate:""}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{Card:r(331).default}),y()(component,{VContainer:m.a,VOverlay:w.a,VPagination:O.a,VProgressCircular:P.a,VRow:j.a,VSheet:_.a})},377:function(t,e,r){"use strict";r.r(e);r(10),r(8),r(5),r(4),r(9);var n=r(2),o=r(61),c=r(76);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={data:function(){return{mediaType:"show",componentId:"onAirShows",onAirUrl:"https://api.themoviedb.org/3/tv/on_the_air?api_key=".concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"),currentPage:1,nextPage:0,totalPages:1,results:[]}},computed:d(d({},Object(o.b)(["getData","isLoading"])),{},{onAirShows:function(){return this.loading?[]:this.getData(this.opts.componentId)},loading:function(){return this.isLoading(this.opts.componentId)}}),created:function(){this.loadOnAir()},mounted:function(){},methods:{loadOnAir:function(){var t="".concat(this.onAirUrl,"&page=").concat(this.currentPage);this.opts=c.a.renderObject(t,this.componentId),this.$store.dispatch(c.a.grd,this.opts)},updatePage:function(){if(this.currentPage===this.nextPage)return null;this.nextPage=this.currentPage,this.opts=c.a.renderObject("".concat(this.onAirUrl,"&page=").concat(this.currentPage),this.componentId),this.loadOnAir()}}},v=r(48),f=r(75),y=r.n(f),m=r(329),w=r(140),O=r(383),P=r(136),j=r(382),_=r(35),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{staticClass:"d-flex justify-center"},[r("v-row",{staticClass:"d-flex justify-start",attrs:{width:"100%"}},[r("v-sheet",[t._v("On Air Shows")])],1),t._v(" "),r("v-container",{staticClass:"d-flex justify-content-center",staticStyle:{overflow:"auto","white-space":"nowrap"}},t._l(t.onAirShows.results,(function(e,n){return r("div",{key:n},[r("Card",{staticStyle:{display:"inline-block"},attrs:{item:e,type:t.mediaType,cid:t.componentId,loading:t.loading}})],1)})),0),t._v(" "),r("v-pagination",{attrs:{"total-visible":7,length:t.onAirShows.totalPages},on:{input:t.updatePage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),r("v-overlay",{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-progress-circular",{attrs:{size:70,width:"7",color:"purple",indeterminate:""}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{Card:r(331).default}),y()(component,{VContainer:m.a,VOverlay:w.a,VPagination:O.a,VProgressCircular:P.a,VRow:j.a,VSheet:_.a})},378:function(t,e,r){"use strict";r.r(e);r(10),r(8),r(5),r(4),r(9);var n=r(2),o=r(61),c=r(76);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={data:function(){return{mediaType:"show",componentId:"airingTodayShows",airingTodayUrl:"https://api.themoviedb.org/3/tv/airing_today?api_key=".concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"),currentPage:1,nextPage:0,totalPages:1,results:[]}},computed:d(d({},Object(o.b)(["getData","isLoading"])),{},{airingTodayShows:function(){return this.loading?[]:this.getData(this.opts.componentId)},loading:function(){return this.isLoading(this.opts.componentId)}}),created:function(){this.loadAiringToday()},mounted:function(){},methods:{loadAiringToday:function(){var t="".concat(this.airingTodayUrl,"&page=").concat(this.currentPage);this.opts=c.a.renderObject(t,this.componentId),this.$store.dispatch(c.a.grd,this.opts)},updatePage:function(){if(this.currentPage===this.nextPage)return null;this.nextPage=this.currentPage,this.opts=c.a.renderObject("".concat(this.airingTodayUrl,"&page=").concat(this.currentPage),this.componentId),this.loadAiringToday()}}},v=r(48),f=r(75),y=r.n(f),m=r(329),w=r(140),O=r(383),P=r(136),j=r(382),_=r(35),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{staticClass:"d-flex justify-center"},[r("v-row",{staticClass:"d-flex justify-start",attrs:{width:"100%"}},[r("v-sheet",[t._v("Airing Today")])],1),t._v(" "),r("v-container",{staticClass:"d-flex justify-content-center",staticStyle:{overflow:"auto","white-space":"nowrap"}},t._l(t.airingTodayShows.results,(function(e,n){return r("div",{key:n},[r("Card",{staticStyle:{display:"inline-block"},attrs:{item:e,type:t.mediaType,cid:t.componentId,loading:t.loading}})],1)})),0),t._v(" "),r("v-pagination",{attrs:{"total-visible":7,length:t.airingTodayShows.totalPages},on:{input:t.updatePage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),r("v-overlay",{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-progress-circular",{attrs:{size:70,width:"7",color:"purple",indeterminate:""}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{Card:r(331).default}),y()(component,{VContainer:m.a,VOverlay:w.a,VPagination:O.a,VProgressCircular:P.a,VRow:j.a,VSheet:_.a})},390:function(t,e,r){"use strict";r.r(e);var n=r(48),o=r(75),c=r.n(o),l=r(329),d=r(382),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("v-row",[e("Popular")],1),this._v(" "),e("v-row",[e("TopRated")],1),this._v(" "),e("v-row",[e("OnAir")],1),this._v(" "),e("v-row",[e("AiringToday")],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{Popular:r(343).default,TopRated:r(376).default,OnAir:r(377).default,AiringToday:r(378).default}),c()(component,{VContainer:l.a,VRow:d.a})}}]);