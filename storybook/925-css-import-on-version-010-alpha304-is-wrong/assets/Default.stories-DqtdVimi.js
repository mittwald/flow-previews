import{I as p}from"./IllustratedMessage-DISrmn2W.js";import{R as e}from"./index-Cs7sjTYM.js";import{H as i}from"./Heading-BhHG4lv2.js";import{T as m}from"./Text-EiUZzLnr.js";import{B as c}from"./Button-Byi0Whzt.js";import{I as D}from"./IconApp-Cqd50AQn.js";import{f as x}from"./IconWarning-B9oov-FP.js";import{a as C,s as N}from"./storyBackgrounds-GFSAi-dI.js";import{A as T}from"./ActionGroup-B5x2o7qd.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-CTC1x3gN.js";import"./index-Cf-03bMR.js";import"./Heading-CG14-WVD.js";import"./RSPContexts-BseA8goh.js";import"./utils-Cd8r7pc9.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Bnjm0IRl.js";import"./LoadingSpinner-DyR03qbn.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Button-CROQF3YN.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-GQF4xS8_.js";import"./useFocusRing-DdBFev_0.js";import"./usePress-BiUpVy3m.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CY5IcNNh.js";import"./useSelector-CrifC7Fx.js";const ge={title:"Content/Illustrated Message",component:p,render:r=>e.createElement(p,{...r},e.createElement(D,null),e.createElement(i,null,"No apps installed"),e.createElement(m,null,"Create your first app to start working on your website."),e.createElement(c,null,"Create app")),argTypes:{color:{control:"inline-radio"}},args:{color:"info"}},t={},o={render:r=>e.createElement(p,{...r,color:"negative"},e.createElement(x,null),e.createElement(i,null,"No access"),e.createElement(m,null,"You do not have the required permissions to access this page."),e.createElement(c,null,"Go back"))},a={args:{color:"dark"},parameters:{backgrounds:C}},s={args:{color:"light"},parameters:{backgrounds:N}},n={render:r=>e.createElement(p,{...r},e.createElement(D,null),e.createElement(i,null,"No apps installed"),e.createElement(m,null,"Create your first app to start working on your website."),e.createElement(T,null,e.createElement(c,{variant:"soft",color:"secondary"},"Go back"),e.createElement(c,null,"Create app")))};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,k,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
