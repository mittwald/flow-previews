import{j as r}from"./iframe-oDnSRKrU.js";import{R as l,b as p,a as g}from"./RadioButton-Da8j0yYv.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-ZqjdXrqK.js";import{T as y}from"./Text-BRg3dDEW.js";import{C as T}from"./Content-BKy4tn48.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DCrF-e2x.js";import"./mergeRefs-4PJ6advV.js";import"./index-DTS24oU_.js";import"./FieldError-CEpLicN2.js";import"./IconWarning-BDchKd2I.js";import"./FieldError-Cv1iD8Fq.js";import"./utils-BOFgiu6B.js";import"./Text-BhCBXCIE.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-B-xyuT8k.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-LPWBXzKB.js";import"./Form-HfZRlNH7.js";import"./useLabel-IKTU3VFM.js";import"./Label-pm9yE2cO.js";import"./Hidden-B7YQi_X1.js";import"./useFormValidation-CpLCzOC_.js";import"./useFocus-CBAj8SSC.js";import"./useControlledState-C4SjqBt9.js";import"./FocusScope-CFc2lXVF.js";import"./useFocusRing-BvVC0KGc.js";import"./context-BACVj_LI.js";import"./useFormReset-m0r5jrEx.js";import"./usePress-BlfeWo8-.js";import"./useFocusable-BIMsrSRy.js";import"./VisuallyHidden-D8Dskj69.js";import"./Label-DdcSy8o6.js";import"./useLocalizedStringFormatter-DYhwfjLN.js";import"./browser-B1IGKoaP.js";import"./EmulatedBoldText-EQ8sxSlk.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
