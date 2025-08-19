import{j as r}from"./iframe-B2KmHf-y.js";import{R as p,b as l,a as g}from"./RadioButton-R1NWEar5.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-B8FfkyrR.js";import{T as y}from"./Text-BTzROJ4u.js";import{C as T}from"./Content-CMQZTgBp.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DZxLHc6o.js";import"./mergeRefs-CLz2fAhu.js";import"./index-DRuHIqI3.js";import"./FieldError-Rn5jDQFX.js";import"./IconWarning-BfZFkMSG.js";import"./FieldError-DUJhKpS8.js";import"./utils-CGNLDjxu.js";import"./Text-BzjjTZNC.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-C6HnNOlI.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DYJVttIT.js";import"./Form-fpEywjGd.js";import"./useFocus-BfYJCy_-.js";import"./useLabel-p5QRldAo.js";import"./Label-1elQ--Nx.js";import"./Hidden-B8XFb6rR.js";import"./useFormReset-DxoPgNRk.js";import"./usePress-DTR6VjFp.js";import"./useFocusRing-CE2mXCfJ.js";import"./useFocusable-17jCqo4h.js";import"./FocusScope-DhJvjcql.js";import"./context-BMg6CKyL.js";import"./VisuallyHidden-C6qwrwG6.js";import"./useControlledState-CjBtDVaa.js";import"./Label-CEurSWF2.js";import"./useLocalizedStringFormatter-C1KZ20Nl.js";import"./browser-CAjTLwtK.js";import"./EmulatedBoldText-D4QqJqwf.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
