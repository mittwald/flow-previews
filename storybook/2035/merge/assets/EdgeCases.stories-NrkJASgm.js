import{j as r}from"./iframe-CP5fTbjA.js";import{R as l,b as p,a as g}from"./RadioButton-BAeQluMa.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Cal0Qi6d.js";import{T as y}from"./Text-CHvdz95V.js";import{C as T}from"./Content-RYuJf9wM.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CTnt5eSB.js";import"./index-hIOjYjaD.js";import"./index-DskZqzrG.js";import"./FieldError-De2xyHB9.js";import"./IconWarning-YasB_Ei3.js";import"./FieldError-CsW0lZ5n.js";import"./utils-D6GTtcOE.js";import"./Text-BAGiBnj-.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-Yhq-KmU5.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-D5Xsb7wJ.js";import"./RadioGroup-B0LHcmK2.js";import"./Form-DU1fRx45.js";import"./Label-CxfqiuLL.js";import"./Hidden-CR2rUGYE.js";import"./useFormValidation-Lrzd87zJ.js";import"./useFocus-wlnmJgKA.js";import"./useControlledState-5yv2Ipvc.js";import"./FocusScope-OWR7C_89.js";import"./useFocusRing-Cgj30sRP.js";import"./context-pkC0B_Pd.js";import"./useFormReset-B6af-x2Y.js";import"./usePress-BOoZUp13.js";import"./useFocusable-BoWde-QA.js";import"./VisuallyHidden-umqttFyt.js";import"./Label-BqN0rMYY.js";import"./useLocalizedStringFormatter-DGz7N0CE.js";import"./browser-BxAQ3I6S.js";import"./EmulatedBoldText-CnmkyqOO.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
