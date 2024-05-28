import{R as t}from"./index-uCp2LrAq.js";import{c as E}from"./clsx-B-dksMZM.js";import{f as w}from"./flowComponent-BXgpTJfi.js";import{B as x}from"./Button-5wt70xhe.js";import"./IconApp-Cn5k3X6X.js";import{p as B}from"./IconWarning-BlJfL1s8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PropsContextProvider-v92cY4my.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./Wrap-DQq6jo70.js";import"./Text-Cxmp4Xqy.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-D6Zjnbf0.js";import"./utils-DZgOXw50.js";import"./LoadingSpinner-DfSuOTAm.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Button-nTbqVPLP.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-rZ2Ly5zk.js";import"./usePress-B-dVD-xw.js";const P="flow--counter-label",W={counterLabel:P},s=w("CounterLabel",e=>{const{className:T,count:m,...h}=e,L=E(W.counterLabel,T);return t.createElement("span",{className:L,...h,"aria-hidden":!0},m&&m>99?"99+":m)});s.__docgenInfo={description:"",methods:[],displayName:"CounterLabel",props:{elementType:{required:!1,tsType:{name:"union",raw:"T | ExoticComponent",elements:[{name:"T"},{name:"ExoticComponent"}]},description:""},tunnelId:{required:!1,tsType:{name:"string"},description:"@internal"},render:{required:!1,tsType:{name:"union",raw:"FlowRenderFn<P> | false",elements:[{name:"signature",type:"function",raw:`(
  component: ComponentType<P>,
  props: P,
) => ReactNode`,signature:{arguments:[{type:{name:"ComponentType",elements:[{name:"P"}],raw:"ComponentType<P>"},name:"component"},{type:{name:"P"},name:"props"}],return:{name:"ReactNode"}}},{name:"literal",value:"false"}]},description:"@internal"},count:{required:!1,tsType:{name:"number"},description:""}}};const X={title:"Status/CounterLabel",component:s,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:e=>t.createElement(s,{...e})},r={},o={args:{count:void 0}},n={args:{count:120}},a={render:e=>t.createElement(x,{"aria-label":"Notifications: 7"},t.createElement(B,null),t.createElement(s,{...e,count:7}))};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,l,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    count: undefined
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var f,g,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    count: 120
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var C,y,N;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <Button aria-label="Notifications: 7">
      <IconNotification />
      <CounterLabel {...props} count={7}></CounterLabel>
    </Button>
}`,...(N=(y=a.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};const Y=["Default","WithoutContent","WithHighNumber","WithButton"];export{r as Default,a as WithButton,n as WithHighNumber,o as WithoutContent,Y as __namedExportsOrder,X as default};
