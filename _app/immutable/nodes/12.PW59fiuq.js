import{S as C}from"../chunks/skills.ObStlox9.js";import{s as G,e as I,t as h,a as s,b as E,c as F,d as J}from"../chunks/disclose-version.D_0R5w7p.js";import{p as K,a as L,g as i,f as A,t as k,d as x,n as $,s as d,c as H,r as O}from"../chunks/utils.6KhQ9vBw.js";import{i as b}from"../chunks/index-client.CzxfyyCv.js";import{e as Q,i as V,d as W}from"../chunks/stores.BP5gmU0z.js";import{s as X,h as Y}from"../chunks/base.BeqxGXSx.js";import{B as Z}from"../chunks/base-page.MhNc0qtu.js";import{E as ee}from"../chunks/empty-result.CQbJhZCB.js";import{F as te,M as ae,E as re}from"../chunks/markdown.B0ERz3hl.js";import{B as oe}from"../chunks/index.CYQjN6qd.js";import{S as z}from"../chunks/separator.DjKvMnhC.js";import{H as se}from"../chunks/h1.DH4LXfzk.js";import{M as le,A as ne}from"../chunks/assets.eZSAxo3V.js";import{E as ie}from"../chunks/experience.BLsQk7XJ.js";import{P as me}from"../chunks/projects.B4a5nFkg.js";import"../chunks/legacy.WUkXPhl2.js";function de({params:f}){if(f.slug)return{item:C.items.find(c=>c.slug===f.slug)}}const De=Object.freeze(Object.defineProperty({__proto__:null,load:de},Symbol.toStringTag,{value:"Module"}));var fe=E("<a><!></a>"),ue=E('<div class="flex flex-row flex-wrap items-center gap-2 px-4 py-4"><!> <!></div>'),ge=E("<!> <!> <!> <!> <!>",1);function Fe(f,a){K(a,!0);const c=G(),p=()=>J(W,"$mode",c);let N=x(()=>{var t,r;return`${((r=(t=a.data)==null?void 0:t.item)==null?void 0:r.name)??"Not Found"} - Skills`}),R=x(()=>{var t,r,e;return(p()=="dark"?(r=(t=a.data)==null?void 0:t.item)==null?void 0:r.logo.dark:(e=a.data.item)==null?void 0:e.logo.light)??ne.Unknown.light}),P=x(()=>(()=>{const t=a.data.item;if(!t)return[];const r=[];return me.items.forEach(e=>{e.skills.find(m=>m.slug===t.slug)&&r.push({link:`/projects/${e.slug}`,logo:p()==="dark"?e.logo.dark:e.logo.light,name:e.name})}),ie.items.forEach(e=>{e.skills.find(m=>m.slug===t.slug)&&r.push({link:`/experience/${e.slug}`,logo:p()==="dark"?e.logo.dark:e.logo.light,name:e.name})}),r})());Z(f,{get title(){return i(N)},children:(t,r)=>{var e=I(),m=A(e);b(m,()=>!a.data.item,_=>{ee(_)},_=>{var S=ge(),y=A(S);te(y,{get img(){return i(R)},children:(o,u)=>{se(o,{children:(g,B)=>{$();var l=h();k(()=>F(l,a.data.item.name)),s(g,l)},$$slots:{default:!0}})},$$slots:{default:!0}});var M=d(y,2);z(M,{});var w=d(M,2);b(w,()=>a.data.item.description.trim(),o=>{ae(o,{get content(){return a.data.item.description}})},o=>{re(o)});var j=d(w,2);z(j,{});var T=d(j,2);b(T,()=>i(P).length!==0,o=>{var u=ue(),g=H(u);le(g,{children:(l,v)=>{$();var n=h("Related items");s(l,n)},$$slots:{default:!0}});var B=d(g,2);Q(B,17,()=>i(P),V,(l,v)=>{var n=fe();k(()=>X(n,"href",Y(i(v).link)));var U=H(n);oe(U,{children:(q,ce)=>{$();var D=h();k(()=>F(D,i(v).name)),s(q,D)},$$slots:{default:!0}}),O(n),s(l,n)}),O(u),s(o,u)}),s(_,S)}),s(t,e)},$$slots:{default:!0}}),L()}export{Fe as component,De as universal};
