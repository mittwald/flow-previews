import{H as c}from"./Heading-BckMXqid.js";import{R as e}from"./index-uCp2LrAq.js";import"./IconApp-DnBcJRcL.js";import{b as D}from"./IconWarning-D-8E7MU6.js";import{s as E,a as L}from"./storyBackgrounds-BHxp8d-8.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CYso3G7U.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./RSPContexts-CJnKmcd7.js";import"./utils-DZgOXw50.js";const j={title:"Content/Heading",component:c,argTypes:{level:{control:"inline-radio",options:[1,2,3,4,5,6]},levelVisual:{control:"inline-radio",options:[1,2,3,4,5,6]},color:{control:"inline-radio",options:["primary","dark","light"]}},args:{level:2},render:r=>e.createElement(c,{...r},"I am a H",r.level," Heading")},o={},a={render:r=>e.createElement(c,{...r},e.createElement(D,null),"Personal Information")},n={render:r=>e.createElement(c,{level:4,levelVisual:1,...r},e.createElement(D,null),"Personal Information")},s={args:{color:"dark"},parameters:{backgrounds:E}},t={args:{color:"light"},parameters:{backgrounds:L}};var i,l,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,d,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      Personal Information
    </Heading>
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,k,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <Heading level={4} levelVisual={1} {...props}>
      <IconMember />
      Personal Information
    </Heading>
}`,...(f=(k=n.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var h,v,I;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(I=(v=s.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var H,b,y;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const q=["Default","WithIcon","WithLevelVisual","Dark","Light"];export{s as Dark,o as Default,t as Light,a as WithIcon,n as WithLevelVisual,q as __namedExportsOrder,j as default};
