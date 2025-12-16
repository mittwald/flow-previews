import{j as r}from"./iframe-jqgUclr4.js";import{R as l,a as p}from"./Radio-3asKbeCO.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-punAM55G.js";import{T as u}from"./Text-B-prTEID.js";import{C as c}from"./Content-CZKMoEr6.js";import{R as n}from"./RadioButton-CgvkBVzQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DyY94Eac.js";import"./index-BGlwBVxd.js";import"./index-KptOOerd.js";import"./ColumnLayout-DBBaaA-r.js";import"./useFieldComponent-C0Pt2yH0.js";import"./utils-5IALZqjS.js";import"./useMakeFocusable-DwV-1tjw.js";import"./RadioGroup-Dmbmom3Y.js";import"./FieldError-DSvmLOVG.js";import"./Text-tTF8cKGK.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BMNY4Kb2.js";import"./useLabel-Cr6qu-mQ.js";import"./Label-BRPoLfQP.js";import"./Hidden-DkAwJJ8c.js";import"./SelectionIndicator-BFlPMkh7.js";import"./useFormValidation-BWQF9tl0.js";import"./useFocus-FM6ro1uR.js";import"./useControlledState-Cu6J25_e.js";import"./FocusScope-CJmxo3uG.js";import"./useFocusRing-C1ZjOk7y.js";import"./context-BwRvgyRH.js";import"./useFormReset-BuHZrSbJ.js";import"./usePress-BYHfZHyQ.js";import"./useFocusable-Zu3bG2Sq.js";import"./VisuallyHidden-CdTYKgUx.js";import"./IconApp-B0Y2ZEG7.js";import"./remote-7w2FpeEf.js";import"./IconRadioOn-Buk6jmK3.js";import"./Label-B_zOvN70.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BczlrwGV.js";import"./FieldError-C5F3bfgz.js";import"./IconDanger-BMQW6rjZ.js";import"./browser-EX5vhkWE.js";import"./EmulatedBoldText-B9oQd6gk.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const mr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,mr as __namedExportsOrder,ir as default};
