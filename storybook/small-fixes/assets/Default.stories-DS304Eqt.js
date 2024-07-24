import{T as t}from"./Text-DqQM6TqR.js";import{R as e}from"./index-Cs7sjTYM.js";import{S as b}from"./Section-C2Z6e2-1.js";import{s as B,a as R}from"./storyBackgrounds-BHxp8d-8.js";import"./PropsContextProvider-58HgA8rU.js";import"./index-C8LjR2Bd.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-CmFvo3FE.js";import"./index-BMdlDBjA.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Bu-3W4UG.js";import"./utils-Ca6JWPXc.js";import"./Activity-CPnWONG0.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-BEvGW34q.js";import"./Header-Dl17m4NE.js";const Q={title:"Content/Text",component:t,argTypes:{elementType:{control:"inline-radio",options:["span","p"],defaultValue:"span"}},args:{elementType:"span"},render:r=>e.createElement(b,null,e.createElement(t,{...r},"Text is an unstyled component that can be used to display texts. By default it renders a span."))},o={},a={render:r=>e.createElement(t,{...r},"Text without styling parent components")},n={render:r=>e.createElement(t,{...r},"Text with unordered list:",e.createElement("ul",null,e.createElement("li",null,"Item"),e.createElement("li",null,"Item"),e.createElement("li",null,"Item")))},s={render:r=>e.createElement(t,{...r},"Text with ordered list:",e.createElement("ol",null,e.createElement("li",null,"Item"),e.createElement("li",null,"Item"),e.createElement("li",null,"Item")))},l={args:{color:"dark"},parameters:{backgrounds:B}},m={args:{color:"light"},parameters:{backgrounds:R}};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <Text {...props}>Text without styling parent components</Text>
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var T,x,k;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <Text {...props}>
      Text with unordered list:
      <ul>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ul>
    </Text>
}`,...(k=(x=n.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var E,h,y;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <Text {...props}>
      Text with ordered list:
      <ol>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ol>
    </Text>
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var I,f,w;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var L,S,D;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(D=(S=m.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const W=["Default","RawText","UnorderedList","OrderedList","Dark","Light"];export{l as Dark,o as Default,m as Light,s as OrderedList,a as RawText,n as UnorderedList,W as __namedExportsOrder,Q as default};
