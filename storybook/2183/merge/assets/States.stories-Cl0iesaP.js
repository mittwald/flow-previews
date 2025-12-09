import{j as r}from"./iframe-BIOR2-hs.js";import{B as d}from"./Button-CfZ-AQyp.js";import c from"./Default.stories-CWPD9HJv.js";import{c as l,d as u}from"./IconWarning-DZ71cvXF.js";import{T as g}from"./Text-DusIDTsD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-RMvdN3RZ.js";import"./mergeRefs-U5WlywcK.js";import"./index-k9AOzptS.js";import"./LoadingSpinner-CKTuHmBU.js";import"./Button-Vr3ctEdr.js";import"./utils-DsOUUUiG.js";import"./ProgressBar-_rI0OtV6.js";import"./Hidden-CVR9fNcA.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BLOg-x3I.js";import"./useFocusRing-1hKsP8MW.js";import"./useFocusable-B_nx0oid.js";import"./useLocalizedStringFormatter-BKbYN9ME.js";import"./Avatar-BUQx2CI1.js";import"./AlertIcon-BvUo9Etu.js";import"./TimeField-DsDqWsQ-.js";import"./Accordion-NoXfJmUE.js";import"./dynamic-BVxG6scv.js";import"./Section-BqNRxlPT.js";import"./context-CUEzUKrh.js";import"./RSPContexts-DcPCJIF5.js";import"./Collection-Cvuk07Q7.js";import"./CollectionBuilder-Dgt7X-YC.js";import"./SelectionIndicator-DG9tWISV.js";import"./Separator-DTwWIU6f.js";import"./browser-D0ITs1ti.js";import"./useStatic-CRF1h1Jc.js";import"./ActionGroup-CY4j-L1M.js";import"./Alert-CoZzyuQ9.js";import"./AlertBadge-DCY0z1jh.js";import"./Align-C8XIH-7n.js";import"./Popover-BGEckYFs.js";import"./OverlayTrigger-4gUv_Eql.js";import"./TableFooterRow-BUV2_OgU.js";import"./SkeletonText-DYOjw4oF.js";import"./AvatarStack-Xz4hqYuD.js";import"./Badge-Cr-ClmAO.js";import"./BigNumber-L7ZWV3y6.js";import"./Breadcrumb-qAQdTaCx.js";import"./Link-DoJ4IPEN.js";import"./Heading-Cv__lUFC.js";import"./Legend-ZeqB-YKM.js";import"./FileCardList-C94A5o8Z.js";import"./Image-DwW9X8dg.js";import"./Color-CnqARC2o.js";import"./Content-BrpitEoE.js";import"./Label-BLkwK3Kt.js";import"./ContextualHelpTrigger-BXnzR8Ux.js";import"./CounterBadge-BfId8Yot.js";import"./remote-CjhnXpnY.js";import"./DonutChart-C8wwiAZA.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-8GDMUcKQ.js";import"./Header-CRVpFWgA.js";import"./Initials-D4NqoMu-.js";import"./InlineCode-DaFFs495.js";import"./PopoverTrigger-BXV6g6Jr.js";import"./Separator-BAa6viOO.js";import"./Message-DKDXC3NB.js";import"./MessageSeparator-CGyHmQ4m.js";import"./NavigationGroup-D7bLGYP0.js";import"./Notification-D2xjz265.js";import"./NotificationProvider-XOHGZ29Q.js";import"./ProgressBar-B6DJTl7K.js";import"./Rating-UOf7auGu.js";import"./Skeleton-BNldNKri.js";import"./dummyText-CX_I_Wpl.js";import"./EmulatedBoldText-Wg5Zh9Cq.js";const Cr={...c,title:"Actions/Button/States",render:m=>r.jsxs(d,{...m,children:[r.jsx(g,{children:"Add email address"}),r.jsx(l,{})]})},o={args:{isReadOnly:!0,onPress:()=>console.log("pressed")}},e={args:{isDisabled:!0}},i={args:{isDisabled:!0,variant:"plain"}},t={args:{isPending:!0}},a={args:{isPending:!0,variant:"plain"}},s={args:{isPending:!0,variant:"plain"},render:m=>r.jsx(d,{...m,"aria-label":"Add to favorites",children:r.jsx(u,{})})},n={args:{isSucceeded:!0}},p={args:{isFailed:!0,variant:"plain"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    onPress: () => console.log("pressed")
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    variant: "plain"
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isPending: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isPending: true,
    variant: "plain"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isPending: true,
    variant: "plain"
  },
  render: props => <Button {...props} aria-label="Add to favorites">
      <IconPlus />
    </Button>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isSucceeded: true
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isFailed: true,
    variant: "plain"
  }
}`,...p.parameters?.docs?.source}}};const $r=["ReadOnly","DisabledSolid","DisabledPlain","PendingSolid","PendingPlain","PendingPlainWithIcon","SucceededSolid","FailedPlain"];export{i as DisabledPlain,e as DisabledSolid,p as FailedPlain,a as PendingPlain,s as PendingPlainWithIcon,t as PendingSolid,o as ReadOnly,n as SucceededSolid,$r as __namedExportsOrder,Cr as default};
