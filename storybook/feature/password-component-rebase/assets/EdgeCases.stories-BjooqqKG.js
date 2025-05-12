import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as l,b as p,a as g}from"./RadioButton-BAdZxCVT.js";import"./index-F2Fta7eo.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Bij4CR7L.js";import{T as y}from"./Text-CSTNT9NW.js";import{C as T}from"./Content-DAdrvVNR.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-dnCHcaDZ.js";import"./mergeRefs-12BfVTtv.js";import"./index-GHXRqlzO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-FKzx4Va7.js";import"./FieldError-vV6cTwrc.js";import"./IconWarning-BXNHVn6I.js";import"./FieldError-BaSwT8L9.js";import"./utils-DsSK6wng.js";import"./Text-D85TVzOv.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-BlZBMg8V.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BZTcCFeX.js";import"./Form-DGdGrcxA.js";import"./useLabel-DB0A2tZF.js";import"./useFormValidation-Cx3HAYEY.js";import"./useFocus-CPhYqd-d.js";import"./Label-DhTxnYZq.js";import"./Hidden-aaDrlwOM.js";import"./useFormReset-hDk0Ijlo.js";import"./usePress-heCNvahi.js";import"./useFocusRing-4oM8aI2c.js";import"./useFocusable-S4fA3fDW.js";import"./FocusScope-BlLq5c4F.js";import"./useLocalizedStringFormatter-QhihLYa3.js";import"./VisuallyHidden-LoYkyM-T.js";import"./useControlledState-15AFXVxl.js";import"./Label-RNQn_NAE.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DovK0xj5.js";const dr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const sr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,sr as __namedExportsOrder,dr as default};
