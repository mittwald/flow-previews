import{j as r}from"./iframe-BIOR2-hs.js";import{H as p}from"./Heading-Cv__lUFC.js";import a from"./Default.stories-B9c6oJba.js";import{a1 as i}from"./IconWarning-DZ71cvXF.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DCY0z1jh.js";import{C as d,a as l}from"./ContextualHelpTrigger-BXnzR8Ux.js";import{B as c}from"./Button-CfZ-AQyp.js";import{T as g}from"./Text-DusIDTsD.js";import{B as x}from"./Badge-Cr-ClmAO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-RMvdN3RZ.js";import"./mergeRefs-U5WlywcK.js";import"./index-k9AOzptS.js";import"./RSPContexts-DcPCJIF5.js";import"./utils-DsOUUUiG.js";import"./Section-BqNRxlPT.js";import"./context-CUEzUKrh.js";import"./Button-Vr3ctEdr.js";import"./ProgressBar-_rI0OtV6.js";import"./Hidden-CVR9fNcA.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BLOg-x3I.js";import"./useFocusRing-1hKsP8MW.js";import"./useFocusable-B_nx0oid.js";import"./Collection-Cvuk07Q7.js";import"./CollectionBuilder-Dgt7X-YC.js";import"./SelectionIndicator-DG9tWISV.js";import"./Separator-DTwWIU6f.js";import"./browser-D0ITs1ti.js";import"./useLocalizedStringFormatter-BKbYN9ME.js";import"./useStatic-CRF1h1Jc.js";import"./dynamic-BVxG6scv.js";import"./remote-CjhnXpnY.js";import"./AlertIcon-BvUo9Etu.js";import"./Popover-BGEckYFs.js";import"./OverlayTrigger-4gUv_Eql.js";import"./LoadingSpinner-CKTuHmBU.js";import"./EmulatedBoldText-Wg5Zh9Cq.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const tr=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,tr as __namedExportsOrder,er as default};
