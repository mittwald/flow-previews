import{j as r}from"./iframe-upPjViUi.js";import{R as p,b as l,a as g}from"./RadioButton-CyqO7PqJ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-C9eIhTDU.js";import{T as y}from"./Text-DrOfxU9W.js";import{C as T}from"./Content-BGAXpOrE.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-yJMP1aPs.js";import"./mergeRefs-q2W69vto.js";import"./index-RP-73gJI.js";import"./FieldError-Cn-v5KPW.js";import"./IconWarning-CwNATdER.js";import"./FieldError-Dxc2xglq.js";import"./utils-D7Ud1rY1.js";import"./Text-CPJx-aex.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-Chfnizzs.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-ZkQ1J49t.js";import"./Form-CCPP_JFl.js";import"./useFocus-CKR8Kfvk.js";import"./useLabel-Bv0sV64n.js";import"./Label-VDo2pjQH.js";import"./Hidden-DUPaGITp.js";import"./useControlledState-DJQ8YErb.js";import"./FocusScope-cBvdiCGC.js";import"./useFocusRing-DBg1NGxh.js";import"./context-DUCBVekV.js";import"./useFormReset-BGI-E8mB.js";import"./usePress-nNimJg5a.js";import"./useFocusable-D-QSeIiW.js";import"./VisuallyHidden-svNoe17i.js";import"./Label-RDx-2swG.js";import"./useLocalizedStringFormatter-BrLv4P2q.js";import"./browser-BQR41_Xo.js";import"./EmulatedBoldText-gAgggVs5.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
