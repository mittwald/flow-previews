import{j as r}from"./iframe-D4AGuMnx.js";import{H as i}from"./Heading-BsaQzqWp.js";import a from"./Default.stories-DoFf8A75.js";import{a2 as n}from"./IconWarning-BC3tK9kj.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-_JwpxNnD.js";import{C as d,a as l}from"./ContextualHelpTrigger-Du-yR4dj.js";import{B as c}from"./Button-DtTeM47l.js";import{T as g}from"./Text-BtpbrdrH.js";import{B as x}from"./Badge-BJDG9oB6.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BIyscBzo.js";import"./index-Cd_u2pV_.js";import"./index-DNvdHJqk.js";import"./RSPContexts-B4Pxvc-Q.js";import"./utils-CqMmhAxq.js";import"./Section-C7ZxuYfk.js";import"./Action-BJsLMg4b.js";import"./context-DUgKYd_B.js";import"./useStatic-CK2cw9Tx.js";import"./browser-3OZPWisM.js";import"./getActionGroupSlot-y53Ggupv.js";import"./dynamic-oZwQWaGw.js";import"./Dialog-Dct0khyO.js";import"./Button-84EHC3SL.js";import"./ProgressBar-_bs3wo-c.js";import"./Hidden-BnByJu4s.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Bzk-5tqO.js";import"./useFocusRing-B0_rzNcg.js";import"./useFocusable-qdXI3c9W.js";import"./OverlayArrow-DclzRyUb.js";import"./useControlledState-DvYaxqI_.js";import"./Collection-BeK_S4wY.js";import"./CollectionBuilder-CWpdOayg.js";import"./SelectionIndicator-D5j5oFjn.js";import"./Separator-YST-GtXN.js";import"./useLocalizedStringFormatter-BNVQM74q.js";import"./AlertIcon-DIdf3aQ3.js";import"./Popover-dCAEc0Wh.js";import"./OverlayTrigger-Dm3E0-9T.js";import"./ControlledNotification-RGp8id5u.js";import"./ClearPropsContextView-BN-YBkpQ.js";import"./LoadingSpinner-u-oBwaFl.js";import"./EmulatedBoldText-IEU2-xTn.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
