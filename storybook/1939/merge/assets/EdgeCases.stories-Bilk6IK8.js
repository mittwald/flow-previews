import{j as r}from"./iframe-DoW4S5y5.js";import{R as p,b as l,a as g}from"./RadioButton-BZ1lTONK.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BZKJM4dP.js";import{T as y}from"./Text-BWWLLA_C.js";import{C as T}from"./Content-D0DRnAfP.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BqGtFlt4.js";import"./mergeRefs-Ka_JxYbf.js";import"./index-ywv6zfVU.js";import"./FieldError-BGjDwda8.js";import"./IconWarning-1bSGr7bL.js";import"./FieldError-DdRlRixc.js";import"./utils-BERKyAtu.js";import"./Text-C09El9xQ.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-ldahmIM3.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-C7DdbT_K.js";import"./Form-1DUWHykH.js";import"./useFocus-CTercWxn.js";import"./useLabel-xAN8HAzj.js";import"./Label-BiPavfPM.js";import"./Hidden-DdNFa5_a.js";import"./useFormReset-DRCEBnHw.js";import"./usePress-BTQEKaY-.js";import"./useFocusRing-B5qgIIvG.js";import"./useFocusable-Caaze2NE.js";import"./FocusScope-C1si8CoR.js";import"./context-DLINqX3o.js";import"./VisuallyHidden-BKF9ViHg.js";import"./useControlledState-DwXivsGS.js";import"./Label-DBV8eSx5.js";import"./useLocalizedStringFormatter-C5IBRtX2.js";import"./browser-1Svz-vih.js";import"./EmulatedBoldText-88Z3nw3V.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
