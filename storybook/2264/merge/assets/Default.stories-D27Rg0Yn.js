import{j as o}from"./iframe-CBKKDtut.js";import{a as r,c as l,b as y,s as h}from"./lib-BDuIMCxG.js";import{M as x}from"./Modal-D-MWMjdW.js";import{A as j}from"./ActionGroup-CTEI8oZ1.js";import{B as t}from"./Button-B9OQWjLR.js";import{H as F}from"./Heading-i6OL6vOG.js";import{C as f}from"./Content-CvzUvF4H.js";import{A as n}from"./Action-DoBIVRDz.js";import{C as M,M as A}from"./MenuItem-BEfLjZdp.js";import{C}from"./ContextMenuTrigger-C6LzS5MO.js";import"./ContextMenuSection-CIoY6k-y.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-CgRJiL0z.js";import"./Dialog-DqG8ZP0V.js";import"./Button-DyYsKNHg.js";import"./utils-CzD9rXMA.js";import"./index-Q7U-5PA1.js";import"./clsx-B-dksMZM.js";import"./index-fGZr3eAJ.js";import"./ProgressBar-BptIcMSV.js";import"./Label-BzrfGAM1.js";import"./Hidden-BMhHdfnU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BGNrCt7d.js";import"./context-Bvh_z46p.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CCG6AvGE.js";import"./useFocus-BrZp4zBY.js";import"./useFocusRing-CCYWTYc5.js";import"./useFocusable-DQlHlYMC.js";import"./RSPContexts-B9p0Af0m.js";import"./OverlayArrow-BBLTZ4Zv.js";import"./useControlledState-1Ujh64WW.js";import"./Collection-Ci7EvgUR.js";import"./CollectionBuilder-BsNn1R8F.js";import"./SelectionIndicator-D8RCowii.js";import"./Separator-CntAjx1Z.js";import"./Text-BipkjXt2.js";import"./SelectionManager-DFjBPYMf.js";import"./useEvent-BEHLnBZB.js";import"./useCollator-DdKTTQqQ.js";import"./FocusScope-Ds7_8mr5.js";import"./useLocalizedStringFormatter-Cg2HsiHj.js";import"./VisuallyHidden-BTRh3ybS.js";import"./flowComponent-D-Qq6Xd6.js";import"./context-B4Ey35Kl.js";import"./useStatic-n8g6U0tI.js";import"./OverlayContextProvider-C-EovWON.js";import"./DialogTriggerView-0gh7bNnz.js";import"./dynamic-C3t3tmF9.js";import"./Overlay-D_kSyd8H.js";import"./useOverlayController-BrNAIcQ_.js";import"./LoadingSpinner-BvfPlxYK.js";import"./IconWarning-BGeLtjSH.js";import"./remote-d08GjPRF.js";import"./ButtonView-CJxWzuRc.js";import"./Flex-2t0_nnG7.js";import"./Text-DXycmlPy.js";import"./browser-C9q5kf03.js";import"./EmulatedBoldText-eA5g4YLr.js";import"./getActionGroupSlot-CKDi87pY.js";import"./Heading-BVbeBqwL.js";import"./Popover-C-P6E-d5.js";import"./Switch-D0fDz9QQ.js";import"./useFieldComponent-377eOR22.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CjbcZx63.js";import"./useFormReset-tFiefpak.js";const _o={title:"Actions/Action",component:n,render:g=>o.jsx(n,{...g,children:o.jsx(t,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},e={},c={args:{action:r}},s={args:{action:l}},i={args:{action:r,showFeedback:!0}},a={args:{action:l,showFeedback:!0}},m={args:{children:o.jsx(n,{action:h,children:y})}},p={args:{action:r,children:o.jsx(n,{action:r,children:y})}},d={render:()=>o.jsxs(n,{action:l,children:[o.jsxs(x,{slot:"actionConfirm",children:[o.jsx(F,{children:"Delete customer"}),o.jsx(f,{children:"Do you really want to delete the customer?"}),o.jsxs(j,{children:[o.jsx(t,{color:"danger",children:"Confirm"}),o.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(t,{color:"secondary",variant:"soft",children:"Delete customer"})]})},u={render:g=>o.jsxs(C,{children:[o.jsx(t,{children:"Trigger"}),o.jsxs(M,{...g,children:[o.jsx(n,{onAction:r,children:o.jsx(A,{children:"Async"})}),o.jsx(n,{onAction:l,children:o.jsx(A,{children:"Async Long"})}),o.jsx(n,{onAction:r,children:o.jsx(n,{onAction:r,children:o.jsx(A,{children:"Nested Async"})})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncFunction
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    showFeedback: true
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction,
    showFeedback: true
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Action action={syncFunction}>{button}</Action>
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    children: <Action action={asyncFunction}>{button}</Action>
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <Action onAction={asyncFunction}>
          <MenuItem>Async</MenuItem>
        </Action>
        <Action onAction={asyncLongFunction}>
          <MenuItem>Async Long</MenuItem>
        </Action>
        <Action onAction={asyncFunction}>
          <Action onAction={asyncFunction}>
            <MenuItem>Nested Async</MenuItem>
          </Action>
        </Action>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...u.parameters?.docs?.source}}};const Ro=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal","InContextMenu"];export{c as Async,s as AsyncLong,a as AsyncLongWithFeedback,i as AsyncWithFeedback,e as Default,u as InContextMenu,m as Nested,p as NestedAsync,d as WithConfirmationModal,Ro as __namedExportsOrder,_o as default};
