import{j as r}from"./iframe-BA9q8iRx.js";import{H as p}from"./Heading-C0QNs5qM.js";import a from"./Default.stories-DqkX8Jvv.js";import{a2 as i}from"./IconWarning-Ddu6VgyQ.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-sp5O60vm.js";import{C as d,a as l}from"./ContextualHelpTrigger-CZA_SHxX.js";import{B as c}from"./Button-DkX1WVEp.js";import{T as g}from"./Text-Ms6nMBSf.js";import{B as x}from"./Badge-S78DqCsX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BVBE-WhE.js";import"./mergeRefs-D8u8JUrl.js";import"./index-DpY8H-Wc.js";import"./RSPContexts-CXfi1L-7.js";import"./utils-QcIDpANH.js";import"./Section-DoGwkV6i.js";import"./context-YS9jQ858.js";import"./Button-BZr9UZHX.js";import"./ProgressBar-Bk_cCSt-.js";import"./Hidden-CwA9YFci.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Cn4rMbpf.js";import"./useFocusRing--2IgGnS-.js";import"./useFocusable-CyfzywkV.js";import"./Collection-DW_VGPX_.js";import"./CollectionBuilder-VfTqomJV.js";import"./SelectionIndicator-DWxzYUVQ.js";import"./Separator-_HO3nlni.js";import"./browser-XONib2dq.js";import"./useLocalizedStringFormatter-w9QjgZdm.js";import"./useStatic-CdSu_vHo.js";import"./dynamic-HfD9Y7Ln.js";import"./AlertIcon-GpJO-Z9B.js";import"./Popover-_2bXyvx4.js";import"./OverlayTrigger-Cse3DARB.js";import"./LoadingSpinner-CRPfYfmX.js";import"./EmulatedBoldText-W46YB4wy.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
