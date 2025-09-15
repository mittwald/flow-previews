import{j as r}from"./iframe-BwL5TE8j.js";import{R as p,b as l,a as g}from"./RadioButton-Djiwas7E.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-C7qSq37U.js";import{T as y}from"./Text-DGokGAz6.js";import{C as T}from"./Content-GJd4-WZf.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CbKMeUzs.js";import"./mergeRefs-BHw4ks4u.js";import"./index-CZakacYE.js";import"./FieldError-CJJ4jg0R.js";import"./IconWarning-CFzxGyJP.js";import"./FieldError-sKqByAl8.js";import"./utils-D5K6eLjb.js";import"./Text-lZrUqOdv.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CyHHqQhj.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-CzlyUtsM.js";import"./Form-GeiXMdXB.js";import"./useFocus-B2onYDnw.js";import"./useLabel-0Q5rWqkC.js";import"./Label-CyvFU2WD.js";import"./Hidden-Bk94MQHU.js";import"./useFormReset-BObq63rv.js";import"./usePress-H2LW6Ly5.js";import"./useFocusRing-Dnm1Bceh.js";import"./useFocusable-DDKZ0z65.js";import"./FocusScope-BNA3YsCO.js";import"./context-CLDbs9sm.js";import"./VisuallyHidden-kWjY9XjT.js";import"./useControlledState-B8vyFbA3.js";import"./Label-DWj4cilU.js";import"./useLocalizedStringFormatter-B8lu9hLL.js";import"./browser-BFoEGF9u.js";import"./EmulatedBoldText-C4JMZ2uF.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
