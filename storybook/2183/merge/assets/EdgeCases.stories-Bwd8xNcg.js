import{j as r}from"./iframe-AfMfDnul.js";import{R as l,ap as p,I as n}from"./TimeField-BK14odaB.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-SWlBpIdZ.js";import{T as u}from"./Text-XXGzm8bZ.js";import{C as c}from"./Content-B3NPYowa.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-D0YtrswE.js";import"./mergeRefs-hRGJQS5p.js";import"./index-Cse-H3Oz.js";import"./clsx-B-dksMZM.js";import"./Accordion-NekwP7Iq.js";import"./dynamic-B22nf4Sq.js";import"./Button-Dz-J0BZY.js";import"./IconWarning-BHjxQDF5.js";import"./remote-BbVCA53p.js";import"./LoadingSpinner-C1jt85JD.js";import"./Button-CnuzJqL8.js";import"./utils-wHWs8Mhj.js";import"./ProgressBar-BHyKVsx8.js";import"./Hidden-3-cgxJ5L.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-ESdZ7ZET.js";import"./useFocusRing-BCI7vGPi.js";import"./useFocusable-CBVaElx9.js";import"./useLocalizedStringFormatter-ZYKyDhtN.js";import"./Section-ebqGZRf9.js";import"./context-WpTHPnjK.js";import"./RSPContexts-C5kaCkGg.js";import"./Collection-B07e3AhT.js";import"./CollectionBuilder-cwz4h6ef.js";import"./SelectionIndicator-DvSIX2eN.js";import"./Separator-Cu7L9zFQ.js";import"./browser-D3b8NrdU.js";import"./useStatic-oE3CUH2s.js";import"./ActionGroup-CiNT698X.js";import"./Alert-DLVLnSp7.js";import"./AlertIcon-q77oMlDX.js";import"./AlertBadge-urZauIAv.js";import"./Align-DO08DH9M.js";import"./Popover-CmYxShpW.js";import"./OverlayTrigger-CzOjAy2I.js";import"./TableFooterRow-CqtqWf9U.js";import"./SkeletonText-C4RPLkJL.js";import"./Avatar-DhGvbDQ6.js";import"./AvatarStack-Cnvkf5dH.js";import"./Badge-eDxwdHYA.js";import"./BigNumber-Ci9DRIHe.js";import"./Breadcrumb-DYWPteCH.js";import"./Link-hXv3E1Ra.js";import"./Heading-Cl5UGWqj.js";import"./Legend-DQqywowg.js";import"./FileCardList-YajtycxG.js";import"./Image-B-iX1Sov.js";import"./Color-CJBrdfrQ.js";import"./Label-CEgt2ST5.js";import"./ContextualHelpTrigger-BGD0J07C.js";import"./CounterBadge-CnjwmzpL.js";import"./DonutChart-K7DPpc3R.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BiQjAIjj.js";import"./Header-BaKdY0Y9.js";import"./Initials-C1l4vziN.js";import"./InlineCode-C6DAsZkJ.js";import"./PopoverTrigger-CMgONCmT.js";import"./Separator-DJ5CH4NB.js";import"./Message-BJab1gPB.js";import"./MessageSeparator-CqsC5kSU.js";import"./NavigationGroup-Ifu-QKtv.js";import"./Notification-Dq4SIvAb.js";import"./NotificationProvider-C4tBKUz-.js";import"./ProgressBar-DWcH6LPN.js";import"./Rating-Dfpy_BL0.js";import"./Skeleton-WYwe29HQ.js";import"./EmulatedBoldText-pgpRP3jm.js";const Mr={title:"Form Controls/RadioGroup/Edge Cases",...s},e={render:t=>r.jsxs(l,{...t,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[i.long," "]}),r.jsxs(p,{value:"b",children:[i.long," "]}),r.jsx(p,{value:"c",children:i.long})]})},a={render:t=>r.jsx(l,{...t,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:i.medium}),r.jsx(c,{children:i.medium})]},o))})},m={render:t=>r.jsx(l,{...t,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="a" aria-label="Label">
      <Radio value="a">{dummyText.long} </Radio>
      <Radio value="b">{dummyText.long} </Radio>
      <Radio value="c">{dummyText.long}</Radio>
    </RadioGroup>
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label" l={[1, 1, 1, 1]}>
      {Array(6).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            <Text>{dummyText.medium}</Text>
            <Content>{dummyText.medium}</Content>
          </RadioButton>)}
    </RadioGroup>
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const _r=["LongTexts","MultipleRadioButtons","SmallSpace"];export{e as LongTexts,a as MultipleRadioButtons,m as SmallSpace,_r as __namedExportsOrder,Mr as default};
