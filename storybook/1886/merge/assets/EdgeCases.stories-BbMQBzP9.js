import{j as r}from"./iframe-CbwCPhjt.js";import{R as p,b as l,a as g}from"./RadioButton-qlffjWY6.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-C6TQ0SBg.js";import{T as y}from"./Text-Ci_Uq_zV.js";import{C as T}from"./Content-BorkLdF3.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CfzQgT_M.js";import"./mergeRefs-BoUPlS6x.js";import"./index-DuwvDD4S.js";import"./FieldError-q3vdaDa_.js";import"./IconWarning-B6sLHyS3.js";import"./FieldError-WwADG8x9.js";import"./utils-DoFRGSuI.js";import"./Text-Bo_2a3q0.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BvRqoQgF.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BTWIXGEq.js";import"./Form-8EM0qQv2.js";import"./useFocus-BeWrqrnh.js";import"./useLabel-BZwWLEEp.js";import"./Label-9wtzoWil.js";import"./Hidden-fmTjyVQU.js";import"./useFormReset-BCZY_NzT.js";import"./usePress-B0jvTCtV.js";import"./useFocusRing-DW5IDBu_.js";import"./useFocusable-BMiIHSO8.js";import"./FocusScope-CmGH9Vi6.js";import"./context-DGTw6Ntc.js";import"./VisuallyHidden-DvTk0uSk.js";import"./useControlledState-vYcp2K1J.js";import"./Label-LAkLliwq.js";import"./useLocalizedStringFormatter-Dm9iTIuD.js";import"./browser-BDcX4-kr.js";import"./EmulatedBoldText-CeiCaZ9N.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
