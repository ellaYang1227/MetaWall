"use strict";(self.webpackChunkMetaWall=self.webpackChunkMetaWall||[]).push([[319],{3319:(v,d,s)=>{s.r(d),s.d(d,{UserPostsModule:()=>x});var c=s(9808),u=s(8329),i=s(1810),p=s(9451),A=s(1223),l=s(2313),g=s(7556),m=s(9166),f=s(72),b=s(4919);function h(t,n){if(1&t&&(A.TgZ(0,"div",10)(1,"span",11),A._uU(2),A.ALo(3,"number"),A.qZA(),A._uU(4,"\u4eba\u8ffd\u8e64"),A.qZA()),2&t){const e=A.oxw(2);A.xp6(2),A.Oqu(A.lcZ(3,1,e.user.trackTotal))}}function w(t,n){1&t&&A._uU(0,"\u53d6\u6d88")}function T(t,n){if(1&t){const e=A.EpF();A.TgZ(0,"div",3),A._UZ(1,"img",4),A.TgZ(2,"div",5)(3,"h6",6),A._uU(4),A.YNc(5,h,5,3,"div",7),A.qZA(),A.TgZ(6,"button",8),A.NdJ("click",function(){return A.CHM(e),A.oxw().toggleTracked()}),A.YNc(7,w,1,0,"ng-template",9),A._uU(8,"\u8ffd\u8e64 "),A.qZA()()()}if(2&t){const e=A.oxw();A.xp6(1),A.Q6J("src",e.user.photo?e.user.photo:e.userDefaultImg,A.LSH),A.xp6(3),A.Oqu(e.user.name),A.xp6(1),A.Q6J("ngIf",e.user.trackTotal),A.xp6(1),A.Q6J("ngClass",e.isTracked?"btn-light":"btn-warning"),A.xp6(1),A.Q6J("ngIf",e.isTracked)}}const U=[{path:"",component:(()=>{class t{constructor(e,o,r,a,J){this.titleServer=e,this.route=o,this.authService=r,this.postService=a,this.spinner=J,this.isTracked=!1,this.posts=[],this.isLoading=!0,this.userDefaultImg=this.authService.userDefaultImg,this.spinner.hide()}ngOnInit(){this.userId=this.route.snapshot.paramMap.get("id")}getPosts(e){if(this.isLoading=!0,this.userId){const o={user:{_id:"628a3fe18c9d619c7bbcbbfb",name:"BootBB",photo:"",trackTotal:98987},posts:[{_id:"628cc815b7e63b4b2cc9d1f1",user:{_id:"628a3fe18c9d619c7bbcbbfb",name:"BootBB",photo:""},image:"https://picsum.photos/id/110/500/200",content:"BootBB",likes:["628a43c38c9d619c7bbc88","628a43c38c9d619c7bbcbbff"],comments:[{user:{_id:"628a43c38c9d619c7bbcbbff",name:"\u5e0c\u7433",photo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/wAAGeIJNwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="},createdAt:"2022-05-23T11:28:19.714Z",content:"123\u771f\u7684\uff5e\u6211\u5df2\u7d93\u6e96\u5099\u51ac\u7720\u4e86"},{user:{_id:"628a43c38c9d619c7bbcbbff",name:"\u5e0c\u7433",photo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/wAAGeIJNwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="},createdAt:"2022-05-23T11:28:19.714Z",content:"123\u771f\u7684\uff5e\u6211\u5df2\u7d93\u6e96\u5099\u51ac\u7720\u4e86"}],createdAt:"2022-05-24T11:57:09.367Z"},{_id:"628b6fd374ed65332e289bec",user:{_id:"628a3fe18c9d619c7bbcbbfb",name:"BootBB",photo:""},image:"https://picsum.photos/id/103/500/200",content:"P. LEAGUE+\u662f\u81fa\u7063\u7537\u5b50\u8077\u696d\u7c43\u7403\u806f\u76df\uff0c\u662f\u7e7c\u4e2d\u83ef\u8077\u7c43\u4e4b\u5f8c\uff0c\u81fa\u7063\u7b2c\u4e8c\u500b\u958b\u6253\u7684\u8077\u696d\u7c43\u7403\u806f\u76df\u30022021\u201322\u5e74\u8cfd\u5b63\u7531\u81fa\u5317\u5bcc\u90a6\u52c7\u58eb\u3001\u65b0\u5317\u570b\u738b\u3001\u6843\u5712\u9818\u822a\u733f\u3001\u65b0\u7af9\u8857\u53e3\u653b\u57ce\u7345\u3001\u798f\u723e\u6469\u6c99\u53f0\u65b0\u5922\u60f3\u5bb6\u548c\u9ad8\u96c4\u92fc\u9435\u4eba\u516d\u652f\u7403\u968a\u7d44\u6210\u3002",likes:["628a43c38c9d619c7bbc88","628a43c38c9d619c7bbcbbff"],comments:[{user:{_id:"628a43c38c9d619c7bbcbbff",name:"\u5e0c\u7433",photo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/wAAGeIJNwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="},createdAt:"2022-05-23T11:28:19.714Z",content:"123\u771f\u7684\uff5e\u6211\u5df2\u7d93\u6e96\u5099\u51ac\u7720\u4e86"},{user:{_id:"628a43c38c9d619c7bbcbbff",name:"\u5e0c\u7433",photo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/wAAGeIJNwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="},createdAt:"2022-05-23T11:28:19.714Z",content:"123\u771f\u7684\uff5e\u6211\u5df2\u7d93\u6e96\u5099\u51ac\u7720\u4e86"}],createdAt:"2022-05-23T11:28:19.714Z"}]};this.user=o.user,this.titleServer.setTitle(`${this.user.name} | ${p.Y.name}`),this.posts=o.posts,setTimeout(()=>this.isLoading=!1,1e3)}}toggleTracked(){this.isTracked=!this.isTracked}}return t.\u0275fac=function(e){return new(e||t)(A.Y36(l.Dx),A.Y36(i.gz),A.Y36(g.e),A.Y36(m.L),A.Y36(f.t2))},t.\u0275cmp=A.Xpm({type:t,selectors:[["app-user-posts"]],decls:3,vars:3,consts:[["class","border rounded bg-white left-box-shadow d-flex align-items-center",4,"ngIf"],[1,"mt-4"],[3,"posts","isLoading","getPosts"],[1,"border","rounded","bg-white","left-box-shadow","d-flex","align-items-center"],[1,"user-img-size","border-end",3,"src"],[1,"flex-grow-1","text-truncate","d-flex","justify-content-between","align-items-center","px-4"],[1,"mb-0","fw-bold","text-truncate","me-4"],["class","fw-normal",4,"ngIf"],["type","button",1,"btn","py-1","px-5",3,"ngClass","click"],[3,"ngIf"],[1,"fw-normal"],[1,"font-balooDa2","me-1"]],template:function(e,o){1&e&&(A.YNc(0,T,9,5,"div",0),A.TgZ(1,"div",1)(2,"app-posts-group",2),A.NdJ("getPosts",function(a){return o.getPosts(a)}),A.qZA()()),2&e&&(A.Q6J("ngIf",o.user),A.xp6(2),A.Q6J("posts",o.posts)("isLoading",o.isLoading))},directives:[c.O5,c.mk,b.d],pipes:[c.JJ],styles:[".user-img-size[_ngcontent-%COMP%]{width:80px;height:80px;border-bottom-left-radius:inherit;border-top-left-radius:inherit}"]}),t})()}];let B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=A.oAB({type:t}),t.\u0275inj=A.cJS({imports:[[i.Bz.forChild(U)],i.Bz]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=A.oAB({type:t}),t.\u0275inj=A.cJS({imports:[[c.ez,B,u._]]}),t})()}}]);