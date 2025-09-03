import{j as r}from"./iframe-Bi2SfRmV.js";import{R as p,b as l,a as g}from"./RadioButton-BOdaechS.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DAKDb6SF.js";import{T as y}from"./Text-BBB4yGC-.js";import{C as T}from"./Content-BsdF2xTI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DaoyFYJY.js";import"./mergeRefs-DG37ux9F.js";import"./index-BPrHKF6N.js";import"./FieldError-CmL2Tr0U.js";import"./IconWarning-Bplgov_i.js";import"./FieldError-BIS3uJRl.js";import"./utils-Dxcmwd9a.js";import"./Text-CkSKd-Z_.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-D5lP3O5e.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-h-WDAZ8C.js";import"./Form-B_Pu4x7F.js";import"./useFocus-C-Ng-ghT.js";import"./useLabel-A5VLCzVG.js";import"./Label-HBAOkOC5.js";import"./Hidden-B9tBmOSG.js";import"./useFormReset-BRME98Hv.js";import"./usePress-BC_RRwfM.js";import"./useFocusRing-Cut0-bC1.js";import"./useFocusable-CoivSZnS.js";import"./FocusScope-lVODcCJ_.js";import"./context-BhsUJEB9.js";import"./VisuallyHidden-DCu-7XPb.js";import"./useControlledState-CIKoypYK.js";import"./Label-Bf2ieprX.js";import"./useLocalizedStringFormatter-BS293wUk.js";import"./browser-B5YnOpHr.js";import"./EmulatedBoldText-B38Yfz1K.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
