import{I as p}from"./IllustratedMessage-BBTX4c47.js";import{R as r}from"./index-B-o1Wr-g.js";import{H as m}from"./Heading-DQ0-u3p0.js";import{T as i}from"./Text-CemaETXH.js";import{B as c}from"./Button-yJDb9wt-.js";import{I as x}from"./IconApp--rto3B0B.js";import{h as C}from"./IconWarning--ZE28x2f.js";import{a as T,s as w}from"./storyBackgrounds-GFSAi-dI.js";import{A as H}from"./ActionGroup-B843AYgo.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-SXQnFwcy.js";import"./index-DolzVqEf.js";import"./Heading--STTcIhS.js";import"./RSPContexts-BT50PPhj.js";import"./utils-CCebJm36.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./Text-CByKVUtS.js";import"./LoadingSpinner-DOxxHnS_.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Button-DpaYcQnV.js";import"./ProgressBar-C7LzY9et.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CjESOWAx.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Ctir2FTR.js";import"./useSelector-iQqgW7gO.js";const gr={title:"Content/Illustrated Message",component:p,render:e=>r.createElement(p,{...e},r.createElement(x,null),r.createElement(m,null,"No apps installed"),r.createElement(i,null,"Create your first app to start working on your website."),r.createElement(c,null,"Create app")),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},t={},o={render:e=>r.createElement(p,{...e,color:"danger"},r.createElement(C,null),r.createElement(m,null,"No access"),r.createElement(i,null,"You do not have the required permissions to access this page."),r.createElement(c,null,"Go back"))},a={args:{color:"dark"},parameters:{backgrounds:T}},n={args:{color:"light"},parameters:{backgrounds:w}},s={render:e=>r.createElement(p,{...e},r.createElement(x,null),r.createElement(m,null,"No apps installed"),r.createElement(i,null,"Create your first app to start working on your website."),r.createElement(H,null,r.createElement(c,{variant:"soft",color:"secondary"},"Go back"),r.createElement(c,null,"Create app")))};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,k,E;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props} color="danger">
      <IconDanger />
      <Heading>No access</Heading>
      <Text>You do not have the required permissions to access this page.</Text>
      <Button>Go back</Button>
    </IllustratedMessage>
}`,...(E=(k=o.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var f,h,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var B,I,b;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(b=(I=n.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var D,G,A;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(G=s.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};const kr=["Default","Danger","Dark","Light","WithActionGroup"];export{o as Danger,a as Dark,t as Default,n as Light,s as WithActionGroup,kr as __namedExportsOrder,gr as default};
