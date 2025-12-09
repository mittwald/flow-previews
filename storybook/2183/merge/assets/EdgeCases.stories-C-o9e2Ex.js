import{j as r}from"./iframe-BfTJ8OoU.js";import{H as p}from"./Heading-C_Cd2XWG.js";import a from"./Default.stories-CZcNEf-o.js";import{a2 as i}from"./IconWarning-CnDmU8KM.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-zn-1W_0t.js";import{C as d,a as l}from"./ContextualHelpTrigger-BBU6ZCx4.js";import{B as c}from"./Button-CAnEum-p.js";import{T as g}from"./Text-ChPpwgcs.js";import{B as x}from"./Badge-B1Bj-2mY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-pKtaUqJb.js";import"./mergeRefs-C4nh5J5i.js";import"./index-wBRAyXy5.js";import"./RSPContexts-B_hP9IPu.js";import"./utils-CAkX6XFC.js";import"./Section-ieM08Mfc.js";import"./context-DqfyIwOm.js";import"./Button-v46gVvAB.js";import"./ProgressBar-BquNzOVV.js";import"./Hidden-Chv29Vof.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DfwvGs8v.js";import"./useFocusRing-D-g0YXE4.js";import"./useFocusable-DTCTS8eh.js";import"./Collection-B-SpNygI.js";import"./CollectionBuilder-Cew6fxQL.js";import"./SelectionIndicator-BLntbEi9.js";import"./Separator-B1RL2fWY.js";import"./browser-_NOMM9Cq.js";import"./useLocalizedStringFormatter-BuC6mQ9L.js";import"./useStatic-DZbTJ5BB.js";import"./dynamic-BLLy2Odl.js";import"./AlertIcon-Bk9PFIDr.js";import"./Popover-DxokbZnr.js";import"./OverlayTrigger-CvXwRqat.js";import"./LoadingSpinner-CDSlajDH.js";import"./EmulatedBoldText-Do8p-rFi.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
