import{j as r}from"./iframe-BuRyV86k.js";import{R as l,a as p}from"./Radio-CPeA23UF.js";import{R as n}from"./RadioButton-N8O1p1yq.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Bm4IeA4B.js";import{T as u}from"./Text-DPwKDAaR.js";import{C as c}from"./Content-DS0bksJ2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DspQ11pS.js";import"./index-AZn-raxL.js";import"./index-DXDzX26U.js";import"./ColumnLayout-CBCn_pgB.js";import"./useFieldComponent-Duyh6ShH.js";import"./utils-DCjU3VYp.js";import"./useMakeFocusable-WaDJMBhq.js";import"./RadioGroup-Uk_tYeoD.js";import"./FieldError-BEkkBW9r.js";import"./Text-D3tRocSh.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C4eLdnUU.js";import"./useLabel-9drM0Q_0.js";import"./Label-CVQyOr4s.js";import"./Hidden-Dduq3kE3.js";import"./SelectionIndicator-r0KfSIub.js";import"./useFormValidation-DZRdJrD7.js";import"./useFocus-CQWcTqjz.js";import"./useFocusRing-CY0UXM2e.js";import"./useControlledState-DYwoO1wA.js";import"./FocusScope-DBYeUwg2.js";import"./context-C6SHLczB.js";import"./useFormReset-BkHfz2ea.js";import"./usePress-B_1LlkAk.js";import"./useFocusable-CtKU_QIU.js";import"./VisuallyHidden-BxxKUxYt.js";import"./IconWarning-DAJxMizk.js";import"./remote-Cg9OAbJn.js";import"./Label-D5Mh9PbX.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Dqmj3fXI.js";import"./FieldError-CyZxViQf.js";import"./AlertText-Cq6PpkxX.js";import"./AlertIcon-CtbR1iuV.js";import"./browser-DvnOBVed.js";import"./EmulatedBoldText-m_25Q3I7.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
