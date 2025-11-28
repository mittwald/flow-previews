import{j as r}from"./iframe-6pmDYBey.js";import{H as p}from"./Heading-6phWYNIK.js";import a from"./Default.stories-Cx6kf8hX.js";import{a2 as i}from"./IconWarning-D2rzgsKD.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DrOGK01L.js";import{C as d,a as l}from"./ContextualHelpTrigger-vqI_wpNC.js";import{B as c}from"./Button-Bz4oJBBk.js";import{T as g}from"./Text-DCl4bIjP.js";import{B as x}from"./Badge-B7ODamfh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bcab5p0Y.js";import"./mergeRefs-KX5b3W0M.js";import"./index-D7Awe5Nv.js";import"./RSPContexts-BHIIqogi.js";import"./utils-CclRT-8x.js";import"./Section-Byh4aHn5.js";import"./context-CTAsMywl.js";import"./Button-Bf_N8W1N.js";import"./ProgressBar-DSMryv5h.js";import"./Hidden-DGWIRGX2.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-D-9qd8rr.js";import"./useFocusRing-CIK_JYa4.js";import"./useFocusable-k6dtakHQ.js";import"./Collection-BzIHwVQs.js";import"./CollectionBuilder-s3gBlVxZ.js";import"./SelectionIndicator-BUH0wchX.js";import"./Separator-C2Ax_jJi.js";import"./browser-Curoa5u0.js";import"./useLocalizedStringFormatter-Cc63-Qc3.js";import"./useStatic-Bv4Ps5t5.js";import"./dynamic-PozyV8BB.js";import"./AlertIcon-mseo8G9-.js";import"./Popover-Dd0-1EJu.js";import"./OverlayTrigger-DSzgE-rS.js";import"./LoadingSpinner-D_0Hr43y.js";import"./EmulatedBoldText-CBUClY1I.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
