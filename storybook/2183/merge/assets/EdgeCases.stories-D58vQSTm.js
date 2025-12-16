import{j as r}from"./iframe-VGYf9uSR.js";import{R as l,a as p}from"./Radio-ccK_0fjy.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-o8WvN_qu.js";import{T as u}from"./Text-CGbJaU4z.js";import{C as c}from"./Content-BQB-04b5.js";import{R as n}from"./RadioButton-DHYnqK2a.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BJkjz94f.js";import"./mergeRefs-CoTJmqCf.js";import"./index-Bm_Mzlx6.js";import"./ColumnLayout-_AI_IjGY.js";import"./useFieldComponent-DiUYLu0s.js";import"./Activity-CX_biUm5.js";import"./TranslationProvider-Ck575ucT.js";import"./OverlayContextProvider-Tja93TmG.js";import"./context-DPoGZDoo.js";import"./Button-DHkv2oj9.js";import"./utils-BB4afhje.js";import"./ProgressBar-Bb-cXNA8.js";import"./Hidden-apt2TR_r.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CKMs_ua8.js";import"./useFocusRing-BSBcwiCP.js";import"./useFocusable-CkZtY9Qx.js";import"./RSPContexts-D2Dnlu1I.js";import"./Collection-B44oh5ya.js";import"./CollectionBuilder-DsdXZBim.js";import"./SelectionIndicator-Byl_MQLN.js";import"./Separator-BZpKfwRn.js";import"./browser-BY7YAvyX.js";import"./useLocalizedStringFormatter-DhcIgiuG.js";import"./useStatic-DRLyxIeE.js";import"./LoadingSpinner-ChrQQ-Zb.js";import"./IconChevronDown-Dgoj3MhV.js";import"./remote-B1HlY5fu.js";import"./ariaLive-Cyrepnod.js";import"./useOverlayController-BKXV4RSL.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./useMakeFocusable-C14dKqua.js";import"./RadioGroup-Qug502kk.js";import"./FieldError-AWx0XaHn.js";import"./Form-CEBTvUmY.js";import"./useFormValidation-DNcRsa8m.js";import"./useFormReset-D2LFGRel.js";import"./IconRadioOn-Cn_fdjxD.js";import"./Label--ix077tG.js";import"./Label.module-lamhxTiw.js";import"./FieldError-CLzXjLUN.js";import"./IconDanger-B5Kx1O1H.js";import"./EmulatedBoldText-BBr3yRY7.js";const cr={title:"Form Controls/RadioGroup/Edge Cases",...s},a={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[t.long," "]}),r.jsxs(p,{value:"b",children:[t.long," "]}),r.jsx(p,{value:"c",children:t.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:t.medium}),r.jsx(c,{children:t.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
