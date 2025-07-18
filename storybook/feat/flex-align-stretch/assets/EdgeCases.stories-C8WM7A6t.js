import{j as r}from"./iframe-D5s8HkwO.js";import{R as p,b as l,a as g}from"./RadioButton-BX7NzeR2.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-X2ap19_n.js";import{T as y}from"./Text-Cmu5-2wY.js";import{C as T}from"./Content-oYPgyHUq.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BCJdYZuQ.js";import"./mergeRefs-vd2X_irL.js";import"./index-DQy1KAPI.js";import"./FieldError-DDxFFvpK.js";import"./IconWarning-BXD0iv1k.js";import"./FieldError-ZxKBib3w.js";import"./utils-CSEH-j9T.js";import"./Text-BD_PegNR.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-BAadG1ef.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-Bj4686PM.js";import"./Form-DSTVN1kq.js";import"./useFocus-ChgCHlwF.js";import"./useLabel-Bmfvdk3t.js";import"./Label-DFio2qHv.js";import"./Hidden-DtltZqKg.js";import"./useFormReset-CQNUsXCF.js";import"./usePress-CLLKaLvj.js";import"./useFocusRing-0N6EWJVX.js";import"./useFocusable-aHoAMXnZ.js";import"./FocusScope-DbtYTQ61.js";import"./context-BRoJySMC.js";import"./VisuallyHidden-WLO0QMJU.js";import"./useControlledState-Cw_CbRo5.js";import"./Label-iSiMu1ip.js";import"./useLocalizedStringFormatter-Dib9oUr8.js";import"./browser-CypciHn-.js";import"./EmulatedBoldText-CCMYCjn2.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
