import{j as r}from"./iframe-CgbY6Bes.js";import{R as l,a as p}from"./Radio-C1HcMc3k.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DgietKuk.js";import{T as u}from"./Text-VVW0omSC.js";import{C as c}from"./Content-CAJDDH_j.js";import{R as n}from"./RadioButton-lsIoSyD0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CTdpdvjF.js";import"./mergeRefs-CxSmTZ1y.js";import"./index-COB0h6yR.js";import"./ColumnLayout-BXgRM5q9.js";import"./useFieldComponent-DU5_3SMj.js";import"./Activity-CqdR7Ddt.js";import"./TranslationProvider-BcRRsHoV.js";import"./OverlayContextProvider-BX16aSJY.js";import"./context-dInkHyA4.js";import"./Button-B5ZFMN0X.js";import"./utils-C1D540aj.js";import"./ProgressBar-DU_WxInK.js";import"./Hidden-DQEm4CFa.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B7mjZSuw.js";import"./useFocusRing-d9Vd45dy.js";import"./useFocusable-C07dHpTX.js";import"./RSPContexts-nmNOlAeI.js";import"./Collection-CkSsBrfI.js";import"./CollectionBuilder-bx8YHx7t.js";import"./SelectionIndicator-Cyz4sgG-.js";import"./Separator-B-G5UFsQ.js";import"./browser-C7soFJnH.js";import"./useLocalizedStringFormatter-BxyHFIOH.js";import"./useStatic-YWRRTJxv.js";import"./LoadingSpinner-BWpI0HIx.js";import"./IconChevronDown-BgfzzCeX.js";import"./remote-VFFVCOtz.js";import"./ariaLive-BHE3J_Iw.js";import"./useOverlayController-BuHPrhsh.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./useMakeFocusable-BxV8-tk8.js";import"./RadioGroup-DZ5C3Qlp.js";import"./FieldError-ZCijCAEA.js";import"./Form-D-gyidno.js";import"./useFormValidation-B0VcAod8.js";import"./useFormReset-DHRVeg6P.js";import"./IconRadioOn-BOQ2Dqha.js";import"./Label-4ok8fPIv.js";import"./Label.module-lamhxTiw.js";import"./FieldError-CfVeuV3t.js";import"./IconDanger-D9oAFjYl.js";import"./EmulatedBoldText-C19QTVcg.js";const cr={title:"Form Controls/RadioGroup/Edge Cases",...s},a={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[t.long," "]}),r.jsxs(p,{value:"b",children:[t.long," "]}),r.jsx(p,{value:"c",children:t.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:t.medium}),r.jsx(c,{children:t.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="a" aria-label="Label">
      <Radio value="a">{dummyText.long} </Radio>
      <Radio value="b">{dummyText.long} </Radio>
      <Radio value="c">{dummyText.long}</Radio>
    </RadioGroup>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const xr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{a as LongTexts,i as MultipleRadioButtons,m as SmallSpace,xr as __namedExportsOrder,cr as default};
