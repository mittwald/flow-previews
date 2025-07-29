import{j as r}from"./iframe-D6sRUaJR.js";import{R as p,b as l,a as g}from"./RadioButton-CpL9pMNg.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CEh0Whep.js";import{T as y}from"./Text-CzI-SNLy.js";import{C as T}from"./Content-BB18Clt9.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C-uwmcWe.js";import"./mergeRefs-BZVZ0dhZ.js";import"./index-BUpOoE4F.js";import"./FieldError-1_TiWSqX.js";import"./IconWarning-D8wqW4GU.js";import"./FieldError-SaPVkD34.js";import"./utils-Qm7xLU3y.js";import"./Text-C9PfWAJQ.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-C_uDVxe0.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-D0F37nwJ.js";import"./Form-Cgvv5odv.js";import"./useFocus-CTtv6tdW.js";import"./useLabel-BTkVtPxw.js";import"./Label-CQsKsXsC.js";import"./Hidden-DCXhQTtV.js";import"./useFormReset-DcxoBJFg.js";import"./usePress-uE3muS2D.js";import"./useFocusRing-eR86HLCW.js";import"./useFocusable-BOGY22Am.js";import"./FocusScope-B2gr6wNX.js";import"./context-DolFftfM.js";import"./VisuallyHidden-VL3LzDcs.js";import"./useControlledState-D69o91XC.js";import"./Label-DQJ-81B_.js";import"./useLocalizedStringFormatter-6HxLbkJZ.js";import"./browser-lItX59Of.js";import"./EmulatedBoldText-_TSizv1d.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
