import{R as t}from"./index-uCp2LrAq.js";import{c as w}from"./clsx-B-dksMZM.js";import{f as b}from"./flowComponent-BTm_-Ap-.js";import{B as x}from"./Button-CJQViVFu.js";import"./IconApp-CYLgAyW6.js";import{p as P}from"./IconWarning-BMz2Im20.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PropsContextProvider-Bes6Wf8F.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./Wrap-DQq6jo70.js";import"./Text-CvB22Fl-.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-D6Zjnbf0.js";import"./utils-DZgOXw50.js";import"./LoadingSpinner-BFtrDIbw.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Button-CHkCIm-e.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DpEA8Hsr.js";import"./usePress-CaJD4Kpr.js";const W="flow--counter-badge",I={counterBadge:W},s=b("CounterBadge",e=>{const{className:T,count:m,...h}=e,E=w(I.counterBadge,T);return t.createElement("span",{className:E,...h,"aria-hidden":!0},m&&m>99?"99+":m)});s.__docgenInfo={description:"",methods:[],displayName:"CounterBadge",props:{elementType:{required:!1,tsType:{name:"union",raw:"T | ExoticComponent",elements:[{name:"T"},{name:"ExoticComponent"}]},description:""},tunnelId:{required:!1,tsType:{name:"string"},description:"@internal"},render:{required:!1,tsType:{name:"union",raw:"FlowRenderFn<P> | false",elements:[{name:"signature",type:"function",raw:`(
  component: ComponentType<P>,
  props: P,
) => ReactNode`,signature:{arguments:[{type:{name:"ComponentType",elements:[{name:"P"}],raw:"ComponentType<P>"},name:"component"},{type:{name:"P"},name:"props"}],return:{name:"ReactNode"}}},{name:"literal",value:"false"}]},description:"@internal"},count:{required:!1,tsType:{name:"number"},description:""}}};const X={title:"Status/CounterBadge",component:s,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:e=>t.createElement(s,{...e})},r={},o={args:{count:void 0}},n={args:{count:120}},a={render:e=>t.createElement(x,{"aria-label":"Notifications: 7"},t.createElement(P,null),t.createElement(s,{...e,count:7}))};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,d,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    count: undefined
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,f,B;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    count: 120
  }
}`,...(B=(f=n.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var C,y,N;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <Button aria-label="Notifications: 7">
      <IconNotification />
      <CounterBadge {...props} count={7}></CounterBadge>
    </Button>
}`,...(N=(y=a.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};const Y=["Default","WithoutContent","WithHighNumber","WithButton"];export{r as Default,a as WithButton,n as WithHighNumber,o as WithoutContent,Y as __namedExportsOrder,X as default};
