import{u as P,d as te,e as le,f as Y,g as se,j as ae,t as ne,r as ie,h as A,i as q,k as ue,w as _,l,m as re,R as j,n as ce,p as oe,q as he,D as me,v as ve,x as de,y as ye,C as pe,z as ge,A as fe,B as He,E as M,F as U,G as Re,H as w,I as ke}from"./app-DdQiLeyE.js";const Qe=["/","/collection/2024.html","/content/2025/31.html","/content/2025/32.html","/content/2025/33.html","/content/2025/34.html","/content/2025/35.html","/content/2025/36.html","/content/2025/37.html","/content/2024/1.html","/content/2024/10.html","/content/2024/11.html","/content/2024/12.html","/content/2024/13.html","/content/2024/14.html","/content/2024/15.html","/content/2024/16.html","/content/2024/17.html","/content/2024/18.html","/content/2024/19.html","/content/2024/2.html","/content/2024/20.html","/content/2024/21.html","/content/2024/22.html","/content/2024/23.html","/content/2024/24.html","/content/2024/25.html","/content/2024/26.html","/content/2024/27.html","/content/2024/28.html","/content/2024/29.html","/content/2024/3.html","/content/2024/30.html","/content/2024/4.html","/content/2024/5.html","/content/2024/6.html","/content/2024/7.html","/content/2024/8.html","/content/2024/9.html","/404.html"],qe="SLIMSEARCH_QUERY_HISTORY",p=P(qe,[]),we=()=>{const{queryHistoryCount:s}=w,a=s>0;return{enabled:a,queryHistories:p,addQueryHistory:n=>{a&&(p.value=Array.from(new Set([n,...p.value.slice(0,s-1)])))},removeQueryHistory:n=>{p.value=[...p.value.slice(0,n),...p.value.slice(n+1)]}}},E=s=>Qe[s.id]+("anchor"in s?`#${s.anchor}`:""),xe="SLIMSEARCH_RESULT_HISTORY",{resultHistoryCount:O}=w,g=P(xe,[]),Se=()=>{const s=O>0;return{enabled:s,resultHistories:g,addResultHistory:a=>{if(s){const n={link:E(a),display:a.display};"header"in a&&(n.header=a.header),g.value=[n,...g.value.slice(0,O-1)]}},removeResultHistory:a=>{g.value=[...g.value.slice(0,a),...g.value.slice(a+1)]}}},Ce=s=>{const a=me(),n=Y(),x=ve(),u=A(0),H=q(()=>u.value>0),d=de([]);return ye(()=>{const{search:y,terminate:S}=pe(),f=Re(c=>{const{resultsFilter:R=r=>r,querySplitter:F,suggestionsFilter:C,...L}=a.value;c?(u.value+=1,y(c,n.value,L).then(r=>R(r,c,n.value,x.value)).then(r=>{u.value-=1,d.value=r}).catch(r=>{console.warn(r),u.value-=1,u.value||(d.value=[])})):d.value=[]},w.searchDelay-w.suggestDelay,{maxWait:5e3});_([s,n],([c])=>{f(c.join(" "))},{immediate:!0}),ge(()=>{S()})}),{isSearching:H,results:d}};var De=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:a}){const n=le(),x=Y(),u=se(ae),{enabled:H,addQueryHistory:d,queryHistories:y,removeQueryHistory:S}=we(),{enabled:f,resultHistories:c,addResultHistory:R,removeResultHistory:F}=Se(),C=H||f,L=ne(s,"queries"),{results:r,isSearching:B}=Ce(L),i=ie({isQuery:!0,index:0}),m=A(0),v=A(0),T=q(()=>C&&(y.value.length>0||c.value.length>0)),D=q(()=>r.value.length>0),$=q(()=>r.value[m.value]||null),z=()=>{const{isQuery:e,index:t}=i;t===0?(i.isQuery=!e,i.index=e?c.value.length-1:y.value.length-1):i.index=t-1},G=()=>{const{isQuery:e,index:t}=i;t===(e?y.value.length-1:c.value.length-1)?(i.isQuery=!e,i.index=0):i.index=t+1},V=()=>{m.value=m.value>0?m.value-1:r.value.length-1,v.value=$.value.contents.length-1},W=()=>{m.value=m.value<r.value.length-1?m.value+1:0,v.value=0},J=()=>{v.value<$.value.contents.length-1?v.value+=1:W()},K=()=>{v.value>0?v.value-=1:V()},b=e=>e.map(t=>ke(t)?t:l(t[0],t[1])),N=e=>{if(e.type==="customField"){const t=fe[e.index]||"$content",[o,Q=""]=He(t)?t[x.value].split("$content"):t.split("$content");return e.display.map(h=>l("div",b([o,...h,Q])))}return e.display.map(t=>l("div",b(t)))},k=()=>{m.value=0,v.value=0,a("updateQuery",""),a("close")},X=()=>H?l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},u.value.queryHistory),y.value.map((e,t)=>l("div",{class:["slimsearch-result-item",{active:i.isQuery&&i.index===t}],onClick:()=>{a("updateQuery",e)}},[l(M,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},e),l("button",{class:"slimsearch-remove-icon",innerHTML:U,onClick:o=>{o.preventDefault(),o.stopPropagation(),S(t)}})]))])):null,Z=()=>f?l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},u.value.resultHistory),c.value.map((e,t)=>l(j,{to:e.link,class:["slimsearch-result-item",{active:!i.isQuery&&i.index===t}],onClick:()=>{k()}},()=>[l(M,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(o=>b(o)).flat())]),l("button",{class:"slimsearch-remove-icon",innerHTML:U,onClick:o=>{o.preventDefault(),o.stopPropagation(),F(t)}})]))])):null;return ue("keydown",e=>{if(s.isFocusing){if(D.value){if(e.key==="ArrowUp")K();else if(e.key==="ArrowDown")J();else if(e.key==="Enter"){const t=$.value.contents[v.value];d(s.queries.join(" ")),R(t),n.push(E(t)),k()}}else if(f){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=i;i.isQuery?(a("updateQuery",y.value[t]),e.preventDefault()):(n.push(c.value[t].link),k())}}}}),_([m,v],()=>{var e;(e=document.querySelector(".slimsearch-result-list-item.active .slimsearch-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["slimsearch-result-wrapper",{empty:s.queries.length?!D.value:!T.value}],id:"slimsearch-results"},s.queries.length?B.value?l(re,{hint:u.value.searching}):D.value?l("ul",{class:"slimsearch-result-list"},r.value.map(({title:e,contents:t},o)=>{const Q=m.value===o;return l("li",{class:["slimsearch-result-list-item",{active:Q}]},[l("div",{class:"slimsearch-result-title"},e||u.value.defaultTitle),t.map((h,ee)=>{const I=Q&&v.value===ee;return l(j,{to:E(h),class:["slimsearch-result-item",{active:I,"aria-selected":I}],onClick:()=>{d(s.queries.join(" ")),R(h),k()}},()=>[h.type==="text"?null:l(h.type==="title"?ce:h.type==="heading"?oe:he,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[h.type==="text"&&h.header?l("div",{class:"content-header"},h.header):null,l("div",N(h))])])})])})):u.value.emptyResult:C?T.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{De as default};
