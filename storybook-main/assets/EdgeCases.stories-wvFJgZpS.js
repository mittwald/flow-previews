import{j as r}from"./iframe-BsWE3_7o.js";import{R as l,b as p,a as g}from"./RadioButton-DMOdbXgC.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DaOr8yxU.js";import{T as y}from"./Text-BX8imB2t.js";import{C as T}from"./Content-BLr0QxW1.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cm7zYSgo.js";import"./index-Bx4whYyJ.js";import"./index-Dl-28hpS.js";import"./FieldError-Dyno9e6-.js";import"./IconWarning-DP87PzzZ.js";import"./FieldError-B9NI0uR6.js";import"./utils-CDS5H-7_.js";import"./Text-TQ7kewRG.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CkPG8N6V.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-r7PJwVhH.js";import"./RadioGroup-Cal5gyvy.js";import"./Form-C2iHaD1W.js";import"./Label-CRuRdSc0.js";import"./Hidden-BJN4u45n.js";import"./useFormValidation-5Qvk76gI.js";import"./useFocus-D0VElTMN.js";import"./useControlledState-ejVvWz-k.js";import"./FocusScope-BU2EHzP0.js";import"./useFocusRing-VBFwaSrL.js";import"./context-JgUU7ob0.js";import"./useFormReset-DgPn8KEa.js";import"./usePress-BAk4CpA9.js";import"./useFocusable-CddXNiQZ.js";import"./VisuallyHidden-CnzfSQ3j.js";import"./Label-D6AcunKl.js";import"./useLocalizedStringFormatter-Cam9elWn.js";import"./browser-LwAPTQ-2.js";import"./EmulatedBoldText-BTQlJ2rY.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
