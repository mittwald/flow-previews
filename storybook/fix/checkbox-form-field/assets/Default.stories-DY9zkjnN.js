import{P as m}from"./ProgressBar-CQgBGQSJ.js";import{R as e}from"./index-B-o1Wr-g.js";import{L as i}from"./Label-DMTVGheq.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bi8R7MU8.js";import"./index-ynQ6n1pc.js";import"./index-DolzVqEf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./ProgressBar-BQAJCbMD.js";import"./utils-7gTBvjqH.js";import"./Label-CqgmsInd.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";const A={title:"Status/ProgressBar",component:m,args:{showMaxValue:!1,size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["s","m"]}},render:r=>e.createElement(m,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...r},e.createElement(i,null,"Storage"))},a={},s={render:r=>e.createElement(m,{value:50,...r},e.createElement(i,null,"Storage"))},t={args:{showMaxValue:!0},render:r=>e.createElement(m,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"decimal"},...r},e.createElement(i,null,"Storage"))},o={args:{showMaxValue:!0}},n={args:{size:"s"}};var l,c,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,g,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(M=n.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};const C=["Default","WithPercentage","WithoutUnit","WithMaxValue","Small"];export{a as Default,n as Small,o as WithMaxValue,s as WithPercentage,t as WithoutUnit,C as __namedExportsOrder,A as default};
