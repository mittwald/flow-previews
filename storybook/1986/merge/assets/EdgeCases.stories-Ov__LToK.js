import{j as r}from"./iframe-CIFTXvjr.js";import{R as p,b as l,a as g}from"./RadioButton-DPM33DqI.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-B3MWlk07.js";import{T as y}from"./Text-B8fPWk55.js";import{C as T}from"./Content-BdbG_nwr.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D8FrEhfs.js";import"./mergeRefs-DjWFnZ8i.js";import"./index-Dlo5KsFa.js";import"./FieldError-Bs2voh_v.js";import"./IconWarning-DOS6fKaS.js";import"./FieldError-CLAhwXWc.js";import"./utils-B5Zvs6iw.js";import"./Text-BPQdMqSt.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DAQOg9WY.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-BQYFwEf_.js";import"./Form-OgeH3cHd.js";import"./useFocus-D52c6dYL.js";import"./useLabel-Cf99fLdV.js";import"./Label-TO4TYfDU.js";import"./Hidden-e3oWxUP9.js";import"./useFormReset-Bo2I_rci.js";import"./usePress-8HeaTLIH.js";import"./useFocusRing-aMk3Od29.js";import"./useFocusable-CisfjoMT.js";import"./FocusScope-CdIx8Nbp.js";import"./context-CJ6VsYI4.js";import"./VisuallyHidden-DUQ-4ejS.js";import"./useControlledState-D08Ut7L5.js";import"./Label-g6wSh2J1.js";import"./useLocalizedStringFormatter-D9xMhbzt.js";import"./browser-DnisE1zj.js";import"./EmulatedBoldText-DkBtsyA4.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
