import{j as r}from"./iframe-Mcl-fp9_.js";import{R as p,b as l,a as g}from"./RadioButton-RwB8FpkP.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-2guTWWiV.js";import{T as y}from"./Text-DEIveL77.js";import{C as T}from"./Content-DFe3kalD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D0Qkc9VN.js";import"./mergeRefs-C2rjSGvQ.js";import"./index-LMMmju_F.js";import"./FieldError-B7M3u5Ws.js";import"./IconWarning-Lyb53OnO.js";import"./FieldError-BKKPCq9e.js";import"./utils-n1fDyKZ3.js";import"./Text-DoGyCRc9.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-euv2zwaE.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-CQ8zEf7_.js";import"./Form-W-5ctzVT.js";import"./useFocus-SsmNYjih.js";import"./useLabel-DPxX2fH3.js";import"./Label-FMQv6veW.js";import"./Hidden-0mHYsG9Y.js";import"./useFormReset-2GD2k0-b.js";import"./usePress-CSmiIi-0.js";import"./useFocusRing-Dg3YPgxl.js";import"./useFocusable-CVnYh69T.js";import"./FocusScope-D7ZuSfg7.js";import"./context-BorfhQA_.js";import"./VisuallyHidden-CZ8WB-4E.js";import"./useControlledState-ECxCAN2t.js";import"./Label-DVdBQme9.js";import"./useLocalizedStringFormatter-T_IfcqNQ.js";import"./browser-BsWVSY18.js";import"./EmulatedBoldText-yaK_s2Yh.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
