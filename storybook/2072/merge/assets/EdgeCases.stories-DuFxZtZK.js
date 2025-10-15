import{j as r}from"./iframe-tskdVQ8N.js";import{R as l,b as p,a as g}from"./RadioButton-C5-yLOnK.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-49a6LiZF.js";import{T as y}from"./Text-jVUpGvvP.js";import{C as T}from"./Content-DNdETdYU.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DXfmr-ai.js";import"./index-D6N0AnTm.js";import"./index-C1m14znk.js";import"./FieldError-BdEz1ju8.js";import"./IconWarning-Bd2S-Yd8.js";import"./FieldError-BQtr77Yc.js";import"./utils-B12eWPaZ.js";import"./Text-DKYFQica.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DUTqOTuW.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-DhpPn-fN.js";import"./RadioGroup-BhZ7W_ab.js";import"./Form-r-7bApRf.js";import"./Label-ZNOxXk3Q.js";import"./Hidden-D_rJ6hGg.js";import"./SelectionIndicator-By4SQJVw.js";import"./useFormValidation-GdVWjc_V.js";import"./useFocus-DfZ-8u74.js";import"./useControlledState-Py7g_hCX.js";import"./FocusScope-D_vsK9iJ.js";import"./useFocusRing-L-u3dQN8.js";import"./context-DiW1jRMX.js";import"./useFormReset-D7H6HyHT.js";import"./usePress-BvJ9VF5d.js";import"./useFocusable-DY9nb4Q3.js";import"./VisuallyHidden-BVBeKb2k.js";import"./Label-CsJ7Xmev.js";import"./useLocalizedStringFormatter-B-RI6mzv.js";import"./browser-C459Qnce.js";import"./EmulatedBoldText-BMIw02bL.js";const lr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const nr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,nr as __namedExportsOrder,lr as default};
