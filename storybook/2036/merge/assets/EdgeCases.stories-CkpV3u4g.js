import{j as r}from"./iframe-CxmXe-_O.js";import{R as l,b as p,a as g}from"./RadioButton-DxShXsma.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Dz8ZLOGd.js";import{T as y}from"./Text-BT2KT2kR.js";import{C as T}from"./Content-_tnemRfJ.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D0hpqFCU.js";import"./mergeRefs-DrFPU8wS.js";import"./index-D4JkFdbd.js";import"./FieldError-CSErn7mI.js";import"./IconWarning-DZNLduw-.js";import"./FieldError-D8IUoOjD.js";import"./utils-Cd13syVz.js";import"./Text-DV04N56Q.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-KIGu74VX.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-Doucc66J.js";import"./RadioGroup-CPLhx6LX.js";import"./Form-CZOHyRg1.js";import"./Label-2vh9UW-y.js";import"./Hidden-fABZRyqD.js";import"./useFormValidation-D2bFAqKZ.js";import"./useFocus-BpzuXZ8X.js";import"./useControlledState-y5DploKZ.js";import"./FocusScope-DfTm09Tq.js";import"./useFocusRing-D7TcncFW.js";import"./context-BaUvMDTJ.js";import"./useFormReset-CB0PL74l.js";import"./usePress-BIfsm19n.js";import"./useFocusable-CZtfPtCy.js";import"./VisuallyHidden--eIM32hM.js";import"./Label-DeDEMxfU.js";import"./useLocalizedStringFormatter-D3SJZW6Q.js";import"./browser-fsrkaBj_.js";import"./EmulatedBoldText-D2nyMxZT.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
