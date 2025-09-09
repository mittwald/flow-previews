import{j as r}from"./iframe-CW4eA9k4.js";import{R as p,b as l,a as g}from"./RadioButton-DES1hF6e.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories--5maMn_l.js";import{T as y}from"./Text-Db3UCsEl.js";import{C as T}from"./Content-Dquqrwhe.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bql0h4A2.js";import"./mergeRefs-BcYJB-lQ.js";import"./index-B6-53XGK.js";import"./FieldError-DDMeD0d0.js";import"./IconWarning-D1jj5TJf.js";import"./FieldError-DfDNH_Ov.js";import"./utils-LQZW6rX9.js";import"./Text-CUI2zCQ5.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CW48NvkQ.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-yU0wNpEI.js";import"./Form-Carw_-CN.js";import"./useFocus-rpK25HP0.js";import"./useLabel-CsKDXT_H.js";import"./Label-Bbcp5SCN.js";import"./Hidden-DmXjFFnH.js";import"./useFormReset-C1QC8NQi.js";import"./usePress-Du8ADkCR.js";import"./useFocusRing-O7qNIesH.js";import"./useFocusable-UDevydpZ.js";import"./FocusScope-DDrNwogJ.js";import"./context-DFsoEI_J.js";import"./VisuallyHidden-DAkOZO38.js";import"./useControlledState-Dx2k1uzE.js";import"./Label-BmbUI49G.js";import"./useLocalizedStringFormatter-Cgh8agJ8.js";import"./browser-CS0dj8Dh.js";import"./EmulatedBoldText-Dbwzf73Y.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
