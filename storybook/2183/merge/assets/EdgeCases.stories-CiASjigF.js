import{j as r}from"./iframe-Cun9xEvG.js";import{H as p}from"./Heading-Bz0fxZKP.js";import a from"./Default.stories-Hkm5U8UT.js";import{a1 as i}from"./IconWarning-CPVRn4jW.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-CvD56Z7r.js";import{C as d,a as l}from"./ContextualHelpTrigger-2IHKY-I1.js";import{B as c}from"./Button-Be9JkCpV.js";import{T as g}from"./Text-46CNKReN.js";import{B as x}from"./Badge-EPhAECZq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cd0rcWBc.js";import"./mergeRefs-BXtjeRnl.js";import"./index-Bf8buJG0.js";import"./RSPContexts-DVf4IkrV.js";import"./utils-S5M_7oVk.js";import"./Section-DpYYQ4ld.js";import"./context-DiBM2o-y.js";import"./Button-D2k4TCQe.js";import"./ProgressBar-c76aO61i.js";import"./Hidden-BJOAuytn.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CTkEoG47.js";import"./useFocusRing-DD5EcUfr.js";import"./useFocusable-C8NsMmkc.js";import"./Collection-Tg2L3ks0.js";import"./CollectionBuilder-CdiRFq1v.js";import"./SelectionIndicator-MYqiPo_p.js";import"./Separator-CR4CvoS_.js";import"./browser-BgnuhwhB.js";import"./useLocalizedStringFormatter-BWJekubh.js";import"./useStatic-fkJ5iy3g.js";import"./dynamic-Bm0M0-O-.js";import"./remote-BgISxXks.js";import"./AlertIcon-BYwbyTte.js";import"./Popover-5hFlpbJ0.js";import"./OverlayTrigger-DKCqdxLC.js";import"./LoadingSpinner-BiAtSGtu.js";import"./EmulatedBoldText-2bJ0isTU.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
