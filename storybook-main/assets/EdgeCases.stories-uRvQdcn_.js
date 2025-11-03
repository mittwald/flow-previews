import{j as r}from"./iframe-Bx5EipPE.js";import{H as i}from"./Heading-DhAPxMie.js";import a from"./Default.stories-4r_H11mb.js";import{a2 as n}from"./IconWarning-sXt69lXW.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BwMmDr9n.js";import{C as d,a as l}from"./ContextualHelpTrigger-C9p_kpwL.js";import{B as c}from"./Button-CFmBk-Ho.js";import{T as g}from"./Text-cL2QlUTP.js";import{B as x}from"./Badge-BTvmzEPQ.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DV1r5tPv.js";import"./index-13Ss2Q1C.js";import"./index-B2U9nMUa.js";import"./RSPContexts-ByW7h33h.js";import"./utils-CqLTISaK.js";import"./Section-DvWWmWm_.js";import"./Action-D66DYP5N.js";import"./context-mT0U7naa.js";import"./useStatic-BSnv9Wf7.js";import"./browser-YP_S1MMX.js";import"./getActionGroupSlot-B1Q5BOiy.js";import"./dynamic-DMwV73o9.js";import"./Dialog-iL1jHTNr.js";import"./Button-CMS0XqzI.js";import"./ProgressBar-CLZ_h9h8.js";import"./Hidden-DlcLHRCE.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CiBo84na.js";import"./useFocusRing-B-aBTfr6.js";import"./useFocusable-C9Y_kWrv.js";import"./OverlayArrow-DDi9NGvK.js";import"./useControlledState-DARDYAMl.js";import"./Collection-BHn5eDKP.js";import"./CollectionBuilder-cxVcyhpe.js";import"./SelectionIndicator-MBSA8IqZ.js";import"./Separator-CJ9-vZHB.js";import"./useLocalizedStringFormatter-2_Ttu7_B.js";import"./AlertIcon-DV0ec5yj.js";import"./Popover-iFb4HmrW.js";import"./OverlayTrigger-CtLRnD7V.js";import"./ControlledNotification-BIugGNxy.js";import"./ClearPropsContextView-Cv4XWBgA.js";import"./LoadingSpinner-BBcen_x5.js";import"./EmulatedBoldText-DBVghW6y.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ar=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,ar as __namedExportsOrder,nr as default};
