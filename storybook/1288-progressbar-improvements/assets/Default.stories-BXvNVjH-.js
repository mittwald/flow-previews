import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as s}from"./ProgressBar-CTFotANl.js";import"./index-CtQTiInQ.js";import{L as a}from"./Label-C3GsNgl3.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CcavWj25.js";import"./mergeProps-BKLeaOo7.js";import"./index-DTllGi7h.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cdp0xV4M.js";import"./ProgressBar-DPPT7aTs.js";import"./utils-D0CTRpvX.js";import"./Label-BZrcB42p.js";import"./Hidden-Dd0lSYNZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BhTOAlCQ.js";import"./useLocalizedStringFormatter-DpLhROVm.js";import"./NumberFormatter-DNR9MAW-.js";import"./Legend-BMHzhgUH.js";import"./Text-VF_oP7nB.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./Text-oMr6ueMZ.js";const oe={title:"Status/ProgressBar",component:s,args:{showMaxValue:!1,size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["s","m","l"]}},render:r=>e.jsx(s,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...r,children:e.jsx(a,{children:"Storage"})})},t={},o={render:r=>e.jsx(s,{value:50,...r,children:e.jsx(a,{children:"Storage"})})},n={args:{showMaxValue:!0},render:r=>e.jsx(s,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"decimal"},...r,children:e.jsx(a,{children:"Storage"})})},i={args:{showMaxValue:!0}},l={args:{size:"s"}},m={args:{segments:[{title:"Item 1",value:20,color:"violet"},{title:"Item 2",value:30,color:"sea-green"}],size:"l"},render:r=>e.jsx(s,{...r,children:e.jsx(a,{children:"Storage"})})},u={args:{formatOptions:{style:"unit",unit:"gigabyte"},showMaxValue:!0,maxValue:60,segments:[{title:"Backups",value:20,color:"violet"},{title:"Databases",value:30,color:"sea-green"}],size:"l"},render:r=>e.jsx(s,{...r,children:e.jsx(a,{children:"Storage"})})},c={args:{formatOptions:{style:"unit",unit:"gigabyte"},showMaxValue:!0,maxValue:60,segments:[{title:"Backups",value:20,color:"violet"},{title:"Databases",value:30,color:"sea-green"}],size:"s",showLegend:!1},render:r=>e.jsx(s,{...r,children:e.jsx(a,{children:"Storage"})})};var p,g,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(g=t.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var h,x,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => <ProgressBar value={50} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var v,V,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  },
  render: props => <ProgressBar value={500} maxValue={1000} minValue={0} formatOptions={{
    style: "decimal"
  }} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(b=(V=n.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var f,B,L;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  }
}`,...(L=(B=i.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var P,j,W;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...(W=(j=l.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var y,w,M;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    segments: [{
      title: "Item 1",
      value: 20,
      color: "violet"
    }, {
      title: "Item 2",
      value: 30,
      color: "sea-green"
    }],
    size: "l"
  },
  render: props => <ProgressBar {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(M=(w=m.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var z,O,D;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    formatOptions: {
      style: "unit",
      unit: "gigabyte"
    },
    showMaxValue: true,
    maxValue: 60,
    segments: [{
      title: "Backups",
      value: 20,
      color: "violet"
    }, {
      title: "Databases",
      value: 30,
      color: "sea-green"
    }],
    size: "l"
  },
  render: props => <ProgressBar {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(D=(O=u.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var k,A,I;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    formatOptions: {
      style: "unit",
      unit: "gigabyte"
    },
    showMaxValue: true,
    maxValue: 60,
    segments: [{
      title: "Backups",
      value: 20,
      color: "violet"
    }, {
      title: "Databases",
      value: 30,
      color: "sea-green"
    }],
    size: "s",
    showLegend: false
  },
  render: props => <ProgressBar {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const ne=["Default","WithPercentage","WithoutUnit","WithMaxValue","Small","WithSegments","WithSegmentsAndUnit","WithSegmentsAndWithoutLegend"];export{t as Default,l as Small,i as WithMaxValue,o as WithPercentage,m as WithSegments,u as WithSegmentsAndUnit,c as WithSegmentsAndWithoutLegend,n as WithoutUnit,ne as __namedExportsOrder,oe as default};
