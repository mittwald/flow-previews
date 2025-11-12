import{j as r}from"./iframe-Ye-9ROja.js";import{H as i}from"./Heading-ETrbJF6H.js";import a from"./Default.stories-B2MQC7MP.js";import{a2 as n}from"./IconWarning-C5ScV98r.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BwQy8R4I.js";import{C as d,a as l}from"./ContextualHelpTrigger-qqmLNRdq.js";import{B as c}from"./Button-CSXrQkPS.js";import{T as g}from"./Text-Bsxj-TZS.js";import{B as x}from"./Badge-B8DGqMn_.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DVMSJKid.js";import"./index-BD2FLLtY.js";import"./index-MGNRFzGq.js";import"./RSPContexts-CFmCNefB.js";import"./utils-CF6YsxS1.js";import"./Section-D-jjNbm1.js";import"./Action-qygqR_UC.js";import"./context-CZJE5_Px.js";import"./useStatic-BBGAeEE_.js";import"./browser-BcPcK0wn.js";import"./getActionGroupSlot-Dd6c_7lB.js";import"./dynamic-1eLzqo0n.js";import"./Dialog-DBZH8ijj.js";import"./Button-COBj9UNQ.js";import"./ProgressBar-Dc-dQlrj.js";import"./Hidden-CYSIeRK5.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BMOJ7e9i.js";import"./useFocusRing-CJrPyvnd.js";import"./useFocusable-CkKnxemF.js";import"./OverlayArrow-D0NjRXEq.js";import"./useControlledState-DL7WEOig.js";import"./Collection-iSYWZ0WM.js";import"./CollectionBuilder-CD94NaG6.js";import"./SelectionIndicator--h8__Bgl.js";import"./Separator-BZhvxbZo.js";import"./useLocalizedStringFormatter-8EdZld9N.js";import"./AlertIcon-Cms0_lyO.js";import"./Popover-01hMVctL.js";import"./OverlayTrigger-7A3ebmst.js";import"./ControlledNotification-D1ICvP0t.js";import"./ClearPropsContextView-P5ekssIx.js";import"./LoadingSpinner-BKm3aKU7.js";import"./EmulatedBoldText-Bx43jLQW.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
