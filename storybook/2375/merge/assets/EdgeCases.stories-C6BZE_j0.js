import{j as r}from"./iframe-C0EFV5oe.js";import{R as l,a as p}from"./Radio-uVc-v_Ur.js";import{R as n}from"./RadioButton-BNeM_tmo.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CimSS1-G.js";import{T as u}from"./Text-DOyzWtc3.js";import{C as c}from"./Content-DuuHxM4g.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DYluwTXq.js";import"./index-a1BVMwGa.js";import"./index-CT8mMXvE.js";import"./ColumnLayout-BZYjX1K8.js";import"./useFieldComponent-Becw-9Qv.js";import"./utils-BH6nMpvt.js";import"./useMakeFocusable-CWEoYh2T.js";import"./RadioGroup-HIqe-6Mf.js";import"./FieldError-nKMDp4j0.js";import"./Text-BncBp0aM.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-3Jlnd_L4.js";import"./useLabel-C2wPJC8Z.js";import"./Label-CdL3Pj-c.js";import"./Hidden-BTRmRI8a.js";import"./SelectionIndicator-CiCpZhmm.js";import"./useFormValidation-CCqKlLu6.js";import"./useFocus-Kf_jHJpa.js";import"./useFocusRing-DMB6fTXa.js";import"./useControlledState-BnTyVv5N.js";import"./FocusScope-BRWQwIZz.js";import"./context-8WtOcV7b.js";import"./useFormReset-D0RWbzMx.js";import"./usePress-KZK5hlL_.js";import"./useFocusable-DZVtVQHs.js";import"./VisuallyHidden-BtDJhMaH.js";import"./IconWarning-Xp-mdAXG.js";import"./remote-CJHR20lz.js";import"./Label-Ca7Q5rd0.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-COxbXONP.js";import"./FieldError-Dy7dJdZa.js";import"./AlertText-dPEDb1m8.js";import"./AlertIcon-C23FUlLu.js";import"./browser-yoNZwNd3.js";import"./EmulatedBoldText-12IhiA7q.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
