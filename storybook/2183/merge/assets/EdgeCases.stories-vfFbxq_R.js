import{j as r}from"./iframe-CLIUsYfM.js";import{R as l,an as p,I as n}from"./TimeField-CTW-J0Nw.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CzzVimwr.js";import{T as u}from"./Text-D2QQWQR9.js";import{C as c}from"./Content-DCrZtXyx.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-BEk6n_vi.js";import"./mergeRefs-CJFCUUg6.js";import"./index-CJ3flHUa.js";import"./clsx-B-dksMZM.js";import"./Accordion-RPWmaaUv.js";import"./dynamic-BTR_FaAn.js";import"./Button-C446Wk0s.js";import"./IconWarning-DzQ9tJI9.js";import"./LoadingSpinner-CW57px9k.js";import"./Button-B2kdw2yg.js";import"./utils-Duab__sA.js";import"./ProgressBar-BbmNBh-t.js";import"./Hidden-BSEskgfC.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CpkmeH1J.js";import"./useFocusRing-D2OmgzqR.js";import"./useFocusable-C0n6CZKF.js";import"./useLocalizedStringFormatter-Aw7TOpbQ.js";import"./Section-Dkz1Z9Gc.js";import"./context-C4TkkEyw.js";import"./RSPContexts-DWZje-yD.js";import"./Collection-B_Esl1Ys.js";import"./CollectionBuilder-szrRscFH.js";import"./SelectionIndicator-CU9wCljV.js";import"./Separator-BM0WI_Oi.js";import"./browser-D_3azSPf.js";import"./useStatic-BzUzXPh5.js";import"./ActionGroup-CCnftHDn.js";import"./Alert-BpD9EZoZ.js";import"./AlertIcon-NB0p5Yms.js";import"./AlertBadge-BvA3n6JX.js";import"./Align-DgVh2Xmx.js";import"./Popover-CVmaaSmy.js";import"./OverlayTrigger-e2PcLUgP.js";import"./TableFooterRow-C-QuWcfV.js";import"./SkeletonText-CVzDSYQ1.js";import"./Avatar-h_Ki0CZ6.js";import"./AvatarStack-Gf9f-fzG.js";import"./Badge-wa7Q7exv.js";import"./BigNumber-2Pst3keg.js";import"./Breadcrumb-DyIGAk3l.js";import"./Link-D5lmNW05.js";import"./Heading-CKk-OBgv.js";import"./Legend-CZYYogSE.js";import"./FileCardList-Cv3K9cZ_.js";import"./Image-BPJGpCrO.js";import"./Color-BQDcjbxD.js";import"./Label-BWOWtuZ4.js";import"./ContextualHelpTrigger-B6boF4gV.js";import"./CounterBadge-DHmpw-7k.js";import"./DonutChart-BpGWb-78.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CGKrdI05.js";import"./Header-DwUPlhMJ.js";import"./Initials-Bx2ekm4G.js";import"./InlineCode-7D8-c4AY.js";import"./PopoverTrigger-pI4ezi-o.js";import"./Separator-BIDSmay0.js";import"./Message-DAsbqRnX.js";import"./MessageSeparator-BIyH-kjr.js";import"./NavigationGroup-BdpT5He2.js";import"./Notification-B6oOrQsf.js";import"./NotificationProvider-D7dh6xuQ.js";import"./ProgressBar-CpJVreoe.js";import"./Rating-cf68lLg4.js";import"./Skeleton-C6zvhWXN.js";import"./EmulatedBoldText-BUnoqqKP.js";const kr={title:"Form Controls/RadioGroup/Edge Cases",...s},e={render:t=>r.jsxs(l,{...t,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[i.long," "]}),r.jsxs(p,{value:"b",children:[i.long," "]}),r.jsx(p,{value:"c",children:i.long})]})},a={render:t=>r.jsx(l,{...t,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:i.medium}),r.jsx(c,{children:i.medium})]},o))})},m={render:t=>r.jsx(l,{...t,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Mr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{e as LongTexts,a as MultipleRadioButtons,m as SmallSpace,Mr as __namedExportsOrder,kr as default};
