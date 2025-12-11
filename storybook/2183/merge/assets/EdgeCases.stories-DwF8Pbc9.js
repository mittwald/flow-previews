import{j as r}from"./iframe-B9DmQEvm.js";import{R as l,an as p,I as n}from"./TimeField-BCrDwFv1.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DJVrXLjq.js";import{T as u}from"./Text-DWnECR1V.js";import{C as c}from"./Content-JADEg-IW.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-D4WQNPB7.js";import"./mergeRefs-D6R5gGm4.js";import"./index-CFtXvdW-.js";import"./clsx-B-dksMZM.js";import"./Accordion-D4jAtFpD.js";import"./dynamic-D9zzs7eg.js";import"./Button-Dm4Gj0Ue.js";import"./IconWarning-DHbLseiS.js";import"./remote-pOc8vwOE.js";import"./LoadingSpinner-CoK93z8B.js";import"./Button-aNJWqsMX.js";import"./utils-Oe4-zNeB.js";import"./ProgressBar-2zujtr-f.js";import"./Hidden-CljRM6Hn.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-f4__Yrtg.js";import"./useFocusRing-CcbQunlU.js";import"./useFocusable-CWuYRGi_.js";import"./useLocalizedStringFormatter-BIKdkDCX.js";import"./Section-C_OhuZda.js";import"./context-CWF20r0U.js";import"./RSPContexts-CotCKDbU.js";import"./Collection-hhJxclBU.js";import"./CollectionBuilder-BT6nUxaY.js";import"./SelectionIndicator-DK0swjPr.js";import"./Separator-CBfW85A4.js";import"./browser-B5MMVHjZ.js";import"./useStatic-D5S9NXQn.js";import"./ActionGroup-BPBZMd0G.js";import"./Alert-C2lbq4BB.js";import"./AlertIcon-DNW_OXFb.js";import"./AlertBadge-C6Me14oL.js";import"./Align-DPuLyLOo.js";import"./Popover-UpR8ui09.js";import"./OverlayTrigger-BPc83cwF.js";import"./TableFooterRow-B35Rsrml.js";import"./SkeletonText-ZPaTyog7.js";import"./Avatar-Bx2ST7JM.js";import"./AvatarStack-_PkufGBz.js";import"./Badge-DmsrCf-1.js";import"./BigNumber-DHP9TJHn.js";import"./Breadcrumb-LOJeBKLO.js";import"./Link-DZQzqDqQ.js";import"./Heading-DwjnBE1G.js";import"./Legend-Bh3IkHhT.js";import"./FileCardList-BAmcrG49.js";import"./Image-BrfuIr9u.js";import"./Color-DhQB_epS.js";import"./Label-CdjTRCcN.js";import"./ContextualHelpTrigger-dKYi-1DA.js";import"./CounterBadge-Cls8KRo_.js";import"./DonutChart-B9esqjeH.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DEET8u9H.js";import"./Header-DeL33C6q.js";import"./Initials-Dn2eAsB4.js";import"./InlineCode-C2pHeQEX.js";import"./PopoverTrigger-BccW7zFf.js";import"./Separator-fewq4lm1.js";import"./Message-CS9r66Cj.js";import"./MessageSeparator-B3ZhQOA7.js";import"./NavigationGroup-bOs2Paa-.js";import"./Notification-D4DyPezB.js";import"./NotificationProvider-HN69aTqY.js";import"./ProgressBar-CZYj1IvA.js";import"./Rating-BgHH720o.js";import"./Skeleton-xhKc-iSZ.js";import"./EmulatedBoldText-CcFQw1kW.js";const Mr={title:"Form Controls/RadioGroup/Edge Cases",...s},e={render:t=>r.jsxs(l,{...t,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[i.long," "]}),r.jsxs(p,{value:"b",children:[i.long," "]}),r.jsx(p,{value:"c",children:i.long})]})},a={render:t=>r.jsx(l,{...t,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:i.medium}),r.jsx(c,{children:i.medium})]},o))})},m={render:t=>r.jsx(l,{...t,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
