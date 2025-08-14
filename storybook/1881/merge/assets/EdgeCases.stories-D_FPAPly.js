import{j as r}from"./iframe-BXDMX86q.js";import{R as p,b as l,a as g}from"./RadioButton-Cp274WWO.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DzjCbSYP.js";import{T as y}from"./Text-bj3uPEQb.js";import{C as T}from"./Content-CrmS6s-Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CA-rRUQt.js";import"./mergeRefs-BlQ7xsLt.js";import"./index-CXUv09w1.js";import"./FieldError-qg7uGN0h.js";import"./IconWarning-CtdkcZph.js";import"./FieldError-B3Nc_fB3.js";import"./utils-BbnHDINk.js";import"./Text-8unsz-5q.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CwXnKsPf.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-9H7mJvVh.js";import"./Form-BaF7AzDl.js";import"./useFocus-EmCEI_3W.js";import"./useLabel-B1CTPn-c.js";import"./Label-KbRAOmA4.js";import"./Hidden-9xlFaPY3.js";import"./useFormReset-CB9QX2BV.js";import"./usePress-DrTnWIPr.js";import"./useFocusRing-dYveCnJn.js";import"./useFocusable-x1ctHjf6.js";import"./FocusScope-CI4D8ZGu.js";import"./context-DyduO5X5.js";import"./VisuallyHidden-_kOtwmic.js";import"./useControlledState-8m1Jp16z.js";import"./Label-CEOTZRHh.js";import"./useLocalizedStringFormatter-Cu-ju4he.js";import"./browser-1ziQicFl.js";import"./EmulatedBoldText-hpKq7Hz7.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="a" aria-label="Label">
      <Radio value="a">{dummyText.long} </Radio>
      <Radio value="b">{dummyText.long} </Radio>
      <Radio value="c">{dummyText.long}</Radio>
    </RadioGroup>
}`,...(s=(d=t.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var u,c,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label" l={[1, 1, 1, 1]}>
      {Array(6).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            <Text>{dummyText.medium}</Text>
            <Content>{dummyText.medium}</Content>
          </RadioButton>)}
    </RadioGroup>
}`,...(x=(c=i.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var R,f,b;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const mr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,mr as __namedExportsOrder,ir as default};
