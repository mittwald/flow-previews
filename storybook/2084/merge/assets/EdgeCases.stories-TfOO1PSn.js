import{j as r}from"./iframe-Bju5tM19.js";import{R as l,b as p,a as n}from"./RadioButton-tCOJcUb4.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C04qD1YS.js";import{T as u}from"./Text-Ctwf1INQ.js";import{C as c}from"./Content-CpMHiCFr.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DMQ923EN.js";import"./index-i9t6c7d2.js";import"./index-v7jxlCcy.js";import"./ColumnLayout-DcMxlhdY.js";import"./useFieldComponent-SvMgnfSt.js";import"./utils-CHaPYnRu.js";import"./Text-X0smrbMM.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-EseH3oBy.js";import"./react-children-utilities-CV_3FZ2O.js";import"./ClearPropsContext-nVrOsFhk.js";import"./useMakeFocusable-BXmgj38r.js";import"./RadioGroup-Bo8yi2dc.js";import"./Form-CawbhIR_.js";import"./useLabel-DxvdaVYE.js";import"./Label-C0LDEu9P.js";import"./Hidden-B3KlSyIs.js";import"./SelectionIndicator-BWLjQ8Kg.js";import"./useFormValidation-Cc6rboKS.js";import"./useFocus-dnpNkUeL.js";import"./useControlledState-BiPn7KDX.js";import"./FocusScope-BvTlMNTx.js";import"./useFocusRing-DQLm4Rj_.js";import"./context-BCZfssJF.js";import"./useFormReset-CYS5QNbo.js";import"./usePress-DNUm2pP-.js";import"./useFocusable-S-EY4exA.js";import"./VisuallyHidden-muGwU-w1.js";import"./Label-CEBawMgO.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DnEVwgqU.js";import"./browser-5LoYBPX6.js";import"./EmulatedBoldText-DNLnXqQA.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
