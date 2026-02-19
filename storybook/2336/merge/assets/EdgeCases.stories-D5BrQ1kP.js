import{j as r}from"./iframe-je41IZNf.js";import{R as l,a as p}from"./Radio-CEZaGPLr.js";import{R as n}from"./RadioButton-B1DYawir.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BuWCux7_.js";import{T as u}from"./Text-BC-RZ7k4.js";import{C as c}from"./Content-CI6m-d_y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Byg_Wdja.js";import"./index-3zpYFWyF.js";import"./index-DBepN-OD.js";import"./ColumnLayout-BuTf6BbT.js";import"./useFieldComponent-b8-F_AVa.js";import"./utils-Q4wA2zXG.js";import"./useMakeFocusable-C5FiKgHP.js";import"./RadioGroup-CihT0YOu.js";import"./FieldError-MnbTPawu.js";import"./Text-DidYm6nP.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-D8X7JUv8.js";import"./useLabel-_SRIQyLy.js";import"./Label-BNl2hTKa.js";import"./Hidden-CA0I_dPB.js";import"./SelectionIndicator-DrqbtAz1.js";import"./useFormValidation-DLIHXRbT.js";import"./useFocus-YEPBe3OK.js";import"./useFocusRing-DOADtTnm.js";import"./useControlledState-Behjjcy6.js";import"./FocusScope-ClZvkh4F.js";import"./context-533DYF-u.js";import"./useFormReset-BAaFkhxA.js";import"./usePress-BcrJWT2n.js";import"./useFocusable-Ldg9iOHo.js";import"./VisuallyHidden-DTzU9Ikw.js";import"./IconWarning-Bnxn-M7Y.js";import"./remote-CVh73cse.js";import"./Label--ERuqbAg.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DHff-c09.js";import"./FieldError-BATB6zBo.js";import"./AlertText-B3BG9g2L.js";import"./AlertIcon-g4_I2qja.js";import"./browser-Drae5Vqb.js";import"./EmulatedBoldText-BdEDO8G6.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
