import{j as o}from"./iframe-B_VLmVOf.js";import{a as d,c as u,b as l,s as y}from"./lib-CQoRbbnS.js";import{M as h}from"./Modal-C5Rg6i74.js";import{A}from"./ActionGroup-BpNSiWp6.js";import{B as p}from"./Button-Bx9uZJMk.js";import{H as f}from"./Heading-CnR3VTEF.js";import{C as F}from"./Content-BkidL2Y8.js";import{A as r}from"./Action-Ct3jXlr4.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-r-EuZvmq.js";import"./Dialog-B23HRyeo.js";import"./Button-sEz_Ftmo.js";import"./utils-C3gFrn3p.js";import"./index-GX3ioGoD.js";import"./clsx-B-dksMZM.js";import"./index-Cpfd6Pim.js";import"./ProgressBar-B-kO7AM1.js";import"./Label-BcEUcVG2.js";import"./Hidden-BDeD6EhR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-3m37nTep.js";import"./context-x63-ahNn.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-dvDnySA_.js";import"./useFocus-BThPJxs2.js";import"./useFocusRing-CqgXonXS.js";import"./useFocusable-D136elhd.js";import"./RSPContexts-CewByvV8.js";import"./OverlayArrow-BqV4egk9.js";import"./useControlledState-Cy2UyDQ-.js";import"./Collection-gtDJcyu2.js";import"./CollectionBuilder-DNk5Dmq7.js";import"./SelectionIndicator-BccBPPpV.js";import"./Separator-2P5ZQBAJ.js";import"./Text-Cz72Ll4P.js";import"./SelectionManager-DSvZPYB7.js";import"./useEvent-CYdGT-0S.js";import"./useCollator-C3rClAMq.js";import"./FocusScope-PhJ8RGzw.js";import"./useLocalizedStringFormatter-HtYu0JJ-.js";import"./VisuallyHidden-neYV3Owd.js";import"./flowComponent-Bc5-OX5Z.js";import"./context-DKzx1USb.js";import"./useStatic-Ch5ZGK2l.js";import"./OverlayContextProvider-BI7L_fxB.js";import"./DialogTriggerView-GLdM8JEW.js";import"./dynamic-BPLgH_zA.js";import"./Overlay-BfEY1GPL.js";import"./useOverlayController-C5Zlkgph.js";import"./LoadingSpinner-8NlAwzA_.js";import"./IconWarning-COj126FB.js";import"./remote-D8h-jp0X.js";import"./ButtonView-WUiEtFbg.js";import"./Flex-Cc8jtLcB.js";import"./Text-DLyTxpXl.js";import"./browser-BI-ei-gA.js";import"./EmulatedBoldText-C4lFh4eF.js";import"./getActionGroupSlot-DWxJJpa_.js";import"./Heading-CCNcjRWR.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncFunction
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    showFeedback: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction,
    showFeedback: true
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Action action={syncFunction}>{button}</Action>
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    children: <Action action={asyncFunction}>{button}</Action>
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Action action={asyncLongFunction}>
      <Modal slot="actionConfirm">
        <Heading>Delete customer</Heading>
        <Content>Do you really want to delete the customer?</Content>
        <ActionGroup>
          <Button color="danger">Confirm</Button>
          <Button color="secondary" variant="soft">
            Abort
          </Button>
        </ActionGroup>
      </Modal>
      <Button color="secondary" variant="soft">
        Delete customer
      </Button>
    </Action>
}`,...m.parameters?.docs?.source}}};const So=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,c as Nested,i as NestedAsync,m as WithConfirmationModal,So as __namedExportsOrder,Lo as default};
