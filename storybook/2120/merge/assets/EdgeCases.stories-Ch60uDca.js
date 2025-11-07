import{j as r}from"./iframe-BD-_0iQW.js";import{H as i}from"./Heading-CKSpOG-B.js";import a from"./Default.stories-83iAMH4m.js";import{a2 as n}from"./IconWarning-COe6pc-P.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-C_bKX3Tw.js";import{C as d,a as l}from"./ContextualHelpTrigger-ChW-2k3k.js";import{B as c}from"./Button-Daqq-bhO.js";import{T as g}from"./Text-BiRW2WuP.js";import{B as x}from"./Badge-Cq8W5IuK.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-AqaE2XDS.js";import"./index-BxlzE1r4.js";import"./index-CwlJevdL.js";import"./RSPContexts-CSfMLF9v.js";import"./utils-DC-uQ7gt.js";import"./Section-Bcwz73Fs.js";import"./Action-DGkp9jQR.js";import"./context-9lnVgACy.js";import"./useStatic-7iZUYjuS.js";import"./browser-CsfwbWLp.js";import"./getActionGroupSlot-DF5uOUtt.js";import"./dynamic-Bn8R82lj.js";import"./Dialog-B7aUPBh_.js";import"./Button-DxIzcvDZ.js";import"./ProgressBar-DRtXHYQ6.js";import"./Hidden-DekCIok9.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CVtdtufW.js";import"./useFocusRing-ohgATb1P.js";import"./useFocusable-DN1gz0ZC.js";import"./OverlayArrow-Roh2YmoW.js";import"./useControlledState-B9_9qNA0.js";import"./Collection-DmyA85a8.js";import"./CollectionBuilder-BVb55qBm.js";import"./SelectionIndicator-BYFUj2bk.js";import"./Separator-BuFHs16i.js";import"./useLocalizedStringFormatter-DhlRMC09.js";import"./AlertIcon-C-1FhtD4.js";import"./Popover-CLHMqo5N.js";import"./OverlayTrigger-CEYU_-ng.js";import"./ControlledNotification-B9B4fBZF.js";import"./ClearPropsContextView-C6q86AoL.js";import"./LoadingSpinner-BgQGLDYl.js";import"./EmulatedBoldText-C35HxZ7Y.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
