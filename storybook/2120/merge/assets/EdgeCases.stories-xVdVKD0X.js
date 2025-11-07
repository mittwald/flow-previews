import{j as r}from"./iframe-DhEtuAZk.js";import{H as i}from"./Heading-w8VDel3v.js";import a from"./Default.stories-D1NPppVm.js";import{a2 as n}from"./IconWarning-CZNr6BH3.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-Bu1tkE54.js";import{C as d,a as l}from"./ContextualHelpTrigger-_Yaxcn4v.js";import{B as c}from"./Button-BY9Kr7Ye.js";import{T as g}from"./Text-CrxTC35E.js";import{B as x}from"./Badge--cveCoN-.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Sd9fxQN7.js";import"./index-Cjw7dVYj.js";import"./index-DWS6YMK5.js";import"./RSPContexts-CP8S-33J.js";import"./utils-DSKmOAaE.js";import"./Section-D4Gr2eQE.js";import"./Action-BVtpAmgk.js";import"./context-D6NPEI3P.js";import"./useStatic-OTFolAlH.js";import"./browser-CRwqe8Ti.js";import"./getActionGroupSlot-B2enF2gG.js";import"./dynamic-CwxkBJO8.js";import"./Dialog-CGia85P_.js";import"./Button-DH0rVXA4.js";import"./ProgressBar-CCRGuqks.js";import"./Hidden-Dx0nOzpY.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B4_4eL8K.js";import"./useFocusRing-CtGm1hSf.js";import"./useFocusable-GlgNOWPt.js";import"./OverlayArrow-D5AF8TQx.js";import"./useControlledState-Dj5UiPRe.js";import"./Collection-DTMrpJoY.js";import"./CollectionBuilder-BPnFrNW_.js";import"./SelectionIndicator-C_Yqy7JN.js";import"./Separator-qstkXCxY.js";import"./useLocalizedStringFormatter-TlIqT86R.js";import"./AlertIcon-CX41xz4j.js";import"./Popover-bxB2am_R.js";import"./OverlayTrigger-BYK82yFU.js";import"./ControlledNotification-B3y-_NHJ.js";import"./ClearPropsContextView-CacYGh9N.js";import"./LoadingSpinner-DZTinZ99.js";import"./EmulatedBoldText-DZREZbVk.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
