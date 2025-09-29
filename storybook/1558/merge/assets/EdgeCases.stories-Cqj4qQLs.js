import{j as r}from"./iframe-BIwOddjN.js";import{R as l,b as p,a as g}from"./RadioButton-CpI1a5VH.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-1UGZ8_ls.js";import{T as y}from"./Text-3VIHsAGv.js";import{C as T}from"./Content-0HMKxXEy.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DqT3XDtE.js";import"./mergeRefs-wvzFS0ov.js";import"./index-CyjKSzst.js";import"./FieldError-B63dcrBv.js";import"./IconWarning-DNMJ1XNo.js";import"./FieldError-BSmtWAN4.js";import"./utils-DPukZ4w7.js";import"./Text-D1MRO4dn.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DYyFqFo-.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-CU21GxAD.js";import"./Form-DjKVzcCs.js";import"./useLabel-DBHdatlR.js";import"./Label-CW0KcP1q.js";import"./Hidden-D6potscK.js";import"./useFormValidation-DXfcJvC1.js";import"./useFocus-Cj2Pu7gn.js";import"./useControlledState-B4IhsBlg.js";import"./FocusScope-CDSFipnx.js";import"./useFocusRing-Dx0gNijd.js";import"./context-CbJ8Tawl.js";import"./useFormReset-FXsWoN_h.js";import"./usePress-4QX-FuAL.js";import"./useFocusable-CxKBVkW3.js";import"./VisuallyHidden-En5QTDR8.js";import"./Label-B4Iiqc5w.js";import"./useLocalizedStringFormatter-CJPccLDK.js";import"./browser-6nVKIs6I.js";import"./EmulatedBoldText-C5hkPB09.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
