import{j as r}from"./iframe-BGjIo6hw.js";import{H as i}from"./Heading-QJXZDrut.js";import a from"./Default.stories-unRpTC8c.js";import{a2 as n}from"./IconWarning-OiQYEbgz.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-CZAc4HrV.js";import{C as d,a as l}from"./ContextualHelpTrigger-Dxu_RRLr.js";import{B as c}from"./Button-72uC3Xxd.js";import{T as g}from"./Text-Bc8wJjtt.js";import{B as x}from"./Badge-BM2kNOCX.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CKy74ieT.js";import"./index-RB0ZeMWq.js";import"./index-D8hDUSyP.js";import"./RSPContexts-BLZAUi5X.js";import"./utils-FWUTa6bA.js";import"./Section-TUTyCtZG.js";import"./Action-DQWGsoks.js";import"./context-jnS2Fs_o.js";import"./useStatic-B2rVxKR2.js";import"./browser-i6k0HuHn.js";import"./getActionGroupSlot-BbMDqkbD.js";import"./dynamic-CxgTiQUL.js";import"./Dialog-DZpgyeVc.js";import"./Button-DVeyWZob.js";import"./ProgressBar-IcJtTGAe.js";import"./Hidden-YgttGYZu.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DQ8Yy5yO.js";import"./useFocusRing-B268tRT3.js";import"./useFocusable-Cp5mQ5Rc.js";import"./OverlayArrow-D5fKAg8k.js";import"./useControlledState-8IdaO4XH.js";import"./Collection-DBSHt2At.js";import"./CollectionBuilder-CfVVvz4n.js";import"./SelectionIndicator-D0sGU-I3.js";import"./Separator-D2n48QdT.js";import"./useLocalizedStringFormatter-DMlB1stV.js";import"./AlertIcon-Dbvw5J6E.js";import"./Popover-tW18rmQX.js";import"./OverlayTrigger-CsYA01So.js";import"./ControlledNotification-Dq6bZvP5.js";import"./ClearPropsContextView-CF-h0ZS8.js";import"./LoadingSpinner-DW7FO3ji.js";import"./EmulatedBoldText-DcmHRAc9.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
