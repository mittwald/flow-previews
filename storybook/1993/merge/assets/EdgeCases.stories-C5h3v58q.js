import{j as r}from"./iframe-DKbVX-Q4.js";import{R as p,b as l,a as g}from"./RadioButton-DB6iWZq7.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DxD3JSlr.js";import{T as y}from"./Text-BScgMmTm.js";import{C as T}from"./Content-CsBfqav6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-jeOa0ZES.js";import"./mergeRefs-Q550Qguu.js";import"./index-C2KS530J.js";import"./FieldError-DmYZY-AH.js";import"./IconWarning-CwOfNeg5.js";import"./FieldError-DMz-rebE.js";import"./utils-BkpHnTsU.js";import"./Text-CUplgO8_.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-Cw0XGlHV.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DT52a3vO.js";import"./Form-DeoxQrJ0.js";import"./useFocus-BSzVp7e_.js";import"./useLabel-xF4kjUJ4.js";import"./Label-zFNLx0tV.js";import"./Hidden-D4Nr3Z2s.js";import"./useFormReset-Bl7MFLhY.js";import"./usePress-xBrGITaP.js";import"./useFocusRing-CNTepbVZ.js";import"./useFocusable-V5Yb86R1.js";import"./FocusScope-Cxy8QZEw.js";import"./context-CEbk5IPs.js";import"./VisuallyHidden-DbgH8FGV.js";import"./useControlledState-DPI6eaeZ.js";import"./Label-Dr8K8otC.js";import"./useLocalizedStringFormatter-CteVI3SD.js";import"./browser-f0JKU1-T.js";import"./EmulatedBoldText-GMB9n-7d.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
