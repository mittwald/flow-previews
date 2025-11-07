import{j as r}from"./iframe-C_rr3K7B.js";import{H as i}from"./Heading-zxknCt_n.js";import a from"./Default.stories-D-bF7VoP.js";import{a2 as n}from"./IconWarning-DU_TTROa.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DHbgVCiz.js";import{C as d,a as l}from"./ContextualHelpTrigger-Cf4bGUz3.js";import{B as c}from"./Button-DCjyK8f2.js";import{T as g}from"./Text-BsSJXbbR.js";import{B as x}from"./Badge-C80oNvTr.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B_W8EGz8.js";import"./index-BuJm22LX.js";import"./index-BjYnWwux.js";import"./RSPContexts-zcKIqYdj.js";import"./utils-C4h6fUQR.js";import"./Section-Bi-R-_iR.js";import"./Action-CIZ0694o.js";import"./context-D3P4luPW.js";import"./useStatic-BCUpaw5v.js";import"./browser-E0G6tvzo.js";import"./getActionGroupSlot-BxvOG7b1.js";import"./dynamic-BFlSKedW.js";import"./Dialog-YSlPVfGO.js";import"./Button-B3n1VqY_.js";import"./ProgressBar-BfFuAkhC.js";import"./Hidden-BRyX-IhD.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CfcUR6DZ.js";import"./useFocusRing-BdtY4hiP.js";import"./useFocusable-BgYFD5eH.js";import"./OverlayArrow-RRaewUl9.js";import"./useControlledState-D5USuG2w.js";import"./Collection-CoTlEKMj.js";import"./CollectionBuilder-DkbboSd2.js";import"./SelectionIndicator-D9WeA2Ww.js";import"./Separator-D4h-iSnJ.js";import"./useLocalizedStringFormatter-D9q7PMDi.js";import"./AlertIcon-iBCzN4pZ.js";import"./Popover-C6S62YvO.js";import"./OverlayTrigger-Bcj7IRSG.js";import"./ControlledNotification-DUF7vXg5.js";import"./ClearPropsContextView-BMWVcOQ4.js";import"./LoadingSpinner-CRVrq6rR.js";import"./EmulatedBoldText-C3mdhbnh.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
