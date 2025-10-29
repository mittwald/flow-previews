import{j as r}from"./iframe-Tz0J7D4Y.js";import{R as l,b as p,a as n}from"./RadioButton-CTdwqDWH.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Clxn0dBc.js";import{T as u}from"./Text-C3A_eB8w.js";import{C as c}from"./Content-ChPaHqfU.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9iztwJS.js";import"./index-VdFQ9tny.js";import"./index-DcQDRvJj.js";import"./ColumnLayout-DHfroZpG.js";import"./useFieldComponent-C0OSANtm.js";import"./utils-ja91N2Nx.js";import"./Text-c129sBMT.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-GPTcuJJ8.js";import"./react-children-utilities-q3rjAEhP.js";import"./ClearPropsContext-DQdi6jL0.js";import"./useMakeFocusable-DcsG0xi9.js";import"./RadioGroup-B3nEuCbF.js";import"./Form-CgZM-WfL.js";import"./useLabel-Uehxuchb.js";import"./Label-CPyZQCy0.js";import"./Hidden-DjVegiGf.js";import"./SelectionIndicator-UdR--M88.js";import"./useFormValidation-BhAnQ22o.js";import"./useFocus-rnV-N6wP.js";import"./useControlledState-JfMoTEl5.js";import"./FocusScope-DD4VjzQ6.js";import"./useFocusRing-DD4M3uYZ.js";import"./context-B1lt5Uf-.js";import"./useFormReset-Dr7kbm5c.js";import"./usePress-Dhdcn6rN.js";import"./useFocusable-CEtDZmZ1.js";import"./VisuallyHidden-uhmmiNoS.js";import"./Label-B5yMZfoe.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C_7XcxTl.js";import"./browser-D-jX3MAX.js";import"./EmulatedBoldText-BtDnNRTP.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
