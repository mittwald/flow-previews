import{j as r}from"./iframe-BZ309vyP.js";import{H as p}from"./Heading-BsbQC_AI.js";import a from"./Default.stories-D22DOXKn.js";import{a2 as i}from"./IconWarning-DvQ_83sT.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-R-mVKmEC.js";import{C as d,a as l}from"./ContextualHelpTrigger-CvFvqIHG.js";import{B as c}from"./Button-D_IowAzf.js";import{T as g}from"./Text-C4LG1QU9.js";import{B as x}from"./Badge--3MWN732.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-P_wGPXL3.js";import"./mergeRefs-DOKtgXIl.js";import"./index-D_qUUaJn.js";import"./RSPContexts-CvJVTBp5.js";import"./utils-JyFk5TTa.js";import"./Section-8HxUyc4l.js";import"./context-DqVMPo4j.js";import"./Button-CF0FSAUf.js";import"./ProgressBar-BUFkxRcJ.js";import"./Hidden-Dy-Kvk-F.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B2ssQm4M.js";import"./useFocusRing-BtfZpnq2.js";import"./useFocusable-CnzH4q2c.js";import"./Collection-Jfb5Oz2B.js";import"./CollectionBuilder-BxUVDWC-.js";import"./SelectionIndicator-B3TjwCoM.js";import"./Separator-Dgou7g2f.js";import"./browser-6QOIIU7n.js";import"./useLocalizedStringFormatter-D2Npicej.js";import"./useStatic-5dWEA-L1.js";import"./dynamic-BlbD8p9A.js";import"./AlertIcon-B-mY0RH1.js";import"./Popover-X1T8rxjL.js";import"./OverlayTrigger-D_yTwUd7.js";import"./LoadingSpinner-CP4vAouS.js";import"./EmulatedBoldText-BN5KbGVs.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const er=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,er as __namedExportsOrder,rr as default};
