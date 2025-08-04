import{j as r}from"./iframe-DaJUcpT8.js";import{R as p,b as l,a as g}from"./RadioButton-Dv49JBzr.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CHRb_4xc.js";import{T as y}from"./Text-onzY52Lv.js";import{C as T}from"./Content-CPF6ZM9U.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-ADMZzlWa.js";import"./mergeRefs-BEqFWw_4.js";import"./index-D3N8NcCI.js";import"./FieldError-AGeyblw8.js";import"./IconWarning-Di7G1N2l.js";import"./FieldError-CSXHy091.js";import"./utils-cm5Xkl-u.js";import"./Text-D1R_5zV7.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-1uYCptXZ.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-C0OEdlMO.js";import"./Form-68wNlegC.js";import"./useFocus-BmgQs_EM.js";import"./useLabel-prd9XZsG.js";import"./Label-CVkBl_Lv.js";import"./Hidden-DcO9dlXt.js";import"./useFormReset-wR0NNvKg.js";import"./usePress-CEpf8EyH.js";import"./useFocusRing-BGPs1fr9.js";import"./useFocusable-BAN9nHDM.js";import"./FocusScope-DS_o-PRb.js";import"./context-BvSX8hdd.js";import"./VisuallyHidden-DvK-wDtX.js";import"./useControlledState-CRRDqDT-.js";import"./Label-BgQXylnn.js";import"./useLocalizedStringFormatter-DgJlXYZm.js";import"./browser-kRBy5Vjm.js";import"./EmulatedBoldText-Dp6a6rFz.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
