import{j as r}from"./iframe-MfQSddZq.js";import{R as p,b as l,a as g}from"./RadioButton-DNdnK9sU.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DF4gf65n.js";import{T as y}from"./Text-UwmO1_LL.js";import{C as T}from"./Content-DB-TO2zS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-YGAsF_lo.js";import"./mergeRefs-D31Pk4Ta.js";import"./index-0BR1sey0.js";import"./FieldError-ByuGkvm6.js";import"./IconWarning-CP6VaQZL.js";import"./FieldError-DZKq6jul.js";import"./utils-CF_tf6Cs.js";import"./Text-CWf2hLST.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DfTiL1B0.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DDB2--Kg.js";import"./Form-DVtgW9Vh.js";import"./useFocus-CxcaXJfN.js";import"./useLabel-BGyOt14X.js";import"./Label-DLpcVX-r.js";import"./Hidden-DKR3rgXU.js";import"./useFormReset-DZNBd5mO.js";import"./usePress-Bu3yAehE.js";import"./useFocusRing-DF4UiXkf.js";import"./useFocusable-DPxyYzAu.js";import"./FocusScope-CMbYg7QE.js";import"./context-sxseT2gC.js";import"./VisuallyHidden-Civfar1x.js";import"./useControlledState-C4XOt-mm.js";import"./Label-B0eem2YN.js";import"./useLocalizedStringFormatter-DuRjiXAD.js";import"./browser-BU-cRKf1.js";import"./EmulatedBoldText-B3c3-PLP.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
