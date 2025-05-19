import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as l,b as p,a as g}from"./RadioButton-B54da9je.js";import"./index-BdpSHsi2.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BUABdahQ.js";import{T as y}from"./Text-DkYh63l_.js";import{C as T}from"./Content-DAm_ZvXU.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DVKy8vv7.js";import"./mergeRefs-C3hk6Bw5.js";import"./iframe-CKDvs4CE.js";import"./index-d29qW9Ar.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./FieldError-dk6DcvhS.js";import"./IconWarning-CK356P05.js";import"./FieldError-CWvjII8X.js";import"./utils-k5T1Axi4.js";import"./Text-CCjUyjXh.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-ozKDlLt2.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-B7beFWlG.js";import"./Form-D_RCBvUR.js";import"./useLabel-BTthEqzH.js";import"./Label-B5BNuFXH.js";import"./Hidden-RoZfe91Z.js";import"./useFormReset-dEmc_A_j.js";import"./usePress-D8pXfMRf.js";import"./useFocus-DtkvuJ2b.js";import"./useFocusRing-CsskK932.js";import"./useFocusable-BgmoI-LE.js";import"./useFormValidation-BVpaaUUN.js";import"./FocusScope-D-amBDVp.js";import"./useLocalizedStringFormatter-CVg1y45F.js";import"./VisuallyHidden-DvRlzb5d.js";import"./useControlledState-B-V-WRDl.js";import"./index-BAMY2Nnw.js";import"./Label-bqUfW7BT.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";const ur={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
