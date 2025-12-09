import{j as r}from"./iframe-BqP6npnu.js";import{H as p}from"./Heading-Dc3wJcTH.js";import a from"./Default.stories-C8EB9a2L.js";import{a1 as i}from"./IconWarning-DbZ28gHF.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BDjWZOe3.js";import{C as d,a as l}from"./ContextualHelpTrigger-CYLItONs.js";import{B as c}from"./Button-CINxW6TG.js";import{T as g}from"./Text-DywGJIRt.js";import{B as x}from"./Badge-CbvcsGSe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-r-rgdyuu.js";import"./mergeRefs-BMwdHSSJ.js";import"./index-Bfa1LViZ.js";import"./RSPContexts-DNFW1N-a.js";import"./utils-Co5LfTVH.js";import"./Section-BgyjzhPc.js";import"./context-WZRL0rNv.js";import"./Button-Cqxj8v2u.js";import"./ProgressBar-DCp0FWd7.js";import"./Hidden-s6oF_Zfg.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dpv25OMu.js";import"./useFocusRing-D-9NYYvk.js";import"./useFocusable-CcDlosxd.js";import"./Collection-DiwcfHI2.js";import"./CollectionBuilder-Bxx5R3mQ.js";import"./SelectionIndicator-C0u1Mx-Z.js";import"./Separator-CD09dtZh.js";import"./browser-DXN0P2CK.js";import"./useLocalizedStringFormatter-BHml1YCA.js";import"./useStatic-BDpTt2fP.js";import"./dynamic-S48VUeic.js";import"./remote-CSf0dxK4.js";import"./AlertIcon-D6OwT7OR.js";import"./Popover-weX1_5w_.js";import"./OverlayTrigger-kHGfUlCD.js";import"./LoadingSpinner-C4lBONmO.js";import"./EmulatedBoldText-Htc9gLg0.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
