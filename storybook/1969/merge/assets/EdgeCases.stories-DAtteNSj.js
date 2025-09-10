import{j as r}from"./iframe-BpdxrwIb.js";import{R as p,b as l,a as g}from"./RadioButton-54VuZPII.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-B98b2zmE.js";import{T as y}from"./Text-DE4Q9wlE.js";import{C as T}from"./Content-q8bkAQFZ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DQxbhqBM.js";import"./mergeRefs-DF-I3_2K.js";import"./index-C0Vgww7F.js";import"./FieldError-BNkV0zVI.js";import"./IconWarning-DfpVuNuz.js";import"./FieldError-CSYQEfgd.js";import"./utils-60PhQC-u.js";import"./Text-s-uJNCfK.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-C-0T0WEl.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-D6OZHEgJ.js";import"./Form-BBooAEet.js";import"./useFocus-C0zYbozs.js";import"./useLabel-BwWD19Pf.js";import"./Label-CccUO69Q.js";import"./Hidden-DpRx3EBx.js";import"./useFormReset-BDGpTE2A.js";import"./usePress-CXS9utKX.js";import"./useFocusRing-s_pNlp3q.js";import"./useFocusable-DOYJV0v_.js";import"./FocusScope-CzMQYsxZ.js";import"./context-CefFUzIe.js";import"./VisuallyHidden-C_bZjV4d.js";import"./useControlledState-BiXfF0Y1.js";import"./Label-B05m9Jha.js";import"./useLocalizedStringFormatter-B3Ezl97M.js";import"./browser-CjlkZb14.js";import"./EmulatedBoldText-BK7BqSsu.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
