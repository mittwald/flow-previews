import{j as r}from"./iframe-BaRURXeF.js";import{H as p}from"./Heading-BwlLLsXH.js";import a from"./Default.stories-BP2wVUCZ.js";import{a1 as i}from"./IconWarning-G7PHo1OD.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-CBeycHMc.js";import{C as d,a as l}from"./ContextualHelpTrigger-HbivXqDu.js";import{B as c}from"./Button-BjAgJLRT.js";import{T as g}from"./Text-BMdRX-ix.js";import{B as x}from"./Badge-DRN_LKUg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CKQsAkKj.js";import"./mergeRefs-CGRzoa_B.js";import"./index-BhlYqO80.js";import"./RSPContexts-DmKb4WxY.js";import"./utils-DLb-qyNT.js";import"./Section-CfuTaxA1.js";import"./context-CODOobiJ.js";import"./Button-DbzxAUZp.js";import"./ProgressBar-CbCQbUzb.js";import"./Hidden-4QxVQfrM.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CYqmZhth.js";import"./useFocusRing-Yd8LsoRn.js";import"./useFocusable-Dn7zfyGG.js";import"./Collection-43nLtjEw.js";import"./CollectionBuilder-Dy7CTaNG.js";import"./SelectionIndicator-BZ3vqlEj.js";import"./Separator-cqbaw05v.js";import"./browser-CM47kAFn.js";import"./useLocalizedStringFormatter-yUHQIKaT.js";import"./useStatic-CNK9zRwr.js";import"./dynamic-LiyYElAE.js";import"./remote-EuXJkqzN.js";import"./AlertIcon-C9siGvOC.js";import"./Popover-DoWZP4BQ.js";import"./OverlayTrigger-DFb3iraJ.js";import"./LoadingSpinner-BDiYNwtM.js";import"./EmulatedBoldText-DsXTzWmB.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
