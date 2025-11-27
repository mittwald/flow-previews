import{j as r}from"./iframe-B_xU1nn7.js";import{H as p}from"./Heading-B_4jd62B.js";import a from"./Default.stories-DRbfCvb6.js";import{a2 as i}from"./IconWarning-BbWnQxtz.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DBA4NYlx.js";import{C as d,a as l}from"./ContextualHelpTrigger-CYt3J7rd.js";import{B as c}from"./Button-CJjTOiYK.js";import{T as g}from"./Text-IdcKzQUN.js";import{B as x}from"./Badge-Tnmd4leD.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cqc_GEqv.js";import"./mergeRefs-DDgKR_H-.js";import"./index-BJJzNH44.js";import"./RSPContexts-CkMxE85k.js";import"./utils-DWRw1wg7.js";import"./Section-aN2a1IPE.js";import"./context-CNJB9XcB.js";import"./Button-C_B3ah-f.js";import"./ProgressBar-1v-zrZjX.js";import"./Hidden-AstmD5FI.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DGbiAMEx.js";import"./useFocusRing-B-eR60lx.js";import"./useFocusable-Ddd5SUsS.js";import"./Collection-SdZ6Sup7.js";import"./CollectionBuilder-CL7Y9BKh.js";import"./SelectionIndicator-DZ8T-aZ-.js";import"./Separator-D6B_DVDR.js";import"./browser-B5ILUykA.js";import"./useLocalizedStringFormatter-BxIEt52a.js";import"./useStatic-DEsZhXHA.js";import"./dynamic-DkcCZ1Pm.js";import"./AlertIcon-DBKF5K6s.js";import"./Popover-f3I7stco.js";import"./OverlayTrigger-DCVkiacf.js";import"./LoadingSpinner-D6qMiqks.js";import"./EmulatedBoldText-BzzsilYU.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
