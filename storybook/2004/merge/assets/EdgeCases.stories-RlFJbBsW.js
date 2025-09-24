import{j as r}from"./iframe-D1JKOwdq.js";import{R as p,b as l,a as g}from"./RadioButton-CdkutAzM.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BiqGd3gj.js";import{T as y}from"./Text-Cv35yGBC.js";import{C as T}from"./Content-D0_APIU9.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CKqNcsdJ.js";import"./mergeRefs-CYbnUoq6.js";import"./index-DOZ5qla4.js";import"./FieldError-DJpBvO0q.js";import"./IconWarning-DZISCuC-.js";import"./FieldError-BZfRYFbv.js";import"./utils-BVsEXjGQ.js";import"./Text-BIeeVT6X.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BqlmK73Q.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-BO9Apfn4.js";import"./Form-CftHRla7.js";import"./useFocus-CYEgIwnz.js";import"./useLabel-Uyswehsd.js";import"./Label-CseS0v8E.js";import"./Hidden-Dr2BftiN.js";import"./useFormReset-CG85pNSA.js";import"./usePress-CwJM0Ele.js";import"./useFocusRing-8cxgDEwk.js";import"./useFocusable-wd6aWIaf.js";import"./FocusScope-B4gQukNN.js";import"./context-Bzqo5E_q.js";import"./VisuallyHidden-DUuSn0Sw.js";import"./useControlledState-CYjuzTtD.js";import"./Label-Cf_c9vA3.js";import"./useLocalizedStringFormatter-CIU1pqtk.js";import"./browser-BI97FZcU.js";import"./EmulatedBoldText-d9mRwZf5.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
