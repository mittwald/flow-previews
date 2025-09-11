import{j as r}from"./iframe-CCJYfocm.js";import{R as p,b as l,a as g}from"./RadioButton-D_CppZAU.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-IvrUAjah.js";import{T as y}from"./Text-oKQCGqUf.js";import{C as T}from"./Content-B_CSQU0b.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B2Y3k6X1.js";import"./mergeRefs-A29wE7X8.js";import"./index-zIu0Aebb.js";import"./FieldError-rHcTk1sA.js";import"./IconWarning-zKFwDxee.js";import"./FieldError-BNB-0_Es.js";import"./utils-OhB6egAd.js";import"./Text-COyZC_d0.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CSvnjd-d.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DjeQ_ngZ.js";import"./Form-OfbaOX07.js";import"./useFocus-ByyEn-Pe.js";import"./useLabel-DWLXZ_5I.js";import"./Label-yb6vzwnx.js";import"./Hidden-D09nfSIf.js";import"./useFormReset-CzFRjtap.js";import"./usePress-D-nD__UC.js";import"./useFocusRing-D9TEPTC8.js";import"./useFocusable-C8TAEKG6.js";import"./FocusScope-D-ZTlcmj.js";import"./context-CpznRjhe.js";import"./VisuallyHidden-DyP1I_X7.js";import"./useControlledState-CXb2Atq5.js";import"./Label-BdPqFAfu.js";import"./useLocalizedStringFormatter-MhDzL5qd.js";import"./browser-B7o8lEj9.js";import"./EmulatedBoldText-CzNN3IMB.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
