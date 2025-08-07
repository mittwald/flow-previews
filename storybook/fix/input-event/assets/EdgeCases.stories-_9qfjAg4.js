import{j as r}from"./iframe-Bl4Z707A.js";import{R as p,b as l,a as g}from"./RadioButton-kBOrT50W.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DK78U-hE.js";import{T as y}from"./Text-NIRm_0Gu.js";import{C as T}from"./Content-ByhgNW8T.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BOV7_qOz.js";import"./mergeRefs-Cl6DsAU2.js";import"./index-Ct7SW8Jp.js";import"./FieldError-QhX9CBNs.js";import"./IconWarning-BzUaRhpv.js";import"./FieldError-C8A_yU5e.js";import"./utils-B5rgjLnQ.js";import"./Text-DhMTI7iw.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BPiZD-53.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BzzugERA.js";import"./Form-Ch0FWOcT.js";import"./useFocus-CBM9z24y.js";import"./useLabel-CUTayXOd.js";import"./Label-G_0fE9c9.js";import"./Hidden-CHUtH-RP.js";import"./useFormReset-knu-9Cub.js";import"./usePress-Cab7A3iT.js";import"./useFocusRing-CE5kArcs.js";import"./useFocusable-D6HN1uNY.js";import"./FocusScope-DPadz4__.js";import"./context-DCYh_tbU.js";import"./VisuallyHidden-DoxRRjGn.js";import"./useControlledState-CTldHWvB.js";import"./Label-CPCFvVkX.js";import"./useLocalizedStringFormatter-65RopkTU.js";import"./browser-CQSXz4Vb.js";import"./EmulatedBoldText-BAGT2_Bu.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
