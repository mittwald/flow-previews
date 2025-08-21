import{j as r}from"./iframe-B5f77The.js";import{R as p,b as l,a as g}from"./RadioButton-7vN0arp_.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Cu3EGQS8.js";import{T as y}from"./Text-C70_tpAy.js";import{C as T}from"./Content-3qTcFZjf.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cx_kWuOM.js";import"./mergeRefs-Yh0OJBs6.js";import"./index-CbjhMHv1.js";import"./FieldError-BWiO3RtC.js";import"./IconWarning-ljKjKfGj.js";import"./FieldError-CmSoGLTN.js";import"./utils-DeVL3yHt.js";import"./Text-CRBsFpfB.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CEqom7Rv.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-BH96VovJ.js";import"./Form-COFPxk6e.js";import"./useFocus-CpnAUhj6.js";import"./useLabel-BZo659VM.js";import"./Label-BtB0U_ml.js";import"./Hidden-DpLdfkk6.js";import"./useFormReset-CoVNXXZK.js";import"./usePress-C1oGQ4tq.js";import"./useFocusRing-Dpk-O9NQ.js";import"./useFocusable-DVnwojtz.js";import"./FocusScope-DJcQajcM.js";import"./context-CDDYAalq.js";import"./VisuallyHidden-BRRdMKGS.js";import"./useControlledState-BsCYAcFS.js";import"./Label-JDxcagIb.js";import"./useLocalizedStringFormatter-DLcmNs79.js";import"./browser-DNIKTkzv.js";import"./EmulatedBoldText-D73guLBi.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
