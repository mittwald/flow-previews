import{j as r}from"./iframe-CH_aTfEL.js";import{R as l,a as p}from"./Radio-B8xzbRgN.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C0Hs7hh0.js";import{T as u}from"./Text-BRh_x9bF.js";import{C as c}from"./Content-BuDnVATG.js";import{R as n}from"./RadioButton-CMNpNNLL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DjBCrPYH.js";import"./mergeRefs-BzpEnNcV.js";import"./index-XPJW_oiy.js";import"./ColumnLayout-CwsX7T1h.js";import"./useFieldComponent-JY3HqOd-.js";import"./Activity-DkWdwXP6.js";import"./TranslationProvider-CWofhASx.js";import"./OverlayContextProvider-D2TVPKxb.js";import"./context-DeId9iUj.js";import"./Button-B1aqxMhV.js";import"./utils-C8srcrY8.js";import"./ProgressBar-i73KRfPj.js";import"./Hidden-xsM_Dwee.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dl7i2EFq.js";import"./useFocusRing-AHO8ppps.js";import"./useFocusable-BEFnslrO.js";import"./RSPContexts-BB0WSv2m.js";import"./Collection-B-PgrD24.js";import"./CollectionBuilder-BkOVlqH0.js";import"./SelectionIndicator-CMFVzQc5.js";import"./Separator-IFFI1hok.js";import"./browser-CjAUGP0i.js";import"./useLocalizedStringFormatter-DVjHg6pM.js";import"./useStatic-DNN3uXbB.js";import"./LoadingSpinner-Cfaoz3gV.js";import"./IconApp-B8Pdxs7V.js";import"./remote-ZsoG4C7l.js";import"./ariaLive-Cw13p-6Q.js";import"./useOverlayController-CA1JZthw.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./useMakeFocusable-D0oVjyof.js";import"./RadioGroup-CrMNroeI.js";import"./FieldError-CHaTpVnh.js";import"./Form-BfyCREyn.js";import"./useFormValidation-qjJTrH9J.js";import"./useFormReset-P8yugG2W.js";import"./IconRadioOn-DI9GwoAx.js";import"./Label-BqL_a1sm.js";import"./Label.module-lamhxTiw.js";import"./FieldError-DGABQFH-.js";import"./IconDanger-DRvJdcN_.js";import"./EmulatedBoldText-D1x6Y0F_.js";const cr={title:"Form Controls/RadioGroup/Edge Cases",...s},a={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[t.long," "]}),r.jsxs(p,{value:"b",children:[t.long," "]}),r.jsx(p,{value:"c",children:t.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:t.medium}),r.jsx(c,{children:t.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
