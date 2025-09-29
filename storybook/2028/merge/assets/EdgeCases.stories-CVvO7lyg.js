import{j as r}from"./iframe-CP2gb4h4.js";import{R as l,b as p,a as g}from"./RadioButton-CglGWXb1.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CzN92SgA.js";import{T as y}from"./Text-D1BFrV-v.js";import{C as T}from"./Content-Doh_ypHV.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPf_B31n.js";import"./index-BSCJfbqF.js";import"./index-Cu5Se3_L.js";import"./FieldError-CTYByr6I.js";import"./IconWarning-D-rMLbvq.js";import"./FieldError-DU2mNmYP.js";import"./utils-D_s8y5un.js";import"./Text-CxBtgOGW.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DMcP449F.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-ivtzN5AI.js";import"./Form-BiW8oAj_.js";import"./useLabel-INWae1Ce.js";import"./Label-683tI7vQ.js";import"./Hidden-BIuobSa8.js";import"./useFormValidation-D0HOvZ_-.js";import"./useFocus-DJT_GDyJ.js";import"./useControlledState-4L3XIdhl.js";import"./FocusScope-8zrVT8FZ.js";import"./useFocusRing-B2VMeUUD.js";import"./context-BA56fXp2.js";import"./useFormReset-DVyobQZd.js";import"./usePress-B35msVos.js";import"./useFocusable-B9L3OVB4.js";import"./VisuallyHidden-GZJ9Ibhy.js";import"./Label-Bjeja2lg.js";import"./useLocalizedStringFormatter-JiHDNkwa.js";import"./browser-Cy2PTbDb.js";import"./EmulatedBoldText-DPtC43a-.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
