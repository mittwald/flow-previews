import{j as r}from"./iframe-CXtvBV5-.js";import{H as p}from"./Heading-BrBtBi-y.js";import a from"./Default.stories-N7uxVl2k.js";import{a2 as i}from"./IconWarning-BhkQzOu2.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-uNDoePGd.js";import{C as d,a as l}from"./ContextualHelpTrigger-BC8S8E_S.js";import{B as c}from"./Button-B1zeu3c2.js";import{T as g}from"./Text-CMr19a6m.js";import{B as x}from"./Badge-CpmTQ8o9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BygdkkPC.js";import"./mergeRefs-XVX53w-Z.js";import"./index-ChNj5jQF.js";import"./RSPContexts-CwFlS_g1.js";import"./utils-qd2QOFm2.js";import"./Section-Cfn-btcH.js";import"./context-BYM96aX5.js";import"./Button-Czyxm9kV.js";import"./ProgressBar-BKXLtSPJ.js";import"./Hidden-CuDHI-By.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CAEu_mOG.js";import"./useFocusRing-B4KbP9xH.js";import"./useFocusable-Bz2ht442.js";import"./Collection-Dzcp4a7b.js";import"./CollectionBuilder-D3qe7MnH.js";import"./SelectionIndicator-CtMNhqjQ.js";import"./Separator-B4Qn40UI.js";import"./browser-Du_NX0QX.js";import"./useLocalizedStringFormatter-CRhy_wW7.js";import"./useStatic-CaDi_bvV.js";import"./dynamic-d7RV2m3i.js";import"./AlertIcon-CV1zk-Xj.js";import"./Popover-BDQF3mLq.js";import"./OverlayTrigger-EmUXyo3B.js";import"./LoadingSpinner-8mK8rEyJ.js";import"./EmulatedBoldText-BlfminYz.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
