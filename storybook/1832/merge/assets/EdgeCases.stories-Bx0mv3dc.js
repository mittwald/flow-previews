import{j as r}from"./iframe-BsKdyUUo.js";import{R as p,b as l,a as g}from"./RadioButton-B7w3wqtV.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-7bMn1irr.js";import{T as y}from"./Text-DM7V5ibr.js";import{C as T}from"./Content-60ipvsNI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BPLOAGWE.js";import"./mergeRefs-CQ-EiqC6.js";import"./index-E2r8vySZ.js";import"./FieldError-IFpwvXo1.js";import"./IconWarning-BNNa1TWi.js";import"./FieldError-CHLtNaA2.js";import"./utils-DeHCGthq.js";import"./Text-BeFIQxaH.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-Cp7GSfYr.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-Dhlvwpu0.js";import"./Form-DEii-ghQ.js";import"./useFocus-BvYTyo5a.js";import"./useLabel-BowSekYU.js";import"./Label-E4B9ly-I.js";import"./Hidden-DrjQVD0p.js";import"./useFormReset-BCcZ866S.js";import"./usePress-BPobG-50.js";import"./useFocusRing-B-gSRSGq.js";import"./useFocusable-CIlrQQDJ.js";import"./FocusScope-r24VL_U3.js";import"./context-NhbPwiu7.js";import"./VisuallyHidden-Cn_ktU6z.js";import"./useControlledState-BMR5C57X.js";import"./Label-DJsBJ_92.js";import"./useLocalizedStringFormatter-DE5fT8Pw.js";import"./browser-kgZUWjhe.js";import"./EmulatedBoldText-VybBTGHf.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
