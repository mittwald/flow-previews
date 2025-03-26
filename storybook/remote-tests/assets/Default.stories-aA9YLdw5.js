import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as i}from"./ProgressBar-By4gQSnh.js";import"./index-CXcpQZ5J.js";import{L as m}from"./Label-BlFJqu_U.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxhHHjOl.js";import"./index-_FZDHFZo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DJQWtO6Q.js";import"./index-sbGzhXso.js";import"./useLocalizedStringFormatter-BQtswni5.js";import"./ProgressBar-8nsGDrqI.js";import"./utils-D_n-6U4k.js";import"./Label-D7zTyyav.js";import"./Hidden-DtYLaSTT.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BoT2JKOr.js";import"./NumberFormatter-DNR9MAW-.js";const F={title:"Status/ProgressBar",component:i,args:{showMaxValue:!1,size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["s","m"]}},render:e=>r.jsx(i,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(m,{children:"Storage"})})},a={},s={render:e=>r.jsx(i,{value:50,...e,children:r.jsx(m,{children:"Storage"})})},o={args:{showMaxValue:!0},render:e=>r.jsx(i,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"decimal"},...e,children:r.jsx(m,{children:"Storage"})})},t={args:{showMaxValue:!0}},n={args:{size:"s"}};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,d,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <ProgressBar value={50} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var x,h,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  },
  render: props => <ProgressBar value={500} maxValue={1000} minValue={0} formatOptions={{
    style: "decimal"
  }} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var V,f,P;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  }
}`,...(P=(f=t.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var j,M,b;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...(b=(M=n.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};const G=["Default","WithPercentage","WithoutUnit","WithMaxValue","Small"];export{a as Default,n as Small,t as WithMaxValue,s as WithPercentage,o as WithoutUnit,G as __namedExportsOrder,F as default};
