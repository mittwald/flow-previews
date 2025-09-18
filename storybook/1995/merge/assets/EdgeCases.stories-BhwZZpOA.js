import{j as r}from"./iframe-CqRNQciv.js";import{R as p,b as l,a as g}from"./RadioButton-DgMecsot.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CG44GmwA.js";import{T as y}from"./Text-BmM8CnJX.js";import{C as T}from"./Content-CFBsCyiQ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BQfe9ict.js";import"./mergeRefs-ClD3ZqgW.js";import"./index-BklbjYgM.js";import"./FieldError-5_HnQqyB.js";import"./IconWarning-Byt1rMjk.js";import"./FieldError-DSIOhjbk.js";import"./utils-CDZvBAhZ.js";import"./Text-DPg2upf1.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-M1TXdrRs.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-Djy8QrCA.js";import"./Form-B_ua98af.js";import"./useFocus-C23Lw-eJ.js";import"./useLabel-B8y4VsiL.js";import"./Label-D-Urwdt3.js";import"./Hidden-B2J6qN6V.js";import"./useFormReset-1xQ2Hjo2.js";import"./usePress-Qa0Hjq2B.js";import"./useFocusRing-B0f1J6LY.js";import"./useFocusable-Bbxq5z2c.js";import"./FocusScope-1rZ1gxhZ.js";import"./context-DEliiBST.js";import"./VisuallyHidden-CgIcH36Q.js";import"./useControlledState-CM_u9bSJ.js";import"./Label-B1-MUuXM.js";import"./useLocalizedStringFormatter-Ctan4lLb.js";import"./browser-DF98vWDx.js";import"./EmulatedBoldText-Dxetj7v-.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
