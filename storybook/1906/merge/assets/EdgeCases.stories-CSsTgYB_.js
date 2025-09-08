import{j as r}from"./iframe-CB_IvR8I.js";import{R as p,b as l,a as g}from"./RadioButton-D-NxyGRF.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BfqYVaav.js";import{T as y}from"./Text-C_h1oOw9.js";import{C as T}from"./Content-DWHWqwEq.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CQ73sAu4.js";import"./mergeRefs-CSVQQCMz.js";import"./index-dvXJvLk3.js";import"./FieldError-COPLGoQY.js";import"./IconWarning-DHvxn9zQ.js";import"./FieldError-7I8SRRkd.js";import"./utils-g_K47B_Q.js";import"./Text-B8w1c0_W.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-6Jhkzuia.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-CVxGZjZu.js";import"./Form-BSDtEK6z.js";import"./useFocus-B0PqsM1A.js";import"./useLabel-DNzpHOuu.js";import"./Label-kjSyRRrG.js";import"./Hidden-jmCIdXP6.js";import"./useFormReset-DVL0Bkgs.js";import"./usePress-BSSkfFZ6.js";import"./useFocusRing-gt8SzE7T.js";import"./useFocusable-B2StGM5o.js";import"./FocusScope-2f5e0YPn.js";import"./context-CQpLcUPr.js";import"./VisuallyHidden-D4WM3JvY.js";import"./useControlledState-CS3WyH2d.js";import"./Label-DQjiInKi.js";import"./useLocalizedStringFormatter-BKMvXLmW.js";import"./browser-CyPw7Cgt.js";import"./EmulatedBoldText-B-vVao8K.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
