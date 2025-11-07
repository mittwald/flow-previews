import{j as r}from"./iframe-Gppgd95h.js";import{H as i}from"./Heading-C1wKNzIE.js";import a from"./Default.stories-O9ohGxyG.js";import{a2 as n}from"./IconWarning-CXl4-aHF.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DaxC3GtD.js";import{C as d,a as l}from"./ContextualHelpTrigger-CGIfLTfr.js";import{B as c}from"./Button-CQheULfL.js";import{T as g}from"./Text-ByRCXQub.js";import{B as x}from"./Badge-DFsVvi31.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CBC2W0-6.js";import"./index-eyLLmFq7.js";import"./index-C46OFllo.js";import"./RSPContexts-uyFjXPd-.js";import"./utils-B4V-7u16.js";import"./Section-CNS9p5rv.js";import"./Action-BLHsH70P.js";import"./context-MNDXyV03.js";import"./useStatic-DlLFMLM2.js";import"./browser-BvSJi_ez.js";import"./getActionGroupSlot-PuK0vT60.js";import"./dynamic-Dx_-BW_E.js";import"./Dialog-CVc-VcQU.js";import"./Button-D2lj5RUi.js";import"./ProgressBar-DZD68PrE.js";import"./Hidden-7U06UOp8.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Cby3fyqM.js";import"./useFocusRing-BZLy2WOf.js";import"./useFocusable-DX1uCwgO.js";import"./OverlayArrow-DfX6d8e5.js";import"./useControlledState-CiQWtKCp.js";import"./Collection-DADNKWxZ.js";import"./CollectionBuilder-D91eRMtU.js";import"./SelectionIndicator-B1G8Paba.js";import"./Separator-DtbrqDaf.js";import"./useLocalizedStringFormatter-nMq0Hiqv.js";import"./AlertIcon-DQP9zo97.js";import"./Popover-DJAMooXE.js";import"./OverlayTrigger-C9iAiDvY.js";import"./ControlledNotification-DC4lr8-K.js";import"./ClearPropsContextView-CUGxvixI.js";import"./LoadingSpinner-CWX_u-O3.js";import"./EmulatedBoldText-BsRwGIpf.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
