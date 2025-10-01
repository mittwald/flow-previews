import{j as r}from"./iframe-FESji9AM.js";import{R as l,b as p,a as g}from"./RadioButton-BVCHzq7D.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-qpTQ_XHH.js";import{T as y}from"./Text-BCUZ6o5_.js";import{C as T}from"./Content-CrQMCsow.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DFQAJ_2B.js";import"./index-BqyXU5kt.js";import"./index-ChCUOHR4.js";import"./FieldError-zF1s5-sf.js";import"./IconWarning-BN848dMt.js";import"./FieldError-DlYIOKPN.js";import"./utils-C8mGBIgx.js";import"./Text-CpJktiaj.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CeDSRufi.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-BMtXa_-B.js";import"./RadioGroup-Cpt0E69P.js";import"./Form-BtmTLzrx.js";import"./Label-DTEJhL1C.js";import"./Hidden-EsiqW7jM.js";import"./useFormValidation-B9n8pxvz.js";import"./useFocus-Bhqj5rOY.js";import"./useControlledState-GWuXrIJ_.js";import"./FocusScope-DVksIqcF.js";import"./useFocusRing-zSoWzuoi.js";import"./context-ChjkYhaK.js";import"./useFormReset-B3Fww5Tk.js";import"./usePress-CLpB9Wju.js";import"./useFocusable-C4O-U4lE.js";import"./VisuallyHidden-CxIvQbp6.js";import"./Label-pNVGz1sw.js";import"./useLocalizedStringFormatter-CqB2I62z.js";import"./browser-CzqLgnVu.js";import"./EmulatedBoldText-DW2sem56.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
