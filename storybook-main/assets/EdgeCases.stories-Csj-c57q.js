import{j as r}from"./iframe-BJcrhiyS.js";import{R as l,b as p,a as n}from"./RadioButton-Dg5bod8t.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Cjx6i2N9.js";import{T as u}from"./Text-CzGb6jtw.js";import{C as c}from"./Content-CkVA3Cnw.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CUnmKrjI.js";import"./index-BWslXHRv.js";import"./index-Clh-7_IP.js";import"./ColumnLayout-ZSmCAwYQ.js";import"./useFieldComponent-BTSjCSDH.js";import"./utils-MMz0RNDK.js";import"./Text-BpL6_bME.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DHKN92dZ.js";import"./react-children-utilities-DZ5iFmYj.js";import"./ClearPropsContext-Bddw_Fzg.js";import"./useMakeFocusable-CqrVk7-z.js";import"./RadioGroup-Bw9nU8Kd.js";import"./Form--RrJpAdD.js";import"./useLabel-_fpNspWn.js";import"./Label-BomZPPry.js";import"./Hidden-BPKHXv4N.js";import"./SelectionIndicator-lJ8kUAUa.js";import"./useFormValidation-ofRqxeQo.js";import"./useFocus-B02RLksg.js";import"./useControlledState-CmFRf9bT.js";import"./FocusScope-DZerhXt6.js";import"./useFocusRing-Cs9uIsYW.js";import"./context-C9wRNNkX.js";import"./useFormReset-B4UK9p8r.js";import"./usePress-D-MZIwgU.js";import"./useFocusable-o2EAaEwJ.js";import"./VisuallyHidden-DT9WK7BB.js";import"./Label-DlBkeFJ8.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BYGjl_Ur.js";import"./browser-CleZYiuo.js";import"./EmulatedBoldText-BXLeVkdu.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
