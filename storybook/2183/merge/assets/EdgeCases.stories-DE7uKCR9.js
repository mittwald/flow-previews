import{j as r}from"./iframe-BFixO3jI.js";import{R as l,a as p}from"./Radio-DpVwtop1.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BzswNiF1.js";import{T as u}from"./Text-ZinnvgDr.js";import{C as c}from"./Content-eXJ8CBXV.js";import{R as n}from"./RadioButton-yWqcuZiX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxS2pQtr.js";import"./index-BS5E-w2o.js";import"./index-Cr8VPbn2.js";import"./ColumnLayout-DrY6M0TU.js";import"./useFieldComponent-mJg7O_gG.js";import"./utils-DlL1jtSe.js";import"./useMakeFocusable-DC5-lYPY.js";import"./RadioGroup-ZOdPNdjE.js";import"./FieldError-CjKulGDW.js";import"./Text-BnIAmJK7.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-PAQ4bQ0C.js";import"./useLabel-R7EdTXDW.js";import"./Label-dlScXtXx.js";import"./Hidden-eVS00tin.js";import"./SelectionIndicator-CPYDzpXH.js";import"./useFormValidation-B69zYJzr.js";import"./useFocus-CUhSw6Xa.js";import"./useControlledState-DTavY4xM.js";import"./FocusScope-jWcc3e5S.js";import"./useFocusRing-B3xEYT1Y.js";import"./context-CaTu-1Q_.js";import"./useFormReset-De7QdeR1.js";import"./usePress-B3RLWuiX.js";import"./useFocusable-9RTPH9cd.js";import"./VisuallyHidden-DWlHhef6.js";import"./IconApp-DCuSf9pl.js";import"./remote-DXDa28-R.js";import"./IconRadioOn-PUiJbTdq.js";import"./Label-DDQhNyeb.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DQxUdM9Y.js";import"./FieldError-DNu2tCaK.js";import"./IconDanger--IOlURNT.js";import"./browser-CbH1E9WO.js";import"./EmulatedBoldText-Bnw4mltQ.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="a" aria-label="Label">
      <Radio value="a">{dummyText.long} </Radio>
      <Radio value="b">{dummyText.long} </Radio>
      <Radio value="c">{dummyText.long}</Radio>
    </RadioGroup>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label" l={[1, 1, 1, 1]}>
      {Array(6).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            <Text>{dummyText.medium}</Text>
            <Content>{dummyText.medium}</Content>
          </RadioButton>)}
    </RadioGroup>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label">
      {Array(3).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            Option {index + 1}
          </RadioButton>)}
    </RadioGroup>,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...m.parameters?.docs?.source}}};const mr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,mr as __namedExportsOrder,ir as default};
