import{j as r}from"./iframe-BKOyO0tU.js";import{R as p,b as l,a as g}from"./RadioButton-B1ToLiD9.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-D0lihwj3.js";import{T as y}from"./Text-ExzQZ1Qc.js";import{C as T}from"./Content-Dg-SAmQz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DS9p18js.js";import"./mergeRefs-D0EZPsCM.js";import"./index-Dkj0bwU1.js";import"./FieldError-Da4EtItW.js";import"./IconWarning-WHLX57m9.js";import"./FieldError-D2kmkBqC.js";import"./utils-B2BekvYW.js";import"./Text-ACnzImZy.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-C3lARoRI.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-PekBHO1D.js";import"./Form-D-YH0smr.js";import"./useFocus-dHggTvNn.js";import"./useLabel-kfVNblq3.js";import"./Label-Vv3VD8Wn.js";import"./Hidden-DB9d8bX3.js";import"./useFormReset-ONA6akXl.js";import"./usePress-CfgifMFV.js";import"./useFocusRing-D97-YwB6.js";import"./useFocusable-C3wI1ws-.js";import"./FocusScope-Sz51FCf6.js";import"./context-wvutwpZE.js";import"./VisuallyHidden-hdWyDAKj.js";import"./useControlledState-B16HJi6R.js";import"./Label-DvNp2qob.js";import"./useLocalizedStringFormatter-D0EJq48y.js";import"./browser-8Kbc9Tso.js";import"./EmulatedBoldText-BBGOeiRU.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const mr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,mr as __namedExportsOrder,ir as default};
