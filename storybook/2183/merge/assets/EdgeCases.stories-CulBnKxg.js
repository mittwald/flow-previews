import{j as r}from"./iframe-CN4G8qqm.js";import{R as l,a as p}from"./Radio-9nAH4L_C.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-ByWZXakR.js";import{T as u}from"./Text-0Ubm83r2.js";import{C as c}from"./Content-CVWt400t.js";import{R as n}from"./RadioButton-B08KCPqR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-4OAE62jj.js";import"./mergeRefs-B9PoHYFQ.js";import"./index-I0Qj-Cdl.js";import"./ColumnLayout-B5b-pC9z.js";import"./useFieldComponent-TTf0ydYE.js";import"./Activity-BEbOvIp9.js";import"./TranslationProvider-D4PNRj4s.js";import"./OverlayContextProvider-HOHtpdM6.js";import"./context-CQHW5bQg.js";import"./Button-DbVJWx45.js";import"./utils-DbmEdXKf.js";import"./ProgressBar-DMLVl3vw.js";import"./Hidden-BofwJMZa.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CcGGjrZQ.js";import"./useFocusRing-CERaDmlf.js";import"./useFocusable-BkpoXrB2.js";import"./RSPContexts-DE5X9chL.js";import"./Collection-CpgGjn50.js";import"./CollectionBuilder-RP78OhS8.js";import"./SelectionIndicator-D0PPGfWn.js";import"./Separator-BYdiAAyF.js";import"./browser-TeUtxSTm.js";import"./useLocalizedStringFormatter-B9Hz40nN.js";import"./useStatic-CM9-VZa7.js";import"./LoadingSpinner-D2A4fUcq.js";import"./IconChevronDown-oGa76fM6.js";import"./remote-DWrodQTa.js";import"./ariaLive-BjvyJtUO.js";import"./useOverlayController-CzXHiyE9.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./useMakeFocusable-CfRNlxjf.js";import"./RadioGroup-B0ZLBQ8s.js";import"./FieldError-BYURGtTT.js";import"./Form-CGtio7r9.js";import"./useFormValidation-Dm9_Tt2c.js";import"./useFormReset-CiTTEZ9A.js";import"./IconRadioOn-Buauz5Nc.js";import"./Label-SrhLxamV.js";import"./Label.module-lamhxTiw.js";import"./FieldError-ClazPaCD.js";import"./IconDanger-BS5-adBO.js";import"./EmulatedBoldText-moUjmeps.js";const cr={title:"Form Controls/RadioGroup/Edge Cases",...s},a={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[t.long," "]}),r.jsxs(p,{value:"b",children:[t.long," "]}),r.jsx(p,{value:"c",children:t.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:t.medium}),r.jsx(c,{children:t.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
