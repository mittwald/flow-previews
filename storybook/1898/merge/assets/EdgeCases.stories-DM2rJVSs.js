import{j as r}from"./iframe-dcfCh18n.js";import{R as p,b as l,a as g}from"./RadioButton-CBUY9A0C.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Czt4XyLf.js";import{T as y}from"./Text-D7p3kvP7.js";import{C as T}from"./Content-L9moIt07.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CGfHC8WN.js";import"./mergeRefs-BuFcdMNh.js";import"./index-Dqpikgfu.js";import"./FieldError-DGN7u_q3.js";import"./IconWarning-BWA_nqvd.js";import"./FieldError-jHHw5TXz.js";import"./utils-CaaN6tMi.js";import"./Text-38QS6QcB.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DVxEsLn1.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-DA2p6UC0.js";import"./Form-k5YG3sGC.js";import"./useFocus-DiEh5oG5.js";import"./useLabel-CpnVZyQW.js";import"./Label-DBNmmXrt.js";import"./Hidden-CnGKQwOV.js";import"./useFormReset-DV-dKI4G.js";import"./usePress-BgO5jEhv.js";import"./useFocusRing-kHWWBcyh.js";import"./useFocusable-Cdnk8Kqp.js";import"./FocusScope-BOAHQoFR.js";import"./context-BfLqp0TH.js";import"./VisuallyHidden-7QHbeduJ.js";import"./useControlledState-CjmCqi1H.js";import"./Label-CuZ7LHL3.js";import"./useLocalizedStringFormatter-CVOqiPV9.js";import"./browser-D8aXoHXc.js";import"./EmulatedBoldText-De2JmDGd.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
