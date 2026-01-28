import{j as r}from"./iframe-BE2KIrNP.js";import{R as l,b as p,a as n}from"./RadioButton-CaCZJx8L.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CcTE8i8F.js";import{T as u}from"./Text-99qeYwSw.js";import{C as c}from"./Content-D6yB5i8n.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DqHsBCp0.js";import"./index-C9kIH1f3.js";import"./index-BeVui2PP.js";import"./ColumnLayout-D4lx1Qwo.js";import"./useFieldComponent-8fOA-m-u.js";import"./utils-CetDBScY.js";import"./useMakeFocusable-C9mVrmgt.js";import"./RadioGroup-Bb3uEHL1.js";import"./FieldError-CYuYbE_Y.js";import"./Text-D-kvbByn.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-7VWdSJkH.js";import"./useLabel-DlCzrbVx.js";import"./Label-BTkJrjJz.js";import"./Hidden-DdzvMSsl.js";import"./SelectionIndicator-B0iQvxUu.js";import"./useFormValidation-BVWNV9RZ.js";import"./useFocus-D19rPtJ7.js";import"./useFocusRing-CXSA7vN6.js";import"./useControlledState-O9ITVI5k.js";import"./FocusScope-BDfy_Mz6.js";import"./context-Cl9Jg8XT.js";import"./useFormReset-DGFO0EL0.js";import"./usePress-wlnUrUkL.js";import"./useFocusable-PS7GdwKW.js";import"./VisuallyHidden-KypC6JrD.js";import"./IconWarning-pheKtU5F.js";import"./remote-BDPI1xTN.js";import"./Label-BBYAWH-Z.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Djj1Dsk8.js";import"./FieldError-DLWZre89.js";import"./AlertText-34tBbtSq.js";import"./AlertIcon-BSS6Y7Aa.js";import"./browser-B5VZQlUE.js";import"./EmulatedBoldText-CPMF4SHl.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ir=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,ir as __namedExportsOrder,tr as default};
