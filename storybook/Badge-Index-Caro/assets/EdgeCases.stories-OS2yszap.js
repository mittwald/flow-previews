import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as l,b as p,a as g}from"./RadioButton-BlVwOnY-.js";import"./index-BdpSHsi2.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DpHq1G6c.js";import{T as y}from"./Text-DvpCWahg.js";import{C as T}from"./Content-kZBAOcNr.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHQ2INuZ.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-DZ7wHvlF.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./FieldError-CBQOcX1t.js";import"./IconWarning-l71w2QxE.js";import"./FieldError-D2eBwE7I.js";import"./utils-q_Aud5Js.js";import"./Text-DtGJyZhh.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-BJLbAytl.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BLpA3R1L.js";import"./Form-CSvT4C5Q.js";import"./useLabel-DtWExE0a.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./useFormReset-B9LhY6oC.js";import"./usePress-mDFtgnbt.js";import"./useFocus-4XTC7e6o.js";import"./useFocusRing-DY5AGIis.js";import"./useFocusable-BXcKiciC.js";import"./useFormValidation-BP6joqgG.js";import"./FocusScope-D_x47-q0.js";import"./useLocalizedStringFormatter-QO03R6A5.js";import"./VisuallyHidden-BtcTDQEe.js";import"./useControlledState-rjpdN6qd.js";import"./index-BAMY2Nnw.js";import"./Label-UDce9YwW.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";const ur={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const cr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,cr as __namedExportsOrder,ur as default};
