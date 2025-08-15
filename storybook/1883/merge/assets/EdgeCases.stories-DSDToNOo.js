import{j as r}from"./iframe-DRWwRHPb.js";import{R as p,b as l,a as g}from"./RadioButton-CRNO0MxM.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BvSYXRVQ.js";import{T as y}from"./Text-BIokAaTQ.js";import{C as T}from"./Content-DXbDyAaZ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BCWzTzuw.js";import"./mergeRefs-B0ExOAJ1.js";import"./index-DvYl_DKa.js";import"./FieldError-BxgQBJxP.js";import"./IconWarning-DhSonKOB.js";import"./FieldError-sbX835HY.js";import"./utils-9ciE-ZWz.js";import"./Text-XTosNzcc.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BTezMfNA.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-DvgucKO2.js";import"./Form-C-fYDZS9.js";import"./useFocus-Cklz1p5-.js";import"./useLabel-C1sZK0NB.js";import"./Label-DWKl8ZCI.js";import"./Hidden-CgY-Zzb9.js";import"./useFormReset-XyyE6UJM.js";import"./usePress-DZFGRV58.js";import"./useFocusRing-DwMv-ywr.js";import"./useFocusable-CTYzjUzk.js";import"./FocusScope-hUGkKLjX.js";import"./context-jL0Ioa3t.js";import"./VisuallyHidden-CJKgqKOh.js";import"./useControlledState-BmVuB4nj.js";import"./Label-DMZs6_dS.js";import"./useLocalizedStringFormatter-CU66bFG-.js";import"./browser-ChcUEk5m.js";import"./EmulatedBoldText-w_oHSgVv.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
