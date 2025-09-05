import{j as r}from"./iframe-BGMqIB5E.js";import{R as p,b as l,a as g}from"./RadioButton-CMU3EaOU.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-JE1RRpkI.js";import{T as y}from"./Text-CM0LFMBt.js";import{C as T}from"./Content-D-Q7wYdk.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C4OPXOmf.js";import"./mergeRefs-CgaIg7wx.js";import"./index-C87vJZqt.js";import"./FieldError-Bx7u0ZLw.js";import"./IconWarning-mDCCMBSQ.js";import"./FieldError-ClTlFvX2.js";import"./utils-DSJ2fpWd.js";import"./Text-BM4jLh1h.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-D4JIFXFZ.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-Cejr42sL.js";import"./Form-DIhLFb81.js";import"./useFocus-DimIAfL3.js";import"./useLabel-DEWKGCco.js";import"./Label-CQRoenrp.js";import"./Hidden-BlXCfqaN.js";import"./useFormReset-CGt1BQBC.js";import"./usePress-DciW20d_.js";import"./useFocusRing-Ch_kecTs.js";import"./useFocusable-DsCZ72OQ.js";import"./FocusScope-DJHRiFNO.js";import"./context-C9jpkMPH.js";import"./VisuallyHidden-C_NToHIT.js";import"./useControlledState-CyFiZ_AX.js";import"./Label-ayGMhYtP.js";import"./useLocalizedStringFormatter-B2NVTRrQ.js";import"./browser-BSs9Ljwu.js";import"./EmulatedBoldText-fvHudQk4.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
