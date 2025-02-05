import{j as r}from"./jsx-runtime-CLpGMVip.js";import{P as i}from"./ProgressBar-ZUiIL6OK.js";import"./index-Cf9XvIV_.js";import{L as m}from"./Label-DX3Ya1J-.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./ProgressBar-ZJQghT0g.js";import"./utils-DjOXyFua.js";import"./Label-B3UarT55.js";import"./Hidden-Cfl4ctnK.js";import"./index-CFEY-m6m.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ByctJgwf.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ByHVstPj.js";import"./NumberFormatter-DT0cDaax.js";import"./flowComponent-BEdvHTPM.js";const G={title:"Status/ProgressBar",component:i,args:{showMaxValue:!1,size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["s","m"]}},render:e=>r.jsx(i,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(m,{children:"Storage"})})},a={},s={render:e=>r.jsx(i,{value:50,...e,children:r.jsx(m,{children:"Storage"})})},o={args:{showMaxValue:!0},render:e=>r.jsx(i,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"decimal"},...e,children:r.jsx(m,{children:"Storage"})})},t={args:{showMaxValue:!0}},n={args:{size:"s"}};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,d,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(M=n.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};const H=["Default","WithPercentage","WithoutUnit","WithMaxValue","Small"];export{a as Default,n as Small,t as WithMaxValue,s as WithPercentage,o as WithoutUnit,H as __namedExportsOrder,G as default};
