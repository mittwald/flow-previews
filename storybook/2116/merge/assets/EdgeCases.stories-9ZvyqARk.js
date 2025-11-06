import{j as r}from"./iframe-Cn_Uksv1.js";import{H as i}from"./Heading-BQmLpAQ1.js";import a from"./Default.stories-D0ppT7JC.js";import{a2 as n}from"./IconWarning-ktzgJVul.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-Cqo-ZUqC.js";import{C as d,a as l}from"./ContextualHelpTrigger-CAXIcL_u.js";import{B as c}from"./Button-uqtApCO2.js";import{T as g}from"./Text-D6EVKQHX.js";import{B as x}from"./Badge-FQIiNSgZ.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CoFR225t.js";import"./index-BOejRIbk.js";import"./index-C0zdnCAL.js";import"./RSPContexts-CKwSRM_H.js";import"./utils-B-f9gd93.js";import"./Section-Wl51SmLg.js";import"./Action-Drtylt4n.js";import"./context-CovFRnRg.js";import"./useStatic-CJPRi5oj.js";import"./browser-BnRg_GS1.js";import"./getActionGroupSlot-DY0CPGpV.js";import"./dynamic-DNsdEAu1.js";import"./Dialog-BecCL6sR.js";import"./Button-FEoS725w.js";import"./ProgressBar-DsWps5dj.js";import"./Hidden-BL9AL94n.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B2OLF-YE.js";import"./useFocusRing-DLygjq4p.js";import"./useFocusable-DAjGW8_c.js";import"./OverlayArrow-xQHCsek7.js";import"./useControlledState-CW1MTAna.js";import"./Collection-ClRJO0M5.js";import"./CollectionBuilder-Bhf_01Mr.js";import"./SelectionIndicator-BiXza4Fo.js";import"./Separator-Czf3nTWx.js";import"./useLocalizedStringFormatter-m-f5OqYO.js";import"./AlertIcon-CsVXI5gr.js";import"./Popover-BR7oC1fO.js";import"./OverlayTrigger-iBRYVjfO.js";import"./ControlledNotification-BeDY2vKU.js";import"./ClearPropsContextView-B_X2v-Sq.js";import"./LoadingSpinner-DSg47w65.js";import"./EmulatedBoldText-CxLJaoXr.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
