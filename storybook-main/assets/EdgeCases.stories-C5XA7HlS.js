import{j as r}from"./iframe-C037GO3p.js";import{R as l,a as p}from"./Radio-bkzzPgV5.js";import{R as n}from"./RadioButton-CMtpKnc1.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories--tu1RMMu.js";import{T as u}from"./Text-1H8qvaGa.js";import{C as c}from"./Content-D47RimDj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DDhfot0o.js";import"./index-wUcB077p.js";import"./index-aVIlTX7l.js";import"./ColumnLayout-DUfM0YCx.js";import"./useFieldComponent-BW6tilSl.js";import"./utils-B21QcS96.js";import"./useMakeFocusable-DiDMwghg.js";import"./RadioGroup-CdyMDwKo.js";import"./FieldError-BWfaawdZ.js";import"./Text-BlWqR5Lx.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DK0MW_mU.js";import"./useLabel-FMiMqQcP.js";import"./Label-B5WCISDn.js";import"./Hidden-CT4yCR-L.js";import"./SelectionIndicator-DMUN5t4K.js";import"./useFormValidation-kMumfte1.js";import"./useFocus-CuP2Z3Ew.js";import"./useFocusRing-D8Rjq8L2.js";import"./useControlledState-DIGHyhBs.js";import"./FocusScope-ByEh1Q0k.js";import"./context-Cm0s8R8a.js";import"./useFormReset-BmsW_IRy.js";import"./usePress-DtHLFK3z.js";import"./useFocusable-DZHoKnFR.js";import"./VisuallyHidden-DBGkoZNP.js";import"./IconWarning-tMH4RyLr.js";import"./remote-BG6_lggN.js";import"./Label-B8SETf0h.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-yCwjB9xr.js";import"./FieldError-B5a1fJJd.js";import"./AlertText-BaelcRob.js";import"./AlertIcon-CoEhaz6M.js";import"./browser-CtD1Hg4J.js";import"./EmulatedBoldText-BFdb5mKm.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
