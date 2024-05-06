import{H as t}from"./Heading-DI5I2A91.js";import{R as r}from"./index-BwDkhjyp.js";import"./IconApp-JyWhxCMW.js";import{b as f}from"./IconWarning-C_kJLkLV.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B9DLSnGg.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./RSPContexts-Bc9pl35m.js";import"./utils-CFgm1FN7.js";const S={title:"Content/Heading",component:t,argTypes:{level:{control:"inline-radio",options:[1,2,3,4,5,6]},levelVisual:{control:"inline-radio",options:[1,2,3,4,5,6]}},args:{level:2},render:e=>r.createElement(t,{...e},"I am a H",e.level," Heading")},o={},a={render:e=>r.createElement(t,{...e},r.createElement(f,null),"Personal Information")},n={render:e=>r.createElement(t,{level:4,levelVisual:1,...e},r.createElement(f,null),"Personal Information")};var s,l,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      Personal Information
    </Heading>
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <Heading level={4} levelVisual={1} {...props}>
      <IconMember />
      Personal Information
    </Heading>
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const x=["Default","WithIcon","WithLevelVisual"];export{o as Default,a as WithIcon,n as WithLevelVisual,x as __namedExportsOrder,S as default};
