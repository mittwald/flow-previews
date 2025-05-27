import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as s}from"./ProgressBar-DgcU4R7C.js";import"./index-CgfFrydU.js";import{L as a}from"./Label-7YZm-yDa.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DBqjDBJq.js";import"./mergeRefs-_uxeg_17.js";import"./index-sY8i7rw0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2KKL2uI.js";import"./ProgressBar-DuZjZRB2.js";import"./utils-DvYDvJ-W.js";import"./Label-XuXA-row.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DP9zv8XI.js";import"./useLocalizedStringFormatter-jDgQNJem.js";import"./NumberFormatter-DNR9MAW-.js";import"./Legend-B9AyvDZA.js";import"./Text-D7P1-Ebs.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./Text-1CJ30n_Q.js";const ne={title:"Status/ProgressBar",component:s,args:{showMaxValue:!1,size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["s","m","l"]}},render:r=>e.jsx(s,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...r,children:e.jsx(a,{children:"Storage"})})},t={},n={render:r=>e.jsx(s,{value:50,...r,children:e.jsx(a,{children:"Storage"})})},o={args:{showMaxValue:!0},render:r=>e.jsx(s,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"decimal"},...r,children:e.jsx(a,{children:"Storage"})})},i={args:{showMaxValue:!0}},l={args:{size:"s"}},m={args:{segments:[{title:"Item 1",value:20},{title:"Item 2",value:30}],size:"l"},render:r=>e.jsx(s,{...r,children:e.jsx(a,{children:"Storage"})})},u={args:{formatOptions:{style:"unit",unit:"gigabyte"},showMaxValue:!0,maxValue:60,segments:[{title:"Backups",value:20},{title:"Databases",value:30}],size:"l"},render:r=>e.jsx(s,{...r,children:e.jsx(a,{children:"Storage"})})},p={args:{formatOptions:{style:"unit",unit:"gigabyte"},showMaxValue:!0,maxValue:60,segments:[{title:"Backups",value:20},{title:"Databases",value:30}],size:"s",showLegend:!1},render:r=>e.jsx(s,{...r,children:e.jsx(a,{children:"Storage"})})};var c,g,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(g=t.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var h,x,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => <ProgressBar value={50} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var V,b,f;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  },
  render: props => <ProgressBar value={500} maxValue={1000} minValue={0} formatOptions={{
    style: "decimal"
  }} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,B,L;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(D=(O=u.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var k,A,I;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(A=p.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const oe=["Default","WithPercentage","WithoutUnit","WithMaxValue","Small","WithSegments","WithSegmentsAndUnit","WithSegmentsAndWithoutLegend"];export{t as Default,l as Small,i as WithMaxValue,n as WithPercentage,m as WithSegments,u as WithSegmentsAndUnit,p as WithSegmentsAndWithoutLegend,o as WithoutUnit,oe as __namedExportsOrder,ne as default};
