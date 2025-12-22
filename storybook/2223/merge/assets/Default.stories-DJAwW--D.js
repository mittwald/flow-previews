import{j as o}from"./iframe-D3NxpU8u.js";import{a as d,c as u,b as l,s as y}from"./lib-C3thHQPx.js";import{M as h}from"./Modal-VqbZkA1u.js";import{A}from"./ActionGroup-BiPDUCFA.js";import{B as p}from"./Button-edx4tjlA.js";import{H as f}from"./Heading-BTvslLGP.js";import{C as F}from"./Content-DEdPzJrK.js";import{A as r}from"./Action-CgjRBsSL.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-BzsNNahf.js";import"./Dialog-CvwxtaFW.js";import"./Button-BOXTMksI.js";import"./utils-C5WN15Gt.js";import"./index-OgwKEPCl.js";import"./clsx-B-dksMZM.js";import"./index-A0HM7_1k.js";import"./ProgressBar-COGAiyei.js";import"./Label-Dn1Y_s7S.js";import"./Hidden-CJU5gFpe.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DrWOXoHd.js";import"./context-CgVi_M53.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Byc6DAfn.js";import"./useFocus-C0SaCLF4.js";import"./useFocusRing-EPMGJgfm.js";import"./useFocusable-C5GnurYQ.js";import"./RSPContexts-ClgHsKPZ.js";import"./OverlayArrow-B3oUpodu.js";import"./useControlledState-CQ4qwdX_.js";import"./Collection-PnM2Ucj1.js";import"./CollectionBuilder-Dx8JAACx.js";import"./SelectionIndicator-CMZ6aZr9.js";import"./Separator-Br82JzEe.js";import"./Text-ChwArYoy.js";import"./SelectionManager-x8dLLgK6.js";import"./useEvent-C375hDTh.js";import"./useCollator-CIF19XO1.js";import"./FocusScope-0a8lKbDZ.js";import"./useLocalizedStringFormatter-Dr59zSqF.js";import"./VisuallyHidden-CbY3TGrn.js";import"./flowComponent-CiUf0vQo.js";import"./context-BviD8e-k.js";import"./useStatic-Cxgn0lDK.js";import"./OverlayContextProvider-Dq_iYQ8p.js";import"./DialogTriggerView-DGdEuC_1.js";import"./dynamic-Cp5s9Mjb.js";import"./Overlay-BsxDEKI2.js";import"./useOverlayController-lbjW1yTF.js";import"./LoadingSpinner-D_HEbJEf.js";import"./IconWarning-CbcK8G8M.js";import"./remote-Cz3kT78_.js";import"./ButtonView-D-stYF68.js";import"./Flex-D_biwL3f.js";import"./Text-D1hVvtRE.js";import"./browser-_fqBbauj.js";import"./EmulatedBoldText-BTtwXUtX.js";import"./getActionGroupSlot-BO1T8GeY.js";import"./Heading-apCDmXp5.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
