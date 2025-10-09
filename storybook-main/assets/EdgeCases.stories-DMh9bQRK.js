import{j as r}from"./iframe-DwZ8STeX.js";import{R as l,b as p,a as g}from"./RadioButton-DWJe8cEy.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-04wIZjWR.js";import{T as y}from"./Text-O3JAN1OQ.js";import{C as T}from"./Content-Di3ECamq.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B5_7XuIt.js";import"./index-ULfo01cY.js";import"./index-DRXVqLbm.js";import"./FieldError-DOIfsPUC.js";import"./IconWarning-dtP1FcGg.js";import"./FieldError-CX3z6nx3.js";import"./utils-7Pnsuj4A.js";import"./Text-BcrniBgV.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-Wcgd239S.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-BLJfe8lC.js";import"./RadioGroup-L8a4Mkf4.js";import"./Form-ekHeB2q6.js";import"./Label-DpGi0C14.js";import"./Hidden-CV41pM0d.js";import"./useFormValidation-DWWt7inC.js";import"./useFocus-BONLbswZ.js";import"./useControlledState-Blay967p.js";import"./FocusScope-CIj22QkH.js";import"./useFocusRing-Bg4FiEXG.js";import"./context-B00wSq60.js";import"./useFormReset-DQpyIayp.js";import"./usePress-JMMpWwD2.js";import"./useFocusable-p3-NtQMC.js";import"./VisuallyHidden-VLSV2bjz.js";import"./Label-wZ6tq0z6.js";import"./useLocalizedStringFormatter-B7gF29kp.js";import"./browser-DDdNHtRK.js";import"./EmulatedBoldText-Cn2ModP-.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
