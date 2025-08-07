import{j as r}from"./iframe-C7QIGs8p.js";import{R as p,b as l,a as g}from"./RadioButton-DVLdMJhS.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-dj-yvrOY.js";import{T as y}from"./Text-CTrM2jC7.js";import{C as T}from"./Content-D9ztT7AN.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BLMgZptu.js";import"./mergeRefs-CRedkLlp.js";import"./index-CQXo9c0q.js";import"./FieldError-BirN45_p.js";import"./IconWarning-X_5SFXzD.js";import"./FieldError-DNXr8e-i.js";import"./utils-BtsnBH_L.js";import"./Text-FQKaNMRy.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DBPLFPC5.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-Ctzwtl0f.js";import"./Form-BYQvXm3I.js";import"./useFocus-ypxUxEvE.js";import"./useLabel-D-QYQdwI.js";import"./Label-BSYnHYDD.js";import"./Hidden-DWOQ1i8d.js";import"./useFormReset-DrAuwzZe.js";import"./usePress-Bh987CF2.js";import"./useFocusRing-DKwzelHt.js";import"./useFocusable-C2Z9oquv.js";import"./FocusScope-BUYOglmY.js";import"./context-C2AKAduY.js";import"./VisuallyHidden-DORJbjtt.js";import"./useControlledState-KNtUQTSK.js";import"./Label-Bc44wfjj.js";import"./useLocalizedStringFormatter-DOPRUnFZ.js";import"./browser-C2BAwQT3.js";import"./EmulatedBoldText-_WA-B4P4.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
