import{I as n}from"./IllustratedMessage-BxuYfvNz.js";import{R as r}from"./index-uCp2LrAq.js";import{H as I}from"./Heading-BCjHoBHi.js";import{T as B}from"./Text-Dgrf8S-7.js";import{B as D}from"./Button-xFoG6pgt.js";import{I as b}from"./IconApp-DWya8WHB.js";import{d as y}from"./IconWarning-D6ajfWtk.js";import{s as v,a as x}from"./storyBackgrounds-BHxp8d-8.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-Cll4pGCY.js";import"./index-BOkhicXD.js";import"./RSPContexts-CJnKmcd7.js";import"./utils-DZgOXw50.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-3FUNhTNc.js";import"./LoadingSpinner-CBtSEswS.js";import"./useLocalizedStringFormatter-Bpx1Gtyq.js";import"./Button-DvIckO9Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-B1CfUGG-.js";import"./usePress-Bc78XfGJ.js";const X={title:"Content/Illustrated Message",component:n,render:s=>r.createElement(n,{...s},r.createElement(b,null),r.createElement(I,null,"No apps installed"),r.createElement(B,null,"Create your first app to start working on your website."),r.createElement(D,null,"Create app")),argTypes:{color:{control:"inline-radio"}},args:{color:"info"}},e={},o={render:s=>r.createElement(n,{...s,color:"negative"},r.createElement(y,null),r.createElement(I,null,"No access"),r.createElement(B,null,"You do not have the required permissions to access this page."),r.createElement(D,null,"Go back"))},t={args:{color:"dark"},parameters:{backgrounds:v}},a={args:{color:"light"},parameters:{backgrounds:x}};var c,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,l,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
