import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as l,b as p,a as g}from"./RadioButton-BqcRY11u.js";import"./index-CXcpQZ5J.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-C1GpKvp9.js";import{T as y}from"./Text-ilWQSh2o.js";import{C as T}from"./Content-BSOPJRCf.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BhVCUVKf.js";import"./mergeRefs-B22Il0iz.js";import"./index-_FZDHFZo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DJQWtO6Q.js";import"./FieldError-Egs4LnTH.js";import"./IconWarning-B9HL9CFH.js";import"./FieldError-Cz4aM9kS.js";import"./utils-Df1au6pS.js";import"./Text-WoclspSc.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-Cd0SXGvS.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-DBRfdhfo.js";import"./Form-BxoNbjqJ.js";import"./useLabel-DrVJGper.js";import"./Label-DfZa7xTI.js";import"./Hidden-DtYLaSTT.js";import"./useFormReset-McAVcQ-S.js";import"./usePress-v55RTCzR.js";import"./useFocus-Beyq6_MT.js";import"./useFocusRing-Dy9tY2VR.js";import"./useFocusable-C5BPrGjf.js";import"./useFormValidation-CX89bhxE.js";import"./FocusScope-DN1fuaqe.js";import"./useLocalizedStringFormatter-PBUSZsmh.js";import"./VisuallyHidden-D7VTLdOh.js";import"./useControlledState-CHe-wEx1.js";import"./Label-Ccht5eDB.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-BPJW4PHD.js";const dr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const sr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,sr as __namedExportsOrder,dr as default};
