import{j as r}from"./iframe-DO9N3msj.js";import{H as i}from"./Heading-DFXUXxT1.js";import a from"./Default.stories-sfO449TE.js";import{a2 as n}from"./IconWarning-BWr56wBK.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DKjjsjX1.js";import{C as d,a as l}from"./ContextualHelpTrigger-DSsVPekU.js";import{B as c}from"./Button-DK3gLuJ3.js";import{T as g}from"./Text-D7GNIHqq.js";import{B as x}from"./Badge-Dmk1cXNb.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CBgkl_gr.js";import"./index-DPecbs7H.js";import"./index-BKd7rs_c.js";import"./RSPContexts-dbdihzDr.js";import"./utils-Cu-DyEOs.js";import"./Section-CAvq1-xC.js";import"./Action-DxmtjQUu.js";import"./context-CvI_nrYK.js";import"./useStatic-KZCckyWk.js";import"./browser-hD6iDIbH.js";import"./getActionGroupSlot-B34s0y1B.js";import"./dynamic-DUGX_GEz.js";import"./Dialog-D3dWmtLO.js";import"./Button-CwTEoZMR.js";import"./ProgressBar-DB2HZm0N.js";import"./Hidden-C-R9QW7n.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BjTRJu3f.js";import"./useFocusRing-8nZAdgRB.js";import"./useFocusable-ahyCDO6Q.js";import"./OverlayArrow-01aTrBGz.js";import"./useControlledState-1ES4-sD1.js";import"./Collection-BqBfIbeS.js";import"./CollectionBuilder-DBX3bBv7.js";import"./SelectionIndicator-BhMymJwE.js";import"./Separator-BF-SYlg1.js";import"./useLocalizedStringFormatter-DC2cqCZD.js";import"./AlertIcon-Cx9uM7rV.js";import"./Popover-CJ5gJoTU.js";import"./OverlayTrigger-Cc6aFNNE.js";import"./ControlledNotification-ChKUqlSP.js";import"./ClearPropsContextView-ClFJoQqW.js";import"./LoadingSpinner-k8RqOHze.js";import"./EmulatedBoldText-CL2lsqyO.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
