import{j as r}from"./iframe-Dld40DlB.js";import{H as i}from"./Heading-BAwA_6k1.js";import a from"./Default.stories-DhhmJWU0.js";import{a2 as n}from"./IconWarning-Bslq8B7t.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-Do9Ij39K.js";import{C as d,a as l}from"./ContextualHelpTrigger-B-SoQJrr.js";import{B as c}from"./Button-DIo8wcxN.js";import{T as g}from"./Text-TesoHDfv.js";import{B as x}from"./Badge-DbOHK1xn.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-g3olMzzw.js";import"./index-Dshvly-6.js";import"./index-CruVUoMH.js";import"./RSPContexts-DRmXF-Vp.js";import"./utils-D4Q7WLr3.js";import"./Section-D4-3IMps.js";import"./Action-BpHcMUnj.js";import"./context-DLHVmjQX.js";import"./useStatic-C-DsDLNz.js";import"./browser-bPFV2Ji3.js";import"./getActionGroupSlot-DKSLC32H.js";import"./dynamic-DLhXud-a.js";import"./Dialog-BJVHvNg4.js";import"./Button-rvCZddFR.js";import"./ProgressBar-A7FXjRZm.js";import"./Hidden-CiXaNdIj.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CvXLvg4O.js";import"./useFocusRing-BAtU7oif.js";import"./useFocusable-BrkdujEf.js";import"./OverlayArrow-J381LXSg.js";import"./useControlledState-BaXUyl3S.js";import"./Collection-BcdNyWqm.js";import"./CollectionBuilder-DXJ4p0H3.js";import"./SelectionIndicator-B4HmttaN.js";import"./Separator-DQHCwqOC.js";import"./useLocalizedStringFormatter-BddSeuov.js";import"./AlertIcon-CxtEeq0v.js";import"./Popover-XDo3MRMz.js";import"./OverlayTrigger-BVUj_QQK.js";import"./ControlledNotification-xf49NdLG.js";import"./ClearPropsContextView-Cho7uRH3.js";import"./LoadingSpinner-C26eHY8y.js";import"./EmulatedBoldText-Df4Xti5W.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
