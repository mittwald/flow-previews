import{j as r}from"./iframe-Budb-7am.js";import{R as p,b as l,a as g}from"./RadioButton-deNjOC4J.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-ClRKR0I-.js";import{T as y}from"./Text-1Vh0OzT8.js";import{C as T}from"./Content-BS3f4Agc.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-HNH7RKnU.js";import"./mergeRefs-BTIKDTd_.js";import"./index-BpM7E2Cn.js";import"./FieldError-YXSjvpRj.js";import"./IconWarning-DHwZhMPm.js";import"./FieldError--Cn4xsFj.js";import"./utils-BvIm0V7l.js";import"./Text-3Ba5r2Ha.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CM-fkr4-.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DJOW2jTe.js";import"./Form-DC4Rz7ax.js";import"./useFocus-Pkimm2oK.js";import"./useLabel-TSCdqSxt.js";import"./Label-RM_Po7kI.js";import"./Hidden-ldu86gX3.js";import"./useFormReset-Y1wMMKwI.js";import"./usePress-loP-J0cx.js";import"./useFocusRing-Dpjm87_-.js";import"./useFocusable-CC21Us72.js";import"./FocusScope-Bx0T309W.js";import"./context-CJMSS7cd.js";import"./VisuallyHidden-BhwKMH6u.js";import"./useControlledState-SkoShBYt.js";import"./Label-DzBJxL-G.js";import"./useLocalizedStringFormatter-CybNj2CY.js";import"./browser-DtJAwUnv.js";import"./EmulatedBoldText-os5LgzLJ.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
