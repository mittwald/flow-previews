import{j as r}from"./iframe-CH_aTfEL.js";import{H as i}from"./Heading-YtZItkx8.js";import a from"./Default.stories-XWyfFLI4.js";import"./IconApp-B8Pdxs7V.js";import{I as n}from"./IconMember-CCo8m_7H.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BhXx0Eu-.js";import{B as d}from"./Button-D53gB1eO.js";import{C as l,a as c}from"./ContextualHelpTrigger-f7AeISbo.js";import{T as g}from"./Text-BRh_x9bF.js";import{B as x}from"./Badge-fn48IOWo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DjBCrPYH.js";import"./mergeRefs-BzpEnNcV.js";import"./index-XPJW_oiy.js";import"./Heading-DKHBxjOZ.js";import"./RSPContexts-BB0WSv2m.js";import"./utils-C8srcrY8.js";import"./Section-B-U_9AN9.js";import"./ContextMenuSection-BQYMbGGH.js";import"./lib-90ocxLs-.js";import"./Action-WNrTLAcY.js";import"./browser-CjAUGP0i.js";import"./useStatic-DNN3uXbB.js";import"./getActionGroupSlot-Bn8FL-S5.js";import"./context-DeId9iUj.js";import"./Button-B1aqxMhV.js";import"./ProgressBar-i73KRfPj.js";import"./Hidden-xsM_Dwee.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dl7i2EFq.js";import"./useFocusRing-AHO8ppps.js";import"./useFocusable-BEFnslrO.js";import"./Collection-B-PgrD24.js";import"./CollectionBuilder-BkOVlqH0.js";import"./SelectionIndicator-CMFVzQc5.js";import"./Separator-IFFI1hok.js";import"./useLocalizedStringFormatter-DVjHg6pM.js";import"./dynamic-vwb-6_Ta.js";import"./remote-ZsoG4C7l.js";import"./AlertIcon-kNLxM35y.js";import"./IconDanger-DRvJdcN_.js";import"./IconInfo-CiEpJHC7.js";import"./IconCircleCheck-DezdMVF5.js";import"./IconX-DC29rh3t.js";import"./IconCheck-D02mUZL5.js";import"./LoadingSpinner-Cfaoz3gV.js";import"./ariaLive-Cw13p-6Q.js";import"./Popover-mq_MJ5zE.js";import"./OverlayContextProvider-D2TVPKxb.js";import"./useOverlayController-CA1JZthw.js";import"./OverlayTrigger-5pOe9hS7.js";import"./EmulatedBoldText-D1x6Y0F_.js";import"./IconClose--PUkN_kR.js";const Hr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(l,{children:[r.jsx(d,{}),r.jsx(c,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      {dummyText.medium}
    </Heading>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      {dummyText.long}
      <AlertBadge>Alert</AlertBadge>
      <Badge>Badge</Badge>
    </Heading>
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      {dummyText.long}
      <ContextualHelpTrigger>
        <Button />
        <ContextualHelp {...props}>
          <Text>{dummyText.medium}</Text>
        </ContextualHelp>
      </ContextualHelpTrigger>
    </Heading>
}`,...m.parameters?.docs?.source}}};const Br=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,Br as __namedExportsOrder,Hr as default};
