import{j as r}from"./iframe-tI_lG94_.js";import{H as i}from"./Heading-BGy3_a0K.js";import a from"./Default.stories-MtPrPnUk.js";import{a3 as n}from"./IconWarning-BFYQkdin.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DKmhW3pC.js";import{C as d,a as l}from"./ContextualHelpTrigger-ShJ-vFCO.js";import{B as c}from"./Button-WUI-ZJ9l.js";import{T as g}from"./Text-DDIuCQxA.js";import{B as x}from"./Badge-DQj0atGW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7r6bord.js";import"./index-Cx51kJJc.js";import"./index-CBk6rXlg.js";import"./Heading-Ds7I4FP5.js";import"./RSPContexts-C1ceWNax.js";import"./utils-bmh-HeLH.js";import"./Section-Zl-SwqAC.js";import"./ContextMenuSection-Co6pbj1l.js";import"./Action-CkhZi8kw.js";import"./context-Ci5c_Wjo.js";import"./useStatic-vWo9ean7.js";import"./browser-DuhBvQkx.js";import"./getActionGroupSlot-DPvye52P.js";import"./dynamic-DqOiE30k.js";import"./Dialog-Bo5p_Zqr.js";import"./Button-EHR8zEQX.js";import"./ProgressBar-B0YygRTY.js";import"./Label-BRs8jfGQ.js";import"./Hidden-xjuSUFbD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-dT-ksHYF.js";import"./context-CBF_EHvQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C1ke7TUF.js";import"./useFocus-DCHopMY8.js";import"./useFocusRing-Dgbmnyxw.js";import"./useFocusable-BnM0ssdw.js";import"./OverlayArrow-DuDGHp0O.js";import"./useControlledState-BE5RFE46.js";import"./Collection-DCiKuUl7.js";import"./CollectionBuilder-Bsyu2Qik.js";import"./SelectionIndicator-uIlcbJnR.js";import"./Separator-AUomIBZD.js";import"./Text-Bx7ijqLX.js";import"./SelectionManager-BHP7q8X0.js";import"./useEvent-CrsvrwL5.js";import"./useCollator-BwiXk11m.js";import"./FocusScope-Brgrzlff.js";import"./useLocalizedStringFormatter-BU5vto5x.js";import"./VisuallyHidden-sfQiOa3Q.js";import"./remote-CmKo-bli.js";import"./AlertIcon-BkNTScum.js";import"./Popover-DkoOxFI-.js";import"./useOverlayController-B_c7Bk6_.js";import"./OverlayContextProvider-CkzPVZUF.js";import"./OverlayTrigger-CuZ4GO5W.js";import"./LoadingSpinner-KbaLfraT.js";import"./EmulatedBoldText-CqR-YL6D.js";const Cr={...a,title:"Content/Heading/Edge Cases",component:i},e={render:t=>r.jsxs(i,{...t,children:[r.jsx(n,{}),p.medium]})},o={render:t=>r.jsxs(i,{...t,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:t=>r.jsxs(i,{...t,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...t,children:r.jsx(g,{children:p.medium})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      {dummyText.medium}
    </Heading>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Ar=["LongText","WithAlertBadge","WithContextualHelp"];export{e as LongText,o as WithAlertBadge,m as WithContextualHelp,Ar as __namedExportsOrder,Cr as default};
