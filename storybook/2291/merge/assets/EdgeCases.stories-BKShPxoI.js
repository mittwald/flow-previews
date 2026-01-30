import{j as r}from"./iframe-BIoFjWpr.js";import{R as l,b as p,a as n}from"./RadioButton-Z8Y-Woth.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-qocxXYtP.js";import{T as u}from"./Text-Dw86EjFX.js";import{C as c}from"./Content-o5wnGQU8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-scX312by.js";import"./index-BNUHznNp.js";import"./index-h2cI_GQ2.js";import"./ColumnLayout-kyzPOxUZ.js";import"./useFieldComponent-DpF862rt.js";import"./utils-DZ7CVsEQ.js";import"./useMakeFocusable-JQm6B7H7.js";import"./RadioGroup-CVhJbbij.js";import"./FieldError-3U-LgGLS.js";import"./Text-DporVAh2.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BlXCmAsm.js";import"./useLabel-CIJOcLbZ.js";import"./Label-CY_Zdhv-.js";import"./Hidden-JTKX8Fqm.js";import"./SelectionIndicator-DDosGdOa.js";import"./useFormValidation-5Xewoqko.js";import"./useFocus-CQPopARV.js";import"./useFocusRing-C05eNqGk.js";import"./useControlledState-A9PECuda.js";import"./FocusScope-DZU3T--c.js";import"./context-CeBhVpDW.js";import"./useFormReset-DTiYdK4X.js";import"./usePress-Uox4pFjd.js";import"./useFocusable-CwNae-cD.js";import"./VisuallyHidden-iLNm3MD9.js";import"./IconWarning-EC1k16Yv.js";import"./remote-CdlQwHLV.js";import"./Label-D-wfWBos.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BdL-N6vb.js";import"./FieldError-CY5Rdgwt.js";import"./AlertText-CqfZMgA0.js";import"./AlertIcon-CufExgwJ.js";import"./browser-BAGCYS_p.js";import"./EmulatedBoldText-Cp_-MpAq.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
