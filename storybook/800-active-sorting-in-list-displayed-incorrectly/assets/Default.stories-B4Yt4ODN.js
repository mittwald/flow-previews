import{I as n}from"./IllustratedMessage-ClPY7BHS.js";import{R as r}from"./index-Cs7sjTYM.js";import{H as I}from"./Heading-yzkHp1-f.js";import{T as B}from"./Text-DYnmzK5R.js";import{B as D}from"./Button-CBaVSeEb.js";import{I as b}from"./IconApp-BOae6dD3.js";import{f as y}from"./IconWarning-DMnbQijb.js";import{a as v,s as x}from"./storyBackgrounds-GFSAi-dI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-D7ioKQ_2.js";import"./index-Cf-03bMR.js";import"./Heading-D2dIVyzg.js";import"./RSPContexts-BseA8goh.js";import"./utils-BBsc42SX.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-C0gOxGaJ.js";import"./LoadingSpinner-BLH-7Wh6.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./Button-BknGA9dM.js";import"./Hidden-DMUPAT4b.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-D6sODRzj.js";import"./useFocusRing-CRCkdtud.js";import"./usePress-Do5SRlXR.js";const rr={title:"Content/Illustrated Message",component:n,render:s=>r.createElement(n,{...s},r.createElement(b,null),r.createElement(I,null,"No apps installed"),r.createElement(B,null,"Create your first app to start working on your website."),r.createElement(D,null,"Create app")),argTypes:{color:{control:"inline-radio"}},args:{color:"info"}},e={},o={render:s=>r.createElement(n,{...s,color:"negative"},r.createElement(y,null),r.createElement(I,null,"No access"),r.createElement(B,null,"You do not have the required permissions to access this page."),r.createElement(D,null,"Go back"))},t={args:{color:"dark"},parameters:{backgrounds:v}},a={args:{color:"light"},parameters:{backgrounds:x}};var c,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,l,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props} color="negative">
      <IconDanger />
      <Heading>No access</Heading>
      <Text>You do not have the required permissions to access this page.</Text>
      <Button>Go back</Button>
    </IllustratedMessage>
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,g,k;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(k=(g=t.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var f,h,E;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(E=(h=a.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const er=["Default","Negative","Dark","Light"];export{t as Dark,e as Default,a as Light,o as Negative,er as __namedExportsOrder,rr as default};
