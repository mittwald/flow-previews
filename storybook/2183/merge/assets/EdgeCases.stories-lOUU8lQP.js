import{j as r}from"./iframe-BmKAGSU1.js";import{R as l,b as p,a as n}from"./RadioButton-D32TwoAN.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C34Ae5fr.js";import{T as u}from"./Text-C9Y-BRqi.js";import{C as c}from"./Content-FqTSNLGR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-GoF2pcsM.js";import"./index-Dy22JExn.js";import"./index-D3Sif_iZ.js";import"./ColumnLayout-CvDCTckz.js";import"./useFieldComponent-DWe8fYc4.js";import"./utils-g5fx1pEf.js";import"./useMakeFocusable-DMRps9O1.js";import"./RadioGroup-DETV6bWP.js";import"./FieldError-DtXh5FLR.js";import"./Text-CWVum_CA.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-B3BOXvjK.js";import"./useLabel-gR0_832q.js";import"./Label-CQLEPw36.js";import"./Hidden-tXnJ8R5f.js";import"./SelectionIndicator-tnK26Qqc.js";import"./useFormValidation-BWMCHu6j.js";import"./useFocus-BW6_4Fc3.js";import"./useControlledState-TVCSEq66.js";import"./FocusScope-ByKxlNca.js";import"./useFocusRing-DBug8spT.js";import"./context-CxuOL-5x.js";import"./useFormReset-DXCfJDY-.js";import"./usePress-JhlebSO6.js";import"./useFocusable-BP0ye7iu.js";import"./VisuallyHidden-Db2xRfqF.js";import"./IconWarning-imbji-Kz.js";import"./remote-DfYMV5Tv.js";import"./Label-8kdX7ehW.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-wjV9WHNF.js";import"./FieldError-DTx5qYoC.js";import"./browser-SWtWUPW6.js";import"./EmulatedBoldText-DkbId6Zn.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="a" aria-label="Label">
      <Radio value="a">{dummyText.long} </Radio>
      <Radio value="b">{dummyText.long} </Radio>
      <Radio value="c">{dummyText.long}</Radio>
    </RadioGroup>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label" l={[1, 1, 1, 1]}>
      {Array(6).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            <Text>{dummyText.medium}</Text>
            <Content>{dummyText.medium}</Content>
          </RadioButton>)}
    </RadioGroup>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ar=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,ar as __namedExportsOrder,er as default};
