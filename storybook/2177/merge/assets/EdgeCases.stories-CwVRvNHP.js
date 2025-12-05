import{j as r}from"./iframe-C5kwxwrP.js";import{H as p}from"./Heading-SC8_jTYN.js";import a from"./Default.stories-DBhnV18T.js";import{a2 as i}from"./IconWarning-DN2_qlIM.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DvJ4aslu.js";import{C as d,a as l}from"./ContextualHelpTrigger-Dfubfga1.js";import{B as c}from"./Button-xhQyV7SB.js";import{T as g}from"./Text-D7zEodsr.js";import{B as x}from"./Badge-DjvMDfrb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CTsx1ICl.js";import"./mergeRefs-BjhR6ukN.js";import"./index-D0rH5M4c.js";import"./RSPContexts-DRm1Cdpk.js";import"./utils-ClkSWM7u.js";import"./Section-CTfCzMjt.js";import"./context-B1WvD-_p.js";import"./Button-BX1O3153.js";import"./ProgressBar-BHFhq2aG.js";import"./Hidden-8zKzRoXl.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CDCpqoSP.js";import"./useFocusRing-CedgyfIn.js";import"./useFocusable-BiFYP8le.js";import"./Collection-OQo4LJVg.js";import"./CollectionBuilder-O5C2uK03.js";import"./SelectionIndicator-Dr4wTiOY.js";import"./Separator-DedkjU77.js";import"./browser-CdNWfkH8.js";import"./useLocalizedStringFormatter-t4fh856H.js";import"./useStatic-BI_2AgVn.js";import"./dynamic-DeUr6npx.js";import"./AlertIcon-NlAbnesU.js";import"./Popover-8f8WewP5.js";import"./OverlayTrigger-Br3xhPgq.js";import"./LoadingSpinner-BXFlmGo5.js";import"./EmulatedBoldText-B3gCae9O.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
