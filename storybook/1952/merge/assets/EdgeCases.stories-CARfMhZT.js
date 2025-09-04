import{j as r}from"./iframe-BuQIW6_u.js";import{R as p,b as l,a as g}from"./RadioButton-Cr4Igr2S.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Cz8ZyggM.js";import{T as y}from"./Text-8TMWzlfF.js";import{C as T}from"./Content-BqDtvN8b.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-tJtUwa6I.js";import"./mergeRefs-CL2E7ORH.js";import"./index-DWIiGEc3.js";import"./FieldError-Jn80i9Ms.js";import"./IconWarning-CTHW-5ya.js";import"./FieldError-CwfU_VRl.js";import"./utils-C3-2IFIX.js";import"./Text-CA4hy8xs.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-C6dHIWgJ.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DE4SZnml.js";import"./Form-QX_URUcu.js";import"./useFocus-CJRfh2Zc.js";import"./useLabel-V7qiuXiw.js";import"./Label-Bj6uOgB2.js";import"./Hidden-kXch4Bq4.js";import"./useFormReset-Cq5VWng9.js";import"./usePress-BKHC3-jq.js";import"./useFocusRing-DhNL4Zu8.js";import"./useFocusable-5iT1iM-_.js";import"./FocusScope-CbX1YQFz.js";import"./context-DHpT4jQ7.js";import"./VisuallyHidden-Db59Lmwd.js";import"./useControlledState-DeMfvYEX.js";import"./Label-_oW49-Il.js";import"./useLocalizedStringFormatter-DGRnVYdA.js";import"./browser-DTjbbqmr.js";import"./EmulatedBoldText-jJ_haocf.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
