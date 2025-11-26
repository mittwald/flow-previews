import{j as r}from"./iframe-D9CYFPXr.js";import{H as p}from"./Heading-CavYhFH8.js";import a from"./Default.stories-BY7x7r08.js";import{a2 as i}from"./IconWarning-jXguM53C.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-CRoJOsK9.js";import{C as d,a as l}from"./ContextualHelpTrigger-Cks81a1U.js";import{B as c}from"./Button-CT-xyYfH.js";import{T as g}from"./Text-DJSjVfmJ.js";import{B as x}from"./Badge-C2tMlnMT.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C-2riE67.js";import"./mergeRefs-vtU4phNc.js";import"./index-U9K-BUpK.js";import"./RSPContexts-CiawBZSO.js";import"./utils-yR_DAamg.js";import"./Section-CA0EDsnV.js";import"./context-COeqZE1E.js";import"./Button-DG6HuID3.js";import"./ProgressBar-bCwxisfs.js";import"./Hidden-CwV9BSsN.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dx6KMOks.js";import"./useFocusRing-DS6hlMbf.js";import"./useFocusable--HhDjXRb.js";import"./Collection-D-Uil-_a.js";import"./CollectionBuilder-DI5MHw1U.js";import"./SelectionIndicator-IjsyYsuv.js";import"./Separator-Do2CJS7r.js";import"./browser-D2ZJCi1x.js";import"./useLocalizedStringFormatter-S4nfhuc7.js";import"./useStatic-DvORlamL.js";import"./dynamic-SXs7A3g7.js";import"./AlertIcon-8Ocv2v3H.js";import"./Popover-BNCnXQAV.js";import"./OverlayTrigger-CUUjZI6u.js";import"./LoadingSpinner-gB0VXrmM.js";import"./EmulatedBoldText-BO0x8ST2.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
