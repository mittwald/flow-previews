import{j as r}from"./iframe-D6IogGzN.js";import{S as m}from"./Slider-oSo3eDHn.js";import{L as n}from"./Label-CevfIrA7.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-0X1Pg4gT.js";import"./index-dqlI56sj.js";import"./clsx-B-dksMZM.js";import"./index-D5OmXbhN.js";import"./Button-4bsuig8G.js";import"./IconWarning-CDNOZZaQ.js";import"./remote-ByQLcsaA.js";import"./Text-DVEzKGc_.js";import"./browser-JB3DJ3rF.js";import"./EmulatedBoldText-DAiBlkMb.js";import"./Text-CSz0hkcR.js";import"./utils-DGVDGTqS.js";import"./LoadingSpinner-BmFbjzPt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-HdnRlfeB.js";import"./context-D_0iO3JE.js";import"./Button-BjufwbKz.js";import"./ProgressBar-DqM5emHd.js";import"./Label-DV4nkt-Z.js";import"./Hidden-Btv7BawI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--9PNzusi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-OPUq1uX5.js";import"./useFocus-JSiA5HpL.js";import"./useFocusRing-DeVFSene.js";import"./useFocusable-CqeTIxtx.js";import"./useFieldComponent-DWOteHG6.js";import"./useControlledState-DoPmGGFu.js";import"./useFormReset-zYUel0fa.js";import"./VisuallyHidden-CtfXU_Om.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Slider {...props} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...s.parameters?.docs?.source}}};const N=["Default","ReadOnly","WithUnit","Disabled","WithInitialMarker"];export{t as Default,i as Disabled,o as ReadOnly,s as WithInitialMarker,a as WithUnit,N as __namedExportsOrder,K as default};
