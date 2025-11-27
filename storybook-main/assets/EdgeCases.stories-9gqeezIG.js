import{j as r}from"./iframe-CAXopRTx.js";import{H as p}from"./Heading-kGKtBlX4.js";import a from"./Default.stories-BmLVM21Y.js";import{a2 as i}from"./IconWarning-CZAvow1a.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DFIj-iNs.js";import{C as d,a as l}from"./ContextualHelpTrigger-Dj6mrcgU.js";import{B as c}from"./Button-Ctv-dB52.js";import{T as g}from"./Text-BF5hWH0r.js";import{B as x}from"./Badge-BFCmhw44.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BV-EFtmJ.js";import"./mergeRefs-C_4KEy1o.js";import"./index-9z8TnNhf.js";import"./RSPContexts-BuWbS9Uz.js";import"./utils-Dzmr5ZRW.js";import"./Section-DhxlZfa0.js";import"./context-B6djjyHK.js";import"./Button-Chz2mIUC.js";import"./ProgressBar-Dw7oROZh.js";import"./Hidden-DOod4g1Z.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-NOf08-wC.js";import"./useFocusRing-DTLGJlTA.js";import"./useFocusable-CGAuhRwL.js";import"./Collection-Bc328CGA.js";import"./CollectionBuilder-TpkYGVLd.js";import"./SelectionIndicator-dypojMNo.js";import"./Separator-BMVIHcHI.js";import"./browser-Byp0bOe_.js";import"./useLocalizedStringFormatter-0XeO7SJn.js";import"./useStatic-B1gRKxid.js";import"./dynamic-D21vqi9G.js";import"./AlertIcon-CPsr1mMB.js";import"./Popover-Tc25RGFF.js";import"./OverlayTrigger-Bjc5GfEu.js";import"./LoadingSpinner-CoC4LtwE.js";import"./EmulatedBoldText-DePsUjt1.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
