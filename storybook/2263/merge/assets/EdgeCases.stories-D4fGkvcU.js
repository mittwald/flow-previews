import{j as r}from"./iframe-Pk_Kk4JL.js";import{R as l,b as p,a as n}from"./RadioButton-Bm6DGmi3.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CadcxpMa.js";import{T as u}from"./Text-yAUoHBmv.js";import{C as c}from"./Content-Cb3yoLz5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-c6eRnhhg.js";import"./index-Cry2UgUa.js";import"./index-BO3AnCjb.js";import"./ColumnLayout-C66JaOWU.js";import"./useFieldComponent-T3_INYSJ.js";import"./utils-CLxMEgR2.js";import"./useMakeFocusable-BAmwDPSm.js";import"./RadioGroup-D4zeJQ93.js";import"./FieldError-Cm-TOrp1.js";import"./Text-cuBcImQE.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-kujN0LYD.js";import"./useLabel-C5txBCfY.js";import"./Label-BhzG_WzN.js";import"./Hidden-D3BnJIdN.js";import"./SelectionIndicator-yei3WI6a.js";import"./useFormValidation-BDoYoAKM.js";import"./useFocus-CG8bKOp6.js";import"./useControlledState-48Ld73MP.js";import"./FocusScope-CxdKQmWN.js";import"./useFocusRing-Cf40KqTj.js";import"./context-CrHSUJ76.js";import"./useFormReset-bAhSNWNb.js";import"./usePress-BhJiygMU.js";import"./useFocusable-6mL9jMN5.js";import"./VisuallyHidden-DaiW9JEZ.js";import"./IconWarning-BZbEOivs.js";import"./remote-jZTk_Znj.js";import"./Label-pFLu8ztF.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DWczizNw.js";import"./FieldError-2o2dfDUN.js";import"./AlertText-B5n-OsOE.js";import"./AlertIcon-BQAdHRLg.js";import"./browser-DxGxcnNA.js";import"./EmulatedBoldText-B0MH6cxw.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
