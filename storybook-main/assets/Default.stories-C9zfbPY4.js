import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as a}from"./ProgressBar-BUE4Asnn.js";import"./index-BdpSHsi2.js";import{L as s}from"./Label-DAIRrmd7.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CVW1YwIB.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-n_trZrf_.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./ProgressBar-Dwuqfbjf.js";import"./utils-q_Aud5Js.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DtWExE0a.js";import"./context-C-2WHVw-.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Bs3jJydz.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-Cby2GtUy.js";import"./Text-BTmGUk25.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-DtGJyZhh.js";import"./index-BAMY2Nnw.js";const be={title:"Status/ProgressBar",component:a,args:{showMaxValue:!1,size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["s","m","l"]}},render:r=>e.jsx(a,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...r,children:e.jsx(s,{children:"Storage"})})},t={},n={render:r=>e.jsx(a,{value:50,...r,children:e.jsx(s,{children:"Storage"})})},o={args:{showMaxValue:!0},render:r=>e.jsx(a,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"decimal"},...r,children:e.jsx(s,{children:"Storage"})})},i={args:{showMaxValue:!0}},l={args:{size:"s"}},u={args:{segments:[{title:"Item 1",value:20},{title:"Item 2",value:30}],size:"l"},render:r=>e.jsx(a,{...r,children:e.jsx(s,{children:"Storage"})})},m={args:{formatOptions:{style:"unit",unit:"gigabyte"},showMaxValue:!0,maxValue:60,segments:[{title:"Backups",value:20},{title:"Databases",value:30}],size:"l"},render:r=>e.jsx(a,{...r,children:e.jsx(s,{children:"Storage"})})},p={args:{formatOptions:{style:"unit",unit:"gigabyte"},showMaxValue:!0,maxValue:60,segments:[{title:"Backups",value:20},{title:"Databases",value:30}],size:"s",showLegend:!1},render:r=>e.jsx(a,{...r,children:e.jsx(s,{children:"Storage"})})},c={args:{showMaxValue:!0},render:r=>e.jsx(a,{value:2e3,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...r,children:e.jsx(s,{children:"Storage"})})},g={args:{showMaxValue:!0},render:r=>e.jsx(a,{value:500,maxValue:1e3,minValue:0,valueLabel:"500 / 1000 GB",...r,children:e.jsx(s,{children:"Storage"})})};var d,h,x;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var V,S,b;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <ProgressBar value={50} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var v,L,B;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  },
  render: props => <ProgressBar value={500} maxValue={1000} minValue={0} formatOptions={{
    style: "decimal"
  }} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(B=(L=o.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var f,P,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  }
}`,...(j=(P=i.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var W,y,M;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...(M=(y=l.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var w,z,O;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    segments: [{
      title: "Item 1",
      value: 20
    }, {
      title: "Item 2",
      value: 30
    }],
    size: "l"
  },
  render: props => <ProgressBar {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(O=(z=u.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var D,k,A;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    formatOptions: {
      style: "unit",
      unit: "gigabyte"
    },
    showMaxValue: true,
    maxValue: 60,
    segments: [{
      title: "Backups",
      value: 20
    }, {
      title: "Databases",
      value: 30
    }],
    size: "l"
  },
  render: props => <ProgressBar {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(A=(k=m.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var I,U,$;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    formatOptions: {
      style: "unit",
      unit: "gigabyte"
    },
    showMaxValue: true,
    maxValue: 60,
    segments: [{
      title: "Backups",
      value: 20
    }, {
      title: "Databases",
      value: 30
    }],
    size: "s",
    showLegend: false
  },
  render: props => <ProgressBar {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...($=(U=p.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var T,E,G;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  },
  render: props => <ProgressBar value={2000} maxValue={1000} minValue={0} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(G=(E=c.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var H,_,R;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  },
  render: props => {
    const value = 500;
    const maxValue = 1000;
    return <ProgressBar value={value} maxValue={maxValue} minValue={0} valueLabel={\`\${value} / \${maxValue} GB\`} {...props}>
        <Label>Storage</Label>
      </ProgressBar>;
  }
}`,...(R=(_=g.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};const ve=["Default","WithPercentage","WithoutUnit","WithMaxValue","Small","WithSegments","WithSegmentsAndUnit","WithSegmentsAndWithoutLegend","WithValueHigherThanMaxValue","WithValueLabel"];export{t as Default,l as Small,i as WithMaxValue,n as WithPercentage,u as WithSegments,m as WithSegmentsAndUnit,p as WithSegmentsAndWithoutLegend,c as WithValueHigherThanMaxValue,g as WithValueLabel,o as WithoutUnit,ve as __namedExportsOrder,be as default};
