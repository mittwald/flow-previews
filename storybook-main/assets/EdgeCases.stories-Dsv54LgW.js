import{j as r}from"./iframe-B_2yjHsp.js";import{H as i}from"./Heading-DVX5TZYJ.js";import a from"./Default.stories-hByFOFpU.js";import{a2 as n}from"./IconWarning-CUKg7OTE.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-N78J4b3B.js";import{C as d,a as l}from"./ContextualHelpTrigger-BX1zaVS3.js";import{B as c}from"./Button-Da-1LcXr.js";import{T as g}from"./Text-hvZATcoQ.js";import{B as x}from"./Badge-BoOjuLxe.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BV7e4GQN.js";import"./index-CkiHuacM.js";import"./index-D1oAZySF.js";import"./RSPContexts-v1WzALnr.js";import"./utils-2cwPFhAn.js";import"./Section-CUx_sSpw.js";import"./Action-CxJM8pyz.js";import"./context-RnBPL4A_.js";import"./useStatic-BbFRD4mD.js";import"./browser-CwXIoFOI.js";import"./getActionGroupSlot-BtC-t14k.js";import"./dynamic-BwNG8YI_.js";import"./Dialog-0Z2XDu66.js";import"./Button-NNWtmROB.js";import"./ProgressBar-D7qqep5T.js";import"./Hidden-CeFRPKf9.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B3k2yYk7.js";import"./useFocusRing-ofK0sPix.js";import"./useFocusable-BOYBZXPk.js";import"./OverlayArrow-P73E_zIs.js";import"./useControlledState-BCeVh08t.js";import"./Collection-Caw85O5m.js";import"./CollectionBuilder-CokeJ_11.js";import"./SelectionIndicator-Cf6NqUf0.js";import"./Separator-mHpTHZcJ.js";import"./useLocalizedStringFormatter-tPwVT4HJ.js";import"./AlertIcon-D8ErrYA_.js";import"./Popover-S8IKDEQt.js";import"./OverlayTrigger-CLiMft97.js";import"./ControlledNotification-CcfPwfqM.js";import"./ClearPropsContextView-CmdRpvoP.js";import"./LoadingSpinner-BGKVD4AF.js";import"./EmulatedBoldText-DedaqQcc.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
