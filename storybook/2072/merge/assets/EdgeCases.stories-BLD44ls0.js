import{j as r}from"./iframe-CRkLAjqu.js";import{H as i}from"./Heading-y35Y4q5x.js";import a from"./Default.stories-Cbj8IkcZ.js";import{a2 as n}from"./IconWarning-4dYG6Emm.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-CVYh_HdZ.js";import{C as d,a as l}from"./ContextualHelpTrigger-Dp6H1ZMR.js";import{B as c}from"./Button-iYH795Vf.js";import{T as g}from"./Text-SnGLDLtK.js";import{B as x}from"./Badge-21AXCBg-.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DkSEV7yV.js";import"./index-DwXT3Bgk.js";import"./index-CMjPCm5R.js";import"./RSPContexts-Bb59CEQZ.js";import"./utils-BtHHKbwG.js";import"./Section-BqZCPeF5.js";import"./Action-BsqGwbaj.js";import"./context-B-s8oBfA.js";import"./useStatic-CAsZlBox.js";import"./browser-C4srWScu.js";import"./getActionGroupSlot-D4mouN9v.js";import"./dynamic-C-Z2ndaa.js";import"./Dialog-aAfd-0c1.js";import"./Button-CPrLpUny.js";import"./ProgressBar-N5kov_o0.js";import"./Hidden-PDlBagOD.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DLoU3qmJ.js";import"./useFocusRing-PsHB6P7A.js";import"./useFocusable-ybZYv2TC.js";import"./OverlayArrow-CxWIXwnM.js";import"./useControlledState-6rabR8D5.js";import"./Collection-B5dOcGsH.js";import"./CollectionBuilder-uHK_yZ9p.js";import"./SelectionIndicator-CTOSa6og.js";import"./Separator-ARlWDSvP.js";import"./useLocalizedStringFormatter-lA2Sw6DW.js";import"./AlertIcon-pJx2ML-T.js";import"./Popover-JmyjzJuR.js";import"./OverlayTrigger-8Ptq7Mev.js";import"./ControlledNotification-D2TmofCz.js";import"./ClearPropsContextView-C5LrpGQW.js";import"./LoadingSpinner-DRDb2q6e.js";import"./EmulatedBoldText-UBCiYBJN.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
