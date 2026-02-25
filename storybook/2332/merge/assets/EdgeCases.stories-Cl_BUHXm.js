import{j as r}from"./iframe-5GKEjLm3.js";import{R as l,a as p}from"./Radio-CuPgGrNX.js";import{R as n}from"./RadioButton-Dqi6_Hk1.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-ZfIs3DDn.js";import{T as u}from"./Text-4Jq61r3V.js";import{C as c}from"./Content-CfJLe_6_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BrPxhm-E.js";import"./index-DZHRuSdS.js";import"./index-CxI-AdtT.js";import"./ColumnLayout-f7emYuut.js";import"./useFieldComponent-B3twwSIL.js";import"./utils-DZdTZXxi.js";import"./useMakeFocusable-B13Rj7my.js";import"./RadioGroup-_oRyUAXc.js";import"./FieldError-DNER0k2B.js";import"./Text-jTefV10v.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CkcBXY70.js";import"./useLabel-sguPTXZB.js";import"./Label-CD-Ily5W.js";import"./Hidden-CVK_WTqz.js";import"./SelectionIndicator-C_xwSetB.js";import"./useFormValidation-Dje-UJVy.js";import"./useFocus-BEqaOfOz.js";import"./useFocusRing-CsUwZj84.js";import"./useControlledState-D9ovZV70.js";import"./FocusScope-BteWf5AP.js";import"./context-CYoVNjzy.js";import"./useFormReset-Bzn3Tj6K.js";import"./usePress-CYa1OoRC.js";import"./useFocusable-BDWe4YTb.js";import"./VisuallyHidden-BfZLOvo3.js";import"./IconWarning-B10RUVd-.js";import"./remote-DrqTcZe1.js";import"./Label-BiEVFhkG.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-foHAfgmM.js";import"./FieldError-qE1en1IM.js";import"./AlertText-BQlCz9t6.js";import"./AlertIcon-xcA2PG-d.js";import"./browser-DpyY6Jfh.js";import"./EmulatedBoldText-Dw9vtGzr.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
