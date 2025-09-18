import{j as r}from"./iframe-DjIVRH0F.js";import{R as p,b as l,a as g}from"./RadioButton-Bx5ht8hj.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-7_y5bhRt.js";import{T as y}from"./Text-B5KpGvlT.js";import{C as T}from"./Content-CUG6C0zu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXkyia6O.js";import"./mergeRefs-CZW2uA-H.js";import"./index-Bk9vRPW2.js";import"./FieldError-BR6tEJBc.js";import"./IconWarning-uc5JkYTm.js";import"./FieldError-NAgWSsRG.js";import"./utils-G1KHONaq.js";import"./Text-9ugGFdig.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DPJnwqhg.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-Dy2d5JYV.js";import"./Form-Dzmx2_fB.js";import"./useFocus-diUUCuvP.js";import"./useLabel-sV0m1Yjo.js";import"./Label-C0V31i8v.js";import"./Hidden-BYb4omOQ.js";import"./useFormReset-BnKMoc5n.js";import"./usePress-QkjqUEXJ.js";import"./useFocusRing-CVljaIJQ.js";import"./useFocusable-DNULE2pv.js";import"./FocusScope-CAKHANYN.js";import"./context-C7KKbhVC.js";import"./VisuallyHidden-snqvTAFU.js";import"./useControlledState-Cd9JFs6w.js";import"./Label-oyqcLq-C.js";import"./useLocalizedStringFormatter-DnbCLLYR.js";import"./browser-Ba6KZWy-.js";import"./EmulatedBoldText-BSrsAcTM.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
