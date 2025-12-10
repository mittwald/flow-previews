import{j as r}from"./iframe-DN0fTWGV.js";import{H as p}from"./Heading-DYEbRjlj.js";import a from"./Default.stories-wyrDBZz6.js";import{a2 as i}from"./IconWarning-Cuf61xud.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-Hr_oCvhM.js";import{C as d,a as l}from"./ContextualHelpTrigger-CRucrJit.js";import{B as c}from"./Button-uApu6GnY.js";import{T as g}from"./Text-CLTzTYkM.js";import{B as x}from"./Badge-B4N4pUOv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B4BWOGik.js";import"./mergeRefs-aFji3K89.js";import"./index-C-NDeTtD.js";import"./RSPContexts-CXdzH5Rq.js";import"./utils-KHZtdcQs.js";import"./Section-Bae4yUtt.js";import"./context-DUBN3HgP.js";import"./Button-BqbeFKAl.js";import"./ProgressBar-CMyS42Dg.js";import"./Hidden-CpMgfJZp.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-_fNSffOv.js";import"./useFocusRing-Bi-c5lNH.js";import"./useFocusable-DvSUTL0j.js";import"./Collection-DPICVRVL.js";import"./CollectionBuilder-7GVzVquf.js";import"./SelectionIndicator-ChEaB0zR.js";import"./Separator-CbRW2pX1.js";import"./browser-BG2zS4gf.js";import"./useLocalizedStringFormatter-yteDxoWO.js";import"./useStatic-DA5kar0v.js";import"./dynamic-Bg-k1EYj.js";import"./AlertIcon-D_t13U1R.js";import"./Popover-oDqr7Nfr.js";import"./OverlayTrigger-BxicfPZ1.js";import"./LoadingSpinner-CRqVu2d-.js";import"./EmulatedBoldText-CdlTcGoA.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
