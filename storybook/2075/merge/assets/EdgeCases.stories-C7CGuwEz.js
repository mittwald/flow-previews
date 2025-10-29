import{j as r}from"./iframe-C9dYfgSf.js";import{R as l,b as p,a as n}from"./RadioButton-BTR9TmEK.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BVlAwGHv.js";import{T as u}from"./Text-DeJ4PaiG.js";import{C as c}from"./Content-CAiZvJCL.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bze_r9FR.js";import"./index-CVihxOyi.js";import"./index-DbMX5jmM.js";import"./ColumnLayout-CyxrcCUm.js";import"./useFieldComponent-Br5YSvi-.js";import"./utils-CO6LnGLR.js";import"./Text-CQ7Fwsu6.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-fVXPK3i1.js";import"./react-children-utilities-DAjt5CEG.js";import"./ClearPropsContext-oIIvwL5Y.js";import"./useMakeFocusable-JetFJK9R.js";import"./RadioGroup-C975Z1W7.js";import"./Form-CYcFTCJ6.js";import"./useLabel-DpM9fuaR.js";import"./Label-HJzRYjqm.js";import"./Hidden-C5ZQOCSQ.js";import"./SelectionIndicator-BcmkxpDt.js";import"./useFormValidation-cSt72451.js";import"./useFocus-xkgg1n29.js";import"./useControlledState-DlEEU1a1.js";import"./FocusScope-BDFIEW4R.js";import"./useFocusRing-29NBTIcT.js";import"./context-iM_q7ty8.js";import"./useFormReset-CCon2GTP.js";import"./usePress-BlhdQGL7.js";import"./useFocusable-U5sjNWcc.js";import"./VisuallyHidden-Ck6pQyeO.js";import"./Label-huPJyomh.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DHpih7p2.js";import"./browser-CNYhznL3.js";import"./EmulatedBoldText-WKOr2IKU.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
