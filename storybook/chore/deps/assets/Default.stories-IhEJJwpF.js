import{j as o}from"./iframe-DdrpCK7O.js";import{a as d,c as u,b as l,s as y}from"./lib-XloK69KS.js";import{M as h}from"./Modal-Dt0MHAmX.js";import{A}from"./ActionGroup-CZjBKbuV.js";import{B as p}from"./Button-DMAlCpIp.js";import{H as f}from"./Heading-B9Rdq3ni.js";import{C as F}from"./Content-DNXKTnJE.js";import{A as r}from"./Action-gNhXMKos.js";import"./DialogTriggerView-B77w19zZ.js";import"./context-CvEBZO7B.js";import"./PropsContextProvider-B-M9Ok3D.js";import"./mergeRefs-Bbw3w7Zz.js";import"./index-7qYBiH1_.js";import"./clsx-B-dksMZM.js";import"./useStatic-BgXEq_zL.js";import"./Dialog-B-Srzcok.js";import"./Button-TD7SThT2.js";import"./utils-jbl8fYpp.js";import"./ProgressBar-DX53PXke.js";import"./Label-q6ExZamY.js";import"./Hidden-YoIeoCE-.js";import"./filterDOMProps-CrrfCvhk.js";import"./useLabel-BGrVe235.js";import"./context-BHbmanCt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-wge_TV6C.js";import"./useFocus-DysN_qPg.js";import"./useFocusRing-BnOgNpG6.js";import"./useFocusable-CpPH01B7.js";import"./RSPContexts-C1d3DcZT.js";import"./OverlayArrow-Igqyksxq.js";import"./useControlledState-N3OdDP8Q.js";import"./Collection-DaGxWABD.js";import"./CollectionBuilder-BFjTWE8q.js";import"./Separator-DpbYnmTZ.js";import"./Text-Diya8EQq.js";import"./Input-BQD-OzUK.js";import"./SearchField-Noy99wMh.js";import"./FieldError-ENGkQJvk.js";import"./Form-BaMTKeVV.js";import"./Group-7fH98enb.js";import"./useLocalizedStringFormatter-DTJzl0HQ.js";import"./useTextField-UqnMDVeR.js";import"./useFormReset-CJ-aoIOb.js";import"./TextField-l3Z8KRyH.js";import"./SelectionManager-D2bv-DGd.js";import"./useEvent-Bo6FRXFm.js";import"./useCollator-uOsZKEYD.js";import"./FocusScope-DAuqHH8A.js";import"./VisuallyHidden--_7cmU_k.js";import"./Overlay-DFioCL4J.js";import"./IconWarning-lf4U_i6L.js";import"./Header-D4eGhqae.js";import"./ButtonView-DiFXcBUq.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-D7vgPX0T.js";import"./Text-CaSL42bb.js";import"./browser-CJKA82in.js";import"./EmulatedBoldText-BlAgkMNP.js";import"./LoadingSpinner-MRX8b_Xd.js";import"./Heading-C9nmxDWk.js";const vo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
