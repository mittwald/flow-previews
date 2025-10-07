import{j as r}from"./iframe-7dgBHkjI.js";import{R as l,b as p,a as g}from"./RadioButton-hLT0GPrA.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CHIFfsx7.js";import{T as y}from"./Text-CPbpE1eA.js";import{C as T}from"./Content-DvZr09UV.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BTLDR_wZ.js";import"./index-gL3AvcBv.js";import"./index-DzRRQR_A.js";import"./FieldError-XEHbUqlq.js";import"./IconWarning-CHzLfKjq.js";import"./FieldError-DQvJzSCl.js";import"./utils-skLZq2rT.js";import"./Text-CcEbIf7j.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BWVqPknu.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-DAYaUZS_.js";import"./RadioGroup-C-Y-6wLw.js";import"./Form-emkFOLws.js";import"./Label-DDrFPz8N.js";import"./Hidden-C8BM-Xlw.js";import"./useFormValidation-lhUbjjow.js";import"./useFocus-BVcT7Cmq.js";import"./useControlledState-U7vX1g_u.js";import"./FocusScope-iWt5Cohm.js";import"./useFocusRing-DpIlZv5r.js";import"./context-DLyAckLP.js";import"./useFormReset-DcXBOsyZ.js";import"./usePress-C40tO5Ld.js";import"./useFocusable-CjOl0zdL.js";import"./VisuallyHidden-DxfkSq7z.js";import"./Label-BOtdfEdH.js";import"./useLocalizedStringFormatter-ihca5feJ.js";import"./browser-BYuTkZ2t.js";import"./EmulatedBoldText-wnDp19Ns.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
