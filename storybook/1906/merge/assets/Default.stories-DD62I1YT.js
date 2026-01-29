import{j as r}from"./iframe-DBKYLzDC.js";import{S as t}from"./Slider-BLN_1e81.js";import{L as p}from"./Label-Dsk_CpOI.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-B-1S5Ra8.js";import"./index-CYdVJgGQ.js";import"./clsx-B-dksMZM.js";import"./index-Dr37f313.js";import"./Button-BFOZVdd1.js";import"./IconWarning-BvGiLcXk.js";import"./remote-CY71mNcv.js";import"./Text-gSr4j5A3.js";import"./browser-DhKn1UU2.js";import"./EmulatedBoldText-BKkyEwwz.js";import"./Text-D7rD6BG6.js";import"./utils-BUG9eo0Q.js";import"./LoadingSpinner-CHsn4uBv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DY0sD44g.js";import"./context-DJBj5fN2.js";import"./Button-Cx-eUYHB.js";import"./ProgressBar-PjCJ3Rn2.js";import"./Label-B1DR540-.js";import"./Hidden-D_QywUVZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BGvoAl80.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BZ5qqTtf.js";import"./useFocus-TYDADYlM.js";import"./useFocusRing-BksqeYWz.js";import"./useFocusable-C-cRLAom.js";import"./useFieldComponent-DRt8IUS_.js";import"./useControlledState-CAANpQPW.js";import"./useFormReset-BczjDhHV.js";import"./VisuallyHidden-BW797Lc5.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:t,render:e=>r.jsx(t,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},a={},o={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={render:e=>r.jsx(t,{...e,unit:"×",minValue:1,maxValue:3,defaultValue:2.5,step:.5,children:r.jsx(p,{children:"Zoom"})})},n={args:{isDisabled:!0}},m={render:e=>r.jsx(t,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Slider {...props} unit="×" minValue={1} maxValue={3} defaultValue={2.5} step={0.5}>
      <Label>Zoom</Label>
    </Slider>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <Slider {...props} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...m.parameters?.docs?.source}}};const N=["Default","ReadOnly","WithFormatOptions","WithUnit","Disabled","WithInitialMarker"];export{a as Default,n as Disabled,o as ReadOnly,s as WithFormatOptions,m as WithInitialMarker,i as WithUnit,N as __namedExportsOrder,K as default};
