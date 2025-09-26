import{j as r}from"./iframe-Dp_ptgTO.js";import{R as l,b as p,a as g}from"./RadioButton-CyqdKJ1A.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Dkix7OGg.js";import{T as y}from"./Text-DKCpryII.js";import{C as T}from"./Content-DBfEune9.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BVkYESiU.js";import"./mergeRefs-Ct0p8Qt4.js";import"./index-4oHG5ZZP.js";import"./FieldError-BlMfL7YS.js";import"./IconWarning-CESkhJY3.js";import"./FieldError-Izh2_fYp.js";import"./utils-jLhJmKpa.js";import"./Text--dlrpEAx.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-C_b6SveY.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-BY6pp0I-.js";import"./Form-v2gdHsY3.js";import"./useLabel-CuGJ_WBQ.js";import"./Label-BqJm3nBk.js";import"./Hidden-g0k1R_XW.js";import"./useFormValidation-CyColpPY.js";import"./useFocus-BGDVbxBE.js";import"./useControlledState-rqltzUWl.js";import"./FocusScope-B49GjYPu.js";import"./useFocusRing-MWP1ZcQm.js";import"./context-dvnbYm3m.js";import"./useFormReset-CqaGS40P.js";import"./usePress-DgTBEQGy.js";import"./useFocusable-Pd3lvrKn.js";import"./VisuallyHidden-pbsZsV6L.js";import"./Label-Bfe7G6ov.js";import"./useLocalizedStringFormatter-Bz9yQxqy.js";import"./browser-D6_L72sC.js";import"./EmulatedBoldText-RaOWrRWm.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const lr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,lr as __namedExportsOrder,pr as default};
