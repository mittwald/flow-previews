import{I as n}from"./IllustratedMessage-C4d3enDJ.js";import{R as r}from"./index-Cs7sjTYM.js";import{H as I}from"./Heading-Cs03TZSA.js";import{T as B}from"./Text-By_wGPWN.js";import{B as D}from"./Button-Bj8CXYs-.js";import{I as b}from"./IconApp-Cq2nF_H2.js";import{d as y}from"./IconWarning-CT4MKmtH.js";import{s as v,a as x}from"./storyBackgrounds-BHxp8d-8.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-58HgA8rU.js";import"./index-C8LjR2Bd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-CmFvo3FE.js";import"./index-BMdlDBjA.js";import"./RSPContexts-BseA8goh.js";import"./utils-Ca6JWPXc.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Bu-3W4UG.js";import"./LoadingSpinner-DmXq9kUh.js";import"./useLocalizedStringFormatter-J1nK3MOF.js";import"./Button-ImYwklq8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-CMUHH7RC.js";import"./usePress-BgSaJexe.js";const X={title:"Content/Illustrated Message",component:n,render:s=>r.createElement(n,{...s},r.createElement(b,null),r.createElement(I,null,"No apps installed"),r.createElement(B,null,"Create your first app to start working on your website."),r.createElement(D,null,"Create app")),argTypes:{color:{control:"inline-radio"}},args:{color:"info"}},e={},o={render:s=>r.createElement(n,{...s,color:"negative"},r.createElement(y,null),r.createElement(I,null,"No access"),r.createElement(B,null,"You do not have the required permissions to access this page."),r.createElement(D,null,"Go back"))},t={args:{color:"dark"},parameters:{backgrounds:v}},a={args:{color:"light"},parameters:{backgrounds:x}};var c,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,l,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(E=(h=a.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const Z=["Default","Negative","Dark","Light"];export{t as Dark,e as Default,a as Light,o as Negative,Z as __namedExportsOrder,X as default};
