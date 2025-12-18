import{j as o}from"./iframe-BA9q8iRx.js";import{a as d,c as u,b as l,s as y}from"./lib-CYbZyWH9.js";import{M as h}from"./TimeField-Bb9rzd1E.js";import{A}from"./ActionGroup-BrY_lNP4.js";import{B as p}from"./Button-DkX1WVEp.js";import{H as f}from"./Heading-C0QNs5qM.js";import{C as F}from"./Content-54YS0aSC.js";import{A as r}from"./Section-DoGwkV6i.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-BVBE-WhE.js";import"./mergeRefs-D8u8JUrl.js";import"./index-DpY8H-Wc.js";import"./clsx-B-dksMZM.js";import"./Accordion-De7o6t37.js";import"./dynamic-HfD9Y7Ln.js";import"./IconWarning-Ddu6VgyQ.js";import"./Alert-BjtrXFM-.js";import"./AlertIcon-GpJO-Z9B.js";import"./useLocalizedStringFormatter-w9QjgZdm.js";import"./context-Cn4rMbpf.js";import"./AlertBadge-sp5O60vm.js";import"./Text-Ms6nMBSf.js";import"./browser-XONib2dq.js";import"./utils-QcIDpANH.js";import"./EmulatedBoldText-W46YB4wy.js";import"./Align-BWXUYBVs.js";import"./Popover-_2bXyvx4.js";import"./context-YS9jQ858.js";import"./Button-BZr9UZHX.js";import"./ProgressBar-Bk_cCSt-.js";import"./Hidden-CwA9YFci.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing--2IgGnS-.js";import"./useFocusable-CyfzywkV.js";import"./RSPContexts-CXfi1L-7.js";import"./Collection-DW_VGPX_.js";import"./CollectionBuilder-VfTqomJV.js";import"./SelectionIndicator-DWxzYUVQ.js";import"./Separator-_HO3nlni.js";import"./useStatic-CdSu_vHo.js";import"./OverlayTrigger-Cse3DARB.js";import"./TableFooterRow-Bg6u5xet.js";import"./SkeletonText-DWBy4XXw.js";import"./Avatar-FlDD9lPa.js";import"./AvatarStack-B7IAlHRg.js";import"./Badge-S78DqCsX.js";import"./BigNumber-BUzL_XWj.js";import"./Breadcrumb-BFLF3mqz.js";import"./Link-VeHt-BOj.js";import"./Legend-fwXNEwdb.js";import"./FileCardList-DuDEn_SG.js";import"./Image-D59ZwdJj.js";import"./Color-BbyB7Xdi.js";import"./Label-CWXXLsJz.js";import"./ContextualHelpTrigger-CZA_SHxX.js";import"./CounterBadge-KIh2ANDP.js";import"./DonutChart-BD3mO4TH.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DlyfKHZS.js";import"./Header-BmRR_eGb.js";import"./Initials--0Iralrr.js";import"./InlineCode-DDc9VIyV.js";import"./PopoverTrigger-CMZxvGxV.js";import"./LoadingSpinner-CRPfYfmX.js";import"./Separator-D9V6A4pH.js";import"./Message-DDdzUGgv.js";import"./MessageSeparator-C3c69HOv.js";import"./NavigationGroup-guqWICeG.js";import"./Notification-NBit0Jcr.js";import"./NotificationProvider-CRnsHJPf.js";import"./ProgressBar-B-88x21X.js";import"./Rating-TF40lZ1V.js";import"./Skeleton-COhBmV-c.js";const qo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},i={args:{children:o.jsx(r,{action:y,children:l})}},c={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Action action={syncFunction}>{button}</Action>
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    children: <Action action={asyncFunction}>{button}</Action>
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const zo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,i as Nested,c as NestedAsync,m as WithConfirmationModal,zo as __namedExportsOrder,qo as default};
