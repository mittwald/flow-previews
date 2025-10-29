import{j as r}from"./iframe-BQyHcTNh.js";import{R as l,b as p,a as n}from"./RadioButton-Bdpn-2H5.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C1z1AX5b.js";import{T as u}from"./Text-_hc15B6K.js";import{C as c}from"./Content-DyhOef0P.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-n43oODHt.js";import"./index-BkXVqc6U.js";import"./index-D5h5WobT.js";import"./ColumnLayout-CZgjYIcC.js";import"./useFieldComponent-Cyrlnow6.js";import"./utils-CdCPWCHO.js";import"./Text-C9BF5CjQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./ClearPropsContext-CD4xLCoc.js";import"./useMakeFocusable-QwAUUrkX.js";import"./RadioGroup-BZjAm-ZF.js";import"./Form-CjlO_WmK.js";import"./useLabel-DeM_oEx1.js";import"./Label-D_Hg-3H4.js";import"./Hidden-c61kZDYL.js";import"./SelectionIndicator-BnroM9vv.js";import"./useFormValidation-Dr6xiKJA.js";import"./useFocus-COF7nP05.js";import"./useControlledState-TEYDAVm8.js";import"./FocusScope-DELlCJxb.js";import"./useFocusRing-gNgZcCH8.js";import"./context-BymCJUNL.js";import"./useFormReset-DB-Y7LtK.js";import"./usePress-qWGUTJsN.js";import"./useFocusable-DJd2VQkc.js";import"./VisuallyHidden-rd1eTAwo.js";import"./IconWarning-D8COeLpG.js";import"./Label-JK740Dk1.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter--7zmdW8B.js";import"./FieldError-AQx_Co0q.js";import"./browser-CktdIn7a.js";import"./EmulatedBoldText-77q4Ify-.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
