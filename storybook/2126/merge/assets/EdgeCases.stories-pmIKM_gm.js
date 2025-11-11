import{j as r}from"./iframe-sw6YBGs2.js";import{H as i}from"./Heading-BjeBhvap.js";import a from"./Default.stories-DdZAgGvr.js";import{a2 as n}from"./IconWarning-Mo4x9W3y.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-Da7lIov6.js";import{C as d,a as l}from"./ContextualHelpTrigger-DwcqWH2n.js";import{B as c}from"./Button-C3vsBXq_.js";import{T as g}from"./Text-BcvoGUvL.js";import{B as x}from"./Badge-BabXZ_Zc.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-9kUQeyVn.js";import"./index-CQ8O5V0p.js";import"./index-DXtHeKIw.js";import"./RSPContexts-DsElqAB8.js";import"./utils-DUnEZ_OM.js";import"./Section-l8vn1XNi.js";import"./Action-_btOP2lG.js";import"./context-D0JPrgtB.js";import"./useStatic-3-oc9s-0.js";import"./browser-CM4mIXp1.js";import"./getActionGroupSlot-xCaZiuyA.js";import"./dynamic-DI3ra1Po.js";import"./Dialog-vQ1BmT5h.js";import"./Button-C9KiGU0p.js";import"./ProgressBar-LVLLuOf0.js";import"./Hidden-CsbjM4Ab.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-C55dwVSC.js";import"./useFocusRing-CuXwNFI9.js";import"./useFocusable-D0OMOiNw.js";import"./OverlayArrow-BmDyVYWZ.js";import"./useControlledState-PLdRfTwy.js";import"./Collection-DRfKzRSF.js";import"./CollectionBuilder-CLa01cON.js";import"./SelectionIndicator-BR2LstrO.js";import"./Separator-DJH-J0YQ.js";import"./useLocalizedStringFormatter-D1DdJ7gx.js";import"./AlertIcon-DOBK5Qiy.js";import"./Popover-CTuN8o_O.js";import"./OverlayTrigger-C_lKypBz.js";import"./ControlledNotification-BkuRpHzl.js";import"./ClearPropsContextView-DJhzMu7H.js";import"./LoadingSpinner-Bc_cKoW-.js";import"./EmulatedBoldText-2hgsjV1R.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
