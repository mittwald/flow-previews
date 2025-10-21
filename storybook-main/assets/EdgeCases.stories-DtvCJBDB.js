import{j as r}from"./iframe-CMcq8v1f.js";import{R as l,b as p,a as n}from"./RadioButton-DlVqioUO.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BJ-ivV_b.js";import{T as u}from"./Text-DOkc_YZA.js";import{C as c}from"./Content-CagAH8x5.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DAEI1NYm.js";import"./index-UsNUevoW.js";import"./index-Tcjlyiep.js";import"./ColumnLayout-r5qjBDtD.js";import"./useFieldComponent-B7IsP0qp.js";import"./utils-B4_KO4f3.js";import"./Text-CkmSClwy.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-pzLTBmMV.js";import"./react-children-utilities-CDk9z-7u.js";import"./ClearPropsContext-CU9ecYMv.js";import"./useMakeFocusable-B2ENdPIj.js";import"./RadioGroup-ByZj8o9N.js";import"./Form-BA9ATDJW.js";import"./useLabel-MLAtSIJy.js";import"./Label-CtMkNZ5K.js";import"./Hidden-BSe2pCrZ.js";import"./SelectionIndicator-npitMQ6K.js";import"./useFormValidation-C01Q1Aoq.js";import"./useFocus-B0Qlm3zv.js";import"./useControlledState-C8UmWEhe.js";import"./FocusScope-BZyWBR-T.js";import"./useFocusRing-CoJ5esee.js";import"./context-Bckjq63R.js";import"./useFormReset-DUTu2q8R.js";import"./usePress-Bqdsvk60.js";import"./useFocusable-DlaONHPB.js";import"./VisuallyHidden-Dy6kQkYD.js";import"./Label-BIfXBQMD.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BoDSEWEG.js";import"./browser-BnbqEoZX.js";import"./EmulatedBoldText-DAg28Pal.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
