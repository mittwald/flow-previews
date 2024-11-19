import{R as e}from"./index-Cs7sjTYM.js";import{c as O}from"./clsx-B-dksMZM.js";import{P as C}from"./PropsContextProvider-CRusYdr1.js";import{A as o}from"./Avatar-Da21hVDL.js";import{I as m}from"./Initials-C3LXpQ4j.js";import{T as i}from"./Text-nt2VY5KZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-j_f0pOtZ.js";import"./react-children-utilities-CdZndyK3.js";import"./flowComponent-C7dqiiMm.js";import"./index-Cf-03bMR.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Bnjm0IRl.js";import"./utils-Cd8r7pc9.js";const P="flow--align",W="flow--align--text",_="flow--align--avatar",c={align:P,text:W,avatar:_},t=n=>{const{children:T,className:I}=n,N=O(c.align,I),S={Text:{className:c.text},Avatar:{className:c.avatar,size:"m"}};return e.createElement(C,{props:S},e.createElement("div",{className:N},T))};t.__docgenInfo={description:"",methods:[],displayName:"Align",composes:["PropsWithChildren","PropsWithClassName"]};const Q={title:"Structure/Align/Avatar + Text",component:t,render:n=>e.createElement(t,{...n},e.createElement(o,null,e.createElement(m,null,"Max Mustermann")),e.createElement(i,null,e.createElement("b",null,"Max Mustermann"),"Organisationsinhaber"))},a={},r={render:n=>e.createElement(t,{...n},e.createElement(o,null,e.createElement(m,null,"Max Mustermann")),e.createElement(i,null,e.createElement("b",null,"Max Mustermann"),"Organisationsinhaber",e.createElement("br",null),"max@mustermann.de",e.createElement("br",null),"0163/123456789"))},s={render:n=>e.createElement(t,{...n},e.createElement(o,null,e.createElement(m,null,"Max Mustermann")),e.createElement(i,null,e.createElement("b",null,"Max Mustermann")))},l={render:n=>e.createElement(t,{...n},e.createElement(o,null,e.createElement(m,null,"Max Mustermann")),e.createElement(i,null,"Max Mustermann",e.createElement("br",null),"Organisationsinhaber"))};var p,u,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var d,M,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <Align {...props}>
      <Avatar>
        <Initials>Max Mustermann</Initials>
      </Avatar>
      <Text>
        <b>Max Mustermann</b>
        Organisationsinhaber
        <br />
        max@mustermann.de
        <br />
        0163/123456789
      </Text>
    </Align>
}`,...(g=(M=r.parameters)==null?void 0:M.docs)==null?void 0:g.source}}};var E,A,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <Align {...props}>
      <Avatar>
        <Initials>Max Mustermann</Initials>
      </Avatar>
      <Text>
        <b>Max Mustermann</b>
      </Text>
    </Align>
}`,...(b=(A=s.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var v,f,h;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => <Align {...props}>
      <Avatar>
        <Initials>Max Mustermann</Initials>
      </Avatar>
      <Text>
        Max Mustermann
        <br />
        Organisationsinhaber
      </Text>
    </Align>
}`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const U=["Default","Multiline","Singleline","WithoutBoldText"];export{a as Default,r as Multiline,s as Singleline,l as WithoutBoldText,U as __namedExportsOrder,Q as default};
