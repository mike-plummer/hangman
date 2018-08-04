!function(e){function t(t){for(var s,a,i=t[0],c=t[1],l=t[2],u=0,E=[];u<i.length;u++)a=i[u],r[a]&&E.push(r[a][0]),r[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);for(m&&m(t);E.length;)E.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(s=!1)}s&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},r={1:0},o=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var m=c;o.push([410,0]),n()}({160:function(e,t){},165:function(e,t,n){"use strict";n.r(t);var s=n(3),r=n(164),o=n(163),a=n(44),i=n(82),c=n(162),l=n(17);const m=(e,t)=>{if(!e)throw new Error("Action Type must be truthy");if(Object(l.hasIn)(t,"type"))throw new Error("Action payload cannot have a 'type' field - it would overwrite the Action's type");return Object(l.assign)({type:e},t)},u={GUESS:"GAME.GUESS",START_GAME:"GAME.START_GAME",END_GAME:"GAME.END_GAME",UPDATE_REMAINING_TIME:"GAME.UPDATE_REMAINING_TIME",MISS:"GAME.MISS",EXPOSE:"GAME.EXPOSE",SET_WORD:"GAME.SET_WORD"};var E,d={TYPES:u,CREATORS:{guess:e=>m(u.GUESS,{letter:e}),startGame:()=>m(u.START_GAME),endGame:e=>m(u.END_GAME,{result:e}),updateRemainingTime:e=>m(u.UPDATE_REMAINING_TIME,{newTime:e}),miss:()=>m(u.MISS),expose:e=>m(u.EXPOSE,{exposed:e}),setWord:e=>m(u.SET_WORD,{word:e})}},p=n(10),S=n(160);!function(e){let t;e.State=S,function(e){e[e.WIN=0]="WIN",e[e.LOSS=1]="LOSS",e[e.IN_PROGRESS=2]="IN_PROGRESS"}(t=e.GameStatus||(e.GameStatus={}))}(E||(E={}));const f=(e,t)=>[...e].reduce((e,n)=>{const s=Object(l.includes)(t,n)?n:void 0;return e.push(s),e},[]);var O=n(159),R=n.n(O);const g=["APPLE","BARREL","CAREFUL","DOPPLEGANGER","EDAMAME","FIXTURE","GRATEFUL","HEARTY","INDIGO","JOKES","KEYBOARD","LIGHTNING","MOMENTOUS","NIGHTINGALE","OVERALL","PRODIGIOUS","QUIET","ROLLING","STUPENDOUS","TATTLETALE","UNIFORM","VORACIOUS","WAILING","XRAY","YESTERDAY","ZEBRA"];var T=[Object(p.g)(d.TYPES.START_GAME,function*(){for(;;){if(Object(p.c)({wait:Object(i.b)(1e3),endGame:Object(p.e)(d.TYPES.END_GAME)}).endGame)return;const e=(yield Object(p.d)()).game.timeRemaining;yield Object(p.b)(d.CREATORS.updateRemainingTime(e-1))}}),Object(p.f)(d.TYPES.START_GAME,function*(){let e;try{e=(yield Object(p.a)(R.a.get,"dictionary")).data}catch(t){e=g}yield Object(p.b)(d.CREATORS.setWord(Object(l.sample)(e)))}),Object(p.f)(d.TYPES.UPDATE_REMAINING_TIME,function*({newTime:e}){e<=0&&(yield Object(p.b)(d.CREATORS.endGame(E.GameStatus.LOSS)))}),Object(p.f)(d.TYPES.GUESS,function*({letter:e}){const t=yield Object(p.d)();if(function(e,t){return new RegExp(e).test(t)}(e,t.game.word)){const e=f(t.game.word,t.game.guesses);yield Object(p.b)(d.CREATORS.expose(e))}else yield Object(p.b)(d.CREATORS.miss())}),Object(p.f)(d.TYPES.MISS,function*(){0===(yield Object(p.d)()).game.lives&&(yield Object(p.b)(d.CREATORS.endGame(E.GameStatus.LOSS)))}),Object(p.f)(d.TYPES.EXPOSE,function*(){const e=yield Object(p.d)();e.game.word===e.game.exposed.join("")&&(yield Object(p.b)(d.CREATORS.endGame(E.GameStatus.WIN)))})];function*b(){yield Object(l.flatten)([T])}var A=n(45);const v={timeRemaining:30,gameStatus:void 0,guesses:[],exposed:[],word:"",lives:5};var y=((e,t)=>(n=e,s)=>Object(l.hasIn)(t,s.type)&&Object(l.isFunction)(t[s.type])?t[s.type](n,s):n)(v,{[d.TYPES.UPDATE_REMAINING_TIME]:(e,{newTime:t})=>A.from(e).merge({timeRemaining:t}),[d.TYPES.START_GAME]:e=>A.from(e).merge(Object.assign({},v,{gameStatus:E.GameStatus.IN_PROGRESS})),[d.TYPES.END_GAME]:(e,{result:t})=>A.from(e).merge({timeRemaining:0,gameStatus:t,exposed:[...e.word]}),[d.TYPES.SET_WORD]:(e,{word:t})=>A.from(e).merge({word:t,exposed:[...t].map(e=>"")}),[d.TYPES.GUESS]:(e,{letter:t})=>A.from(e).merge({guesses:[...new Set(e.guesses).add(t)]}),[d.TYPES.MISS]:e=>A.from(e).merge({lives:e.lives-1}),[d.TYPES.EXPOSE]:(e,{exposed:t})=>A.from(e).merge({exposed:t})});const G=Object(a.combineReducers)({game:y}),I=Object(i.a)(),x=[I];var j=(()=>{const e=Object(c.composeWithDevTools)(Object(a.applyMiddleware)(...x)),t=Object(a.createStore)(G,e);return I.run(b),t})(),N=n(83),M=n(411);n(178);const P=({exposed:e})=>s.createElement("p",{className:"WordDisplay"},e.map(e=>e||"_"));n(175);const h=({lives:e})=>s.createElement("p",{className:"Lives","data-cy":"lives"},e);n(173);const w=({letters:e})=>s.createElement("p",{className:"UsedLetters","data-cy":"guesses"},e.join(" "));n(171);const _=({timeRemaining:e})=>{const t=Object(l.padStart)(Object(l.floor)(e/60).toFixed(0),2,"0"),n=Object(l.padStart)((e%60).toFixed(0),2,"0");return s.createElement("h1",{"data-cy":"timer",className:"Timer"},t,":",n)};var L=n(156);n(169);const D=({status:e})=>{if(e!==E.GameStatus.LOSS&&e!==E.GameStatus.WIN)return null;const t=L("status",{win:e===E.GameStatus.WIN,loss:e===E.GameStatus.LOSS});return s.createElement("h1",{className:t,"data-cy":"status"},e===E.GameStatus.LOSS?"Boo, you lost!":"Yay, you won!")},U=({onClick:e,status:t})=>s.createElement("button",{onClick:e,disabled:t===E.GameStatus.IN_PROGRESS,"data-cy":"start"},s.createElement("strong",null,"START"));n(167);const C={guess:d.CREATORS.guess,startGame:d.CREATORS.startGame};var Y=Object(N.b)(e=>({exposed:e.game.exposed,guesses:e.game.guesses,lives:e.game.lives,status:e.game.gameStatus,timeRemaining:e.game.timeRemaining}),C)(class extends s.Component{constructor(){super(...arguments),this.onKeyPress=(e=>{const{guesses:t,guess:n,status:s}=this.props;if(s!==E.GameStatus.IN_PROGRESS)return;const r=e.key.toUpperCase();/^[A-Z]$/.test(r)&&!Object(l.includes)(t,r)&&n(r)})}componentDidMount(){document.addEventListener("keypress",this.onKeyPress)}render(){const{guesses:e,exposed:t,lives:n,status:r,startGame:o,timeRemaining:a}=this.props;return s.createElement("div",{tabIndex:0,"data-cy":"board",className:"Board"},s.createElement("span",{className:"FlexRow"},s.createElement(D,{status:r})),s.createElement("div",{className:"Controls"},s.createElement("span",{className:"FlexRow"},s.createElement(_,{timeRemaining:a}),s.createElement(h,{lives:n})),s.createElement(U,{onClick:o,status:r})),s.createElement("span",{className:"FlexRow"},s.createElement(P,{exposed:t})),s.createElement("span",{className:"FlexRow"},s.createElement(w,{letters:e})))}});(e=>{r.render(s.createElement(o.AppContainer,null,s.createElement(e,{compiler:"TypeScript",framework:"React",store:j})),document.getElementById("game"))})(class extends s.Component{render(){return s.createElement(N.a,{store:this.props.store},s.createElement(M.a,null,s.createElement(Y,null)))}})},166:function(e,t,n){(e.exports=n(57)(!1)).push([e.i,".Board {\n    margin: 30px;\n    font-family: 'Roboto', 'Arial', sans-serif;\n}\n\n.FlexRow {\n    display: flex;\n    flex-direction: row;\n    justify-content:center;\n    align-items: center;\n}\n\n.FlexRow > * {\n    margin: auto;\n}\n\n.Controls {\n    margin: 10px;\n    padding: 10px;\n    border: 1px black solid;\n}\n\n.Controls > * {\n    width: 100%;\n}",""])},167:function(e,t,n){var s=n(166);"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(56)(s,r);s.locals&&(e.exports=s.locals)},168:function(e,t,n){(e.exports=n(57)(!1)).push([e.i,".status {\n\n}\n\n.status.win {\n    color: green;\n}\n\n.status.loss {\n    color: darkred;\n}",""])},169:function(e,t,n){var s=n(168);"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(56)(s,r);s.locals&&(e.exports=s.locals)},170:function(e,t,n){(e.exports=n(57)(!1)).push([e.i,".Timer {\n  font-size: 3rem !important;\n}",""])},171:function(e,t,n){var s=n(170);"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(56)(s,r);s.locals&&(e.exports=s.locals)},172:function(e,t,n){(e.exports=n(57)(!1)).push([e.i,".UsedLetters {\n  letter-spacing: 5px;\n  font-size: 2rem;\n\n  margin-top: 30px !important;\n}",""])},173:function(e,t,n){var s=n(172);"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(56)(s,r);s.locals&&(e.exports=s.locals)},174:function(e,t,n){(e.exports=n(57)(!1)).push([e.i,".Lives {\n    font-size: 3rem;\n}",""])},175:function(e,t,n){var s=n(174);"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(56)(s,r);s.locals&&(e.exports=s.locals)},177:function(e,t,n){(e.exports=n(57)(!1)).push([e.i,".WordDisplay {\n  letter-spacing: 5px;\n  font-size: 3rem;\n}",""])},178:function(e,t,n){var s=n(177);"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(56)(s,r);s.locals&&(e.exports=s.locals)},410:function(e,t,n){n(409),e.exports=n(165)}});
//# sourceMappingURL=app.bundle.js.map