import{j as r}from"./iframe-C72LIGrp.js";import{R as l,b as p,a as g}from"./RadioButton-CJKkc6OB.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CNWykE5D.js";import{T as y}from"./Text-CvlnZLd7.js";import{C as T}from"./Content-CmhQgHK-.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-iVWHpCHC.js";import"./index-D0tOGuOJ.js";import"./index-D1phmMZw.js";import"./FieldError-D1AwEDR1.js";import"./IconWarning-DoRUMKye.js";import"./FieldError-DSjxrI1_.js";import"./utils-Day1TTYQ.js";import"./Text-_4m1t08i.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CJcwC2YA.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-cMpHNIXZ.js";import"./RadioGroup-D4GL3jWT.js";import"./Form-BHgRaZ3j.js";import"./Label-CF9BgwC5.js";import"./Hidden-qTQe9qE3.js";import"./useFormValidation-wW6D6XQK.js";import"./useFocus-B4vRNHSZ.js";import"./useControlledState-BbMqle0_.js";import"./FocusScope-CCmAn32n.js";import"./useFocusRing-DuRh0iim.js";import"./context-BWimVEWy.js";import"./useFormReset-Bg8mSl5k.js";import"./usePress-CqQxVakl.js";import"./useFocusable-Dej5ci1L.js";import"./VisuallyHidden-BStPS_vY.js";import"./Label-BuGN1EiA.js";import"./useLocalizedStringFormatter-BdEN-g86.js";import"./browser-Bf0-GHuQ.js";import"./EmulatedBoldText-CkSYZpi_.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
