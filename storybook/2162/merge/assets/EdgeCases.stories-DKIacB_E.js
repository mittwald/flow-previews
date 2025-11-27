import{j as r}from"./iframe-CW_1kzn8.js";import{H as p}from"./Heading-BDPW60Tv.js";import a from"./Default.stories-CyRdhRi7.js";import{a2 as i}from"./IconWarning-CwkyBxVN.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DK8CoaVP.js";import{C as d,a as l}from"./ContextualHelpTrigger-NzhCC0hh.js";import{B as c}from"./Button-DG8ItREn.js";import{T as g}from"./Text-Bt12Aiuy.js";import{B as x}from"./Badge-B4vhdI6d.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BDCYw1pg.js";import"./mergeRefs-Y3najUVW.js";import"./index-Bd-98hnG.js";import"./RSPContexts-jLoiaaIz.js";import"./utils-DECz7q9i.js";import"./Section-BtQd622a.js";import"./context-FK80ZNI-.js";import"./Button-CKDlZl9E.js";import"./ProgressBar-BTbyCbiz.js";import"./Hidden-CnRTwBiV.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-g9M5CTWm.js";import"./useFocusRing-DZCmxJCl.js";import"./useFocusable-f0CtUOQy.js";import"./Collection-FH8-xfMl.js";import"./CollectionBuilder-NWtLcMXl.js";import"./SelectionIndicator-CiCiu2c2.js";import"./Separator-DjsPzP3_.js";import"./browser-DYjBW3Mh.js";import"./useLocalizedStringFormatter-EKrbiiaf.js";import"./useStatic-CyHKbDme.js";import"./dynamic-CvIdWWig.js";import"./AlertIcon-C9ZLFLyq.js";import"./Popover-CZewF29V.js";import"./OverlayTrigger-DXi_dQZe.js";import"./LoadingSpinner-DDEfeVZt.js";import"./EmulatedBoldText-CjYCMvu1.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
