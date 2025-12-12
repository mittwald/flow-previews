import{j as r}from"./iframe-DNac-Rqf.js";import{H as p}from"./Heading-B9C-Q8d_.js";import a from"./Default.stories-BAQbYt-V.js";import{a1 as i}from"./IconWarning-Cg768Zjl.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-B4Gw2oem.js";import{C as d,a as l}from"./ContextualHelpTrigger-BMAda_hh.js";import{B as c}from"./Button-CUSLqQMc.js";import{T as g}from"./Text-D0ZE_3Re.js";import{B as x}from"./Badge-BTPi5GTz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C_xkOl2m.js";import"./mergeRefs-CMWgjpmK.js";import"./index--GDWo6c1.js";import"./RSPContexts-Cd6lFFaf.js";import"./utils-BduO7XRu.js";import"./Section-DvtlFJN0.js";import"./context-CZdohShl.js";import"./Button-jJfhABmc.js";import"./ProgressBar-Cg_AUX6O.js";import"./Hidden-DGwLcp0N.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-g2-sYTkT.js";import"./useFocusRing-Dh9thb9f.js";import"./useFocusable-rb0lSnzN.js";import"./Collection-igBrAvIn.js";import"./CollectionBuilder-qxwNBjxK.js";import"./SelectionIndicator-C4Ae8ohN.js";import"./Separator-DHka8Fv6.js";import"./browser-nJ4CE5Oc.js";import"./useLocalizedStringFormatter-BLbNTQNm.js";import"./useStatic-ihim0ckM.js";import"./dynamic-DYsIbK1A.js";import"./remote-DNzJzz_i.js";import"./AlertIcon-BCoAEyQh.js";import"./Popover-Cv71dRgv.js";import"./OverlayTrigger-BBjUB5WE.js";import"./LoadingSpinner-lobDwtPy.js";import"./EmulatedBoldText-Dq-fgG2H.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
