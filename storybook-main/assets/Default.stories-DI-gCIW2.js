import{R as e}from"./index-B-o1Wr-g.js";import{c as O}from"./clsx-B-dksMZM.js";import{P as C}from"./PropsContextProvider-DWb7RnwM.js";import{A as o}from"./Avatar-BpKRUxEQ.js";import{I as m}from"./Initials-CInUMsxF.js";import{T as i}from"./Text-DvGTF8ok.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-ynQ6n1pc.js";import"./react-children-utilities-D14ImiYi.js";import"./flowComponent-B1Fj-awS.js";import"./index-DolzVqEf.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./Text-CByKVUtS.js";import"./utils-CCebJm36.js";const P="flow--align",_="flow--align--text",w="flow--align--avatar",c={align:P,text:_,avatar:w},t=n=>{const{children:h,className:I}=n,N=O(c.align,I),S={Text:{className:c.text},Avatar:{className:c.avatar,size:"m"}};return e.createElement(C,{props:S},e.createElement("div",{className:N},h))};t.__docgenInfo={description:"",methods:[],displayName:"Align",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const Q={title:"Structure/Align/Avatar + Text",component:t,render:n=>e.createElement(t,{...n},e.createElement(o,null,e.createElement(m,null,"Max Mustermann")),e.createElement(i,null,e.createElement("b",null,"Max Mustermann"),"Organisationsinhaber"))},r={},a={render:n=>e.createElement(t,{...n},e.createElement(o,null,e.createElement(m,null,"Max Mustermann")),e.createElement(i,null,e.createElement("b",null,"Max Mustermann"),"Organisationsinhaber",e.createElement("br",null),"max@mustermann.de",e.createElement("br",null),"0163/123456789"))},s={render:n=>e.createElement(t,{...n},e.createElement(o,null,e.createElement(m,null,"Max Mustermann")),e.createElement(i,null,e.createElement("b",null,"Max Mustermann")))},l={render:n=>e.createElement(t,{...n},e.createElement(o,null,e.createElement(m,null,"Max Mustermann")),e.createElement(i,null,"Max Mustermann",e.createElement("br",null),"Organisationsinhaber"))};var p,u,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var x,M,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(M=a.parameters)==null?void 0:M.docs)==null?void 0:g.source}}};var E,A,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <Align {...props}>
      <Avatar>
        <Initials>Max Mustermann</Initials>
      </Avatar>
      <Text>
        <b>Max Mustermann</b>
      </Text>
    </Align>
}`,...(b=(A=s.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var v,f,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(f=l.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const U=["Default","Multiline","Singleline","WithoutBoldText"];export{r as Default,a as Multiline,s as Singleline,l as WithoutBoldText,U as __namedExportsOrder,Q as default};
