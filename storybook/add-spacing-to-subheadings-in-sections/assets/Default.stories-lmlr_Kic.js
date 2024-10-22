import{T as t}from"./Text-DbnY-2dT.js";import{R as e}from"./index-Cs7sjTYM.js";import{S as U}from"./Section-BVuzARYN.js";import{a as _,s as C}from"./storyBackgrounds-GFSAi-dI.js";import"./PropsContextProvider-DXo7lD_U.js";import"./index-j_f0pOtZ.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-Bg40pdZw.js";import"./index-Cf-03bMR.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Bnjm0IRl.js";import"./utils-Cd8r7pc9.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Hidden-C2kgQquV.js";import"./Header-3zDVqz72.js";const $={title:"Content/Text",component:t,argTypes:{elementType:{control:"inline-radio",options:["span","p"],defaultValue:"span"}},args:{elementType:"span"},render:r=>e.createElement(U,null,e.createElement(t,{...r},"Text is an unstyled component that can be used to display texts. By default it renders a span."))},a={},o={render:r=>e.createElement(t,{...r},"Text without styling parent components")},s={render:r=>e.createElement(t,{...r},"Text with unordered list:",e.createElement("ul",null,e.createElement("li",null,"Item"),e.createElement("li",null,"Item"),e.createElement("li",null,"Item")))},n={render:r=>e.createElement(t,{...r},"Text with ordered list:",e.createElement("ol",null,e.createElement("li",null,"Item"),e.createElement("li",null,"Item"),e.createElement("li",null,"Item")))},l={render:r=>e.createElement(t,{...r},e.createElement("small",null,"Small Text"))},m={args:{color:"dark"},parameters:{backgrounds:_}},c={args:{color:"light"},parameters:{backgrounds:C}};var p,i,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,g,T;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <Text {...props}>Text without styling parent components</Text>
}`,...(T=(g=o.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var x,E,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <Text {...props}>
      Text with unordered list:
      <ul>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ul>
    </Text>
}`,...(k=(E=s.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var h,S,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => <Text {...props}>
      Text with ordered list:
      <ol>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ol>
    </Text>
}`,...(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var I,f,w;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <Text {...props}>
      <small>Small Text</small>
    </Text>
}`,...(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var L,D,b;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(b=(D=m.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var B,R,O;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(O=(R=c.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};const ee=["Default","RawText","UnorderedList","OrderedList","SmallText","Dark","Light"];export{m as Dark,a as Default,c as Light,n as OrderedList,o as RawText,l as SmallText,s as UnorderedList,ee as __namedExportsOrder,$ as default};
