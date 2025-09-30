import{j as r}from"./iframe-DE_VUmzH.js";import{R as l,b as p,a as g}from"./RadioButton-DvlpKi3n.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DY0u6QAa.js";import{T as y}from"./Text-CuCsgm5W.js";import{C as T}from"./Content-B9D2oEGm.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-VgVMv0eN.js";import"./index-DsYeEkNB.js";import"./index-C0xI9_WX.js";import"./FieldError-C4vr9PyS.js";import"./IconWarning-Lvj7TBfh.js";import"./FieldError-CsnZ7kCy.js";import"./utils-D3dUv10b.js";import"./Text-BVPFWEoO.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-7rlspvUL.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-Dc6iIFjv.js";import"./Form-BGVwlTzA.js";import"./useLabel-C4uXeX2F.js";import"./Label-C28iUhCz.js";import"./Hidden-NzD2YlQI.js";import"./useFormValidation-BsrhrDQJ.js";import"./useFocus-DNFgJiAK.js";import"./useControlledState-Bb_Q1JoV.js";import"./FocusScope-BTm6JbhF.js";import"./useFocusRing-Cc9ULfoH.js";import"./context-Ki1OMBAj.js";import"./useFormReset-C704hud4.js";import"./usePress-CUyQx-Vz.js";import"./useFocusable-DpHFaro7.js";import"./VisuallyHidden-B4hxOAM_.js";import"./Label-C_7a3H9g.js";import"./useLocalizedStringFormatter-CetpI1LZ.js";import"./browser-BDXGgXpt.js";import"./EmulatedBoldText-RoWFJZi8.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
