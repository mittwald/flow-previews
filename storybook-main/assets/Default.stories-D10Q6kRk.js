import{j as o}from"./iframe-rOlqB43H.js";import{a as d,c as u,b as l,s as y}from"./lib-CMcAHFNS.js";import{M as h}from"./Modal-xq3eIzfO.js";import{A}from"./ActionGroup-C5Ll53hT.js";import{B as p}from"./Button-Bjmah8F5.js";import{H as f}from"./Heading-D93Lplv4.js";import{C as F}from"./Content-JdgygvO-.js";import{A as r}from"./Action-CHaj31Fl.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-BdoRRXtX.js";import"./Dialog-B6AZQFUz.js";import"./Button-CW-dJdjv.js";import"./utils-Ccj3VlSZ.js";import"./index-CsMmwq4Q.js";import"./clsx-B-dksMZM.js";import"./index-DzmHy0yH.js";import"./ProgressBar-B_qKaJMi.js";import"./Label-Hp9JhiSo.js";import"./Hidden-DOKrBgVK.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CbRIwZrE.js";import"./context-C0IlT2TZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D4qdaxsz.js";import"./useFocus-B5EXjvsK.js";import"./useFocusRing-lBaj0PQL.js";import"./useFocusable-vYreZ1I2.js";import"./RSPContexts-D_fvST6z.js";import"./OverlayArrow-OpojsIn2.js";import"./useControlledState-BGrTDRws.js";import"./Collection-CVOOSTzg.js";import"./CollectionBuilder-ClYuAlnm.js";import"./SelectionIndicator-CrjLUeul.js";import"./Separator-ClOd3Ug2.js";import"./Text-CjxKuecI.js";import"./SelectionManager-ewEKpYWO.js";import"./useEvent-Cj6N6ygk.js";import"./useCollator-BzTQk6BT.js";import"./FocusScope-BxWeftc5.js";import"./useLocalizedStringFormatter-UF0AsOfY.js";import"./VisuallyHidden-CY9UiAKH.js";import"./flowComponent-BTUHU9lP.js";import"./context-BHPibtfH.js";import"./useStatic-B2jLjEI4.js";import"./OverlayContextProvider-D43YjdGu.js";import"./DialogTriggerView-Dbmbsj6f.js";import"./dynamic-DIoaqwvI.js";import"./Overlay-YgY2-EYl.js";import"./useOverlayController-Dp5_YYyg.js";import"./LoadingSpinner-BbLFRhi0.js";import"./IconWarning-Di5b70C_.js";import"./remote-DT0xwqhP.js";import"./ButtonView-Czsg1_OU.js";import"./Flex-B1SZ7ZVK.js";import"./Text-CXuVairg.js";import"./browser-DeRtoS4T.js";import"./EmulatedBoldText-td0NnrMW.js";import"./getActionGroupSlot-PZdeRoTE.js";import"./Heading-Ds9JRynb.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
