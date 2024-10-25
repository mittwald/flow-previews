import{I as p}from"./IllustratedMessage-CbVa821d.js";import{R as e}from"./index-Cs7sjTYM.js";import{H as i}from"./Heading-i4QpT3vc.js";import{T as m}from"./Text-DZmFXo-e.js";import{B as c}from"./Button-Bq7y9BIZ.js";import{I as D}from"./IconApp-CKfGrMYq.js";import{f as x}from"./IconWarning-DoqSRZU1.js";import{a as C,s as N}from"./storyBackgrounds-GFSAi-dI.js";import{A as T}from"./ActionGroup-BFxZDqF9.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXo7lD_U.js";import"./index-j_f0pOtZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-Bg40pdZw.js";import"./index-Cf-03bMR.js";import"./Heading-Ys7-2L7-.js";import"./RSPContexts-BseA8goh.js";import"./utils-GKDLJ2vO.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-DP1y2Dk0.js";import"./LoadingSpinner-9k8jsvZY.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Button-CB57Q0FS.js";import"./ProgressBar-CpzbYRLN.js";import"./Label-qcDNDzhS.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BZB42ELj.js";import"./useFocusRing-Cx5sZpw_.js";import"./usePress-IYK5Xs6I.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DLuT6VQZ.js";import"./useSelector-DiJHxpbu.js";const ge={title:"Content/Illustrated Message",component:p,render:r=>e.createElement(p,{...r},e.createElement(D,null),e.createElement(i,null,"No apps installed"),e.createElement(m,null,"Create your first app to start working on your website."),e.createElement(c,null,"Create app")),argTypes:{color:{control:"inline-radio"}},args:{color:"info"}},t={},o={render:r=>e.createElement(p,{...r,color:"negative"},e.createElement(x,null),e.createElement(i,null,"No access"),e.createElement(m,null,"You do not have the required permissions to access this page."),e.createElement(c,null,"Go back"))},a={args:{color:"dark"},parameters:{backgrounds:C}},s={args:{color:"light"},parameters:{backgrounds:N}},n={render:r=>e.createElement(p,{...r},e.createElement(D,null),e.createElement(i,null,"No apps installed"),e.createElement(m,null,"Create your first app to start working on your website."),e.createElement(T,null,e.createElement(c,{variant:"soft",color:"secondary"},"Go back"),e.createElement(c,null,"Create app")))};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,k,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props} color="negative">
      <IconDanger />
      <Heading>No access</Heading>
      <Text>You do not have the required permissions to access this page.</Text>
      <Button>Go back</Button>
    </IllustratedMessage>
}`,...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var E,h,y;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var B,I,b;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(b=(I=s.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var G,v,A;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props}>
      <IconApp />
      <Heading>No apps installed</Heading>
      <Text>Create your first app to start working on your website.</Text>
      <ActionGroup>
        <Button variant="soft" color="secondary">
          Go back
        </Button>
        <Button>Create app</Button>
      </ActionGroup>
    </IllustratedMessage>
}`,...(A=(v=n.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const ke=["Default","Negative","Dark","Light","WithActionGroup"];export{a as Dark,t as Default,s as Light,o as Negative,n as WithActionGroup,ke as __namedExportsOrder,ge as default};
