import{j as r}from"./iframe-DOYRhvKw.js";import{R as l,b as p,a as n}from"./RadioButton-BpRFYpHt.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-7gY424vO.js";import{T as u}from"./Text-uG3ng9U4.js";import{C as c}from"./Content-CsxOxb5X.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-STxdqvts.js";import"./index-CBooujIz.js";import"./index-CsHgCCkK.js";import"./ColumnLayout-C-7fphYl.js";import"./useFieldComponent-CVvykpK2.js";import"./utils-Bgpcx055.js";import"./Text-ChShlFeN.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CT2mn3WV.js";import"./react-children-utilities-BC28ceB8.js";import"./ClearPropsContext-BqcXprie.js";import"./useMakeFocusable-CpkCTOPe.js";import"./RadioGroup-BlNGhLhT.js";import"./Form-iQ1p0tBu.js";import"./useLabel-CzwTtnKl.js";import"./Label-DPl4piTh.js";import"./Hidden-vFw0yyvc.js";import"./SelectionIndicator-DAPFHJnO.js";import"./useFormValidation-37foNTGu.js";import"./useFocus-19H2kxNT.js";import"./useControlledState-BpyUCkTO.js";import"./FocusScope-CgTCZfj1.js";import"./useFocusRing-BgXDKXFW.js";import"./context-NzKNm45Y.js";import"./useFormReset-BHPIYNcK.js";import"./usePress-GLnS58A3.js";import"./useFocusable-DT2cLKuD.js";import"./VisuallyHidden-DLTCEUwm.js";import"./Label-D1jneSDA.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DmT4fRR_.js";import"./browser-BfmJHaZX.js";import"./EmulatedBoldText-wbMAxmw1.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
