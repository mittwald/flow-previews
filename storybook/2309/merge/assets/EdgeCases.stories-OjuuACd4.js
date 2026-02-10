import{j as r}from"./iframe--WfF81Kk.js";import{R as l,a as p}from"./Radio-BDjCOAmY.js";import{R as n}from"./RadioButton-Cp9l9Ybq.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DnHkv_IC.js";import{T as u}from"./Text-BQUBTPZI.js";import{C as c}from"./Content-C_KY6eof.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-zBGCvlSH.js";import"./index-CYxiP9KI.js";import"./index-C06vQZsJ.js";import"./ColumnLayout-xbxAXNJp.js";import"./useFieldComponent-DtaSYFu8.js";import"./utils-DjCd38Rb.js";import"./useMakeFocusable-7dl9S5H1.js";import"./RadioGroup-DGbUiTic.js";import"./FieldError-8xlfKJ8p.js";import"./Text-2H1diUJp.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-fKP9Mvs-.js";import"./useLabel-C-b3rJJe.js";import"./Label-B681fyVu.js";import"./Hidden-CjN9RU7M.js";import"./SelectionIndicator-BGWzSObI.js";import"./useFormValidation-CPuMB1ok.js";import"./useFocus-BstfIGzX.js";import"./useFocusRing-xiCVrDfg.js";import"./useControlledState-33z9BU53.js";import"./FocusScope-D57rWz_c.js";import"./context-BGH-DtkU.js";import"./useFormReset-B7XwhHp1.js";import"./usePress-CuA8A2Wl.js";import"./useFocusable-CYWdX1lX.js";import"./VisuallyHidden-BWpEL0hX.js";import"./IconWarning-BCj0akvL.js";import"./remote-BYVMC2eP.js";import"./Label-BrCJfTYV.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BAqqywtA.js";import"./FieldError-DwJ8vXTD.js";import"./AlertText-4irfy3TS.js";import"./AlertIcon-Bc0kQsAW.js";import"./browser-DaXQhhrD.js";import"./EmulatedBoldText-Bc2SrKM1.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
