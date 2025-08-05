import{j as r}from"./iframe-BwUhuRm7.js";import{R as p,b as l,a as g}from"./RadioButton-Daw4GtXq.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DCNNh635.js";import{T as y}from"./Text-BBSS7FYM.js";import{C as T}from"./Content-CmFMG8xD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cfu_dxW5.js";import"./mergeRefs-DFtW8n00.js";import"./index-C5CMDY3C.js";import"./FieldError-ByWvRvE-.js";import"./IconWarning-DVI2HiM9.js";import"./FieldError-DsFBc8y3.js";import"./utils-DDoNb5qO.js";import"./Text-CbUcC8Oz.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout--rEsTfUo.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-D5MCNJiO.js";import"./Form-C5mHTKgE.js";import"./useFocus-BdFL2QuQ.js";import"./useLabel-CJJXcYYW.js";import"./Label-D-Cavg7S.js";import"./Hidden-DCcQ90cW.js";import"./useFormReset-dodywWj-.js";import"./usePress-DMqEl6WQ.js";import"./useFocusRing-UIPQHDoL.js";import"./useFocusable-BiRHUtLW.js";import"./FocusScope-3xnL38Zh.js";import"./context-bUzCuHOu.js";import"./VisuallyHidden-C84OwjFZ.js";import"./useControlledState-D841p2oi.js";import"./Label-Dryy0w3E.js";import"./useLocalizedStringFormatter-CNjvSUsH.js";import"./browser-CwFUDHtx.js";import"./EmulatedBoldText-Do_4Bp9I.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
