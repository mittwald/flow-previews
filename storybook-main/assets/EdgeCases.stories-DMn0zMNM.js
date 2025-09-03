import{j as r}from"./iframe-DjexR8Tp.js";import{R as p,b as l,a as g}from"./RadioButton-CYKWi1jA.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CLZzu8hD.js";import{T as y}from"./Text-aOHzhDvr.js";import{C as T}from"./Content-Cpv7gi6S.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CNncApHm.js";import"./mergeRefs-CBM20YoL.js";import"./index-D_XyFzRd.js";import"./FieldError-CesaJiuj.js";import"./IconWarning-iYDgM4y1.js";import"./FieldError-By7Lq8z0.js";import"./utils-T6f7ZmRV.js";import"./Text-Xp1USGoa.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-p3zrH-kZ.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-BIQGnpcX.js";import"./Form-BEAgwaeD.js";import"./useFocus-Bu01zz1F.js";import"./useLabel-Ott8nG03.js";import"./Label-Guiqn7_R.js";import"./Hidden-DuO80z64.js";import"./useFormReset-DuzsM7E6.js";import"./usePress-mG8JzCXO.js";import"./useFocusRing-DmJAPvY7.js";import"./useFocusable-C3y7tw8Z.js";import"./FocusScope-CeR_G6vH.js";import"./context-CVxCaAZx.js";import"./VisuallyHidden-CwBbURTG.js";import"./useControlledState-rTz5CSzi.js";import"./Label-CLVda-nU.js";import"./useLocalizedStringFormatter-DCr69HqY.js";import"./browser-B8Z7dOtx.js";import"./EmulatedBoldText-DPzl8Gjb.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
