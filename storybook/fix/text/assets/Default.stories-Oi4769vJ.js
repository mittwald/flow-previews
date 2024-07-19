import{I as n}from"./IllustratedMessage-CWybKTzD.js";import{R as r}from"./index-BwDkhjyp.js";import{H as I}from"./Heading-DVg7wytp.js";import{T as B}from"./Text-BXlBw2yu.js";import{B as D}from"./Button-w6OZw61K.js";import{I as b}from"./IconApp-ZB_mDMmk.js";import{d as y}from"./IconWarning-BtAGI7Yn.js";import{s as v,a as x}from"./storyBackgrounds-BHxp8d-8.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-DpPOHS38.js";import"./index-B8XB3FuZ.js";import"./RSPContexts-Bc9pl35m.js";import"./utils-CcQIssJO.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Wrap-DQq6jo70.js";import"./Text-DqgvIX4k.js";import"./LoadingSpinner-CsAgL5A_.js";import"./useLocalizedStringFormatter-BNeRQeib.js";import"./Button-CoDApBTL.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-C-qOUFhv.js";import"./usePress-Bw-L1sLn.js";const X={title:"Content/Illustrated Message",component:n,render:s=>r.createElement(n,{...s},r.createElement(b,null),r.createElement(I,null,"No apps installed"),r.createElement(B,null,"Create your first app to start working on your website."),r.createElement(D,null,"Create app")),argTypes:{color:{control:"inline-radio"}},args:{color:"info"}},e={},o={render:s=>r.createElement(n,{...s,color:"negative"},r.createElement(y,null),r.createElement(I,null,"No access"),r.createElement(B,null,"You do not have the required permissions to access this page."),r.createElement(D,null,"Go back"))},t={args:{color:"dark"},parameters:{backgrounds:v}},a={args:{color:"light"},parameters:{backgrounds:x}};var c,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,l,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
