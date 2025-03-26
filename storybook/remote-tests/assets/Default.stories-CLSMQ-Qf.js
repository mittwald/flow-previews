import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as i}from"./ProgressBar-B98iObPJ.js";import"./index-BKyFwriW.js";import{L as m}from"./Label-Ci6hAk30.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmJbWEDO.js";import"./index-C6uLyQP3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DQw2Bw4b.js";import"./index-C5hMr7Vs.js";import"./useLocalizedStringFormatter-B9DCAH-T.js";import"./ProgressBar-C4A5wsjg.js";import"./utils-DDUQIigj.js";import"./Label-i7acEou4.js";import"./Hidden-6cPdUftz.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DAPKuvGY.js";import"./NumberFormatter-DNR9MAW-.js";const F={title:"Status/ProgressBar",component:i,args:{showMaxValue:!1,size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["s","m"]}},render:e=>r.jsx(i,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(m,{children:"Storage"})})},a={},s={render:e=>r.jsx(i,{value:50,...e,children:r.jsx(m,{children:"Storage"})})},o={args:{showMaxValue:!0},render:e=>r.jsx(i,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"decimal"},...e,children:r.jsx(m,{children:"Storage"})})},t={args:{showMaxValue:!0}},n={args:{size:"s"}};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,d,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
