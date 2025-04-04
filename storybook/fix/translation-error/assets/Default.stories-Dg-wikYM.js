import{P as m}from"./ProgressBar-CEM5EbQm.js";import{R as e}from"./index-B-o1Wr-g.js";import{L as i}from"./Label-YqoRtSRe.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-D9stqqmU.js";import"./LocalizedStringFormatter-CmF9aEqk.js";import"./index-ynQ6n1pc.js";import"./PropsContextProvider-BHq6Fnml.js";import"./ProgressBar--OmPGqUT.js";import"./utils-7gTBvjqH.js";import"./index-DolzVqEf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Label-CqgmsInd.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./flowComponent-Bz6Io0hO.js";const F={title:"Status/ProgressBar",component:m,args:{showMaxValue:!1,size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["s","m"]}},render:r=>e.createElement(m,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...r},e.createElement(i,null,"Storage"))},a={},s={render:r=>e.createElement(m,{value:50,...r},e.createElement(i,null,"Storage"))},t={args:{showMaxValue:!0},render:r=>e.createElement(m,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"decimal"},...r},e.createElement(i,null,"Storage"))},o={args:{showMaxValue:!0}},n={args:{size:"s"}};var l,p,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,g,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <ProgressBar value={50} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var S,V,f;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  },
  render: props => <ProgressBar value={500} maxValue={1000} minValue={0} formatOptions={{
    style: "decimal"
  }} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(f=(V=t.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};var x,h,P;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  }
}`,...(P=(h=o.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var E,M,b;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...(b=(M=n.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};const G=["Default","WithPercentage","WithoutUnit","WithMaxValue","Small"];export{a as Default,n as Small,o as WithMaxValue,s as WithPercentage,t as WithoutUnit,G as __namedExportsOrder,F as default};
