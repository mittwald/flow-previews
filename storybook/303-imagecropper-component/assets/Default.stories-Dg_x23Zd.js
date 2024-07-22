import{I as n}from"./IllustratedMessage-9-uRfnIP.js";import{R as r}from"./index-Cs7sjTYM.js";import{H as I}from"./Heading-B14qmMr9.js";import{T as B}from"./Text-BM3moMBE.js";import{B as D}from"./Button-m5USM9JU.js";import{I as b}from"./IconApp-CyHi4WPz.js";import{d as y}from"./IconWarning-DZJaqlYL.js";import{s as v,a as x}from"./storyBackgrounds-BHxp8d-8.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C-7PaZ52.js";import"./index-Dy0c0dcE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-BttIposY.js";import"./index-BMdlDBjA.js";import"./RSPContexts-BseA8goh.js";import"./utils-Cy-A-nlV.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Dh5WnJTs.js";import"./LoadingSpinner-T2v-ofXf.js";import"./useLocalizedStringFormatter-Ccpl5Mb8.js";import"./Button-DrQgql3X.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-OFlS-6qe.js";import"./usePress-CTrgc7uI.js";const X={title:"Content/Illustrated Message",component:n,render:s=>r.createElement(n,{...s},r.createElement(b,null),r.createElement(I,null,"No apps installed"),r.createElement(B,null,"Create your first app to start working on your website."),r.createElement(D,null,"Create app")),argTypes:{color:{control:"inline-radio"}},args:{color:"info"}},e={},o={render:s=>r.createElement(n,{...s,color:"negative"},r.createElement(y,null),r.createElement(I,null,"No access"),r.createElement(B,null,"You do not have the required permissions to access this page."),r.createElement(D,null,"Go back"))},t={args:{color:"dark"},parameters:{backgrounds:v}},a={args:{color:"light"},parameters:{backgrounds:x}};var c,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,l,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
