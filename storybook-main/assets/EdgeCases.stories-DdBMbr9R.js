import{j as r}from"./iframe-BO4how7V.js";import{R as l,b as p,a as n}from"./RadioButton-DYlYTXTJ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DleKRgq8.js";import{T as u}from"./Text-k4VuksKp.js";import{C as c}from"./Content-COZVJwQW.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-_BWaP51b.js";import"./index-B3PYSYUw.js";import"./index-CzMnHAtb.js";import"./ColumnLayout-BwsKD-YL.js";import"./useFieldComponent-CjWlILZl.js";import"./utils-BpiWkIEZ.js";import"./Text-BwppUNzg.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-riXPckyc.js";import"./react-children-utilities-aRBIKRzv.js";import"./ClearPropsContext-Cr48Xe01.js";import"./useMakeFocusable-D5dCcyqU.js";import"./RadioGroup-VmGNnjLr.js";import"./Form-hZ8SLhDT.js";import"./useLabel-R_XjJcRU.js";import"./Label-HRe2PJ1I.js";import"./Hidden-cuI6d2d2.js";import"./SelectionIndicator-qPgcj5gy.js";import"./useFormValidation-BHRl0fwc.js";import"./useFocus-CFrGhCIR.js";import"./useControlledState-Dy2CU0s2.js";import"./FocusScope-BDHPNMgd.js";import"./useFocusRing-cZUm55wA.js";import"./context-n99Hur2q.js";import"./useFormReset-DKBI04Qj.js";import"./usePress-C-n8mYYh.js";import"./useFocusable-Dm6zCBge.js";import"./VisuallyHidden-BldPGQAk.js";import"./Label-Dg0lhbqP.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Byhh4L4X.js";import"./browser-9RCZAQdm.js";import"./EmulatedBoldText-B4e_rnhx.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const er=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,er as __namedExportsOrder,or as default};
