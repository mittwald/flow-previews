import{j as r}from"./iframe-Clmt7jYU.js";import{R as l,an as p,I as n}from"./TimeField-C0di3Y5z.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-T0Rsr7eM.js";import{T as u}from"./Text-BQs7jhBI.js";import{C as c}from"./Content-BaHGf9op.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-Cmcxz_BG.js";import"./mergeRefs-BVqKkfsA.js";import"./index-DiVEBKFG.js";import"./clsx-B-dksMZM.js";import"./Accordion-2-mRDe9S.js";import"./dynamic-ByO6kVlP.js";import"./Button-Cpx-qVCp.js";import"./IconWarning-CMDAZJGy.js";import"./LoadingSpinner-CenMvatO.js";import"./Button-MP-U6i_K.js";import"./utils-BaIVInUf.js";import"./ProgressBar-D_4BHyIX.js";import"./Hidden-BZve3Xik.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-J-yaWB4J.js";import"./useFocusRing-SBYuaUD7.js";import"./useFocusable-BgBMU_CS.js";import"./useLocalizedStringFormatter--ByhM2n4.js";import"./Section-D-4V5L53.js";import"./context-BbRYzAs6.js";import"./RSPContexts-BNhmdufL.js";import"./Collection-xRwg1v5k.js";import"./CollectionBuilder-kvAQOu82.js";import"./SelectionIndicator-Wyz_1aA8.js";import"./Separator-Cl_cENZa.js";import"./browser-BVazs59Q.js";import"./useStatic-Bnfhfmst.js";import"./ActionGroup-3f2mOrmo.js";import"./Alert-BgyTes7-.js";import"./AlertIcon-BuWV4Npm.js";import"./AlertBadge-B-cIikZ6.js";import"./Align-kP2wQykA.js";import"./Popover--yCHfjbQ.js";import"./OverlayTrigger-Ce8vZdG2.js";import"./TableFooterRow-Dn-FDhfn.js";import"./SkeletonText-Ox4-vvjw.js";import"./Avatar-Cap9qVE3.js";import"./AvatarStack-CyBZbnmd.js";import"./Badge-DSWTM4Cn.js";import"./BigNumber-K7d08C_A.js";import"./Breadcrumb-CW32JSiJ.js";import"./Link-Cdb-IjP9.js";import"./Heading-DOf1Gbjg.js";import"./Legend-DpHbpxDT.js";import"./FileCardList-C6knu-Gv.js";import"./Image-mYPdxUVA.js";import"./Color-C3WK5Ehq.js";import"./Label-D60DkhLa.js";import"./ContextualHelpTrigger-Dzc-OR_f.js";import"./CounterBadge-DOY94Zrr.js";import"./DonutChart-B4Pw1gDt.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-fPCU1kmj.js";import"./Header-geqBE9py.js";import"./Initials-C8rRxGXt.js";import"./InlineCode-DsrKBfEK.js";import"./PopoverTrigger-Bac14MEQ.js";import"./Separator-C0rYsohv.js";import"./Message-_byUr7fM.js";import"./MessageSeparator-aISn9Nk9.js";import"./NavigationGroup-DCJQpVuq.js";import"./Notification-jgdKyHAO.js";import"./NotificationProvider-DV-TZjHG.js";import"./ProgressBar-CKu71Xlr.js";import"./Rating-D3r7O8dK.js";import"./Skeleton-K56s_bs8.js";import"./EmulatedBoldText-D5ywUyQZ.js";const kr={title:"Form Controls/RadioGroup/Edge Cases",...s},e={render:t=>r.jsxs(l,{...t,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[i.long," "]}),r.jsxs(p,{value:"b",children:[i.long," "]}),r.jsx(p,{value:"c",children:i.long})]})},a={render:t=>r.jsx(l,{...t,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:i.medium}),r.jsx(c,{children:i.medium})]},o))})},m={render:t=>r.jsx(l,{...t,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
