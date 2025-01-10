import{R as e}from"./index-BbMBc-iG.js";import{c as g}from"./clsx-B-dksMZM.js";import{P}from"./PropsContextProvider-BgoMLKZk.js";import{H as d}from"./Heading-CHAikoJ1.js";import{T as p}from"./Text-D6naXSDy.js";import{B as m}from"./Button-1rw05oyV.js";import{I as v}from"./IconApp-B_zPpa1A.js";import{p as L}from"./IconWarning-CceziLlX.js";import{a as O,s as q}from"./storyBackgrounds-GFSAi-dI.js";import{A as W}from"./ActionGroup-h4TxZ6ye.js";const j="flow--illustrated-message--illustrated-message-container",z="flow--illustrated-message",R="flow--illustrated-message--icon",Y="flow--illustrated-message--text",F="flow--illustrated-message--heading",J="flow--illustrated-message--action-group",K="flow--illustrated-message--primary",Q="flow--illustrated-message--danger",U="flow--illustrated-message--dark",V="flow--illustrated-message--light",t={illustratedMessageContainer:j,illustratedMessage:z,icon:R,text:Y,heading:F,actionGroup:J,primary:K,danger:Q,dark:U,light:V},c=r=>{const{className:T,children:A,color:i="primary",..._}=r,H=g(t.illustratedMessageContainer,T),u=i==="dark"||i==="light"?i:void 0,S={Icon:{className:t.icon,size:"l"},Heading:{className:t.heading},Text:{className:t.text,color:u},Button:{color:u??"accent"},ActionGroup:{ignoreBreakpoint:!0,className:t.actionGroup}};return e.createElement("div",{..._,className:H},e.createElement("div",{className:g(t.illustratedMessage,t[i])},e.createElement(P,{props:S},A)))};c.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"IllustratedMessage",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "danger" | "light" | "dark"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:'The color of the illustrated message. @default "primary"'}},composes:["PropsWithChildren"]};const X={title:"Content/Illustrated Message",component:c,render:r=>e.createElement(c,{...r},e.createElement(v,null),e.createElement(d,null,"No apps installed"),e.createElement(p,null,"Create your first app to start working on your website."),e.createElement(m,null,"Create app")),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},s={render:r=>e.createElement(c,{...r,color:"danger"},e.createElement(L,null),e.createElement(d,null,"No access"),e.createElement(p,null,"You do not have the required permissions to access this page."),e.createElement(m,null,"Go back"))},o={args:{color:"dark"},parameters:{backgrounds:O}},n={args:{color:"light"},parameters:{backgrounds:q}},l={render:r=>e.createElement(c,{...r},e.createElement(v,null),e.createElement(d,null,"No apps installed"),e.createElement(p,null,"Create your first app to start working on your website."),e.createElement(W,null,e.createElement(m,{variant:"soft",color:"secondary"},"Go back"),e.createElement(m,null,"Create app")))};var f,h,k;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var y,E,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props} color="danger">
      <IconDanger />
      <Heading>No access</Heading>
      <Text>You do not have the required permissions to access this page.</Text>
      <Button>Go back</Button>
    </IllustratedMessage>
}`,...(w=(E=s.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var x,C,I;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var b,B,M;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(M=(B=n.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var N,D,G;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(G=(D=l.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const Z=["Default","Danger","Dark","Light","WithActionGroup"],ie=Object.freeze(Object.defineProperty({__proto__:null,Danger:s,Dark:o,Default:a,Light:n,WithActionGroup:l,__namedExportsOrder:Z,default:X},Symbol.toStringTag,{value:"Module"}));export{ie as D,c as I,X as m};
