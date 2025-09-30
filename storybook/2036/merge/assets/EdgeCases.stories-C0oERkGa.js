import{j as r}from"./iframe-lUo2nGnz.js";import{R as l,b as p,a as g}from"./RadioButton-CtzNHRJp.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-uW2b9b9e.js";import{T as y}from"./Text-BGPM5sar.js";import{C as T}from"./Content-D0dmHylT.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B2pQApQK.js";import"./mergeRefs-1r9WJl4m.js";import"./index-CW-GEE7m.js";import"./FieldError-DpFF5VSh.js";import"./IconWarning-BtoswtWr.js";import"./FieldError-pxjDXQ2F.js";import"./utils-D2KvaKmW.js";import"./Text-C5QP4r7D.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CPqIlbG2.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-DZi0m29n.js";import"./RadioGroup-BMaONg6M.js";import"./Form-CNo_OXXk.js";import"./Label-CYuE9nkF.js";import"./Hidden-BOpFHvF6.js";import"./useFormValidation-DhAPE9Wk.js";import"./useFocus-C7dEKa6p.js";import"./useControlledState-DwS5X_XZ.js";import"./FocusScope-CjtAQOUp.js";import"./useFocusRing-frjSVRec.js";import"./context-FIeePqeN.js";import"./useFormReset-D9xEl0IY.js";import"./usePress-Iu709INZ.js";import"./useFocusable-2sr9c9hg.js";import"./VisuallyHidden-A1EOSTtD.js";import"./Label-JtAW2uUp.js";import"./useLocalizedStringFormatter-JjnBJVka.js";import"./browser-BBsn6OTc.js";import"./EmulatedBoldText-DD5sDuaA.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
