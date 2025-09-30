import{j as r}from"./iframe-BkQEXHdV.js";import{R as l,b as p,a as g}from"./RadioButton-CkwTVw7e.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CGeA-1t-.js";import{T as y}from"./Text-waR3uY_i.js";import{C as T}from"./Content-BKfTbN4Q.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DGcDvaD0.js";import"./mergeRefs-CrNR4Adf.js";import"./index-NrWjSaDr.js";import"./FieldError-1DZO4FvY.js";import"./IconWarning-Bhg2W068.js";import"./FieldError-DGWLCZ3i.js";import"./utils-vh8nJaNh.js";import"./Text-vqf5-lqk.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CTywkdvF.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DgQ_WHt5.js";import"./Form-BhNATljn.js";import"./useLabel-B9G_gEh3.js";import"./Label-CmAFKzLd.js";import"./Hidden-B12OlcMW.js";import"./useFormValidation-O3WohNjc.js";import"./useFocus-DvrdYcoe.js";import"./useControlledState-DaeuqNOc.js";import"./FocusScope-1Unh1ODV.js";import"./useFocusRing-DgjuUHXy.js";import"./context-DYNAGC-2.js";import"./useFormReset-C2GAx1Zc.js";import"./usePress-CS8Sp9_K.js";import"./useFocusable-E_oKRPWi.js";import"./VisuallyHidden-BJPXQOEU.js";import"./Label-DCwzji4R.js";import"./useLocalizedStringFormatter-C-gsK0Kk.js";import"./browser-T6JBIPNk.js";import"./EmulatedBoldText-DAPjbogn.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const lr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,lr as __namedExportsOrder,pr as default};
