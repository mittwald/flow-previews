import{j as r}from"./iframe-DhXHhh1w.js";import{R as l,a as p}from"./Radio-DwKu24Go.js";import{R as n}from"./RadioButton-CelLMIND.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CP5-nO3o.js";import{T as u}from"./Text-VjJbV_1P.js";import{C as c}from"./Content-BG0ad5lU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-KRA3PXE8.js";import"./index-DnLu1uFy.js";import"./index-B6ijkuYI.js";import"./ColumnLayout-YyPtkLyV.js";import"./useFieldComponent-CXGCADuw.js";import"./utils--GApMcJ9.js";import"./useMakeFocusable-Cgcvntmb.js";import"./RadioGroup-DogFEeDG.js";import"./FieldError-DoyTFare.js";import"./Text-BhHd18lu.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Cr93Lgju.js";import"./useLabel-B7imI5Js.js";import"./Label-B5DsgLYE.js";import"./Hidden-0q4YVuok.js";import"./SelectionIndicator-p-DrZhoI.js";import"./useFormValidation-Bi2teCon.js";import"./useFocus-CCcmXvuL.js";import"./useFocusRing-C0Ptw1X0.js";import"./useControlledState-BAaAMcGs.js";import"./FocusScope-DTOX4bjf.js";import"./context-C0JBe_V4.js";import"./useFormReset-BhTKQiKR.js";import"./usePress-DuFsm5YE.js";import"./useFocusable-DaonITQz.js";import"./VisuallyHidden-B52Q2-iE.js";import"./IconWarning-Cq0bATFd.js";import"./remote-3lBAaKOS.js";import"./Label-B97zndYQ.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-r_L1XqdG.js";import"./FieldError-NwdeaE8Z.js";import"./AlertText-CTc_944s.js";import"./AlertIcon-CowGyQyl.js";import"./browser-DC-Dnn5c.js";import"./EmulatedBoldText-DK8yRX5h.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
