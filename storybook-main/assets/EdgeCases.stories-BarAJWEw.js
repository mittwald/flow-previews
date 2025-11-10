import{j as r}from"./iframe-Bb2Dt4gO.js";import{H as i}from"./Heading-BwEM0wnm.js";import a from"./Default.stories-BZ827WSS.js";import{a2 as n}from"./IconWarning-ncqjKY0i.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-0TcDWWAj.js";import{C as d,a as l}from"./ContextualHelpTrigger-DNvagXsg.js";import{B as c}from"./Button-4ByktXkK.js";import{T as g}from"./Text-DlHja6rG.js";import{B as x}from"./Badge-CKxOkMi-.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CJrXYk4c.js";import"./index-DhaS9Xnk.js";import"./index-P4MnPsl7.js";import"./RSPContexts-ScA0jBqq.js";import"./utils-BRWgyZeC.js";import"./Section-C0-TyT9T.js";import"./Action-Bp0Zr2aj.js";import"./context-CWQK-DX0.js";import"./useStatic-CQaBBZXk.js";import"./browser-C45ETDbe.js";import"./getActionGroupSlot-BbHFGHkf.js";import"./dynamic-BQ6J2UuW.js";import"./Dialog-D5KTniQT.js";import"./Button-BSQSoIIB.js";import"./ProgressBar-DmgKKf3-.js";import"./Hidden-DZjS-0Re.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-OBblbX9f.js";import"./useFocusRing-BqqueoK_.js";import"./useFocusable-BsZWsXG_.js";import"./OverlayArrow-BPrkRyf_.js";import"./useControlledState-C9bMDpWq.js";import"./Collection-By7hYb7j.js";import"./CollectionBuilder-DXrUA6kr.js";import"./SelectionIndicator-BSio2Upk.js";import"./Separator-BddUv5iq.js";import"./useLocalizedStringFormatter-C4xJr-3b.js";import"./AlertIcon-Bt1YKJtK.js";import"./Popover-BQgLuDpm.js";import"./OverlayTrigger-DjQFyneA.js";import"./ControlledNotification-Dc8xOVnV.js";import"./ClearPropsContextView-DaYr1H4N.js";import"./LoadingSpinner-BExDoLYl.js";import"./EmulatedBoldText-BkxAkbDy.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
