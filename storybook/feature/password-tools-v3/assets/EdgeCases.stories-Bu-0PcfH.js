import{j as r}from"./iframe-k40rl9C_.js";import{R as p,b as l,a as g}from"./RadioButton-CCBFzzr2.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BZ0yOXJ7.js";import{T as y}from"./Text-B-gvPcDV.js";import{C as T}from"./Content-B57uo9dD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DHimXFH6.js";import"./mergeRefs-DeLnkq3n.js";import"./index-0ME5rF8X.js";import"./FieldError-CXDHQN9H.js";import"./IconWarning-Cbv9M52D.js";import"./FieldError-rn1TZOfn.js";import"./utils-KRUPT0lQ.js";import"./Text-BHVi9XYC.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-D1FYaUcR.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CGGdKeMV.js";import"./Form-c2DgNPZJ.js";import"./useFocus-CSVfmLbx.js";import"./useLabel-D45A24Bq.js";import"./Label-DIzINetI.js";import"./Hidden-U9FjqIX0.js";import"./useFormReset-CIlCc03R.js";import"./usePress-CdMS6zrp.js";import"./useFocusRing-xJVp1dT7.js";import"./useFocusable-Bkb1JWUQ.js";import"./FocusScope-D54ZyU14.js";import"./context-B7pdk5J-.js";import"./VisuallyHidden-CgVp0Wt0.js";import"./useControlledState-BJUCb_CR.js";import"./Label-f_MJI4Fh.js";import"./useLocalizedStringFormatter-DKKzTgA5.js";import"./browser-CjSC5npA.js";import"./EmulatedBoldText-BNBH8DgQ.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
