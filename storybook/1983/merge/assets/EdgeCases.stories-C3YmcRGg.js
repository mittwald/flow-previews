import{j as r}from"./iframe-Fj9rH4cM.js";import{R as p,b as l,a as g}from"./RadioButton-DLjaZ6Ko.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-B18x_2R2.js";import{T as y}from"./Text-CY4-u4so.js";import{C as T}from"./Content--BCeQafz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-2d7AdEi8.js";import"./mergeRefs-DWVfDnig.js";import"./index-zrl6XAGz.js";import"./FieldError-DmxLphhJ.js";import"./IconWarning-BqHcxRer.js";import"./FieldError-Dx-XJATE.js";import"./utils-1iPQLSxY.js";import"./Text-DCFUXQ-H.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CAvmnwIN.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-C8wENtXA.js";import"./Form-OtjI-dAW.js";import"./useFocus-7HBUp4O0.js";import"./useLabel-C-3cKpbA.js";import"./Label-BqD1zatE.js";import"./Hidden-Duc9NbhT.js";import"./useFormReset-D9GIYNIc.js";import"./usePress-CXUdxwPb.js";import"./useFocusRing-CKWUlu0I.js";import"./useFocusable-DA60a4RB.js";import"./FocusScope-ComN1xIG.js";import"./context-qP4IgOj6.js";import"./VisuallyHidden-6EX0wPu2.js";import"./useControlledState-DkD4o1Gz.js";import"./Label-gqfIXoZt.js";import"./useLocalizedStringFormatter-CEyIEfqZ.js";import"./browser-VEiFSO1p.js";import"./EmulatedBoldText-Ctpzt0x1.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
