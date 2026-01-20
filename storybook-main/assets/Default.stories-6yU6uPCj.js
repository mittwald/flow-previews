import{j as o}from"./iframe-CG_BDTJg.js";import{a as d,c as u,b as l,s as y}from"./lib-Cfpm-0AZ.js";import{M as h}from"./Modal-B8zOdMUy.js";import{A}from"./ActionGroup-DAmiV-Yk.js";import{B as p}from"./Button-BmAaiuIV.js";import{H as f}from"./Heading--5M_y3tK.js";import{C as F}from"./Content-Cf0EUCx6.js";import{A as r}from"./Action-CprlfWDd.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-DFacS4RO.js";import"./Dialog-CMl17GR5.js";import"./Button-DIbF_cdk.js";import"./utils-BtbDMhcr.js";import"./index-C71TA-pA.js";import"./clsx-B-dksMZM.js";import"./index-CuwL1_wd.js";import"./ProgressBar-BZV9wt8q.js";import"./Label-CQ1G_pe6.js";import"./Hidden-DdAaT9j3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DI7piRsn.js";import"./context-CXt1SSmQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C5t6ziJ-.js";import"./useFocus-BQxEMJ7t.js";import"./useFocusRing-CaZs-udO.js";import"./useFocusable-DFQV4HWE.js";import"./RSPContexts-dESf_SGO.js";import"./OverlayArrow-CWZGtBJS.js";import"./useControlledState-BP00jBlc.js";import"./Collection-BiCXXajm.js";import"./CollectionBuilder-DPTu2GsG.js";import"./SelectionIndicator-ZCsaESBY.js";import"./Separator-BkBMJSLE.js";import"./Text-CLAgqxCC.js";import"./SelectionManager-CCfPEZQf.js";import"./useEvent-B3SFi6nF.js";import"./useCollator-CGeacNLD.js";import"./FocusScope-CTViNy8e.js";import"./useLocalizedStringFormatter-DqHGK81F.js";import"./VisuallyHidden-pR1kpoR7.js";import"./flowComponent-Cu1B5LJt.js";import"./context-CBhRRwo5.js";import"./useStatic-CTCSTBly.js";import"./OverlayContextProvider-BcT4h4_W.js";import"./DialogTriggerView-BmA5-fyL.js";import"./dynamic-CvnWp_K2.js";import"./Overlay-Bm_qR_F5.js";import"./useOverlayController-t3_U_UCZ.js";import"./LoadingSpinner-DTxDKIsL.js";import"./IconWarning-OVzy7qXj.js";import"./remote-B2NguZ9L.js";import"./ButtonView-D1nbgbts.js";import"./Flex-CfN_PP1D.js";import"./Text-DpPZns_R.js";import"./browser-yLu0BSsR.js";import"./EmulatedBoldText-CNB3Go6_.js";import"./getActionGroupSlot-CNqrnj_v.js";import"./Heading-BH9BsmNO.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
