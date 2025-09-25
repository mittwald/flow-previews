import{j as r}from"./iframe-RErHS549.js";import{R as p,b as l,a as g}from"./RadioButton-CUhESes8.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Dhk4dZDV.js";import{T as y}from"./Text-CPoMhumh.js";import{C as T}from"./Content-BoZpUrnE.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-U9W9I2uQ.js";import"./mergeRefs-tFWMCLRY.js";import"./index-CKO7ssoe.js";import"./FieldError-Da2hJYUR.js";import"./IconWarning-BaoYyhFJ.js";import"./FieldError-CXwIJwJV.js";import"./utils-CdmgfGZ7.js";import"./Text-CT26T-mx.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-Dw31cGlX.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DvxXCFKX.js";import"./Form-CN0G9X2_.js";import"./useFocus-JMpVLlR6.js";import"./useLabel-ky1cKMBf.js";import"./Label-BxIDS5PE.js";import"./Hidden-BOL9WLXj.js";import"./useFormReset-8mkS99ko.js";import"./usePress-Qq9By8Rc.js";import"./useFocusRing-DWSWsOVe.js";import"./useFocusable-D3_285Zs.js";import"./FocusScope-CM6IwZZ2.js";import"./context-BoCUnuIe.js";import"./VisuallyHidden-L1E0nJWV.js";import"./useControlledState-D306zaQt.js";import"./Label-COqzxAxq.js";import"./useLocalizedStringFormatter-Cy6BSIiI.js";import"./browser-32b-cNga.js";import"./EmulatedBoldText-JQA-sSfV.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
