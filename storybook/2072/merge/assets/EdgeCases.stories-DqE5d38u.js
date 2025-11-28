import{j as r}from"./iframe-C3jdvmqu.js";import{H as p}from"./Heading-BZdy5d_w.js";import a from"./Default.stories-UwTdKRer.js";import{a2 as i}from"./IconWarning-B93hkDaL.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-CiHrZnCZ.js";import{C as d,a as l}from"./ContextualHelpTrigger-B0sXZW5u.js";import{B as c}from"./Button-crBjhbVY.js";import{T as g}from"./Text-by0jRlX4.js";import{B as x}from"./Badge-DENltzo8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CbRGY8IE.js";import"./mergeRefs-2Ywf-Nb8.js";import"./index-C9vt92ef.js";import"./RSPContexts-n5O79WrS.js";import"./utils-Bnm0gbPW.js";import"./Section-Bx-16ZS-.js";import"./context-D0_2-R3T.js";import"./Button-BIwZHIrt.js";import"./ProgressBar-BH_IM9sd.js";import"./Hidden-Bkp5h4tk.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-KJ9X431h.js";import"./useFocusRing-C-IiPjuI.js";import"./useFocusable-BOYJgmQp.js";import"./Collection-D2JualPB.js";import"./CollectionBuilder-BOCut2o5.js";import"./SelectionIndicator-DyngYSm7.js";import"./Separator-D3R6VXnX.js";import"./browser-p2mffppm.js";import"./useLocalizedStringFormatter-C8ryTIgM.js";import"./useStatic-BVkn_XG8.js";import"./dynamic-D5Qg0LEH.js";import"./AlertIcon-DkwIeu6U.js";import"./Popover-5jsA4dKH.js";import"./OverlayTrigger-BPs2PyhK.js";import"./LoadingSpinner-BWjdiLAQ.js";import"./EmulatedBoldText-PDbCHW4-.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
