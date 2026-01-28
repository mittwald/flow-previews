import{j as e}from"./iframe-BbsOAs33.js";import{P as a}from"./ProgressBar-ClkoXn0u.js";import{L as s}from"./Label-DjvR0JzL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CnY6R6y_.js";import"./index-hsH483Jp.js";import"./index-32jMpZgo.js";import"./ProgressBar-GthXoJbW.js";import"./utils-d4vW56Wr.js";import"./Label-jCbgdnWR.js";import"./Hidden-C9ZrqSun.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BZoz0BQC.js";import"./context-DDHwgpv7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Cn9pdCjE.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-C6wEusHC.js";import"./Text-BYxWYBBY.js";import"./browser-6_CJeJSO.js";import"./EmulatedBoldText-Bt8Ku6uY.js";import"./Text-C1_k2kAR.js";import"./Label.module-CUYTf9Jc.js";const G={title:"Status/ProgressBar",component:a,args:{showMaxValue:!1,size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["s","m","l"]}},render:r=>e.jsx(a,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...r,children:e.jsx(s,{children:"Storage"})})},t={},n={render:r=>e.jsx(a,{value:50,...r,children:e.jsx(s,{children:"Storage"})})},o={args:{showMaxValue:!0},render:r=>e.jsx(a,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"decimal"},...r,children:e.jsx(s,{children:"Storage"})})},l={args:{showMaxValue:!0}},i={args:{size:"s"}},u={args:{segments:[{title:"Item 1",value:20},{title:"Item 2",value:30}],size:"l"},render:r=>e.jsx(a,{...r,children:e.jsx(s,{children:"Storage"})})},m={args:{formatOptions:{style:"unit",unit:"gigabyte"},showMaxValue:!0,maxValue:60,segments:[{title:"Backups",value:20},{title:"Databases",value:30}],size:"l"},render:r=>e.jsx(a,{...r,children:e.jsx(s,{children:"Storage"})})},p={args:{formatOptions:{style:"unit",unit:"gigabyte"},showMaxValue:!0,maxValue:60,segments:[{title:"Backups",value:20},{title:"Databases",value:30}],size:"s",showLegend:!1},render:r=>e.jsx(a,{...r,children:e.jsx(s,{children:"Storage"})})},c={args:{showMaxValue:!0},render:r=>e.jsx(a,{value:2e3,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...r,children:e.jsx(s,{children:"Storage"})})},g={args:{showMaxValue:!0},render:r=>e.jsx(a,{value:500,maxValue:1e3,minValue:0,valueLabel:"500 / 1000 GB",...r,children:e.jsx(s,{children:"Storage"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const H=["Default","WithPercentage","WithoutUnit","WithMaxValue","Small","WithSegments","WithSegmentsAndUnit","WithSegmentsAndWithoutLegend","WithValueHigherThanMaxValue","WithValueLabel"];export{t as Default,i as Small,l as WithMaxValue,n as WithPercentage,u as WithSegments,m as WithSegmentsAndUnit,p as WithSegmentsAndWithoutLegend,c as WithValueHigherThanMaxValue,g as WithValueLabel,o as WithoutUnit,H as __namedExportsOrder,G as default};
