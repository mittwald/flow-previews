import{j as r}from"./iframe-BBU8Vi5z.js";import{R as p,b as l,a as g}from"./RadioButton-3LMHxY_i.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BSKyKXBP.js";import{T as y}from"./Text-Dmx06jI1.js";import{C as T}from"./Content-cVgy_Og1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dh-an_RK.js";import"./mergeRefs-0pGj6C_j.js";import"./index-NZtYUN4c.js";import"./FieldError-Bm5U6po7.js";import"./IconWarning-Dzfnqwsx.js";import"./FieldError-DZ37g0Dt.js";import"./utils-Bl0beZ_h.js";import"./Text-DKRByA_e.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-RJz59fv6.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-D7PkWuFD.js";import"./Form-CKpkDEiG.js";import"./useFocus-BO2H44GU.js";import"./useLabel-Dhqi6uDE.js";import"./Label-DtosUGK-.js";import"./Hidden-BzeT6TXj.js";import"./useFormReset-CcPabkKc.js";import"./usePress-VQWCXiAV.js";import"./useFocusRing-CcJdq_JE.js";import"./useFocusable-CH53ZRkg.js";import"./FocusScope-DSRDaxy2.js";import"./context-LLBgjHpi.js";import"./VisuallyHidden-DSdNvIxr.js";import"./useControlledState-JBkrIXcy.js";import"./Label-C0WPThdc.js";import"./useLocalizedStringFormatter-Dev9EnbH.js";import"./browser-ZEfsbAUe.js";import"./EmulatedBoldText-CqafDXFr.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
