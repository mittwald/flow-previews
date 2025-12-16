import{j as o}from"./iframe-D7SrQHv2.js";import{a as d,c as u,b as l,s as y}from"./lib-DvLWx0xE.js";import{M as h}from"./Modal-CEkcUqWK.js";import{A}from"./ActionGroup-B6ZvpuSe.js";import{B as p}from"./Button-BDlkh_ZH.js";import{H as f}from"./Heading-Bt8iyrDh.js";import{C as F}from"./Content-DgXu4YZz.js";import{A as r}from"./Action-DB8rk5cM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-CUG3tgkH.js";import"./flowComponent-CdkQ0XB3.js";import"./index-CCC8SqCu.js";import"./index-CJAJ5du0.js";import"./Overlay-vS27kMtC.js";import"./OverlayContextProvider-BfbVSJ_X.js";import"./context-CVbxfW-6.js";import"./useStatic-D8BNL5i4.js";import"./LoadingSpinner-DamTO0x3.js";import"./IconChevronDown-CXRERNRA.js";import"./remote-DGKmlYcY.js";import"./ariaLive-Q32cUtZw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CSuZD65V.js";import"./context-B_BzGt6a.js";import"./utils-CiuuAwJm.js";import"./Dialog-CW3mhUGv.js";import"./Button-CGLL8cMT.js";import"./ProgressBar-BmurXtXH.js";import"./Label-mdRoqDLO.js";import"./Hidden-4rkKn0h6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B1Ghq-Vq.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DfsmQJPe.js";import"./useFocus-BORqc-Rv.js";import"./useFocusRing-DLDXyuvP.js";import"./useFocusable-7SxWl0Ga.js";import"./RSPContexts-BbVjh3iw.js";import"./OverlayArrow-BXm03fKW.js";import"./useControlledState-Cadz1yCZ.js";import"./Collection-CZosAz-h.js";import"./CollectionBuilder-_0MC8FEk.js";import"./SelectionIndicator-CCNZqYbX.js";import"./Separator-BakLcgEu.js";import"./Text-BPF9cVJc.js";import"./SelectionManager-CL7Yq_XD.js";import"./useEvent-B0YrkZQx.js";import"./useCollator-CdHH68uY.js";import"./FocusScope-rpDCGS-B.js";import"./VisuallyHidden-BTFx-uOK.js";import"./useOverlayController-BymioyTT.js";import"./IconClose-BrraBxGX.js";import"./IconX-YfbAbyEb.js";import"./ButtonView-DjRSGP_F.js";import"./Flex-DST_-1km.js";import"./Text-DGpwmxCB.js";import"./browser-DrK2T41E.js";import"./EmulatedBoldText-ChURRL1S.js";import"./getActionGroupSlot-CTkBqXfr.js";import"./IconCheck-COidvS8_.js";import"./Heading-CAzYiv_H.js";const vo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const wo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,c as Nested,i as NestedAsync,m as WithConfirmationModal,wo as __namedExportsOrder,vo as default};
