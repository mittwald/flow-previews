import{j as r}from"./iframe-ezKPDceg.js";import{R as p,b as l,a as g}from"./RadioButton-SYcTa_ML.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-mXP2vMVh.js";import{T as y}from"./Text-CUR3tOrp.js";import{C as T}from"./Content-D8wxhLV_.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BFVzvp7W.js";import"./mergeRefs-BdUJJdBQ.js";import"./index-Dda9fw4h.js";import"./FieldError-CKyjXhYf.js";import"./IconWarning-iHRHTv2O.js";import"./FieldError-D8wvACBx.js";import"./utils-DzswpBsb.js";import"./Text-BuR4UJfD.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-C33tdXtj.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-CYEEa_Il.js";import"./Form-CmBAUGhT.js";import"./useFocus-DJ-TYVVM.js";import"./useLabel-CN4tRF6C.js";import"./Label-1idoYD8W.js";import"./Hidden-CFBb6iNG.js";import"./useFormReset-pmH2UUNu.js";import"./usePress-DYKNfU9_.js";import"./useFocusRing-gH5JHApn.js";import"./useFocusable-B-msIfGP.js";import"./FocusScope-eYFIheUb.js";import"./context-BrV7YpGK.js";import"./VisuallyHidden-CoNZ8DQ3.js";import"./useControlledState-BblR5lPL.js";import"./Label-BzVYbGPL.js";import"./useLocalizedStringFormatter-B6DQD-FE.js";import"./browser-BOjVaVGi.js";import"./EmulatedBoldText-BpljTSGS.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
