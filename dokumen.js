/** Copyright (c) 2013-2015 akinari tsugo */
(function(){function l(a){return function(){return a}}function m(a,c){function b(){}b.prototype=c.prototype;a.B=c.prototype;a.prototype=new b};function n(a,c){var b=String(a),d=c-b.length;if(0>=d)return b;for(;d--;)b="0"+b;return b};var p=/^(\d{4})-?(\d{2})?-?(\d{2})?T?(\d{2})?:?(\d{2})?:?(\d{2})?(\.\d+)?(\+|-|Z)?(\d{2})?:?(\d{2})?$/;
function r(a){var c,b,d,e,f,q,g,h;a=a.match(p);c=a[1];b=a[2]?parseInt(a[2],10)-1:0;d=a[3]?parseInt(a[3],10):1;e=a[4]?parseInt(a[4],10):0;f=a[5]?parseInt(a[5],10):0;q=a[6]?parseInt(a[6],10):0;g=a[7]?1E3*parseFloat(a[7]):0;c=new Date(c,b,d,e,f,q);c.setMilliseconds(g);g=c.getTimezoneOffset();if(a[8]){switch(a[8]){case "+":h=-(60*parseInt(a[9],10)+parseInt(a[10],10));break;case "-":h=60*parseInt(a[9],10)+parseInt(a[10],10);break;case "Z":h=0}c.setTime(c.getTime()-6E4*(g-h))}return c};function u(a,c){this.a=a;this.g=c;this.f=null;this.h()}u.prototype.getName=function(){return this.g.title.A};
u.prototype.h=function(){var a=this.a,c=this.g,b,d,e;b=document.createElement("span");b.className="poststoc-entry";b.setAttribute("itemscope","itemscope");b.setAttribute("itemtype","https://schema.org/BlogPosting");d=document.createElement("meta");d.setAttribute("itemprop","mainEntityOfPage");d.setAttribute("content","//"+a.blogURL);b.appendChild(d);d=document.createElement("meta");d.setAttribute("itemprop","publisher author");d.setAttribute("content",c.author[0].name.$t);b.appendChild(d);a.thumbnail.enabled?
(e=c.media$thumbnail,d=document.createElement("img"),e?(d.src=e.url,d.className="poststoc-thumbnail-image"):(d.src=this.a.thumbnail.noImageURL,d.className="poststoc-thumbnail-noimage"),d.setAttribute("itemprop","image"),e=document.createElement("span"),e.className="poststoc-thumbnail",e.appendChild(d),b.appendChild(e)):c.media$thumbnail&&(e=document.createElement("link"),e.setAttribute("itemprop","image"),e.setAttribute("href",c.media$thumbnail.url),b.appendChild(e));a.published.enabled?(e=r(c.published.$t),
e=a.published.format.format(e),d=document.createElement("span"),d.appendChild(document.createTextNode(e)),d.className="poststoc-published",d.setAttribute("itemprop","datePublished")):(d=document.createElement("meta"),d.setAttribute("itemprop","datePublished"),d.setAttribute("content",c.published.$t));b.appendChild(d);a.updated.enabled?(d=document.createElement("span"),e=r(c.updated.$t),e=a.updated.format.format(e),d.appendChild(document.createTextNode(e)),d.className="poststoc-updated",d.setAttribute("itemprop",
"dateModified")):(d=document.createElement("meta"),d.setAttribute("itemprop","dateModified"),d.setAttribute("content",c.updated.$t));b.appendChild(d);d=document.createElement("a");d.appendChild(document.createTextNode(c.title.$t));d.href=/https?:(\/\/[\w\-\.~#\$&\+\/:=\?%]+)/.exec(c.link[c.link.length-1].href)[1];a.target&&(d.target=a.target);d.setAttribute("itemprop","url");e=document.createElement("span");e.className="poststoc-title";e.setAttribute("itemprop","name headline");e.appendChild(d);b.appendChild(e);
a.newPost.enabled&&("published"===a.newPost.target&&r(c.published.$t)>a.newPost.term||"updated"===a.newPost.target&&r(c.updated.$t)>a.newPost.term)&&(c=document.createElement("span"),c.appendChild(document.createTextNode(a.newPost.symbol)),c.className="poststoc-new",b.appendChild(c));this.f=b};function v(a){this.a=a};function w(a){this.a=a}m(w,v);w.prototype.execute=function(a){a=a.entry||[];var c,b,d,e;c=document.createElement("ul");c.className="poststoc-list";d=0;for(e=a.length;d<e;d++)b=document.createElement("li"),b.appendChild(x(this,a[d])),b.className="poststoc-item",c.appendChild(b);return c};function x(a,c){c=new u(a.a,c);return c.f};function y(a,c){this.a=a;this.g=c;this.j=this.w=this.f=null;this.h()}y.prototype.getName=function(){return this.g.term};
y.prototype.h=function(){var a=this.a,c=this.g.term,b=document.createElement("div"),d=document.createElement("div"),e=document.createElement("a"),f=document.createElement("ul"),a="//"+a.blogURL,a=a+"/search/label/",a=a+c;e.appendChild(document.createTextNode(c));e.href=a;e.className="poststoc-category-anchor";d.appendChild(e);d.className="poststoc-category-title";f.className="poststoc-list";b.appendChild(d);b.appendChild(f);b.className="poststoc-category";this.f=b;this.w=d;this.j=f};function z(a){this.a=a}m(z,v);z.prototype.execute=function(a){var c=this.a,b=a.entry||[];a=a.category||[];var d,e,f,q,g,h,s,G,k,t;q={};g=[];h=document.createDocumentFragment();d=0;for(f=b.length;d<f;d++)for(G=b[d],a=G.category||[],e=a.length;e--;)s=a[e],t=new u(c,G),k=q[s.term],k||(k=new y(c,s),q[s.term]=k,g[g.length]=k),s=t.f,k=k.j,t=document.createElement("li"),t.className="poststoc-item",t.appendChild(s),k.appendChild(t);g=this.sort(g);d=0;for(f=g.length;d<f;d++)h.appendChild(g[d].f);return h};
z.prototype.sort=function(a){return a};function A(a){this.a=a}m(A,z);A.prototype.sort=function(a){return a.sort(function(a,b){return a.j.childNodes.length<b.j.childNodes.length?1:-1})};function B(a){this.a=a}B.prototype.i=l("published");B.prototype.execute=function(){};function C(a){this.a=a}m(C,B);C.prototype.i=l("published");C.prototype.execute=function(a){switch((this.a.sort.order||"").toLocaleLowerCase()){case "asc":this.e(a);break;case "desc":this.c(a);break;default:this.c(a)}};C.prototype.e=function(a){(a.entry||[]).sort(function(a,b){return a.published.$t>b.published.$t?1:-1})};C.prototype.c=function(){};function D(a){this.a=a}m(D,z);D.prototype.sort=function(a){return a.sort(function(a,b){return a.getName()<b.getName()?-1:1})};function E(a){var c=null;switch(a){case "en-us":c=F;break;case "ja-jp":c=H;break;default:c=F}return c}
var F={o:["BC","AD"],q:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),p:"January February March April May June July August September October November December".split(" "),r:"Sun Mon Tue Wed Thu Fri Sat".split(" "),s:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),n:["AM","PM"],k:["EEEE dd MMMM y","dd MMMM y","dd MMM y","yyyy/MM/dd"],l:["h:mm:ss t zzzz","h:mm:ss t z","h:mm:ss t","h:mm t"]},H={o:["\u7d00\u5143\u524d","\u897f\u66a6"],q:"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
p:"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),r:"\u65e5\u66dc\u65e5 \u6708\u66dc\u65e5 \u706b\u66dc\u65e5 \u6c34\u66dc\u65e5 \u6728\u66dc\u65e5 \u91d1\u66dc\u65e5 \u571f\u66dc\u65e5".split(" "),s:"\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split(""),n:["\u5348\u524d","\u5348\u5f8c"],k:["y\u5e74M\u6708d\u65e5(EEEE)","y\u5e74M\u6708d\u65e5","yyyy/MM/dd","yy/MM/dd"],l:["H\u6642mm\u5206ss\u79d2 zzzz","H:mm:ss z","H:mm:ss","H:mm"]};function I(a,c){this.b=new E(c);if("number"===typeof a){var b="";4>a?b+=this.b.k[a]:8>a?b+=this.b.l[a-4]:(b+=this.b.k[a-8],b=b+" "+this.b.l[a-8]);a=b}this.pattern=a;this.u=[];this.locale=c;this.h()}I.prototype.format=function(a){var c=this.u,b,d,e,f=[];b=0;for(d=c.length;b<d;b++)e=c[b].text,1===c[b].type?f.push(J(this,e,a)):f.push(e);return f.join("")};
I.prototype.h=function(){for(var a=this.pattern,c=[/^[^\'GyMdHhtmsEz]+/,/^(?:G+|y+|M+|d+|H+|h+|t+|m+|s+|E+|z+)/],b=[],d,e;a;)for(e=c.length;e--;)if(d=a.match(c[e])){d=d[0];a=a.substring(d.length);b.push({text:d,type:e});break}this.u=b};
function J(a,c,b){var d=c.length;switch(c.charAt(0)){case "G":return a.b.o[0<b.getFullYear()?1:0];case "y":return a=b.getFullYear(),0>a&&(a=-a),2===d?n(a%100,2):String(a);case "M":a:switch(c=b.getMonth(),d){case 3:a=a.b.q[c];break a;case 4:a=a.b.p[c];break a;default:a=n(c+1,d)}return a;case "d":return n(b.getDate(),d);case "H":return n(b.getHours(),d);case "h":return n(b.getHours()%12,d);case "t":return d=b.getHours(),a.b.n[12<=d&&24>d?1:0];case "m":return n(b.getMinutes(),d);case "s":return n(b.getSeconds(),
d);case "E":return c=b.getDay(),4<=d?a.b.s[c]:a.b.r[c];case "z":return a=b.getTimezoneOffset()/60,0>a?a:"+"+a;default:return""}};function K(){L(this,this,POSTSTOC_SETTINGS,{blogURL:"garafu.blogspot.jp",keyword:"",maxResults:Infinity,sort:{key:"published",order:"default"},printby:"label",locale:"ja-jp",newPost:{enabled:!1,symbol:"NEW !",term:30,target:"published"},thumbnail:{enabled:!1,noImageURL:"//garafu.github.io/blogger.toc/release/0.0.5/noimage.png"},published:{enabled:!1,format:"yyyy/MM/dd HH:mm:ss"},updated:{enabled:!1,format:"yyyy/MM/dd HH:mm:ss"},target:void 0,m:400});this.sort.key=POSTSTOC_SETTINGS.orderby||this.sort.key;
this.published.format=new I(this.published.format,this.locale);this.updated.format=new I(this.updated.format,this.locale);this.newPost.term=new Date((new Date).getTime()-864E5*this.newPost.term)}function L(a,c,b,d){var e;b=b||{};for(e in d)"object"!==typeof d[e]||d[e]instanceof Array?c[e]=void 0!==b[e]?b[e]:d[e]:(c[e]=c[e]||{},L(a,c[e],b[e],d[e]))};function M(a,c,b){var d;M=d=window.addEventListener?function(a,c,b){a.addEventListener(c,b,!1)}:window.attachEvent?function(a,c,b){a.attachEvent("on"+c,b)}:function(a,c,b){a["on"+c]=b};d(a,c,b)};function N(a){this.a=a}m(N,B);N.prototype.i=l("published");N.prototype.execute=function(a){switch((this.a.sort.order||"").toLocaleLowerCase()){case "asc":this.e(a);break;case "desc":this.c(a);break;default:this.e(a)}};N.prototype.e=function(a){(a.entry||[]).sort(function(a,b){return a.title.$t>b.title.$t?1:-1})};N.prototype.c=function(a){(a.entry||[]).sort(function(a,b){return a.title.$t<b.title.$t?1:-1})};function O(a){this.a=a}m(O,B);O.prototype.i=l("updated");O.prototype.execute=function(a){switch((this.a.sort.order||"").toLocaleLowerCase()){case "asc":this.e(a);break;case "desc":this.c(a);break;default:this.c(a)}};O.prototype.e=function(a){(a.entry||[]).sort(function(a,b){return a.updated.$t>b.updated.$t?1:-1})};O.prototype.c=function(){};function P(){this.a=new K;this.t=Q(this);this.v=R(this);this.d=0;S(this)}var T="__garafu.blogger.toc__"+(new Date).getTime(),U=null,contract=contract||void 0,V=contract;function W(){var a=U;a||(U=a=new P);return a}
function S(a){var c;c=a.a.m;var b=a.a,d=a.t,e;e="//"+b.blogURL;e+="/feeds/posts/summary";b.keyword&&(e+="/-/",e+=encodeURIComponent(b.keyword),e+="/");e+="?";e+="redirect=false&";e+="start-index="+(a.d+1)+"&";e+="max-results="+(a.d+c<a.a.maxResults?a.d+c:a.a.maxResults-a.d)+"&";e+="orderby="+d.i()+"&";e+="alt=json-in-script&";e+="callback=";a=e+="garafu.blogger.toc.load";c=document.createElement("script");c.src=a;c.type="text/javascript";document.body.appendChild(c)}
P.prototype.sort=function(a){this.t.execute(a.feed||{})};P.prototype.print=function(a){a=this.v.execute(a.feed||{});var c=document.createElement("div"),b=document.createElement("a");document.createElement("a");document.createElement("a");b.href="https://www.fb.me/hadhi.ava";b.appendChild(document.createTextNode('Arsip oleh blogger.'));c.appendChild(b);c.style.display="block";c.style.fontSize="small";c.style.margin="20px 0";a.appendChild(c);document.getElementById(T).appendChild(a)};
function Q(a){a=a.a;switch(a.sort.key.toLowerCase()){case "published":return new C(a);case "updated":return new O(a);case "title":return new N(a);default:return new C(a)}}function R(a){a=a.a;switch(a.printby.toLowerCase()){case "title":return new w(a);case "label":return new z(a);case "label.nameorder":return new D(a);case "label.contentsorder":return new A(a);default:return new w(a)}}M(window,"load",function(){W()});document.write('<div id="'+T+'" class="poststoc">LOAD DATA ...</div>');
function X(a){var c,b,d;c=W();V?a.feed.entry&&0!=a.feed.entry.length&&(b=V.feed.entry,d=a.feed.entry,b=b.concat(d),V.feed.entry=b):(V=a,c.a.m=(a.feed.entry||[]).length);c.d+=(a.feed.entry||[]).length;b=c.a;a=(a.feed.entry||[]).length;if(b.maxResults<=c.d||b.m>a||0==a){for(a=document.getElementById(T);b=a.firstChild;)a.removeChild(b);c.sort(V);c.print(V)}else S(c)}var Y=["garafu","blogger","toc","load"],Z=this;Y[0]in Z||!Z.execScript||Z.execScript("var "+Y[0]);
for(var $;Y.length&&($=Y.shift());)Y.length||void 0===X?Z=Z[$]?Z[$]:Z[$]={}:Z[$]=X;})();
