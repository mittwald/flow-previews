import{j as r}from"./iframe-9u6Ufs56.js";import{H as i}from"./Heading-3nkwrjYk.js";import a from"./Default.stories-d6831ems.js";import{a2 as n}from"./IconWarning-e2U-5o25.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-CNA6uKSn.js";import{C as d,a as l}from"./ContextualHelpTrigger-nxMOucmM.js";import{B as c}from"./Button-_dn7QVPB.js";import{T as g}from"./Text-DBIGrc3m.js";import{B as x}from"./Badge-CIynJGVc.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-nxXkTRC9.js";import"./index-CEi0nf7L.js";import"./index-B3MDoUBn.js";import"./RSPContexts-CT2QL-I8.js";import"./utils-8ZPSUmH_.js";import"./Section-Czu0clYN.js";import"./Action-M6Kgfb_M.js";import"./context-C-QTHw1p.js";import"./useStatic-DAyA5uHy.js";import"./browser-BeFavaxk.js";import"./getActionGroupSlot-CNfG9i1s.js";import"./dynamic-CQrWC-Om.js";import"./Dialog-BeTHWiir.js";import"./Button-BhX9jjPy.js";import"./ProgressBar-x9yI0Gbi.js";import"./Hidden-BVK4GKwb.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-OI1cZ2Vi.js";import"./useFocusRing-Dcst_k34.js";import"./useFocusable-1HLi2XCg.js";import"./OverlayArrow-Cy8_4GJ7.js";import"./useControlledState-BzuGU0N9.js";import"./Collection-XNBA-cfj.js";import"./CollectionBuilder-DGvEiEzg.js";import"./SelectionIndicator-Bijj2SQV.js";import"./Separator-DJNGhX6a.js";import"./useLocalizedStringFormatter-C-5xhnkm.js";import"./AlertIcon-C5b9VCt7.js";import"./Popover-U_HYlJek.js";import"./OverlayTrigger-CpPCP_ZX.js";import"./ControlledNotification-irCIGaEl.js";import"./ClearPropsContextView-BIm6NWsD.js";import"./LoadingSpinner-LJCsSZP_.js";import"./EmulatedBoldText-DTSNQZDs.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
