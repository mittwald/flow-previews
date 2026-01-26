import{j as o}from"./iframe-BWhqP90_.js";import{a as d,c as u,b as l,s as g}from"./lib-t_43CgwM.js";import{M as y}from"./Modal-CtihrLuU.js";import{A as h}from"./ActionGroup-DDQLt8Fl.js";import{B as p}from"./Button-BciJVpgP.js";import{H as f}from"./Heading-B5yfVGXK.js";import{C as F}from"./Content-CvRECO7T.js";import{A as r}from"./Action-CBNAKVRZ.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-CGA0SI1j.js";import"./Dialog-CL817TCu.js";import"./Button-cDeaYk1j.js";import"./utils-DDxNv25V.js";import"./index-8vPYdz_-.js";import"./clsx-B-dksMZM.js";import"./index-BNCgjCzH.js";import"./ProgressBar-CDLRkEMS.js";import"./Label-CvmhHdNV.js";import"./Hidden-40YeYLOA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-nvgQN0a7.js";import"./context-D1O-Xc3I.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CgTDaVBx.js";import"./useFocus-DGysuqof.js";import"./useFocusRing-BFEab5f2.js";import"./useFocusable-BfSSliyg.js";import"./RSPContexts-BQJ2nk5o.js";import"./OverlayArrow-O77-h4vA.js";import"./useControlledState-hpfIa3L8.js";import"./Collection-CczwQGta.js";import"./CollectionBuilder-Bu1khTRs.js";import"./SelectionIndicator-DZ2Xh4dp.js";import"./Separator-CHyDNsxt.js";import"./Text-CjPzL55g.js";import"./SelectionManager-DbhQkq7H.js";import"./useEvent-C-yeEGvr.js";import"./useCollator-BWqZHdF4.js";import"./FocusScope-D5dxNR-J.js";import"./useLocalizedStringFormatter--1i0kqLe.js";import"./VisuallyHidden-DRs-AG4l.js";import"./flowComponent-BryHmeuy.js";import"./context-Bdh27yQP.js";import"./useStatic-Dg52ehJ-.js";import"./OverlayContextProvider-G1DVyXwK.js";import"./DialogTriggerView-ByiatIwy.js";import"./dynamic-B9fZ3_-n.js";import"./Overlay-DMzDVV07.js";import"./useOverlayController-BDJ6Yr_G.js";import"./LoadingSpinner-CBZxi8OD.js";import"./IconWarning-HbBBXO9Y.js";import"./remote-veunNUGL.js";import"./ButtonView-38_4zC6p.js";import"./Flex-C6AoTlPK.js";import"./Text-ClKyFsNf.js";import"./browser-XxEUm-0T.js";import"./EmulatedBoldText-BA_Kyk9l.js";import"./getActionGroupSlot-Bc3Q1XKp.js";import"./Heading-qBHW75oC.js";const Lo={title:"Actions/Action",component:r,render:A=>o.jsx(r,{...A,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{onAction:d}},e={args:{onAction:u}},s={args:{onAction:d,showFeedback:!0}},c={args:{onAction:u,showFeedback:!0}},i={args:{children:o.jsx(r,{onAction:g,children:l})}},a={args:{onAction:d,children:o.jsx(r,{onAction:d,children:l})}},m={render:()=>o.jsxs(r,{onAction:u,children:[o.jsxs(y,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(h,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunction
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncLongFunction
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunction,
    showFeedback: true
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncLongFunction,
    showFeedback: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Action onAction={syncFunction}>{button}</Action>
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunction,
    children: <Action onAction={asyncFunction}>{button}</Action>
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Action onAction={asyncLongFunction}>
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
}`,...m.parameters?.docs?.source}}};const So=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,c as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,i as Nested,a as NestedAsync,m as WithConfirmationModal,So as __namedExportsOrder,Lo as default};
