import{j as e}from"./jsx-runtime-CLpGMVip.js";import"./index-Cf9XvIV_.js";import{c as g}from"./clsx-B-dksMZM.js";import{P}from"./PropsContextProvider-CWFvCxZj.js";import{H as p}from"./Heading-B6ntI1Uh.js";import{T as u}from"./Text-CISO88fp.js";import{B as d}from"./Button-BIf7ZsHf.js";import{I as v}from"./IconApp-DoH4uGTw.js";import{p as L}from"./IconWarning--dCRo9Au.js";import{a as O,s as q}from"./storyBackgrounds-GFSAi-dI.js";import{A as W}from"./ActionGroup-BRKZywLU.js";const z="flow--src--illustrated-message--illustrated-message-container",E="flow--src--illustrated-message",Y="flow--src--illustrated-message--icon",R="flow--src--illustrated-message--text",F="flow--src--illustrated-message--heading",J="flow--src--illustrated-message--action-group",K="flow--src--illustrated-message--primary",Q="flow--src--illustrated-message--danger",U="flow--src--illustrated-message--dark",V="flow--src--illustrated-message--light",s={illustratedMessageContainer:z,illustratedMessage:E,icon:Y,text:R,heading:F,actionGroup:J,primary:K,danger:Q,dark:U,light:V},i=r=>{const{className:T,children:A,color:l="primary",..._}=r,H=g(s.illustratedMessageContainer,T),m=l==="dark"||l==="light"?l:void 0,S={Icon:{className:s.icon,size:"l"},Heading:{className:s.heading},Text:{className:s.text,color:m},Button:{color:m??"accent"},ActionGroup:{ignoreBreakpoint:!0,className:s.actionGroup}};return e.jsx("div",{..._,className:H,children:e.jsx("div",{className:g(s.illustratedMessage,s[l]),children:e.jsx(P,{props:S,children:A})})})};i.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"IllustratedMessage",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "danger" | "light" | "dark"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:'The color of the illustrated message. @default "primary"'}},composes:["PropsWithChildren"]};const X={title:"Content/Illustrated Message",component:i,render:r=>e.jsxs(i,{...r,children:[e.jsx(v,{}),e.jsx(p,{children:"No apps installed"}),e.jsx(u,{children:"Create your first app to start working on your website."}),e.jsx(d,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},o={render:r=>e.jsxs(i,{...r,color:"danger",children:[e.jsx(L,{}),e.jsx(p,{children:"No access"}),e.jsx(u,{children:"You do not have the required permissions to access this page."}),e.jsx(d,{children:"Go back"})]})},t={args:{color:"dark"},parameters:{backgrounds:O}},n={args:{color:"light"},parameters:{backgrounds:q}},c={render:r=>e.jsxs(i,{...r,children:[e.jsx(v,{}),e.jsx(p,{children:"No apps installed"}),e.jsx(u,{children:"Create your first app to start working on your website."}),e.jsxs(W,{children:[e.jsx(d,{variant:"soft",color:"secondary",children:"Go back"}),e.jsx(d,{children:"Create app"})]})]})};var h,f,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var k,y,j;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props} color="danger">
      <IconDanger />
      <Heading>No access</Heading>
      <Text>You do not have the required permissions to access this page.</Text>
      <Button>Go back</Button>
    </IllustratedMessage>
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,C,I;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(I=(C=t.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var b,B,M;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(M=(B=n.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var N,D,G;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(G=(D=c.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const Z=["Default","Danger","Dark","Light","WithActionGroup"],de=Object.freeze(Object.defineProperty({__proto__:null,Danger:o,Dark:t,Default:a,Light:n,WithActionGroup:c,__namedExportsOrder:Z,default:X},Symbol.toStringTag,{value:"Module"}));export{de as D,i as I,X as m};
