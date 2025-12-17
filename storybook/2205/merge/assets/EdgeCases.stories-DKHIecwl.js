import{j as r}from"./iframe-CH4VWYyw.js";import{H as p}from"./Heading-luYK-1U3.js";import a from"./Default.stories-D7SfY3Qz.js";import{a2 as i}from"./IconWarning-CUVmf0iP.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DfbHta5f.js";import{C as d,a as l}from"./ContextualHelpTrigger-CobzlyXE.js";import{B as c}from"./Button-CMjimR4T.js";import{T as g}from"./Text-DppnPY0e.js";import{B as x}from"./Badge-BzpkmF7E.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-RGeJUgUt.js";import"./mergeRefs--_CTko6t.js";import"./index-FoM_NaoT.js";import"./RSPContexts-COBXgLKc.js";import"./utils-B0RtSKxF.js";import"./Section-BYSnoqOE.js";import"./context-DhFeNNrI.js";import"./Button-C7FjL3VL.js";import"./ProgressBar-BTQp98g0.js";import"./Hidden-CDEXgFqV.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-C0jF3YAi.js";import"./useFocusRing-DRFwXyGM.js";import"./useFocusable-Au-ZLUmf.js";import"./Collection-L1fG0_vq.js";import"./CollectionBuilder-DHEE--Pj.js";import"./SelectionIndicator-Cmg6-Pdp.js";import"./Separator-88La-8FT.js";import"./browser-DUOSIs8m.js";import"./useLocalizedStringFormatter-BgdA6BoT.js";import"./useStatic-rQr5blZX.js";import"./dynamic-BXkfH89u.js";import"./AlertIcon-DXRGAj5W.js";import"./Popover-Ca49wibL.js";import"./OverlayTrigger-yyuSztfm.js";import"./LoadingSpinner-CM0pL980.js";import"./EmulatedBoldText-BLn1bvyP.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
