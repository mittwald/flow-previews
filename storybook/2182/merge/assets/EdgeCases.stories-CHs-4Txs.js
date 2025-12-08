import{j as r}from"./iframe-Bl94pFC8.js";import{H as p}from"./Heading-gu5HE-XK.js";import a from"./Default.stories-CcmlsBbE.js";import{a2 as i}from"./IconWarning-SCcj4Iql.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-Bsnm1FW5.js";import{C as d,a as l}from"./ContextualHelpTrigger-CUwhkzFI.js";import{B as c}from"./Button-AfVTn90Y.js";import{T as g}from"./Text-DCRPGY0z.js";import{B as x}from"./Badge-CWRZ3wRS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BQui21V8.js";import"./mergeRefs-BiBjcigA.js";import"./index-DsFLFuyK.js";import"./RSPContexts-CHIkVN0y.js";import"./utils-zKD0YG1w.js";import"./Section-LN95lzay.js";import"./context-BpghOljr.js";import"./Button-Bw0lcVwr.js";import"./ProgressBar-C-lIvLR2.js";import"./Hidden-BS8eNNR-.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DhigdGAb.js";import"./useFocusRing-_izhPlj5.js";import"./useFocusable-BC3ywUsf.js";import"./Collection-Bsn8m2mI.js";import"./CollectionBuilder-D14md_BA.js";import"./SelectionIndicator-Bx-x-xLH.js";import"./Separator-R67wGb_t.js";import"./browser-BA3Ei853.js";import"./useLocalizedStringFormatter-Cy6aSMx0.js";import"./useStatic-gdaW8QxK.js";import"./dynamic-CIZa5yke.js";import"./AlertIcon-KdhHTMr9.js";import"./Popover-Vgu8QpdP.js";import"./OverlayTrigger-CoDb3nvg.js";import"./LoadingSpinner-CJ6B7oAG.js";import"./EmulatedBoldText-CCSVbhNW.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
