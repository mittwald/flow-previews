import{j as r}from"./iframe-CCgutS5t.js";import{R as l,b as p,a as n}from"./RadioButton-DJcEPQR7.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C_NEdiYg.js";import{T as u}from"./Text-C-3mWHEt.js";import{C as c}from"./Content-DF8OH5y2.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C78Jb5L6.js";import"./index-h_ilVZmN.js";import"./index-Bp2d_id4.js";import"./ColumnLayout-CfFODd82.js";import"./useFieldComponent-B36i382k.js";import"./utils-N6USVjPQ.js";import"./Text-DSftVrdI.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BIjPfZ_7.js";import"./react-children-utilities-DK8cwA_F.js";import"./ClearPropsContext-CZ_w58Ag.js";import"./useMakeFocusable-Cb2U_kBy.js";import"./RadioGroup-DjXL3psK.js";import"./Form-DylZ4hmS.js";import"./useLabel-C2LzTSEt.js";import"./Label-B2_Qc07C.js";import"./Hidden-BtuehT5t.js";import"./SelectionIndicator-BSAaVuJo.js";import"./useFormValidation-DXrwvkVu.js";import"./useFocus-qWLnYmls.js";import"./useControlledState-C-pLTCEb.js";import"./FocusScope-1cqgO8JZ.js";import"./useFocusRing-DetKeZ0w.js";import"./context-3TjxBBiZ.js";import"./useFormReset-C2ixUAq4.js";import"./usePress-C_WBS1_H.js";import"./useFocusable-C1wexJX5.js";import"./VisuallyHidden-upAad0zi.js";import"./Label-CNIOR_Eh.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BjHcrzpH.js";import"./browser-Cx9TdPw4.js";import"./EmulatedBoldText-BfzgnQm3.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
