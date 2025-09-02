import{j as r}from"./iframe-h8pIb5Kv.js";import{R as p,b as l,a as g}from"./RadioButton-TDZPH3F1.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BjT0w5JY.js";import{T as y}from"./Text-BnbJhuWd.js";import{C as T}from"./Content-CXOp_VIF.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bz7r3WKV.js";import"./mergeRefs-lWAZUqj4.js";import"./index-BfqXMi3X.js";import"./FieldError-Df2paDgt.js";import"./IconWarning-sarICh-8.js";import"./FieldError-DvcRcsU3.js";import"./utils-Cexs4pbb.js";import"./Text-DqGJg9Bh.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-af-u3kka.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CdiiyttP.js";import"./Form-Cc9esAZh.js";import"./useFocus-B-etxL-K.js";import"./useLabel-DzpD0Vg0.js";import"./Label-BakLPZbA.js";import"./Hidden-Dc9Kv2au.js";import"./useFormReset-BL-bWUrE.js";import"./usePress-BeaeLWhg.js";import"./useFocusRing-7BAVz6YI.js";import"./useFocusable-CAY1QTdY.js";import"./FocusScope-CkC1yDzC.js";import"./context-pcAEe7OC.js";import"./VisuallyHidden-CByVy45C.js";import"./useControlledState-BXC3uZfW.js";import"./Label-B99siZxZ.js";import"./useLocalizedStringFormatter-157cI7o6.js";import"./browser-f0s2BEP-.js";import"./EmulatedBoldText-D5nLjsiS.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
