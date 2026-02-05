import{j as r}from"./iframe-DdPUg3l1.js";import{R as l,a as p}from"./Radio-DWOV_Wky.js";import{R as n}from"./RadioButton-Q5FUjDeG.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CyOjLbvM.js";import{T as u}from"./Text-DjGrgiDc.js";import{C as c}from"./Content-DSTOuvEd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B28SqkEE.js";import"./index-DRxXhfH_.js";import"./index-DfF1Hh-7.js";import"./ColumnLayout-CJWPwfzv.js";import"./useFieldComponent-CO5pYfeq.js";import"./utils-CZc2hRnH.js";import"./useMakeFocusable-9Pps4Z9m.js";import"./RadioGroup-DQZyvefe.js";import"./FieldError-DDOFx421.js";import"./Text-JRLUlLnO.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-0LpxOP9r.js";import"./useLabel-DfTMKk9x.js";import"./Label-DhA6S4Mt.js";import"./Hidden-9XxNu-Hn.js";import"./SelectionIndicator-DB3-93Os.js";import"./useFormValidation-ChceI0Vn.js";import"./useFocus-DOBDf5za.js";import"./useFocusRing-B1QHji0w.js";import"./useControlledState-vD92hbDx.js";import"./FocusScope-DY6t_O03.js";import"./context-eo9HPzgD.js";import"./useFormReset-B7Z_bYQn.js";import"./usePress-C4aurJT7.js";import"./useFocusable-Dd42TuHo.js";import"./VisuallyHidden-DYHUXKrU.js";import"./IconWarning-CBjvo3Bl.js";import"./remote-C_Lvi_2k.js";import"./Label-CBiKyrhF.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-uZq7iOxf.js";import"./FieldError-Brd6jVZQ.js";import"./AlertText-Ds6Oj97F.js";import"./AlertIcon-PzDvVuZo.js";import"./browser-CdIpgqNn.js";import"./EmulatedBoldText-DdQb5yyc.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const mr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,mr as __namedExportsOrder,ir as default};
