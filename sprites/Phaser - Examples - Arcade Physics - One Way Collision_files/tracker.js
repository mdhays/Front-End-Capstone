// v6.3.1698
(function(k,f,K,B,L,t,l,w,da,ea,fa,z,S,C,ga,x,ha,ia){function ua(a,b){return function(){a.call(b)}}function D(a){return"object"==typeof a}function va(){for(var a=32,b="";a--;)b+=(0|16*L.random()).toString(16);return b}function y(a,b,c,d){var e;(e=a.addEventListener)?e.call(a,b,c,0):a.attachEvent(d||"on"+b,c)}function q(a,b,c){return function(){a(b,c)}}function ja(){return K&&"preview"==K.loadPurpose}function A(a,b){for(var c in a)a.hasOwnProperty(c)&&a[c]!==m&&b(a[c],c)}function M(a,b){var c=[],d;
A(a,function(a,p){d=(typeof a).charAt(0);c.push(da(p)+"="+da(b?d+("o"==d&&a?M(a,b):a):a))});return c.join("&")}function N(a,b){if(!a)throw Error(b);}function wa(a){var b={};A(a,function(a,d){b[d]=a});return b}function xa(a){var b="_"+ya++;O[b]=a;return b}function ka(){var a=k.olark;a&&a("api.boot.onIdentityReady",function(a,c,d){E=a;T=c;U=d})}function P(a,b){function c(a){return"expires="+(new t(a)).toGMTString()+";"}var d="path=/;",e=a.g(6);e&&(d+="domain="+e+";");return{p:function(e,g){a.g(1,1)&&
(f.cookie=e+"="+g+";"+c(+new t+(b?6E10:6E4))+d)},n:function(b){if(a.g(1,1))return(f.cookie.match("(^|;)\\s*"+b+"=([^;]*)")||[])[2]||m},G:function(a){f.cookie=a+"=;"+c(0)+d}}}function F(a){function b(){var a=e[x];a&&(e[x]=a[z](c)[0])}var c=":_GS_:",d;if(F[a])return F[a];var e=k.top;F[a]=d={T:function(){b();e[x]=(e[x]||"")+c+[a,d.c,d.A]}};try{var p=e[x]||"";if(-1!=p[ia](c)){var g=p[z](c)[1][z](",");g[0]==a&&(d.c=g[1]||"",d.A=g[2]||"")}b()}catch(h){e={}}return d}function V(a){function b(){u.p(h,W.c=
[n,s.r*p+d,s.o*g+e,+new t].join(":"));a.s(11,n)}function c(){l&&"-"!==l?u.p(la,l):u.G(la)}var d=2019,e=4621,p=548,g=379,h="gs_u_"+a.b,la="gs_v_"+a.b,u=P(a,1),W=F(a.b),f=(u.n(h)||W.c||"")[z](":"),k=1,n=a.g(11,f[0])||(k=0,va()),q=((f[1]||d)-d)/p,r=((f[2]||e)-e)/g,f=(f[3]||0)/1E3,l=a.g(13),s;s={c:n,P:l,r:q,o:r,X:~~f,ca:k,V:function(a,c){s.o+=+a;s.r+=+c;b()},da:function(a){l=s.P=a;c()},ia:b,aa:function(){var b=u.n("gs_p_"+a.b)||W.A;u.G("gs_p_"+a.b);return a.i!==m?a.i:b}};l&&c();return s}function za(a){var b=
f[ha]("head")[0],c=f[fa]("script");c.src=(Aa?"https":"http")+"://"+X[Y]+a;b.appendChild(c);return function(){c&&b.removeChild(c);c=null}}function Q(a,b,c,d,e){var p=q,g=l(function(){p();Y=(Y+1)%X[C];c.et&&(c.et=0);c.rt=1;--e&&Q(a,b,c,d,e)},1E4),h=V(a);c.cb=xa(function(a){d(a);p();w(g)});c.a=a.b;c.au=a.g(14);c.id=h.c;c.cid=h.P;c.tv=ea;h=b+"?"+M(c);ma?ma.ha(h):p=za(h)}function na(a){var b;if(a.D){var c=oa(a);!a.g(9)&&c.L||c.K||ja()||(b=M(a.f,1))&&Q(a,"prop",{cp:b},q,5)}else l(function(){na(a)},100)}
function pa(a,b,c){var d=a.f=a.f||{};N(b||D(c),"Not an object");b?d[b]=c:d=a.f=c;!a.N&&a.D&&(a.N=l(function(){na(a);a.N=0},100))}function Ba(){var a=0,b=0,c;B&&(a=B.width,b=B.height);c=(c=k.orientation)&&(c+360)%180;return{C:c?b:a,B:c?a:b,R:B&&B.colorDepth||"-",W:K.language||K.browserLanguage||"-",S:f.characterSet||f.charSet||"-",U:k.devicePixelRatio||1,Y:(new t).getTimezoneOffset()}}function Z(){function a(a){return k["inner"+a]||c&&c[e="client"+a]||d&&d[e]}function b(a){return L.max(d[e="scroll"+
a]|0,c[e]|0,d[e="offset"+a]|0,c[e]|0,d[e="client"+a]|0,c[e]|0)}var c=f.documentElement,d=f.body||c,e;return{Q:a("Width"),O:a("Height"),I:b("Width"),H:b("Height"),k:k.pageXOffset||c&&c.scrollLeft||0,l:k.pageYOffset||c&&c.scrollTop||0}}function qa(a){a.h&&(a.h=0,a.m=new t-a.t+(a.m||0))}function $(a){w(a.Z);a.Z=l(q(qa,a),15E3);a.h||(a.h=1,a.t=new t)}function Ca(a){var b=a.m,c=new t;a.h&&(b+=c-a.t,a.t=c);a.m=0;return b}function Da(a){$(a);var b=Z();b.l>a.w&&(a.w=b.l);b.k>a.u&&(a.u=b.k)}function Ea(a){var b=
q($,a);y(f,"mousemove",b);y(f,"keydown",b);y(k,"scroll",q(Da,a));y(f,"focus",b,"focusin");y(f,"blur",q(qa,a),"focusout")}function Fa(a){a=a.g(10,f.referrer);var b;!a||/^(chrome|about|file):/.test(a)||/^\[.*\]$/.test(a)?a="-":b=a[S](/^.*?\/\//,"")[ia](location.host);return{J:+(0<=b&&8>=b),ba:a}}function oa(a,b,c){var d=f[fa]("a");d.href=b||k.location.href;b=d.href;a.g(7,1)||(b=b[S](/\?[^#]*/,""));a.g(8)||(b=b[S](/#.*$/,""));return{ga:b,ea:c!==m?c:f.title,L:/^file:/.test(b)||/\/\/localhost[\/:]/.test(b+
"/"),K:/fb_xd_(bust|fragment)/.test(b)}}function R(a,b,c,d){if(a.i!==m){if(!c){var e=Z();c={vw:e.Q,vh:e.O,dw:e.I,dh:e.H,st:e.l,sl:e.k,mst:a.w,msl:a.u}}c.i=a.i;c.e=b;c.et=Ca(a);r&&(c.bc=1);a.M&&E&&(a.M=0,c.o_si=E,c.o_vi=T,c.o_ci=U);Q(a,"ping",c,function(){d&&d();w(a.j);a.j=l(q(R,a),[7E3,12E3][a.$++]||17500+5E3*L.random())},5)}else l(function(){R(a,b,c,d)},5E3)}function Ga(a){if(a.i!==m){var b=P(a);a.g(1,1)?b.p("gs_p_"+a.b,a.i):(b=F(a.b),b.A=a.i,b.T())}}function aa(a,b,c){N(a,"Event name is required");
b&&b.call&&(c=b,b=m);if(b===""+b||b===+b)b={caption:b};b=wa(b||{});b.gs_evt_name=a;R(this,"event",b,c)}function ba(a,b,c){a&&a.call&&(c=a,a=m);b&&b.call&&(c=b,b=m);var d=this,e=oa(d,a,b),p=Fa(d),g=d.i===m&&!p.J;b=d.D=V(d);var h=Ba(),f=Z(),u=d.g(5);b.V(1,g);w(d.j);d.m=0;d.h=0;$(d);!d.g(9)&&e.L||e.K||ja()||h.C&&h.B&&10>h.C&&10>h.B||(d.w=f.l,d.u=f.k,e={cs:h.S,cd:h.R,la:h.W,sw:h.C,sh:h.B,dp:h.U,pu:e.ga,pt:e.ea||"-",ri:p.J,ru:p.ba,re:b.ca,vi:b.r,pv:b.o,lv:b.X,vw:f.Q,vh:f.O,dw:f.I,dh:f.H,st:f.l,sl:f.k,
un:d.g(3),pp:b.aa(),ec:u,aip:d.g(2)?1:m,tz:h.Y},d.f&&(e.cp=M(d.f,1)),r&&(d.uid=b.c,e.bc=1),E?(e.o_si=E,e.o_vi=T,e.o_ci=U):d.M=1,d.$=0,Q(d,"pv",e,function(a){a!==m&&(d.i=a,w(d.j),d.j=l(q(R,d),5E3),c&&c())},5),d.i!==m?a!==m&&(d.i=m):(l(q(Ea,d),500),y(k,"beforeunload",q(Ga,d))))}function ra(a){var b="gs_v_"+a,c=this,d=[];d[12]=c.b=a;c.s=function(a,b,e){4==a&&(pa(c,e,b),b=c.f);13==a&&(pa(c,"id",b),b=b||"-",V(c).da(b));d[a]=b};c.g=function(a,e){return a in d?d[a]:13==a?P(c,1).n(b)||e:e};var e;c.fa=function(){e=
l(ua(ba,c),200)};c.F=function(){w(c.j);w(e)}}function ca(a,b,c){if(!a)for(a in n)return n[a];if(n[b||a])return n[b||a];a=n[b||a]=new ra(a);c&&a.fa();return a}function G(a,b,c,d,e){b?a.call(n[b],c,d,e):A(n,function(b){a.call(b,c,d,e)})}function Ha(a,b,c,d){function e(a,b){b=b||(D(a)?a:{});D(a)||(b[x]=a);N(b[x],"No Name");h.push(b);return k}function f(a){for(var b=0;b<a[C];)e(a[b++]);return k}function g(){G(function(){var a=P(this,1),d="gs_t_"+this.b,e=a.n(d)||0;a.p(d,+new t);aa.call(this,"_transaction",
{d:JSON.stringify({id:b,pt:{ts:+e},i:h,d:c})})},a)}!c&&D(b)&&(c=b,b=c.id);var h=[],k;d&&f(d);c&&c.track&&g();return k={id:b,addItem:e,addItems:f,track:g}}function Ia(a,b){!b&&D(a)&&(b=a,a=b.id,!a&&b.email&&(a="email:"+b.email));N(a,"ID or email required");this.s(13,a);b&&this.s(4,b)}function H(a,b,c,d){if(a&&a.call)a();else if(/^GSN-.*-.$/.test(a))b!==""+b&&(c=b,b=0),ca(a,b,c||c===m);else if(/^_/.test(a))O[a]&&O[a](b,c),delete O[a];else{a=a[z](".");var e;1<a[C]&&(e=a.shift());a=a[0];var f={usecookies:1,
anonymizeip:2,visitorname:3,username:3,statuscode:5,cookiedomain:6,trackparams:7,trackhash:8,tracklocal:9,referrer:10,visitorid:13,visitor:4,clientid:11,auth:14,props:4,properties:4},g=function(a,b,c){e?n[e].s(a,b,c):A(n,function(d){d.s(a,b,c)})};if(/transaction$/i.test(a))return Ha(e,b,c,d);if("get"==a)return c=f[(b+"")[ga]()]||b,e?d=n[e].g(c):A(n,function(a){d=a.g(c)}),d;"set"==a?(a=(b+"")[z]("."),b=a.shift(),g(f[b[ga]()]||b,c,a.join("."))):"track"==a?G(ba,e,b,c,d):"event"==a?G(aa,e,b,c,d):"cancel"==
a?G(function(){this.F()},e):"noCookies"==a?g(1,0):"anonymizeIP"==a?g(2,1):"tag"==a?g(3,b):"load"==a?b&&b():"auth"==a?g(14,b):"identify"==a?G(Ia,e,b,c,d):"alias"==a?g(13,b):"unidentify"==a?g(13):"props"!=a&&"properties"!=a||g(4,b)}}var m,I,J=k._gs||(I=1,function(){sa.push(arguments)}),sa=J.q=J.q||[];if(!J.v){var r=k.GoSquared,O={},ya=0,E,T,U,ma,X=["data.gosquared.com/","data2.gosquared.com/"],Y=0|L.random()*X[C],Aa=/^https:/.test(location.href),n={};if(r){A(r,function(a,b){"acct"==b?(ca(a,"_default",
1),J(function(){function c(a){d[a.shift()].apply(d,a)}var d=r.DefaultTracker=n._default;if(b=r.q)for(;a=b.shift();)c(a);r.q={push:c};(b=r.load)&&b(d)})):"load"!=b&&"q"!=b&&J("set",b,a)});var v=ra.prototype;v.TrackView=ba;v.TrackEvent=aa;v.Cancel=function(){this.F()};r.Tracker=ca;r.Cancel=q(H,"cancel")}k._gs=H;for(H.v=ea;v=sa.shift();)H.apply({},v);if(I){I=f[ha]("script");for(var v=I[C],ta;v--;)(ta=I[v].getAttribute("data-gs"))&&H(ta)}ka();y(k,"load",ka)}})(window,document,navigator||{},screen,Math,
Date,setTimeout,clearTimeout,encodeURIComponent,"6.3.1698","createElement","split","replace","length","toLowerCase","name","getElementsByTagName","indexOf");
