import{j as r}from"./iframe-CVnOevS7.js";import{H as i}from"./Heading-DfGW7LfL.js";import a from"./Default.stories-TMaNQGey.js";import{a2 as n}from"./IconWarning-B_svJUl9.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BnMe9rDd.js";import{C as d,a as l}from"./ContextualHelpTrigger-tU_W7v1d.js";import{B as c}from"./Button-Cf7B0HY9.js";import{T as g}from"./Text-Bxez-FPO.js";import{B as x}from"./Badge-ByDbUbxC.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ozwQ3SWo.js";import"./index-BwqpXzO7.js";import"./index-Cr689PiB.js";import"./RSPContexts-DjbnK2VB.js";import"./utils-CGDhhS2B.js";import"./Section-bMj7sGFO.js";import"./Action-CUQVeG4t.js";import"./context-CfRoeqvW.js";import"./useStatic-CGYI-bhE.js";import"./browser-DLVk8Qjw.js";import"./getActionGroupSlot-CQ6F0YI_.js";import"./dynamic-DEpoJ_Zh.js";import"./Dialog-WTjaYKjI.js";import"./Button-DX-sXAbn.js";import"./ProgressBar-BnC0gGn_.js";import"./Hidden-B8qaVAs1.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B1NGcly_.js";import"./useFocusRing-DhtM2K-5.js";import"./useFocusable-D2dO-wlH.js";import"./OverlayArrow-76JnWsm4.js";import"./useControlledState-DEBy32LM.js";import"./Collection-Cksyx-Vf.js";import"./CollectionBuilder-CYwEwQob.js";import"./SelectionIndicator-DnhwtZbe.js";import"./Separator-IYcFdJAY.js";import"./useLocalizedStringFormatter-BS7r61NG.js";import"./AlertIcon-DHgwBo_e.js";import"./Popover-DBExu7Vo.js";import"./OverlayTrigger-BkfO43HH.js";import"./ControlledNotification-GhQOL8__.js";import"./ClearPropsContextView-DFZ0V7Jx.js";import"./LoadingSpinner-CSIBpLRI.js";import"./EmulatedBoldText-FqR_2DOA.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
