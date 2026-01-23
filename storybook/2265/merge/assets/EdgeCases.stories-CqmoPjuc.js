import{j as r}from"./iframe-CG_BDTJg.js";import{R as l,b as p,a as n}from"./RadioButton-uqef64-6.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C8w7Lf9I.js";import{T as u}from"./Text-DpPZns_R.js";import{C as c}from"./Content-Cf0EUCx6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cu1B5LJt.js";import"./index-C71TA-pA.js";import"./index-CuwL1_wd.js";import"./ColumnLayout-DN01Hz6s.js";import"./useFieldComponent-UHV4FB79.js";import"./utils-BtbDMhcr.js";import"./useMakeFocusable-CK3J35s1.js";import"./RadioGroup-Cn07NHnJ.js";import"./FieldError-DIhe2pHb.js";import"./Text-CLAgqxCC.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-LFW5XTCh.js";import"./useLabel-DI7piRsn.js";import"./Label-CQ1G_pe6.js";import"./Hidden-DdAaT9j3.js";import"./SelectionIndicator-ZCsaESBY.js";import"./useFormValidation-BBj6R535.js";import"./useFocus-BQxEMJ7t.js";import"./useControlledState-BP00jBlc.js";import"./FocusScope-CTViNy8e.js";import"./useFocusRing-CaZs-udO.js";import"./context-CXt1SSmQ.js";import"./useFormReset-BbxWwIqr.js";import"./usePress-C5t6ziJ-.js";import"./useFocusable-DFQV4HWE.js";import"./VisuallyHidden-pR1kpoR7.js";import"./IconWarning-OVzy7qXj.js";import"./remote-B2NguZ9L.js";import"./Label-eLDtxB0Y.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DqHGK81F.js";import"./FieldError-DN7cTCYW.js";import"./AlertText-BXThyvrG.js";import"./AlertIcon-y6uiAF7a.js";import"./browser-yLu0BSsR.js";import"./EmulatedBoldText-CNB3Go6_.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
