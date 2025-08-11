import{j as r}from"./iframe-D2buA_qM.js";import{R as p,b as l,a as g}from"./RadioButton-B1zBUk8P.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-jUr2fnq1.js";import{T as y}from"./Text-yAGEZlE0.js";import{C as T}from"./Content-DR9JDPvZ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-NPJkLJf3.js";import"./mergeRefs-DQR1xYYS.js";import"./index-DJwKP2NW.js";import"./FieldError-DDV9a_7l.js";import"./IconWarning-IOoTZAJG.js";import"./FieldError-B8sT_j_d.js";import"./utils-C_LZ7m3D.js";import"./Text-BCY1tMCR.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CLNzakRh.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BPW5Vl0L.js";import"./Form-BNf6kdxI.js";import"./useFocus-1B3Rl8Uo.js";import"./useLabel-CoFh3sW6.js";import"./Label-N33FpYFY.js";import"./Hidden-avqQs3vJ.js";import"./useFormReset-Sc5in8RN.js";import"./usePress-BIlt6lCU.js";import"./useFocusRing-k1804b6h.js";import"./useFocusable-B02zeCY6.js";import"./FocusScope-D_7nktvV.js";import"./context-DqOuYBdO.js";import"./VisuallyHidden-CgNpbGUk.js";import"./useControlledState-DPiym9a8.js";import"./Label-BBxZTNKD.js";import"./useLocalizedStringFormatter-CCkIfvdA.js";import"./browser-CXT6LfEZ.js";import"./EmulatedBoldText-rwysn7dV.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
