import{j as r}from"./iframe-BKWcqz6w.js";import{R as p,b as l,a as g}from"./RadioButton-C0Xea6TV.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DrWIGOrY.js";import{T as y}from"./Text-Fi67VBtl.js";import{C as T}from"./Content-CS9wxNna.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C5Igvylm.js";import"./mergeRefs-C4ZbtdaD.js";import"./index-DJrDs1kh.js";import"./FieldError-DKrQw3Mj.js";import"./IconWarning-CiiLQ5Id.js";import"./FieldError-B_JMWavC.js";import"./utils-CQeLeN4J.js";import"./Text-ChPHkoYL.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-Dc4TbJfC.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-nK5SycJm.js";import"./Form-DoHwQU7E.js";import"./useFocus-BlH6xcxh.js";import"./useLabel-D1fNKuwy.js";import"./Label-D6DYt8_O.js";import"./Hidden-CkZKnpKj.js";import"./useFormReset-DXZOmU-A.js";import"./usePress-BwfaRRJR.js";import"./useFocusRing-BgI-Wk5t.js";import"./useFocusable-BSIifKXa.js";import"./FocusScope-uRnVEpI_.js";import"./context-QVFAHjz-.js";import"./VisuallyHidden-DSrM5G1n.js";import"./useControlledState-D-vJPGY9.js";import"./Label-Cbbeq5AD.js";import"./useLocalizedStringFormatter-DH0uxzC_.js";import"./browser-DUKC-94T.js";import"./EmulatedBoldText-BJOxnJTr.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
