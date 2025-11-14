import{j as r}from"./iframe-7JAb-nDd.js";import{H as p}from"./Heading-CHzNLXxT.js";import a from"./Default.stories-D7gFHLg8.js";import{a2 as i}from"./IconWarning-CrvOn5qf.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-AOM4FSHZ.js";import{C as d,a as l}from"./ContextualHelpTrigger-7crKzglp.js";import{B as c}from"./Button-C274DNXY.js";import{T as g}from"./Text-Cjgg9Pe-.js";import{B as x}from"./Badge-B1Y6ruys.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DI02RRNp.js";import"./mergeRefs-BqKaiHD8.js";import"./index-DRtDW0cb.js";import"./RSPContexts-BRgQDZZ1.js";import"./utils-COcVuwM3.js";import"./Section--2nSNqYe.js";import"./context-49irLi2e.js";import"./Button-CcXbzio8.js";import"./ProgressBar-CubXbo9-.js";import"./Hidden-CYq8ZFci.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DufoU_2Q.js";import"./useFocusRing-JM7xFBIR.js";import"./useFocusable-B5p2nlfO.js";import"./Collection-DakGPO9D.js";import"./CollectionBuilder-DcGhuBQx.js";import"./SelectionIndicator-Co1wtinQ.js";import"./Separator-DCxDEExt.js";import"./browser-ES8JYesh.js";import"./useLocalizedStringFormatter-BfdvS2qE.js";import"./useStatic-BMWFl-h1.js";import"./getActionGroupSlot-o5MzPqMr.js";import"./dynamic-DAEQlq7s.js";import"./AlertIcon-WJ9tZl6s.js";import"./Popover-BcXGNCBW.js";import"./OverlayTrigger-DS9RFxPY.js";import"./LoadingSpinner-Ds95wBE7.js";import"./EmulatedBoldText-DX6Otmj0.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
