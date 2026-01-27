import{j as r}from"./iframe-BBX1MRm7.js";import{R as l,b as p,a as n}from"./RadioButton-BmCMdCqa.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DjPdJEH-.js";import{T as u}from"./Text-bZjB6G95.js";import{C as c}from"./Content-BCTxwk86.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-79ppapas.js";import"./index-BNLEYWOE.js";import"./index-CaVys9ny.js";import"./ColumnLayout-DdThN0O1.js";import"./useFieldComponent-B_qWTKJx.js";import"./utils-BavrKavc.js";import"./useMakeFocusable-CupeMo2e.js";import"./RadioGroup-DETkNsmx.js";import"./FieldError-C_UdMObt.js";import"./Text-Dx1GcOD_.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CFIny17O.js";import"./useLabel-CwE3wslu.js";import"./Label-dmshrR3q.js";import"./Hidden-BWx-3ZWW.js";import"./SelectionIndicator-BhUr7H-C.js";import"./useFormValidation-CjGCqCfM.js";import"./useFocus-CEW7w8cP.js";import"./useFocusRing-Bm9tRP_O.js";import"./useControlledState-hVcOsExM.js";import"./FocusScope-geYyY5OG.js";import"./context-CZSumH6g.js";import"./useFormReset--Sx8IrxJ.js";import"./usePress-C19iJYYn.js";import"./useFocusable-DP1OjJqD.js";import"./VisuallyHidden-B0NnPUX1.js";import"./IconWarning-D1rdipwB.js";import"./remote-DQSNjr8v.js";import"./Label-rzq6PBW8.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BVVru5D3.js";import"./FieldError-DhG2ZYTr.js";import"./AlertText-BesKIlLk.js";import"./AlertIcon-Bzw_XkQ4.js";import"./browser-94--rh0I.js";import"./EmulatedBoldText-B_ZrZeLf.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
