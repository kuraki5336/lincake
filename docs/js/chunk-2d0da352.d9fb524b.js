(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da352"],{"6b2b":function(t,n,c){"use strict";c.r(n);var o=c("7a23"),u=Object(o["m"])("hr",null,null,-1),e=Object(o["m"])("hr",null,null,-1);function l(t,n,c,l,a,r){return Object(o["D"])(),Object(o["i"])("div",null,[Object(o["m"])("h1",null,Object(o["R"])(l.FCount.amount),1),Object(o["m"])("button",{onClick:n[1]||(n[1]=function(){var t;return l.FCount.inc&&(t=l.FCount).inc.apply(t,arguments)})},"click me"),Object(o["m"])("h1",null,Object(o["R"])(l.data.calcCount),1),Object(o["m"])("h1",null,Object(o["R"])(l.data.doublecount),1),Object(o["m"])("button",{onClick:n[2]||(n[2]=function(t){return l.data.calcCount=l.data.calcCount})},"click me"),u,Object(o["m"])("h1",null,Object(o["R"])(l.readonlyCount.count),1),Object(o["m"])("h1",null,Object(o["R"])(l.copy.count),1),Object(o["m"])("button",{onClick:n[3]||(n[3]=function(){return l.plus&&l.plus.apply(l,arguments)})},"click me"),Object(o["m"])("button",{onClick:n[4]||(n[4]=function(){return l.stop&&l.stop.apply(l,arguments)})},"stop watch effect plus"),e,Object(o["l"])(" "+Object(o["R"])(l.fatherArr),1)])}c("99af");var a=function(){var t=Object(o["H"])({amount:0,inc:function(){return t.amount++}});return t},r={setup:function(){var t=a(),n=Object(o["q"])("FArr"),c=Object(o["J"])(5),u=Object(o["H"])({calcCount:Object(o["g"])({get:function(){return c.value},set:function(t){c.value=2*t}}),doublecount:Object(o["g"])((function(){return t.amount*c.value}))});Object(o["bb"])(u,(function(t,n){console.log("new val ".concat(t.calcCount," old val ").concat(n.calcCount))})),Object(o["bb"])((function(){return u.calcCount}),(function(t,n){console.log("reactive new val ".concat(t," old val ").concat(n))}));var e=Object(o["H"])({count:0}),l=Object(o["I"])(e),r=function(){return e.count++},b=Object(o["cb"])((function(){console.log("errect readonlyCount",e.count)}));return Object(o["cb"])((function(){console.log("errect data",u.calcCount)})),{data:u,FCount:t,readonlyCount:e,copy:l,plus:r,stop:b,fatherArr:n}}};r.render=l;n["default"]=r}}]);
//# sourceMappingURL=chunk-2d0da352.d9fb524b.js.map