import{j as r}from"./iframe-C__sNFq5.js";import{H as i}from"./Heading-Cn6OX0c5.js";import a from"./Default.stories-Ba7pH4gv.js";import{a2 as n}from"./IconWarning-BuzGzrbs.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-D7vd76yD.js";import{C as d,a as l}from"./ContextualHelpTrigger-vUCASUlH.js";import{B as c}from"./Button-BDJI0X8N.js";import{T as g}from"./Text--GxX46L7.js";import{B as x}from"./Badge-B6qVV2lP.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-0GXkR_Ju.js";import"./index-DiaLXgZW.js";import"./index-BmGDZeJ3.js";import"./RSPContexts-BMxPkdv6.js";import"./utils-Dqy6LFYQ.js";import"./Section-DnBUHG3h.js";import"./Action-Df161gDF.js";import"./context-BsIjwuj0.js";import"./useStatic-DMsmAY9f.js";import"./browser-iGgi6T92.js";import"./getActionGroupSlot-BDjKjWbN.js";import"./dynamic-Bb5SDKXs.js";import"./Dialog-CzLU07Qv.js";import"./Button-B_7NxfoI.js";import"./ProgressBar-DtGgBXAS.js";import"./Hidden-BiQxXG9U.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CMi9l8Yg.js";import"./useFocusRing-BuunXMoE.js";import"./useFocusable-Dse99QZ8.js";import"./OverlayArrow-DhgMASFr.js";import"./useControlledState-2e7yt8gr.js";import"./Collection-Dh0ESm_f.js";import"./CollectionBuilder-ukVkSTyS.js";import"./SelectionIndicator-Cki_l3jq.js";import"./Separator-D0XClCWV.js";import"./useLocalizedStringFormatter-BUptx6fZ.js";import"./AlertIcon-w10mi-p6.js";import"./Popover-CT_v-Oh-.js";import"./OverlayTrigger-AiOoKC_G.js";import"./ControlledNotification-BlGPMSZv.js";import"./ClearPropsContextView-COiHjqok.js";import"./LoadingSpinner-B1HBgs-9.js";import"./EmulatedBoldText-Bh8SXQjk.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
