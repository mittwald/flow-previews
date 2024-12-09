import{H as i}from"./Heading-DHKNZywU.js";import{R as e}from"./index-B-o1Wr-g.js";import"./IconApp-Ch-QazpE.js";import{d as z}from"./IconWarning-BZUIPdJF.js";import{a as S,s as y}from"./storyBackgrounds-GFSAi-dI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./flowComponent-DtNydOjY.js";import"./index-DolzVqEf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Heading--STTcIhS.js";import"./RSPContexts-BT50PPhj.js";import"./utils-CCebJm36.js";const w={title:"Content/Heading",component:i,argTypes:{level:{control:"inline-radio",options:[1,2,3,4,5,6]},size:{control:"inline-radio",options:["xs","s","m","l","xl","xxl"]},color:{control:"inline-radio",options:["primary","dark","light"]}},args:{level:2},render:r=>e.createElement(i,{...r},"I am a H",r.level," Heading")},o={},a={render:r=>e.createElement(i,{...r},e.createElement(z,null),"Personal Information")},n={args:{level:1,size:"xxl"},render:r=>e.createElement(i,{level:1,size:"xxl",...r},e.createElement(z,null),"Personal Information")},s={args:{color:"dark"},parameters:{backgrounds:S}},t={args:{color:"light"},parameters:{backgrounds:y}};var c,m,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,d,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      Personal Information
    </Heading>
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,k,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    level: 1,
    size: "xxl"
  },
  render: props => <Heading level={1} size="xxl" {...props}>
      <IconMember />
      Personal Information
    </Heading>
}`,...(x=(k=n.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var f,h,I;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(I=(h=s.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var H,b,v;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const A=["Default","WithIcon","WithCustomSize","Dark","Light"];export{s as Dark,o as Default,t as Light,n as WithCustomSize,a as WithIcon,A as __namedExportsOrder,w as default};
