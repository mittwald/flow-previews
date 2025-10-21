import{j as r}from"./iframe-DwkHntCQ.js";import{R as l,b as p,a as n}from"./RadioButton-LJIz6kv0.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BtKoglD4.js";import{T as u}from"./Text-DBgNVic9.js";import{C as c}from"./Content-G7x1RnAk.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CDVCCqgo.js";import"./index-90CY5obj.js";import"./index-Cx9MYi32.js";import"./ColumnLayout-5bvtlOOp.js";import"./useFieldComponent-DTLstJQQ.js";import"./utils-Di7WFWpe.js";import"./Text-BtFh1iC6.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CscgxAB5.js";import"./react-children-utilities-C8UOdL4T.js";import"./ClearPropsContext-D7-qaIYX.js";import"./useMakeFocusable-e4U3WnWM.js";import"./RadioGroup-DfWlnByf.js";import"./Form-DZTCn0e1.js";import"./useLabel-DPc8RWv0.js";import"./Label-CkXLKyn5.js";import"./Hidden-CTKHA4Af.js";import"./SelectionIndicator-BmVEKeRD.js";import"./useFormValidation-D01J8um2.js";import"./useFocus-GoSUCcJ3.js";import"./utils-BgD92WZP.js";import"./useControlledState-DyDKUpf4.js";import"./FocusScope-wRqNTiuk.js";import"./useFocusWithin-tqcFW1Po.js";import"./context-BkqugFd7.js";import"./useFormReset-BUY4HIau.js";import"./usePress-BCP8B4jj.js";import"./useFocusable-Bnl-RQKa.js";import"./useFocusRing-B6zRS2mI.js";import"./VisuallyHidden-CVpyzdGa.js";import"./Label-IsfDEsPh.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-ClJgDr8F.js";import"./browser-DfU0u7Y9.js";import"./EmulatedBoldText-CNqdjroB.js";const ar={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const tr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,tr as __namedExportsOrder,ar as default};
