(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{331:function(e,t,o){"use strict";o.r(t);o(10),o(8),o(5),o(4),o(9),o(62);var l=o(2),r=o(61),n=o(76);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _={name:"Card",components:{},props:{item:{default:function(){return{}},type:Object},type:{default:function(){return{}},type:String},cid:{default:function(){return{}},type:String}},data:function(){return{key:"615416944a44ce93ed4100b890e43b0a",videoKey:this.item.id,scrollInvoked:0,showInfoDialog:!1,detailsDialog:!1,showNoResults:!1,trailerDialog:!1,overlay:!1,details:{}}},computed:v(v({},Object(r.b)(["isLoading"])),{},{loading:function(){return this.isLoading(this.cid)}}),methods:{getInfo:function(i){var e=this;["show"===this.type?"https://api.themoviedb.org/3/tv/".concat(i.id,"?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"):"https://api.themoviedb.org/3/movie/".concat(i.id,"?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"),"show"===this.type?"https://api.themoviedb.org/3/tv/".concat(i.id,"/credits?api_key=").concat("615416944a44ce93ed4100b890e43b0a"):"https://api.themoviedb.org/3/movie/".concat(i.id,"/credits?api_key=").concat("615416944a44ce93ed4100b890e43b0a"),"show"===this.type?"https://api.themoviedb.org/3/tv/".concat(i.id,"/similar?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"):"https://api.themoviedb.org/3/movie/".concat(i.id,"/similar?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"),"show"===this.type?"https://api.themoviedb.org/3/tv/".concat(i.id,"/reviews?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"):"https://api.themoviedb.org/3/movie/".concat(i.id,"/reviews?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"),"show"===this.type?"https://api.themoviedb.org/3/tv/".concat(i.id,"/videos?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"):"https://api.themoviedb.org/3/movie/".concat(i.id,"/videos?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US")].forEach((function(t,o){e.opts=n.a.renderObject(t,"objInfo.".concat(o)),e.$store.dispatch(n.a.sI,e.opts)}));var t="show"===this.type?i.original_name.replace(/\s/g,"-"):i.title.replace(/\s/g,"-");this.$router.push("/".concat(t))},toggleInfoDialog:function(){this.showInfoDialog=!this.showInfoDialog},toggleTrailerDialog:function(){this.trailerDialog=!this.trailerDialog}}},c=o(48),h=o(75),k=o.n(h),m=o(199),f=o(344),x=o(330),y=o(329),w=o(384),O=o(137),j=o(117),S=o(391),C=o(382),D=o(35),P=o(345),component=Object(c.a)(_,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"ma-1"},[o("v-skeleton-loader",{staticClass:"mx-auto",attrs:{loading:e.loading,transition:"fade",type:"card"}},[o("v-card",{staticClass:"mx-auto"},[null!=e.item.poster_path?o("v-img",{staticClass:"white--text align-end",attrs:{width:"150",src:"https://image.tmdb.org/t/p/original"+e.item.poster_path,"lazy-src":"https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg",contain:""},on:{click:function(t){return e.getInfo(e.item)}}}):o("v-img",{staticClass:"white--text align-end",attrs:{width:"150",src:"https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg","lazy-src":"https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg",contain:""}})],1)],1),e._v(" "),o("v-dialog",{attrs:{"max-width":"900"},model:{value:e.showInfoDialog,callback:function(t){e.showInfoDialog=t},expression:"showInfoDialog"}},[o("v-img",{staticStyle:{position:"relative"},attrs:{src:e.item.backdrop}},[o("v-card",{staticClass:"px-10 ",staticStyle:{"background-color":"rgba(0,0,0,0.5)",position:"absolute"},attrs:{width:"100%",height:"100%"}},[o("v-row",{staticClass:"d-flex justify-end"},[o("v-icon",{staticClass:"pa-5",attrs:{color:"red"},on:{click:e.toggleInfoDialog}},[e._v("\n            mdi-close\n          ")])],1),e._v(" "),o("v-row",{staticClass:"d-flex"},[o("div",{staticClass:"col-3"},[o("v-img",{staticClass:"white--text align-end",attrs:{width:"175px",src:e.item.poster}}),e._v(" "),o("v-rating",{attrs:{value:e.item.vote_average/2,color:"orange",small:""}})],1),e._v(" "),o("div",{staticClass:"col-9"},[o("v-card-title",[e._v(e._s(e.item.title)+" "+e._s(e.item.name))]),e._v(" "),o("v-card-subtitle",{staticClass:"pb-0"},[e._v("\n              Release Date: "+e._s(e.item.release_date)+" "+e._s(e.item.first_air_date)+"\n            ")]),e._v(" "),o("v-card-text",{staticClass:"text--primary"},[e._v("\n              Overview: "+e._s(e.item.overview)+"\n            ")]),e._v(" "),o("v-card-actions",[o("v-btn",{attrs:{color:"orange",text:""},on:{click:e.toggleTrailerDialog}},[o("v-icon",[e._v("mdi-play-outline")])],1)],1)],1)])],1)],1)],1),e._v(" "),o("v-dialog",{staticClass:"d-flex justify-center",staticStyle:{position:"absolute"},attrs:{"max-width":"1090",loading:e.loading,"overlay-color":"black"},model:{value:e.trailerDialog,callback:function(t){e.trailerDialog=t},expression:"trailerDialog"}},[e.trailerDialog?o("v-container",{staticClass:"d-flex flex-column pa-0"},[e.Trailers.length<=0?o("v-sheet",{staticClass:"d-flex justify-center pa-100",attrs:{color:"red"}},[o("h1",[e._v("No Trailers availableat the time ")])]):o("v-row",[o("vue-plyr",{staticClass:"player"},[o("div",{attrs:{"data-plyr-provider":e.Trailers[0].site,"data-plyr-embed-id":e.Trailers[0].key}})])],1)],1):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;k()(component,{VBtn:m.a,VCard:f.a,VCardActions:x.a,VCardSubtitle:x.b,VCardText:x.c,VCardTitle:x.d,VContainer:y.a,VDialog:w.a,VIcon:O.a,VImg:j.a,VRating:S.a,VRow:C.a,VSheet:D.a,VSkeletonLoader:P.a})},337:function(e,t,o){var content=o(338);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("5f757930",content,!0,{sourceMap:!1})},338:function(e,t,o){(t=o(11)(!1)).push([e.i,'.theme--light.v-skeleton-loader .v-skeleton-loader__bone:after{background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3),hsla(0,0%,100%,0))}.theme--light.v-skeleton-loader .v-skeleton-loader__avatar,.theme--light.v-skeleton-loader .v-skeleton-loader__button,.theme--light.v-skeleton-loader .v-skeleton-loader__chip,.theme--light.v-skeleton-loader .v-skeleton-loader__divider,.theme--light.v-skeleton-loader .v-skeleton-loader__heading,.theme--light.v-skeleton-loader .v-skeleton-loader__image,.theme--light.v-skeleton-loader .v-skeleton-loader__text{background:rgba(0,0,0,.12)}.theme--light.v-skeleton-loader .v-skeleton-loader__actions,.theme--light.v-skeleton-loader .v-skeleton-loader__article,.theme--light.v-skeleton-loader .v-skeleton-loader__card-heading,.theme--light.v-skeleton-loader .v-skeleton-loader__card-text,.theme--light.v-skeleton-loader .v-skeleton-loader__date-picker,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-text,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-two-line,.theme--light.v-skeleton-loader .v-skeleton-loader__table-heading,.theme--light.v-skeleton-loader .v-skeleton-loader__table-tbody,.theme--light.v-skeleton-loader .v-skeleton-loader__table-tfoot,.theme--light.v-skeleton-loader .v-skeleton-loader__table-thead{background:#fff}.theme--dark.v-skeleton-loader .v-skeleton-loader__bone:after{background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))}.theme--dark.v-skeleton-loader .v-skeleton-loader__avatar,.theme--dark.v-skeleton-loader .v-skeleton-loader__button,.theme--dark.v-skeleton-loader .v-skeleton-loader__chip,.theme--dark.v-skeleton-loader .v-skeleton-loader__divider,.theme--dark.v-skeleton-loader .v-skeleton-loader__heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__image,.theme--dark.v-skeleton-loader .v-skeleton-loader__text{background:hsla(0,0%,100%,.12)}.theme--dark.v-skeleton-loader .v-skeleton-loader__actions,.theme--dark.v-skeleton-loader .v-skeleton-loader__article,.theme--dark.v-skeleton-loader .v-skeleton-loader__card-heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__card-text,.theme--dark.v-skeleton-loader .v-skeleton-loader__date-picker,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-text,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-two-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-tbody,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-tfoot,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-thead{background:#1e1e1e}.v-skeleton-loader{border-radius:4px;position:relative;vertical-align:top}.v-skeleton-loader__actions{padding:16px 16px 8px;text-align:right}.v-skeleton-loader__actions .v-skeleton-loader__button{display:inline-block}.v-application--is-ltr .v-skeleton-loader__actions .v-skeleton-loader__button:first-child{margin-right:12px}.v-application--is-rtl .v-skeleton-loader__actions .v-skeleton-loader__button:first-child{margin-left:12px}.v-skeleton-loader .v-skeleton-loader__list-item,.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader .v-skeleton-loader__list-item-text,.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.v-skeleton-loader .v-skeleton-loader__list-item-two-line{border-radius:4px}.v-skeleton-loader .v-skeleton-loader__actions:after,.v-skeleton-loader .v-skeleton-loader__article:after,.v-skeleton-loader .v-skeleton-loader__card-avatar:after,.v-skeleton-loader .v-skeleton-loader__card-heading:after,.v-skeleton-loader .v-skeleton-loader__card-text:after,.v-skeleton-loader .v-skeleton-loader__card:after,.v-skeleton-loader .v-skeleton-loader__date-picker-days:after,.v-skeleton-loader .v-skeleton-loader__date-picker-options:after,.v-skeleton-loader .v-skeleton-loader__date-picker:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar:after,.v-skeleton-loader .v-skeleton-loader__list-item-text:after,.v-skeleton-loader .v-skeleton-loader__list-item-three-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-two-line:after,.v-skeleton-loader .v-skeleton-loader__list-item:after,.v-skeleton-loader .v-skeleton-loader__paragraph:after,.v-skeleton-loader .v-skeleton-loader__sentences:after,.v-skeleton-loader .v-skeleton-loader__table-cell:after,.v-skeleton-loader .v-skeleton-loader__table-heading:after,.v-skeleton-loader .v-skeleton-loader__table-row-divider:after,.v-skeleton-loader .v-skeleton-loader__table-row:after,.v-skeleton-loader .v-skeleton-loader__table-tbody:after,.v-skeleton-loader .v-skeleton-loader__table-tfoot:after,.v-skeleton-loader .v-skeleton-loader__table-thead:after,.v-skeleton-loader .v-skeleton-loader__table:after{display:none}.v-application--is-ltr .v-skeleton-loader__article .v-skeleton-loader__heading{margin:16px 0 16px 16px}.v-application--is-rtl .v-skeleton-loader__article .v-skeleton-loader__heading{margin:16px 16px 0}.v-skeleton-loader__article .v-skeleton-loader__paragraph{padding:16px}.v-skeleton-loader__bone{border-radius:inherit;overflow:hidden;position:relative}.v-skeleton-loader__bone:after{-webkit-animation:loading 1.5s infinite;animation:loading 1.5s infinite;content:"";height:100%;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:1}.v-skeleton-loader__avatar{border-radius:50%;height:48px;width:48px}.v-skeleton-loader__button{border-radius:4px;height:36px;width:64px}.v-skeleton-loader__card .v-skeleton-loader__image{border-radius:0}.v-skeleton-loader__card-heading .v-skeleton-loader__heading{margin:16px}.v-skeleton-loader__card-text{padding:16px}.v-skeleton-loader__chip{border-radius:16px;height:32px;width:96px}.v-skeleton-loader__date-picker{border-radius:inherit}.v-skeleton-loader__date-picker .v-skeleton-loader__list-item:first-child .v-skeleton-loader__text{max-width:88px;width:20%}.v-skeleton-loader__date-picker .v-skeleton-loader__heading{max-width:256px;width:40%}.v-skeleton-loader__date-picker-days{display:flex;flex-wrap:wrap;padding:0 12px;margin:0 auto}.v-skeleton-loader__date-picker-days .v-skeleton-loader__avatar{border-radius:4px;flex:1 1 auto;margin:4px;height:40px;width:40px}.v-skeleton-loader__date-picker-options{align-items:center;display:flex;padding:16px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-left:auto}.v-application--is-ltr .v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-right:8px}.v-application--is-rtl .v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-left:8px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__text.v-skeleton-loader__bone:first-child{margin-bottom:0;max-width:50%;width:456px}.v-skeleton-loader__divider{border-radius:1px;height:2px}.v-skeleton-loader__heading{border-radius:12px;height:24px;width:45%}.v-skeleton-loader__image{height:200px;border-radius:0}.v-skeleton-loader__image~.v-skeleton-loader__card-heading{border-radius:0}.v-skeleton-loader__image::first-child,.v-skeleton-loader__image::last-child{border-radius:inherit}.v-skeleton-loader__list-item{height:48px}.v-skeleton-loader__list-item-three-line{flex-wrap:wrap}.v-skeleton-loader__list-item-three-line>*{flex:1 0 100%;width:100%}.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__list-item-avatar{height:48px}.v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader__list-item-two-line{height:72px}.v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader__list-item-three-line{height:88px}.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar{align-self:flex-start}.v-skeleton-loader__list-item,.v-skeleton-loader__list-item-avatar,.v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader__list-item-three-line,.v-skeleton-loader__list-item-two-line{align-content:center;align-items:center;display:flex;flex-wrap:wrap;padding:0 16px}.v-application--is-ltr .v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-three-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-two-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item .v-skeleton-loader__avatar{margin-right:16px}.v-application--is-rtl .v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-three-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-two-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item .v-skeleton-loader__avatar{margin-left:16px}.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-three-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-three-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-two-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-two-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item .v-skeleton-loader__text:only-child{margin-bottom:0}.v-skeleton-loader__paragraph,.v-skeleton-loader__sentences{flex:1 0 auto}.v-skeleton-loader__paragraph:not(:last-child){margin-bottom:6px}.v-skeleton-loader__paragraph .v-skeleton-loader__text:first-child{max-width:100%}.v-skeleton-loader__paragraph .v-skeleton-loader__text:nth-child(2){max-width:50%}.v-skeleton-loader__paragraph .v-skeleton-loader__text:nth-child(3),.v-skeleton-loader__sentences .v-skeleton-loader__text:nth-child(2){max-width:70%}.v-skeleton-loader__sentences:not(:last-child){margin-bottom:6px}.v-skeleton-loader__table-heading{align-items:center;display:flex;justify-content:space-between;padding:16px}.v-skeleton-loader__table-heading .v-skeleton-loader__heading{max-width:15%}.v-skeleton-loader__table-heading .v-skeleton-loader__text{max-width:40%}.v-skeleton-loader__table-thead{display:flex;justify-content:space-between;padding:16px}.v-skeleton-loader__table-thead .v-skeleton-loader__heading{max-width:5%}.v-skeleton-loader__table-tbody{padding:16px 16px 0}.v-skeleton-loader__table-tfoot{align-items:center;display:flex;justify-content:flex-end;padding:16px}.v-application--is-ltr .v-skeleton-loader__table-tfoot>*{margin-left:8px}.v-application--is-rtl .v-skeleton-loader__table-tfoot>*{margin-right:8px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text{margin-bottom:0}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text:first-child{max-width:128px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text:nth-child(2){max-width:64px}.v-skeleton-loader__table-row{display:flex;justify-content:space-between}.v-skeleton-loader__table-cell{align-items:center;display:flex;height:48px;width:88px}.v-skeleton-loader__table-cell .v-skeleton-loader__text{margin-bottom:0}.v-skeleton-loader__text{border-radius:6px;flex:1 0 auto;height:12px;margin-bottom:6px}.v-skeleton-loader--boilerplate .v-skeleton-loader__bone:after{display:none}.v-skeleton-loader--is-loading{overflow:hidden}.v-skeleton-loader--tile,.v-skeleton-loader--tile .v-skeleton-loader__bone{border-radius:0}@-webkit-keyframes loading{to{transform:translateX(100%)}}@keyframes loading{to{transform:translateX(100%)}}',""]),e.exports=t},341:function(e,t,o){"use strict";o.r(t);o(27),o(62);var l=o(76),r={props:{item:{default:function(){return{}},type:Object}},data:function(){return{overlay:!1}},methods:{getActorsCredit:function(i){var e="https://api.themoviedb.org/3/person/".concat(i.id,"/combined_credits?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"),t=i.name.replace(/\s/g,"-");this.opts=l.a.renderObject(e,"".concat(t)),this.$store.dispatch(l.a.sI,this.opts),this.getActorsDetails(i),this.$router.push("actor/".concat(t))},getActorsDetails:function(i){var e="https://api.themoviedb.org/3/person/".concat(i.id,"?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&language=en-US"),t=i.name.replace(/\s/g,"-");this.opts=l.a.renderObject(e,"".concat(t,".details")),this.$store.dispatch(l.a.sI,this.opts)}}},n=o(48),d=o(75),v=o.n(d),_=o(344),c=o(150),h=o(340),k=o(43),m=o(7),f=o(6),x=Object(m.a)(h.a,k.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(f.c)("v-hover should only contain a single element",this),element)):(Object(f.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}}),y=o(117),w=o(140),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var l=t.hover;return[o("v-card",{staticClass:"ma-2 pa-0",on:{click:function(t){return e.getActorsCredit(e.item)}}},[o("v-img",{staticClass:"white--text align-end",attrs:{src:"https://image.tmdb.org/t/p/original"+e.item.profile_path,"lazy-src":"https://www.wcaeagles.org/wp-content/uploads/2016/07/male-placeholder.jpg",alt:e.item.profile_path,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)",width:"150"}}),e._v(" "),o("v-fade-transition",[l?o("v-overlay",{attrs:{absolute:"",color:"#080808"}},[o("p",{staticClass:"font-weight-light",staticStyle:{"white-space":"wrap"},attrs:{size:"o.75rem",height:"10"},domProps:{textContent:e._s(e.item.name)}}),e._v(" "),o("p",{staticClass:"font-weight-light",staticStyle:{"white-space":"wrap"},attrs:{size:"o.75rem",height:"10"},domProps:{textContent:e._s(e.item.character)}})]):e._e()],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports;v()(component,{VCard:_.a,VFadeTransition:c.b,VHover:x,VImg:y.a,VOverlay:w.a})},345:function(e,t,o){"use strict";o(10),o(8),o(5),o(4),o(9),o(62),o(44),o(45),o(49);var l=o(16),r=o(2),n=(o(337),o(149)),d=o(71),v=o(26),_=o(7),c=o(1);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(_.a)(n.a,d.a,v.a).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:k({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return k(k({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return k({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(text,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(text," v-skeleton-loader__bone")},e)},genBones:function(e){var t=this,o=e.split("@"),r=Object(l.a)(o,2),n=r[0],d=r[1];return Array.from({length:d}).map((function(){return t.genStructure(n)}))},genStructure:function(e){var t=[];e=e||this.type||"";var o=this.rootTypes[e]||"";if(e===o);else{if(e.indexOf(",")>-1)return this.mapBones(e);if(e.indexOf("@")>-1)return this.genBones(e);o.indexOf(",")>-1?t=this.mapBones(o):o.indexOf("@")>-1?t=this.genBones(o):o&&t.push(this.genStructure(o))}return[this.genBone(e,t)]},genSkeleton:function(){var e=[];return this.isLoading?e.push(this.genStructure()):e.push(Object(c.m)(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},e):e},mapBones:function(e){return e.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(e){this.resetStyles(e),this.isLoading&&(e._initialStyle={display:e.style.display,transition:e.style.transition},e.style.setProperty("transition","none","important"))},onBeforeLeave:function(e){e.style.setProperty("display","none","important")},resetStyles:function(e){e._initialStyle&&(e.style.display=e._initialStyle.display||"",e.style.transition=e._initialStyle.transition,delete e._initialStyle)}},render:function(e){return e("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},385:function(e,t,o){"use strict";o.r(t);o(10),o(8),o(5),o(4),o(9);var l=o(2),r=o(61);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={data:function(){return{componentId:"searchResults",result:[]}},computed:d(d({},Object(r.b)(["getData","isLoading"])),{},{searchResults:function(){return this.loading?[]:this.getData(this.componentId)},loading:function(){return this.isLoading(this.componentId)}})},_=o(48),c=o(75),h=o.n(c),k=o(330),m=o(329),f=o(137),x=o(140),y=o(136),w=o(35),component=Object(_.a)(v,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[e._l(e.searchResults.results,(function(t){return o("div",{key:t.id},["person"!=t.media_type?o("v-sheet",{staticClass:"d-flex ma-2",attrs:{rounded:e.rounded,width:"100%"}},["person"!=t.media_type?o("Card",{attrs:{item:t,loading:e.loading,cid:e.componentId}}):e._e(),e._v(" "),"person"!=t.media_type?o("v-container",[o("v-card-title",{staticClass:"d-flex align-center"},["movie"===t.media_type?o("v-icon",{staticClass:"mx-2"},[e._v("\n            mdi-movie\n          ")]):"tv"===t.media_type?o("v-icon",{staticClass:"mx-2"},[e._v("\n            mdi-monitor\n          ")]):o("v-icon",{staticClass:"mx-2"},[e._v("\n            mdi-account\n          ")]),e._v("\n          "+e._s(t.original_title)+e._s(t.original_name)+e._s(t.name)+"\n        ")],1),e._v(" "),"movie"===t.media_type?o("v-card-subtitle",[e._v("\n          "+e._s(t.overview)+"\n        ")]):e._e(),e._v(" "),"tv"===t.media_type?o("v-card-subtitle",[e._v("\n          "+e._s(t.overview)+"\n        ")]):e._e()],1):e._e()],1):e._e(),e._v(" "),o("v-sheet",{staticClass:"d-flex ma-2",attrs:{rounded:e.rounded,width:"100%"}},["person"===t.media_type?o("Actor",{attrs:{item:t,loading:e.loading}}):e._e(),e._v(" "),"person"===t.media_type?o("v-container",["person"===t.media_type?o("v-card-title",{staticClass:"d-flex align-start"},["person"===t.media_type?o("v-icon",{staticClass:"mx-2"},[e._v("\n            mdi-account\n          ")]):e._e(),e._v(e._s(t.name)+"\n        ")],1):e._e(),e._v(" "),"person"===t.media_type&&t.known_for?o("v-card-subtitle",[e._v("\n          known for :\n          "),e._l(t.known_for,(function(i){return o("div",{key:i.id},[e._v("\n            "+e._s(i.original_title)+"\n          ")])}))],2):e._e()],1):e._e()],1)],1)})),e._v(" "),o("v-overlay",{attrs:{value:e.loading}},[o("v-progress-circular",{attrs:{size:70,width:7,color:"info",indeterminate:""}})],1)],2)}),[],!1,null,null,null);t.default=component.exports;h()(component,{Card:o(331).default,Actor:o(341).default}),h()(component,{VCardSubtitle:k.b,VCardTitle:k.d,VContainer:m.a,VIcon:f.a,VOverlay:x.a,VProgressCircular:y.a,VSheet:w.a})}}]);