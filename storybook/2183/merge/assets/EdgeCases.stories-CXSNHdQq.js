import{j as r}from"./iframe-Bo-CC4om.js";import{R as l,an as p,I as n}from"./TimeField-C-GOyraa.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-X9_hZr-M.js";import{T as u}from"./Text-FWtYFqa_.js";import{C as c}from"./Content-DkmAOWWJ.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-JVmwHNwK.js";import"./mergeRefs-BCVLU5t5.js";import"./index-Cq4e0PeD.js";import"./clsx-B-dksMZM.js";import"./Accordion-9Le9yhf_.js";import"./dynamic-DI9mkNr1.js";import"./Button-DsbAYxy6.js";import"./IconWarning-B7qIXHf5.js";import"./remote-B4cOsRJO.js";import"./LoadingSpinner-U2Qf3euF.js";import"./Button-DEzwtm5X.js";import"./utils-BE4vzmGc.js";import"./ProgressBar-1VAtpU2v.js";import"./Hidden-DO4405Os.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DUzMMmSG.js";import"./useFocusRing-ChCBtORy.js";import"./useFocusable-B-PGRSDZ.js";import"./useLocalizedStringFormatter-C8gMVCfn.js";import"./Section-BSzb61PI.js";import"./context-Dp75aXTI.js";import"./RSPContexts-BIpJdst2.js";import"./Collection-D6MbkC5o.js";import"./CollectionBuilder-B0V3ZRNt.js";import"./SelectionIndicator-BLd_vFKr.js";import"./Separator-BoV_7H5z.js";import"./browser-CQUdwXOL.js";import"./useStatic-CUzdYRpB.js";import"./ActionGroup-DmuV-_zy.js";import"./Alert-Dt_4j8QW.js";import"./AlertIcon-mGxxCUjy.js";import"./AlertBadge-BIsElKxu.js";import"./Align-2Rvfe-vL.js";import"./Popover-CuQlxumw.js";import"./OverlayTrigger-CdAPQ6Lz.js";import"./TableFooterRow-rYWUUYPE.js";import"./SkeletonText-Cawt_Liw.js";import"./Avatar-DZgOazPv.js";import"./AvatarStack-CK7V-CZy.js";import"./Badge-KHAUUQ1g.js";import"./BigNumber-BPcM1V5W.js";import"./Breadcrumb-BdPm70-C.js";import"./Link-Cjmbqaeu.js";import"./Heading-BHjCTnZi.js";import"./Legend-BJJJjizN.js";import"./FileCardList-Ns0-bzlM.js";import"./Image-DWyBIzwU.js";import"./Color-B9W2SphA.js";import"./Label-DRQE_3kZ.js";import"./ContextualHelpTrigger-qV88HZ0Q.js";import"./CounterBadge-DrxirSEd.js";import"./DonutChart-r4Ym1MHi.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DvV3W6_m.js";import"./Header-DX79Odlg.js";import"./Initials-c31qSACO.js";import"./InlineCode-WgY9VQ0d.js";import"./PopoverTrigger--EGMIntl.js";import"./Separator-Tuz6Qj0k.js";import"./Message-DwvTL-MT.js";import"./MessageSeparator-BmmOSADd.js";import"./NavigationGroup-BfArZJF_.js";import"./Notification-CxiWXGjP.js";import"./NotificationProvider-ev7yt2lS.js";import"./ProgressBar-Y54IGAK3.js";import"./Rating-D6chMOWs.js";import"./Skeleton-Bnf_ayGA.js";import"./EmulatedBoldText-DaZX5sg6.js";const Mr={title:"Form Controls/RadioGroup/Edge Cases",...s},e={render:t=>r.jsxs(l,{...t,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[i.long," "]}),r.jsxs(p,{value:"b",children:[i.long," "]}),r.jsx(p,{value:"c",children:i.long})]})},a={render:t=>r.jsx(l,{...t,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:i.medium}),r.jsx(c,{children:i.medium})]},o))})},m={render:t=>r.jsx(l,{...t,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
