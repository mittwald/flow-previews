import{j as r}from"./iframe-CqOqoVaP.js";import{R as p,b as l,a as g}from"./RadioButton-BUV2jmGU.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Aw9_gQTT.js";import{T as y}from"./Text-B3-X_MJa.js";import{C as T}from"./Content-DYUN1GJy.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-1TKyLHhH.js";import"./mergeRefs-CelTEQRC.js";import"./index-OFJ9qM8_.js";import"./FieldError-EM0a2FXb.js";import"./IconWarning-Bl-oEACJ.js";import"./FieldError-Db8jl934.js";import"./utils-CLjii6jw.js";import"./Text-cqx9MXzt.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-D7MR_7g9.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-PapW8Brd.js";import"./Form-DfmQoqyq.js";import"./useFocus-B9OFNFcs.js";import"./useLabel-BbxdwBsw.js";import"./Label-DmkwH-X_.js";import"./Hidden-G9XKC0s_.js";import"./useFormReset-DvIrrZd5.js";import"./usePress-bNRByjMC.js";import"./useFocusRing-BUAA1D8N.js";import"./useFocusable-BW0s8v46.js";import"./FocusScope-C_8IMyFN.js";import"./context-V257UCTc.js";import"./VisuallyHidden-BthzWCih.js";import"./useControlledState-BdCCPWsc.js";import"./Label-CXX9Ul6V.js";import"./useLocalizedStringFormatter-Cmj_M29U.js";import"./browser-5vSgihvA.js";import"./EmulatedBoldText-CUXBtHhG.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
