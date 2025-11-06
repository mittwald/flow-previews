import{j as r}from"./iframe-CPn2ZlG8.js";import{H as i}from"./Heading-BzbKq0dK.js";import a from"./Default.stories-B3bCv_Gj.js";import{a2 as n}from"./IconWarning-BTNOc1CF.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BsQaA3x6.js";import{C as d,a as l}from"./ContextualHelpTrigger-BF0zQddW.js";import{B as c}from"./Button-i2RXMGoH.js";import{T as g}from"./Text-6RCNpXVe.js";import{B as x}from"./Badge-D9v8JAmm.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D5fQrT-l.js";import"./index-Db6BMMtx.js";import"./index-B0eWxAoc.js";import"./RSPContexts-CJHyh8nT.js";import"./utils-DBul4rcK.js";import"./Section-K5CfbtJu.js";import"./Action-Dgdncsxu.js";import"./context-CgTN8SSG.js";import"./useStatic-BnTfOIpp.js";import"./browser-Cl13ZrDl.js";import"./getActionGroupSlot-D7tF_HIo.js";import"./dynamic-CmzXv2ZH.js";import"./Dialog-CXw6CUzT.js";import"./Button-Di4iIPFk.js";import"./ProgressBar-CJ8nwOMy.js";import"./Hidden-rE78fkWj.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BiAR75ic.js";import"./useFocusRing-Bif2ggnn.js";import"./useFocusable-C96YDlM5.js";import"./OverlayArrow-Ck0nDntZ.js";import"./useControlledState-CZXOD-hn.js";import"./Collection-B8r3AE3V.js";import"./CollectionBuilder-DpjnogN1.js";import"./SelectionIndicator-BcoqESp_.js";import"./Separator-B1EP0OSh.js";import"./useLocalizedStringFormatter-3u0Ls056.js";import"./AlertIcon-zTj1UJpO.js";import"./Popover-BXUF-6SC.js";import"./OverlayTrigger-20DAFHoE.js";import"./ControlledNotification-BEs41KlO.js";import"./ClearPropsContextView-BhabDAmt.js";import"./LoadingSpinner-mgkNzsmz.js";import"./EmulatedBoldText-1j8ixKnD.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
