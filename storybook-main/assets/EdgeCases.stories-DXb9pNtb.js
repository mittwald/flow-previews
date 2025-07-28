import{j as r}from"./iframe-ABGSKs5r.js";import{R as p,b as l,a as g}from"./RadioButton-B0319H2G.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DwpJYwo_.js";import{T as y}from"./Text-DtVn_38U.js";import{C as T}from"./Content-BMgigOE1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-I2hhpXOk.js";import"./mergeRefs-ARavDgvF.js";import"./index-DcXxLGBR.js";import"./FieldError-C4jPbCeF.js";import"./IconWarning-CrQ4Sq1v.js";import"./FieldError-B1yCOr13.js";import"./utils-DiDGDlBS.js";import"./Text-BcmTaKwf.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BP89EgHY.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CBHHsmYr.js";import"./Form-CvEoesSu.js";import"./useFocus-Dg7gZngi.js";import"./useLabel-DcKqU1cs.js";import"./Label-BwOKtJNA.js";import"./Hidden-B4dLwXdT.js";import"./useFormReset-CDcF8HBQ.js";import"./usePress-BBkNBI46.js";import"./useFocusRing-Q7Twgd_z.js";import"./useFocusable-BAjBFm0a.js";import"./FocusScope-CeShPDZQ.js";import"./context-DyJmA51t.js";import"./VisuallyHidden-DZthTgNa.js";import"./useControlledState-Un3rm8eO.js";import"./Label-B_lAnajd.js";import"./useLocalizedStringFormatter-CvJCn7rq.js";import"./browser-BJO6t65z.js";import"./EmulatedBoldText-GSAm8QjJ.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
