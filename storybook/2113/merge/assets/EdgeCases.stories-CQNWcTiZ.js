import{j as r}from"./iframe-Dy6b_FCP.js";import{H as i}from"./Heading-BfvZKiwZ.js";import a from"./Default.stories-SnGgT5GN.js";import{a2 as n}from"./IconWarning-DNcE7GB8.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BE7koL5m.js";import{C as d,a as l}from"./ContextualHelpTrigger-BooDiSla.js";import{B as c}from"./Button-GOXJIQJf.js";import{T as g}from"./Text-1cPTkrsR.js";import{B as x}from"./Badge-CwqJN_-7.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DrrEN2JN.js";import"./index-CVEy0Z38.js";import"./index-DfVSRZN_.js";import"./RSPContexts-BxpxaOEB.js";import"./utils-Dr97TsDg.js";import"./Section-XrcD6Nxo.js";import"./Action-De2-hlac.js";import"./context-BJDivKIs.js";import"./useStatic-BBN1iEfx.js";import"./browser-B3C2hSkY.js";import"./getActionGroupSlot-DwP1pd0G.js";import"./dynamic-BsH-tVs9.js";import"./Dialog-Bnl9MCT0.js";import"./Button-D4hzfdEM.js";import"./ProgressBar-BRblqXhL.js";import"./Hidden-CO8a8gup.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Cmxdn71P.js";import"./useFocusRing-DcnqUpu3.js";import"./useFocusable-CceqWekp.js";import"./OverlayArrow-DfWLFrq7.js";import"./useControlledState-DcQuzcMp.js";import"./Collection-BUtQOrwA.js";import"./CollectionBuilder-DjGCLM2W.js";import"./SelectionIndicator-BJWp2zfX.js";import"./Separator-CCSnrMIk.js";import"./useLocalizedStringFormatter-IeR6u1dk.js";import"./AlertIcon-Bz-v7qCT.js";import"./Popover-CYz6FA1w.js";import"./OverlayTrigger-GliMoFGI.js";import"./ControlledNotification-DVFBubHe.js";import"./ClearPropsContextView-byuDiYQD.js";import"./LoadingSpinner-CtFn_aG9.js";import"./EmulatedBoldText-rn83c_he.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
