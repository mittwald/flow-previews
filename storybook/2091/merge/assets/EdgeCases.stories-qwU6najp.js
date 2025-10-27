import{j as r}from"./iframe-CgV0BA21.js";import{R as l,b as p,a as n}from"./RadioButton-c7Nzh7oH.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Ch9qcEks.js";import{T as u}from"./Text-BKw3N1Oz.js";import{C as c}from"./Content-DBIX5rB_.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C-HH3qvd.js";import"./index-DDuhgqRy.js";import"./index-LOR_5P9o.js";import"./ColumnLayout-D2XKNJMs.js";import"./useFieldComponent-D1IKYPO_.js";import"./utils-BtxgbS4l.js";import"./Text-DoKxmv7q.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Cjg_6qhe.js";import"./react-children-utilities-D5-pLFdL.js";import"./ClearPropsContext-BLhIxcUa.js";import"./useMakeFocusable-BcUeToCB.js";import"./RadioGroup-aNXSJSCI.js";import"./Form-Co57238C.js";import"./useLabel-B3KDK_sh.js";import"./Label-CttY7hce.js";import"./Hidden-jMQa5TyR.js";import"./SelectionIndicator-Bn-FIAma.js";import"./useFormValidation-AnXxOg_8.js";import"./useFocus-DCA5O52l.js";import"./useControlledState-REzwF7fx.js";import"./FocusScope-0arVmBSz.js";import"./useFocusRing-D4YLibcx.js";import"./context-DHnf2uKc.js";import"./useFormReset-DmIBBfXo.js";import"./usePress-Dh998neg.js";import"./useFocusable-CmuVkcp6.js";import"./VisuallyHidden-7bLCXWCd.js";import"./Label-Bxuf1S0W.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-ByloWLWI.js";import"./browser-BkNcCpiL.js";import"./EmulatedBoldText-DlIqC6uZ.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
