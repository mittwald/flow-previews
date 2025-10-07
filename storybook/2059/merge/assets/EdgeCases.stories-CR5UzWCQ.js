import{j as r}from"./iframe-LeKLDkYY.js";import{R as l,b as p,a as g}from"./RadioButton-DwE3xEmp.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CBPfIYA5.js";import{T as y}from"./Text-tNO3jzOI.js";import{C as T}from"./Content-BU7T3ncW.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B87WjEVi.js";import"./index-Bs8MTrz8.js";import"./index-uQv72qiR.js";import"./FieldError-TZ4s3Na9.js";import"./IconWarning-DddVt0_L.js";import"./FieldError-BDYKP3YZ.js";import"./utils-1n9saaJJ.js";import"./Text--oZ7LG8m.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DUJ0TMuf.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-a9qPG6ZB.js";import"./RadioGroup-CTJDvMgy.js";import"./Form-CCM4YJxo.js";import"./Label-C1dMHZA4.js";import"./Hidden-CLJBhJup.js";import"./useFormValidation-B7bn9a_3.js";import"./useFocus-DpQgRw3u.js";import"./useControlledState-82f8Q_fD.js";import"./FocusScope-tqJ5v6CU.js";import"./useFocusRing-AniuyIk6.js";import"./context-wUV3k3U5.js";import"./useFormReset-CXz6fjib.js";import"./usePress-kmLZVcf4.js";import"./useFocusable-BqRn9RY3.js";import"./VisuallyHidden-25_VPX5X.js";import"./Label-_IGpUYiB.js";import"./useLocalizedStringFormatter-_ZYyHG1p.js";import"./browser-Cy-I7M8E.js";import"./EmulatedBoldText-CCtxrL0Y.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
