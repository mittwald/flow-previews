import{j as e}from"./iframe-DdrpCK7O.js";import{P as a}from"./ProgressBar-Ca1kswtm.js";import{L as s}from"./Label-icuqrMlJ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B-M9Ok3D.js";import"./mergeRefs-Bbw3w7Zz.js";import"./index-7qYBiH1_.js";import"./ProgressBar-DX53PXke.js";import"./utils-jbl8fYpp.js";import"./Label-q6ExZamY.js";import"./Hidden-YoIeoCE-.js";import"./filterDOMProps-CrrfCvhk.js";import"./useLabel-BGrVe235.js";import"./context-BHbmanCt.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DTJzl0HQ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-BEqzYrur.js";import"./Text-CaSL42bb.js";import"./browser-CJKA82in.js";import"./EmulatedBoldText-BlAgkMNP.js";import"./Text-Diya8EQq.js";const T={title:"Status/ProgressBar",component:a,args:{showMaxValue:!1,size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["s","m","l"]}},render:r=>e.jsx(a,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...r,children:e.jsx(s,{children:"Storage"})})},t={},n={render:r=>e.jsx(a,{value:50,...r,children:e.jsx(s,{children:"Storage"})})},o={args:{showMaxValue:!0},render:r=>e.jsx(a,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"decimal"},...r,children:e.jsx(s,{children:"Storage"})})},l={args:{showMaxValue:!0}},i={args:{size:"s"}},u={args:{segments:[{title:"Item 1",value:20},{title:"Item 2",value:30}],size:"l"},render:r=>e.jsx(a,{...r,children:e.jsx(s,{children:"Storage"})})},m={args:{formatOptions:{style:"unit",unit:"gigabyte"},showMaxValue:!0,maxValue:60,segments:[{title:"Backups",value:20},{title:"Databases",value:30}],size:"l"},render:r=>e.jsx(a,{...r,children:e.jsx(s,{children:"Storage"})})},p={args:{formatOptions:{style:"unit",unit:"gigabyte"},showMaxValue:!0,maxValue:60,segments:[{title:"Backups",value:20},{title:"Databases",value:30}],size:"s",showLegend:!1},render:r=>e.jsx(a,{...r,children:e.jsx(s,{children:"Storage"})})},c={args:{showMaxValue:!0},render:r=>e.jsx(a,{value:2e3,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...r,children:e.jsx(s,{children:"Storage"})})},g={args:{showMaxValue:!0},render:r=>e.jsx(a,{value:500,maxValue:1e3,minValue:0,valueLabel:"500 / 1000 GB",...r,children:e.jsx(s,{children:"Storage"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <ProgressBar value={50} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  },
  render: props => <ProgressBar value={500} maxValue={1000} minValue={0} formatOptions={{
    style: "decimal"
  }} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  },
  render: props => <ProgressBar value={2000} maxValue={1000} minValue={0} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const E=["Default","WithPercentage","WithoutUnit","WithMaxValue","Small","WithSegments","WithSegmentsAndUnit","WithSegmentsAndWithoutLegend","WithValueHigherThanMaxValue","WithValueLabel"];export{t as Default,i as Small,l as WithMaxValue,n as WithPercentage,u as WithSegments,m as WithSegmentsAndUnit,p as WithSegmentsAndWithoutLegend,c as WithValueHigherThanMaxValue,g as WithValueLabel,o as WithoutUnit,E as __namedExportsOrder,T as default};
