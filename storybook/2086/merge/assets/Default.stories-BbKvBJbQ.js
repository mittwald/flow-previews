import{j as o}from"./iframe-DOYRhvKw.js";import{a as d,c as u,b as l,s as y}from"./lib-CG9Q05xb.js";import{M as h}from"./Modal-FqDtQPdb.js";import{A}from"./ActionGroup-BQVi9nN6.js";import{B as p}from"./Button-C2r2j3I4.js";import{H as f}from"./Heading-BcQRRFfC.js";import{C as F}from"./Content-CsxOxb5X.js";import{A as r}from"./Action-BNkegqWa.js";import"./index-nuYtCEEu.js";import"./OverlayTrigger-BlX_Ocgn.js";import"./Dialog-QPXJS7lu.js";import"./Button-DqQnue56.js";import"./utils-Bgpcx055.js";import"./index-CBooujIz.js";import"./clsx-B-dksMZM.js";import"./index-CsHgCCkK.js";import"./ProgressBar-DECQ-pQm.js";import"./Label-DPl4piTh.js";import"./Hidden-vFw0yyvc.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CzwTtnKl.js";import"./context-NzKNm45Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-GLnS58A3.js";import"./useFocus-19H2kxNT.js";import"./useFocusRing-BgXDKXFW.js";import"./useFocusable-DT2cLKuD.js";import"./RSPContexts-D64TVg0j.js";import"./OverlayArrow-C0WVRV0f.js";import"./useControlledState-BpyUCkTO.js";import"./Collection-BmR1fMr0.js";import"./CollectionBuilder-COEzD4ng.js";import"./SelectionIndicator-DAPFHJnO.js";import"./Separator-9JM_OpZ0.js";import"./Text-ChShlFeN.js";import"./SelectionManager-BtUAX0vR.js";import"./useEvent-Tq7AIfXA.js";import"./useCollator-Dm4rB5GB.js";import"./FocusScope-CgTCZfj1.js";import"./useLocalizedStringFormatter-DmT4fRR_.js";import"./VisuallyHidden-DLTCEUwm.js";import"./ControlledNotification-DTnIJfc-.js";import"./flowComponent-STxdqvts.js";import"./context-CjasfPnd.js";import"./useStatic-kDWe5hml.js";import"./OverlayContextProvider-_T8uFS1c.js";import"./DialogTriggerView-DchH2u7O.js";import"./dynamic-nHNYFzn9.js";import"./Overlay-DlFtVyJh.js";import"./useOverlayController-7tlEbJro.js";import"./ClearPropsContextView-HZAP9uO_.js";import"./ClearPropsContext-BqcXprie.js";import"./IconWarning-CT2mn3WV.js";import"./ButtonView-CWyXffOK.js";import"./getActionGroupSlot-DkFy2TVv.js";import"./Text-uG3ng9U4.js";import"./browser-BfmJHaZX.js";import"./EmulatedBoldText-wbMAxmw1.js";import"./LoadingSpinner-x8jgjTbZ.js";import"./Heading-BiqQ-WE6.js";const So={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const vo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,c as Nested,i as NestedAsync,m as WithConfirmationModal,vo as __namedExportsOrder,So as default};
