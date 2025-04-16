import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as l,b as p,a as g}from"./RadioButton-D4hDp5jT.js";import"./index-n-xcLTj3.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BRjiT_zt.js";import{T as y}from"./Text-CvWN1dQn.js";import{C as T}from"./Content-CDRz-CEG.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-xVdmcuMS.js";import"./mergeProps-JAG8EIhT.js";import"./index-jVogklOU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-7o24Rkki.js";import"./FieldError-DTHL6QGh.js";import"./IconWarning-BT9Vk3ZR.js";import"./FieldError-D-X35EJ8.js";import"./utils-CHEN54dH.js";import"./Text-DatuNbZl.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-C6rBwMDa.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-DuQXTfHh.js";import"./Form-ChuGhSFG.js";import"./useLabel-DBnsbNrv.js";import"./Label-CnZl9U2I.js";import"./Hidden-B-9naaqD.js";import"./useFormReset-DmN8pfru.js";import"./usePress-D9kiuk6J.js";import"./useFocus-XoJeJsyS.js";import"./useFocusRing-qDa0kwlS.js";import"./useFocusable-I3Nst49W.js";import"./useFormValidation-BxWfN6mX.js";import"./FocusScope-VprgOmaE.js";import"./useLocalizedStringFormatter-q0ERVXX8.js";import"./VisuallyHidden-DJ8AgGjM.js";import"./useControlledState-B6lyO5nT.js";import"./Label-DuWaARVY.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-bRyCqTVk.js";const dr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const sr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,sr as __namedExportsOrder,dr as default};
