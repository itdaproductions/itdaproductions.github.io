"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[916],{916:(Y,u,a)=>{a.r(u),a.d(u,{GalleryModule:()=>Q});var s=a(4755),c=a(6589),d=a(4753),e=a(5206),_=a(6550),p=a(5099);function f(o,r){if(1&o&&(e.ynx(0),e._UZ(1,"iframe",7),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("src",t.safeURL,e.uOi)}}function y(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"img",11),e.NdJ("error",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.onErrorLoading(!0))})("load",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.onLoadMediaPreview(!0))}),e.ALo(1,"translate"),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("alt",t.description?e.lcZ(1,2,t.description):"")("src",t.safeURL,e.LSH)}}function h(o,r){1&o&&e._UZ(0,"progress",12)}function x(o,r){1&o&&(e.TgZ(0,"h3"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"components-media-error-loading-media")," "))}function C(o,r){if(1&o&&(e.YNc(0,y,2,4,"img",8),e.YNc(1,h,1,0,"progress",9),e.YNc(2,x,3,3,"h3",10)),2&o){const t=e.oxw();e.Q6J("ngIf",!t.hasErrorLoading),e.xp6(1),e.Q6J("ngIf",!t.hadLoadedPreviewMedia&&!t.hasErrorLoading),e.xp6(1),e.Q6J("ngIf",t.hasErrorLoading)}}function b(o,r){if(1&o&&(e.TgZ(0,"p"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.description?e.lcZ(2,1,t.description):""," ")}}function w(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",16)(1,"button",17),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.onClickButton())}),e._uU(2),e.qZA()()}if(2&o){const t=e.oxw(2);e.xp6(2),e.hij(" ",t.buttonLabel+" \u276f "," ")}}const v=function(o,r){return{showBodyOnHover:o,"fade-in":r}};function M(o,r){if(1&o&&(e.TgZ(0,"div",13)(1,"h2",14),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.YNc(4,b,3,3,"p",10),e.YNc(5,w,3,1,"div",15),e.qZA()),2&o){const t=e.oxw();e.Q6J("ngClass",e.WLB(6,v,t.showBodyOnHover&&"image"===t.type,t.showBodyOnHover)),e.xp6(2),e.Oqu(t.title?e.lcZ(3,4,t.title):""),e.xp6(2),e.Q6J("ngIf",t.description),e.xp6(1),e.Q6J("ngIf",t.buttonLabel)}}function T(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",23),e._UZ(1,"progress",24),e.TgZ(2,"label",25),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.onClickCloseMedia())}),e._uU(3,"\u2715"),e.qZA()()}}function Z(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"label",26),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.onClickCloseMedia())}),e._uU(1,"\u2715"),e.qZA()}}function L(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"dialog",18)(1,"figure",19),e.YNc(2,T,4,0,"div",20),e.TgZ(3,"img",21),e.NdJ("error",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onErrorLoading(!0))})("load",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onLoadFullMedia(!0))}),e.qZA(),e.YNc(4,Z,2,0,"label",22),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("open",t.modalOpened),e.xp6(2),e.Q6J("ngIf",!t.hasLoadedFullMedia),e.xp6(1),e.Q6J("alt",t.description)("src",t.safeURL,e.LSH),e.xp6(1),e.Q6J("ngIf",t.hasLoadedFullMedia)}}const O=function(o){return[o]};let m=(()=>{class o{constructor(t){this._sanitizer=t,this.id="",this.url="",this.title="",this.description="",this.buttonLabel="",this.showBodyOnHover=!1,this.type="image",this.clickedButton=new e.vpe,this.clickedMedia=new e.vpe,this.modalOpened=!1,this.hasErrorLoading=!1,this.hadLoadedPreviewMedia=!1,this.hasLoadedFullMedia=!1}ngOnInit(){this.safeURL=this._sanitizer.bypassSecurityTrustResourceUrl(this.url)}onLoadMediaPreview(t){this.hadLoadedPreviewMedia=t}onLoadFullMedia(t){this.hasLoadedFullMedia=t}onErrorLoading(t=!1){this.hasErrorLoading=t}onClickCloseMedia(){this.modalOpened=!this.modalOpened}onClickMedia(){this.modalOpened=!this.modalOpened,this.hasLoadedFullMedia=!1,this.clickedMedia.emit(this.id)}onClickButton(){this.clickedButton.emit(this.id)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(_.H7))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-media"]],inputs:{id:"id",url:"url",title:"title",description:"description",buttonLabel:"buttonLabel",showBodyOnHover:"showBodyOnHover",type:"type"},outputs:{clickedButton:"clickedButton",clickedMedia:"clickedMedia"},decls:8,vars:7,consts:[[1,"media-component-wrapper"],[1,"card","card-compact","max-w-prose","bg-base-100","shadow-xl",3,"ngClass"],[1,"card","card-body","cursor-pointer","relative",3,"click"],[4,"ngIf","ngIfElse"],["image",""],["class","card card-body shadow-none overflow-hidden",3,"ngClass",4,"ngIf"],["class","modal",3,"open",4,"ngIf"],["allowfullscreen","","height","400","width","100%",3,"src"],["loading","lazy",3,"alt","src","error","load",4,"ngIf"],["class","progress progress-success min-w-[10rem] max-w-xs absolute top-2/4 left-1/2 transform -translate-x-1/2",4,"ngIf"],[4,"ngIf"],["loading","lazy",3,"alt","src","error","load"],[1,"progress","progress-success","min-w-[10rem]","max-w-xs","absolute","top-2/4","left-1/2","transform","-translate-x-1/2"],[1,"card","card-body","shadow-none","overflow-hidden",3,"ngClass"],[1,"card-title"],["class","card-actions justify-end",4,"ngIf"],[1,"card-actions","justify-end"],[1,"btn","btn-primary",3,"click"],[1,"modal",3,"open"],[1,"min-w-min","min-h-[10rem]","relative"],["class","flex flex-row gap-4 items-center absolute top-2/4 left-1/2 transform -translate-x-1/2",4,"ngIf"],["fill","",1,"max-w-[95vw]","max-h-[95vh]","object-cover","m-auto",3,"alt","src","error","load"],["class","btn btn-sm btn-circle absolute right-2 top-2",3,"click",4,"ngIf"],[1,"flex","flex-row","gap-4","items-center","absolute","top-2/4","left-1/2","transform","-translate-x-1/2"],[1,"progress","progress-success","min-w-[10rem]","max-w-xs"],[1,"btn","btn-sm","btn-circle",3,"click"],[1,"btn","btn-sm","btn-circle","absolute","right-2","top-2",3,"click"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"figure",2),e.NdJ("click",function(){return n.onClickMedia()}),e.YNc(3,f,2,1,"ng-container",3),e.YNc(4,C,3,3,"ng-template",null,4,e.W1O),e.qZA(),e.YNc(6,M,6,9,"div",5),e.qZA()(),e.YNc(7,L,5,5,"dialog",6)),2&t){const i=e.MAs(5);e.xp6(1),e.Q6J("ngClass",e.VKq(5,O,"image"===n.type?"min-w-[100px] md:min-w-[350px]":"min-w-[200px] md:min-w-[600px]")),e.xp6(2),e.Q6J("ngIf","video"===n.type)("ngIfElse",i),e.xp6(3),e.Q6J("ngIf",n.title||n.description),e.xp6(1),e.Q6J("ngIf",n.modalOpened&&"image"===n.type)}},dependencies:[s.mk,s.O5,p.X$],styles:[".media-component-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:16px}.media-component-wrapper[_ngcontent-%COMP%]   .card-body.showBodyOnHover[_ngcontent-%COMP%]{position:absolute;background-color:#fff;width:100%;bottom:0;opacity:0;transition:opacity .2s ease-in-out;-moz-transition:opacity .2s ease-in-out;-webkit-transition:opacity .2s ease-in-out}.media-component-wrapper[_ngcontent-%COMP%]:hover   .card-body.showBodyOnHover.fade-in[_ngcontent-%COMP%]{opacity:.8;color:#1e1e1e;transition:opacity .2s ease-in-out;-moz-transition:opacity .2s ease-in-out;-webkit-transition:opacity .2s ease-in-out}"]}),o})();function k(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"app-media",5),e.NdJ("clickedButton",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onClickedButton(i))})("clickedMedia",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onClickedMedia(i))}),e.qZA()}if(2&o){const t=r.$implicit;e.Q6J("buttonLabel",t.category.buttonLabel)("description",t.category.description)("id",t.category.id)("title",t.category.title)("url",t.content[0]?t.content[0].url:"")}}let G=(()=>{class o{constructor(t,n){this.router=t,this.gallerySvc=n,this.title="Categories",this.medias=[],this.galleryCategoryData=[]}ngOnInit(){this.gallerySvc.galleryData.subscribe(n=>{n?.length>0?n.forEach(i=>{this.galleryCategoryData.push({category:{id:i.directoryUrl,title:i.directoryTitle,description:i.directoryDescription,url:""},content:i.media.map(l=>({id:l.url,url:"video"===l.type?l.url:"../../../assets/gallery/"+i.directoryUrl+"/"+l.url,title:l.title,description:l.description}))})}):this.router.navigate([this.router.url,"error"])})}onClickedMedia(t){t&&this.router.navigate([this.router.url,t])}onClickedButton(t){t&&this.router.navigate([this.router.url,t])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c.F0),e.Y36(d.r))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-gallery-category"]],inputs:{title:"title",medias:"medias"},features:[e._Bn([d.r])],decls:7,vars:4,consts:[[1,"portfolio-wrapper","max-w-7xl","m-auto"],[1,"card-title","px-6","pb-4"],[1,"flex","justify-center","my-4"],[1,"flex","flex-row","gap-8","flex-wrap","justify-center"],[3,"buttonLabel","description","id","title","url","clickedButton","clickedMedia",4,"ngFor","ngForOf"],[3,"buttonLabel","description","id","title","url","clickedButton","clickedMedia"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"h1",1),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",2)(5,"div",3),e.YNc(6,k,1,5,"app-media",4),e.qZA()()()),2&t&&(e.xp6(2),e.Oqu(e.lcZ(3,2,n.title)),e.xp6(4),e.Q6J("ngForOf",n.galleryCategoryData))},dependencies:[s.sg,m,p.X$]}),o})();var B=a(9751),g=a(727);function J(o,r){if(1&o&&(e.TgZ(0,"h1",5),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,1,t.galleryTitle)," ")}}function A(o,r){if(1&o&&e._UZ(0,"app-media",8),2&o){const t=r.$implicit;e.Q6J("buttonLabel",t.buttonLabel)("description",t.description)("id",t.id)("showBodyOnHover",!0)("title",t.title)("type",t.type?t.type:"image")("url",t.url)}}function I(o,r){if(1&o&&(e.TgZ(0,"div",6),e.YNc(1,A,1,7,"app-media",7),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.medias)}}function F(o,r){1&o&&(e.TgZ(0,"div",9)(1,"div",10)(2,"div",11)(3,"h1",12),e._uU(4),e.ALo(5,"translate"),e.qZA()()()()),2&o&&(e.xp6(4),e.hij(" ",e.lcZ(5,1,"components-gallery-label-empty")," "))}const U=[{path:"",redirectTo:"gallery",pathMatch:"full"},{path:"gallery",component:G},{path:"gallery/:galleryCategory",component:(()=>{class o{constructor(t,n){this.route=t,this.gallerySvc=n,this.medias=[],this.images$=new B.y,this.currentGalleryDirectoryUrl="",this.galleryTitle="",this.routeSub=new g.w0,this.gallerySub=new g.w0}ngOnInit(){this.routeSub=this.route.params.subscribe(t=>{this.currentGalleryDirectoryUrl=t.galleryCategory,this.updateGalleryData()})}updateGalleryData(){this.gallerySub=this.gallerySvc.galleryData.subscribe(t=>{t?.length>0&&(this.galleryTitle="",this.medias=[],t.forEach(n=>{n.directoryUrl===this.currentGalleryDirectoryUrl&&(this.galleryTitle=n.directoryTitle,this.medias=n.media.map(i=>({id:i.url,url:"video"===i.type?i.url:"../../../assets/gallery/"+n.directoryUrl+"/"+i.url,title:i.title,description:i.description,type:i.type})))}))})}ngOnDestroy(){this.routeSub&&this.routeSub.unsubscribe(),this.gallerySub&&this.gallerySub.unsubscribe()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c.gz),e.Y36(d.r))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-gallery"]],inputs:{medias:"medias"},features:[e._Bn([d.r])],decls:6,vars:3,consts:[[1,"gallery-wrapper","max-w-7xl","m-auto"],["class","card-title px-6 pb-4",4,"ngIf"],[1,"flex","justify-center","my-4"],["class","flex flex-row gap-8 flex-wrap justify-center",4,"ngIf","ngIfElse"],["empty",""],[1,"card-title","px-6","pb-4"],[1,"flex","flex-row","gap-8","flex-wrap","justify-center"],[3,"buttonLabel","description","id","showBodyOnHover","title","type","url",4,"ngFor","ngForOf"],[3,"buttonLabel","description","id","showBodyOnHover","title","type","url"],[1,"hero","min-h-[35rem]","bg-base-200"],[1,"hero-content","text-center"],[1,"max-w-md"],[1,"text-xl","font-bold"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e.YNc(1,J,3,3,"h1",1),e.TgZ(2,"div",2),e.YNc(3,I,2,1,"div",3),e.YNc(4,F,6,3,"ng-template",null,4,e.W1O),e.qZA()()),2&t){const i=e.MAs(5);e.xp6(1),e.Q6J("ngIf",n.galleryTitle),e.xp6(2),e.Q6J("ngIf",n.medias.length>0)("ngIfElse",i)}},dependencies:[s.sg,s.O5,m,p.X$]}),o})()}];let H=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(U),c.Bz]}),o})();var N=a(4466);let Q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[s.ez,H,N.m,p.aw]}),o})()}}]);