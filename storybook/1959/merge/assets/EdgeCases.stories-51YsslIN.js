import{j as r}from"./iframe-9NvHEEYX.js";import{R as p,b as l,a as g}from"./RadioButton-44h5q_yG.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-8ksPJkFF.js";import{T as y}from"./Text-DmCU-xjB.js";import{C as T}from"./Content-DXt2b3K-.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CqBUeMMu.js";import"./mergeRefs-C771JiYT.js";import"./index-CxV9xeMB.js";import"./FieldError-B6ipGGiX.js";import"./IconWarning-BrSB4tEd.js";import"./FieldError-osHXMSr-.js";import"./utils-phTOhdhB.js";import"./Text-BvWwS3Z5.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-Bm03lzho.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-IxnMVsh0.js";import"./Form-Bv_h1ugL.js";import"./useFocus-D6PAQN6n.js";import"./useLabel-BM-ocsZo.js";import"./Label-BnOBL7z7.js";import"./Hidden-yLzo_Xn1.js";import"./useFormReset-CqIGJUAV.js";import"./usePress-B41vbTz8.js";import"./useFocusRing-B-QDi9By.js";import"./useFocusable-B9Hhp3CR.js";import"./FocusScope-pZ9Wg3C8.js";import"./context-1WNE-E4a.js";import"./VisuallyHidden-BMUrvrGU.js";import"./useControlledState-QTuKyMuz.js";import"./Label-Bp2WajZU.js";import"./useLocalizedStringFormatter-DS1f0b9q.js";import"./browser-bwKj2ElG.js";import"./EmulatedBoldText-D0lgjAwv.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
