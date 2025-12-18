import{j as r}from"./iframe-FgJ_J-H0.js";import{H as p}from"./Heading-CtwLqgxn.js";import a from"./Default.stories-DDr5BpRx.js";import{a2 as i}from"./IconWarning-CTwTuPoy.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-H-rDyqf-.js";import{C as d,a as l}from"./ContextualHelpTrigger-4SkGlWeV.js";import{B as c}from"./Button-DAV102-b.js";import{T as g}from"./Text-DFL3SoXQ.js";import{B as x}from"./Badge-Dr16W0CP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D4ZDxBE5.js";import"./mergeRefs-B0SFCKpc.js";import"./index-D5Q5r0EQ.js";import"./RSPContexts-BtQRbm6D.js";import"./utils-CpAt2MQ0.js";import"./Section-KcKraSFk.js";import"./context-Zd06eDB-.js";import"./Button-D1iDLFQk.js";import"./ProgressBar-C9bgo184.js";import"./Hidden-fZuF_gJA.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BdkCFUfw.js";import"./useFocusRing-DWyZOWS1.js";import"./useFocusable-CcMdE3Gl.js";import"./Collection-DzrsfNpG.js";import"./CollectionBuilder-BkEo1yPT.js";import"./SelectionIndicator-DXbR8Lbk.js";import"./Separator-CEsI0Otd.js";import"./browser-DUTkZfBO.js";import"./useLocalizedStringFormatter-T_wC2jpb.js";import"./useStatic-C1zZPFiS.js";import"./dynamic-CcSJ2V2H.js";import"./AlertIcon-B3uKWtQk.js";import"./Popover-CMikV-wU.js";import"./OverlayTrigger--5L_1U0w.js";import"./LoadingSpinner-D-ZvoQWA.js";import"./EmulatedBoldText-B0xGhkgA.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
