import{R as e}from"./index-B-o1Wr-g.js";import{L as _}from"./LayoutCard-B5XFBqDp.js";import{N as A,a as o}from"./NavigationGroup-CdT_VDJM.js";import{L as r}from"./Link-DV8ZjRND.js";import{T as t}from"./Text-B5qFq-QV.js";import{I as M}from"./IconApp-BTi5eST8.js";import{K as L,e as q,w as G,L as H}from"./IconWarning-C5JDBu26.js";import{S as y}from"./Separator-6N92k3uJ.js";import{A as c}from"./Avatar-otkdn0iw.js";import{I as T}from"./Initials-Hu0TJYpG.js";import{c as d}from"./clsx-B-dksMZM.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{I as p}from"./Image-ChrkJv_w.js";import{s as K}from"./storyBackgrounds-GFSAi-dI.js";import{H as R}from"./Heading-Bn-Oekdv.js";import{L as v}from"./Label-DmbcA-Bx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-D6-TVbjo.js";import"./PropsContextProvider-DWb7RnwM.js";import"./index-ynQ6n1pc.js";import"./index-DolzVqEf.js";import"./Accordion-n-REkk7b.js";import"./dynamic-DKDa4OpU.js";import"./Button-CEPV1PYe.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-DIqKivrC.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Button-DpaYcQnV.js";import"./utils-CCebJm36.js";import"./ProgressBar-C7LzY9et.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CjESOWAx.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./Activity-BWfzpBOU.js";import"./Content-DnB3Z0p2.js";import"./deepHas-qlU7dqTi.js";import"./react-children-utilities-D14ImiYi.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Text-CByKVUtS.js";import"./Separator-BAc0WD8W.js";import"./CollectionBuilder-CRjClK3P.js";import"./Heading--STTcIhS.js";import"./RSPContexts-BT50PPhj.js";const B="flow--mstudio--primary-navigation",O="flow--mstudio--collapsed",f={primaryNavigation:B,collapsed:O},u=s=>e.createElement(_,{className:d(f.primaryNavigation,s.collapsed&&f.collapsed)},e.createElement(A,null,e.createElement(o,null,e.createElement(r,null,e.createElement(L,null),e.createElement(t,null,"Dashboard")),e.createElement(r,null,e.createElement(q,null),e.createElement(t,null,"Projekte"))),e.createElement(y,null),e.createElement(o,null,e.createElement(r,null,e.createElement(c,null,e.createElement(T,null,"Mein Projekt")),e.createElement(t,null,"Mein Projekt")),e.createElement(r,null,e.createElement(c,null,e.createElement(p,{alt:"Gopher",src:j.imageSrc})),e.createElement(t,null,"Gophers Projekt"))),e.createElement(y,null),e.createElement(o,null,e.createElement(r,null,e.createElement(G,null),e.createElement(t,null,"Support")))));u.__docgenInfo={description:"",methods:[],displayName:"PrimaryNavigation",props:{collapsed:{required:!1,tsType:{name:"boolean"},description:""}}};const $="flow--mstudio--secondary-navigation",z="flow--mstudio--avatar-container",F="flow--mstudio--avatar",J="flow--mstudio--initials",Q="flow--mstudio--rounded",U="flow--mstudio--background",n={secondaryNavigation:$,avatarContainer:z,avatar:F,initials:J,rounded:Q,background:U},C=s=>{const{imgSrc:a,title:E,rounded:g}=s;return e.createElement("div",{className:d(n.avatarContainer,g&&a&&n.rounded)},a&&g&&e.createElement(p,{className:n.background,"aria-hidden":!0,src:a}),e.createElement(c,{className:n.avatar},!a&&e.createElement(T,{className:n.initials},E),a&&e.createElement(p,{alt:E,src:a})))};C.__docgenInfo={description:"",methods:[],displayName:"SecondaryNavigationAvatar",props:{imgSrc:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},rounded:{required:!1,tsType:{name:"boolean"},description:""}}};const D=()=>e.createElement(_,{className:d(n.secondaryNavigation)},e.createElement(C,{title:"Max Mustermann",imgSrc:j.imageSrc,rounded:!0}),e.createElement(R,null,"Mein Projekt"),e.createElement(A,null,e.createElement(o,{collapsable:!0},e.createElement(v,null,"Allgemeines"),e.createElement(r,null,e.createElement(L,null),e.createElement(t,null,"Dashboard"))),e.createElement(o,{collapsable:!0},e.createElement(v,null,"Komponenten"),e.createElement(r,null,e.createElement(M,null),e.createElement(t,null,"Apps")),e.createElement(r,null,e.createElement(H,null),e.createElement(t,null,"Domains")))));D.__docgenInfo={description:"",methods:[],displayName:"SecondaryNavigation"};const ze={title:"mStudio",render:()=>e.createElement("div",{style:{height:"500px"}},e.createElement(u,null)),parameters:{backgrounds:K}},l={},m={render:()=>e.createElement("div",{style:{height:"500px"}},e.createElement(u,{collapsed:!0}))},i={render:()=>e.createElement(D,null)};var N,S,h;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(h=(S=l.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var b,k,I;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: "500px"
    }}>
        <PrimaryNavigation collapsed />
      </div>;
  }
}`,...(I=(k=m.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var P,w,x;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    return <SecondaryNavigation />;
  }
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const Fe=["Primary","PrimaryCollapsed","Secondary"];export{l as Primary,m as PrimaryCollapsed,i as Secondary,Fe as __namedExportsOrder,ze as default};