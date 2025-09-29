import{j as r}from"./iframe-QjFTiyQe.js";import{R as l,b as p,a as g}from"./RadioButton-Bf8bIQg3.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-B_Kki7eM.js";import{T as y}from"./Text-BZfLsL9o.js";import{C as T}from"./Content-Dx4LKF8J.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-PqleG2qG.js";import"./mergeRefs-DEBbLA0v.js";import"./index-DHnDWVTa.js";import"./FieldError-UwL51K-0.js";import"./IconWarning-I1gVfg4d.js";import"./FieldError-BdyL5myA.js";import"./utils-r8e_N1jc.js";import"./Text-C66hVS57.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DXCwxwUT.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-C6rtlFho.js";import"./Form-OD9buFY7.js";import"./useLabel-BzcwXIx3.js";import"./Label-5Cz2mi-i.js";import"./Hidden-DTf8hiFE.js";import"./useFormValidation-0HUXiHYd.js";import"./useFocus-CRsfU1Oq.js";import"./useControlledState-Dx1OInf3.js";import"./FocusScope-zGp-W5qB.js";import"./useFocusRing-xi6RBNRG.js";import"./context-CTF16ofK.js";import"./useFormReset-BGTclNvs.js";import"./usePress-CnoQHIlJ.js";import"./useFocusable-D3z6GPZp.js";import"./VisuallyHidden-YhvwkWEW.js";import"./Label-poB2Yhtj.js";import"./useLocalizedStringFormatter-DQP_vP71.js";import"./browser-CetGLHjc.js";import"./EmulatedBoldText-B1qs5w8y.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
