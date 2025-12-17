import{j as r}from"./iframe-XAYsosb6.js";import{R as l,a as p}from"./Radio-Ck6Cosoy.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Cn6LDKWt.js";import{T as u}from"./Text-D0dxXYDJ.js";import{C as c}from"./Content-DgflOVvT.js";import{R as n}from"./RadioButton-aQhnl-WV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BgSAAcwE.js";import"./index-DT-o6Yom.js";import"./index-CuyBkc62.js";import"./ColumnLayout-De7Uz1wT.js";import"./useFieldComponent-D6Qiol7C.js";import"./utils-mpNKu3Qr.js";import"./useMakeFocusable-Cr_svWMd.js";import"./RadioGroup-CPQhszun.js";import"./FieldError-DKscD9VY.js";import"./Text-DoECDV-v.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-CdD0eZj8.js";import"./useLabel-vx5-dYQf.js";import"./Label-jhCIdmWo.js";import"./Hidden-BXwhawaS.js";import"./SelectionIndicator-CzOKaojY.js";import"./useFormValidation-L0cY-070.js";import"./useFocus-6tpgkBNV.js";import"./useControlledState-DFlLGPV3.js";import"./FocusScope-utk7FKt0.js";import"./useFocusRing-Dezl-MaY.js";import"./context-B1g6MDkd.js";import"./useFormReset-B8jo6HhA.js";import"./usePress-DqzrclQw.js";import"./useFocusable-NtGVjwhY.js";import"./VisuallyHidden-BgleADuq.js";import"./IconChevronDown-CLHuWDBx.js";import"./remote-DUrH5qha.js";import"./IconRadioOn-DwO-jvBM.js";import"./Label-CXTzqQ-l.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CIJR_8KJ.js";import"./FieldError-BTxqYaQG.js";import"./IconDanger-Bj-mV1cE.js";import"./browser-CF4AtnhZ.js";import"./EmulatedBoldText-CnKUILfp.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
