import{j as r}from"./iframe-Cxe2R7_6.js";import{R as l,b as p,a as g}from"./RadioButton-Cx34c5cL.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-IQVlHs3_.js";import{T as y}from"./Text-BRz7lILS.js";import{C as T}from"./Content-IAJCO_x6.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-atuhteL1.js";import"./index-BmulK9zF.js";import"./index-C9WdiMZF.js";import"./FieldError-DJ7xx1bf.js";import"./IconWarning-Jidhe8u4.js";import"./FieldError-C0Ib8VCD.js";import"./utils-DyWdIPZh.js";import"./Text-DwJdwITw.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DfR0UMqq.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-DEGrXNpK.js";import"./RadioGroup-CbdsT4Wr.js";import"./Form-xSvri39Q.js";import"./useLabel-D72_X68t.js";import"./Label-bC6dqEsb.js";import"./Hidden-D2ApJihV.js";import"./SelectionIndicator-BZBAluCS.js";import"./useFormValidation-Bu_33Brb.js";import"./useFocus-Cpp7XZsJ.js";import"./useControlledState-B5CLhXq4.js";import"./FocusScope-NPqoHgmt.js";import"./useFocusRing-b-PxAWXn.js";import"./context-C4neI5Xk.js";import"./useFormReset-ClXq3Rv0.js";import"./usePress-CePQ8dAH.js";import"./useFocusable-D66X7lwl.js";import"./VisuallyHidden-BVfZKHZh.js";import"./Label-BvEZKMSr.js";import"./useLocalizedStringFormatter-Iif1rEXq.js";import"./browser-eQsbTmR1.js";import"./EmulatedBoldText-C6_bi1Ug.js";const nr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const dr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,dr as __namedExportsOrder,nr as default};
