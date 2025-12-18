import{j as r}from"./iframe-D_taohHE.js";import{H as p}from"./Heading-B0K4zEMw.js";import a from"./Default.stories-CwTuAgCm.js";import{a2 as i}from"./IconWarning-Bw09QPeB.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DupL7VIa.js";import{C as d,a as l}from"./ContextualHelpTrigger-Di1ZUJxb.js";import{B as c}from"./Button-BzDcn9gw.js";import{T as g}from"./Text-ssmcNS2J.js";import{B as x}from"./Badge-df7STlF7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DHsq54k3.js";import"./mergeRefs-K1QocDOZ.js";import"./index-C4Et8VlK.js";import"./RSPContexts-vZQTzHeQ.js";import"./utils-pUWJ6aLq.js";import"./Section-BGMokIOG.js";import"./context-Bl1_lLpq.js";import"./Button-BveBpqmD.js";import"./ProgressBar-CjQdCBSe.js";import"./Hidden-D9ZNC0Hz.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-EvUTNNVJ.js";import"./useFocusRing-BpV933-R.js";import"./useFocusable-XY9B6x70.js";import"./Collection-DnhOSFxc.js";import"./CollectionBuilder-DgFesNsg.js";import"./SelectionIndicator-TPIlv31g.js";import"./Separator-B9t_aoMS.js";import"./browser-CjAcuXT7.js";import"./useLocalizedStringFormatter-ofdICzIo.js";import"./useStatic-D1L299Q0.js";import"./dynamic-CPLuTyBP.js";import"./AlertIcon-DsUCMzzQ.js";import"./Popover-CZk6Ipu0.js";import"./OverlayTrigger-DdpU5CpM.js";import"./LoadingSpinner-BB9iqpcc.js";import"./EmulatedBoldText-B54qJ1r4.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
