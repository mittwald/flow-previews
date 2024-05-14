import{H as c}from"./Heading-Wzfd04dr.js";import{R as r}from"./index-BwDkhjyp.js";import"./IconApp-D-kcT16p.js";import{b as h}from"./IconWarning-Cw7drCLR.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B3-LTTWn.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./RSPContexts-Bc9pl35m.js";import"./utils-D7InqjV7.js";const L={title:"Content/Heading",component:c,argTypes:{level:{control:"inline-radio",options:[1,2,3,4,5,6]},levelVisual:{control:"inline-radio",options:[1,2,3,4,5,6]}},args:{level:2},render:e=>r.createElement(c,{...e},"I am a H",e.level," Heading")},a={},n={render:e=>r.createElement(c,{...e},r.createElement(h,null),"Personal Information")},o={render:e=>r.createElement(c,{level:4,levelVisual:1,...e},r.createElement(h,null),"Personal Information")},t={args:{color:"static-black"},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#E0EBFF"}]}}},s={args:{color:"static-white"},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#002A7B"}]}}};var l,i,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,p,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      Personal Information
    </Heading>
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,v,k;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <Heading level={4} levelVisual={1} {...props}>
      <IconMember />
      Personal Information
    </Heading>
}`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var f,b,E;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: "static-black"
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{
        name: "dark",
        value: "#E0EBFF"
      }]
    }
  }
}`,...(E=(b=t.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var I,H,S;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "static-white"
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{
        name: "dark",
        value: "#002A7B"
      }]
    }
  }
}`,...(S=(H=s.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};const R=["Default","WithIcon","WithLevelVisual","StaticBlack","StaticWhite"];export{a as Default,t as StaticBlack,s as StaticWhite,n as WithIcon,o as WithLevelVisual,R as __namedExportsOrder,L as default};
