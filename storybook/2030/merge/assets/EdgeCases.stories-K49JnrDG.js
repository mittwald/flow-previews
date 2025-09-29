import{j as r}from"./iframe-JrijvI0G.js";import{R as l,b as p,a as g}from"./RadioButton-GbIMabD-.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CcZ6XpZN.js";import{T as y}from"./Text-9s7Vdafx.js";import{C as T}from"./Content-BxeQqMi9.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bc6JGim9.js";import"./mergeRefs-CbRd_Ras.js";import"./index-BPCP2ZZE.js";import"./FieldError-KC3s-9B5.js";import"./IconWarning-B3U3_U2s.js";import"./FieldError-B0ZHUsLp.js";import"./utils-DhZkrhHH.js";import"./Text-Bm8Zb_oa.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-voDN-0pC.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-D46SZOMZ.js";import"./Form-Vksxts5m.js";import"./useLabel-D5nQ4vXC.js";import"./Label-1jXHzd37.js";import"./Hidden-CHpGmdBq.js";import"./useFormValidation-OftsP-u_.js";import"./useFocus-DA61-eEI.js";import"./useControlledState-DQPwS-UF.js";import"./FocusScope-Bwbpfbbo.js";import"./useFocusRing-DCbTuOGO.js";import"./context-CnkMg4nA.js";import"./useFormReset-Bl0dawgu.js";import"./usePress-JaoXEhrO.js";import"./useFocusable-DIk21gkV.js";import"./VisuallyHidden-B4SYhrOy.js";import"./Label-BWdEIo8l.js";import"./useLocalizedStringFormatter-M08v5G9w.js";import"./browser-eHAjn9uV.js";import"./EmulatedBoldText-BVZ71ko2.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
