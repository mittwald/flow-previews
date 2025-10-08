import{j as r}from"./iframe-F0_qnNmG.js";import{R as l,b as p,a as g}from"./RadioButton-BsOujQoq.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DCHpZiZ8.js";import{T as y}from"./Text-DO7iLNcc.js";import{C as T}from"./Content-DlKEkNOB.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-GddMka9Q.js";import"./index-D9xEo-AP.js";import"./index-Bz7U0goG.js";import"./FieldError-Cez4hVsO.js";import"./IconWarning-uipPPHio.js";import"./FieldError-Ba7AQt9l.js";import"./utils-sDrdBfYO.js";import"./Text-aPdZ_B4g.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CqSVX-5w.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-BGIF8mC3.js";import"./RadioGroup-BIYGiTRO.js";import"./Form-Ca0x7b6g.js";import"./Label-D-2NVJQc.js";import"./Hidden-D_DlAV2X.js";import"./useFormValidation-CO-DTcJJ.js";import"./useFocus-DXNQJCU_.js";import"./useControlledState-DnVXKiKM.js";import"./FocusScope-BnokTE9A.js";import"./useFocusRing-DNaFw-NR.js";import"./context-BBFKgyN5.js";import"./useFormReset-yESpD6TP.js";import"./usePress-D0DSh--k.js";import"./useFocusable-ueFnB-zi.js";import"./VisuallyHidden-BlAFGTlT.js";import"./Label-BW-f-a9z.js";import"./useLocalizedStringFormatter-DWKCNeCS.js";import"./browser-Cnb-FwPQ.js";import"./EmulatedBoldText-nQ9KrBk1.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
