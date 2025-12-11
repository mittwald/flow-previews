import{j as r}from"./iframe-B9DmQEvm.js";import{H as p}from"./Heading-DwjnBE1G.js";import a from"./Default.stories-ClhocevG.js";import{a1 as i}from"./IconWarning-DHbLseiS.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-C6Me14oL.js";import{C as d,a as l}from"./ContextualHelpTrigger-dKYi-1DA.js";import{B as c}from"./Button-Dm4Gj0Ue.js";import{T as g}from"./Text-DWnECR1V.js";import{B as x}from"./Badge-DmsrCf-1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D4WQNPB7.js";import"./mergeRefs-D6R5gGm4.js";import"./index-CFtXvdW-.js";import"./RSPContexts-CotCKDbU.js";import"./utils-Oe4-zNeB.js";import"./Section-C_OhuZda.js";import"./context-CWF20r0U.js";import"./Button-aNJWqsMX.js";import"./ProgressBar-2zujtr-f.js";import"./Hidden-CljRM6Hn.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-f4__Yrtg.js";import"./useFocusRing-CcbQunlU.js";import"./useFocusable-CWuYRGi_.js";import"./Collection-hhJxclBU.js";import"./CollectionBuilder-BT6nUxaY.js";import"./SelectionIndicator-DK0swjPr.js";import"./Separator-CBfW85A4.js";import"./browser-B5MMVHjZ.js";import"./useLocalizedStringFormatter-BIKdkDCX.js";import"./useStatic-D5S9NXQn.js";import"./dynamic-D9zzs7eg.js";import"./remote-pOc8vwOE.js";import"./AlertIcon-DNW_OXFb.js";import"./Popover-UpR8ui09.js";import"./OverlayTrigger-BPc83cwF.js";import"./LoadingSpinner-CoK93z8B.js";import"./EmulatedBoldText-CcFQw1kW.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
