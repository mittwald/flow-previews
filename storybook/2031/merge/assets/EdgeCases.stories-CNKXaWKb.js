import{j as r}from"./iframe-BEnK-FWT.js";import{R as l,b as p,a as g}from"./RadioButton-BuRKdZVT.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DxQA12fE.js";import{T as y}from"./Text-DfapAs8s.js";import{C as T}from"./Content-5jmfeXet.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DvB_ZVBE.js";import"./index-BPBs0lX7.js";import"./index-DmntYai2.js";import"./FieldError-BuJc9GYO.js";import"./IconWarning-Du8jrWof.js";import"./FieldError-BHfIYnvw.js";import"./utils-HuzRHECM.js";import"./Text-pg5s_iHF.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BOi5a7HP.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-tYkM_-lJ.js";import"./Form-B4lJ4F2B.js";import"./useLabel-DH4gBFQn.js";import"./Label-DpqaIvZR.js";import"./Hidden-B8h_3GWf.js";import"./useFormValidation-CaI2qlPb.js";import"./useFocus-DNN1vAkK.js";import"./useControlledState-M8qHyrFf.js";import"./FocusScope-CIlgtdEP.js";import"./useFocusRing-Bx80huIr.js";import"./context-B1E8CUSR.js";import"./useFormReset-UhEuFSE1.js";import"./usePress-BT-0Cvdy.js";import"./useFocusable-B7vzQveK.js";import"./VisuallyHidden-uM_MQnLf.js";import"./Label-jTnCUURY.js";import"./useLocalizedStringFormatter-DxstFItm.js";import"./browser-CXszXSov.js";import"./EmulatedBoldText-DzLnbGXm.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
