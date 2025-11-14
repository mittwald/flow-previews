import{j as r}from"./iframe-Bl9ZNzly.js";import{H as p}from"./Heading-6r91OnV5.js";import a from"./Default.stories-CuPzwBsd.js";import{a2 as i}from"./IconWarning-CdD_Vr9D.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-D4s5aIEX.js";import{C as d,a as l}from"./ContextualHelpTrigger-ckkh_Rgl.js";import{B as c}from"./Button-C43dgBgP.js";import{T as g}from"./Text-DVbVn-gX.js";import{B as x}from"./Badge-9mW_yPuD.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DcJmUF2I.js";import"./mergeRefs-ux46nP0M.js";import"./index-BGoG8N2m.js";import"./RSPContexts-CKPxvq-y.js";import"./utils-Ba3Wc4Cj.js";import"./Section-CDNuzGQn.js";import"./context-B3t2ll3v.js";import"./Button-CmlWxNPG.js";import"./ProgressBar-D1AHMkFy.js";import"./Hidden-B2JOjUUO.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BsRR-XG9.js";import"./useFocusRing-DOvKN8uX.js";import"./useFocusable-JrbUxoa4.js";import"./Collection-2c0i4EEE.js";import"./CollectionBuilder-BRsb4ZNp.js";import"./SelectionIndicator-FRTj7WMW.js";import"./Separator-E4Y45gOI.js";import"./browser-DgAJHjYP.js";import"./useLocalizedStringFormatter-IXeJde12.js";import"./useStatic-CHy8y9O8.js";import"./getActionGroupSlot-BTnOUAI3.js";import"./dynamic-DN5dqmlD.js";import"./AlertIcon-CHB7dkgT.js";import"./Popover-B6t3DWPA.js";import"./OverlayTrigger-DDLdbzyu.js";import"./LoadingSpinner-BmMjYWfH.js";import"./EmulatedBoldText-C2RodUkO.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
