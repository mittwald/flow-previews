import{j as o}from"./iframe-Pk_Kk4JL.js";import{a as d,c as u,b as l,s as y}from"./lib-Dd1d-3GI.js";import{M as h}from"./Modal-C5LW9SwY.js";import{A}from"./ActionGroup-Bf9c-qmg.js";import{B as p}from"./Button-D9QX6l1e.js";import{H as f}from"./Heading-wNCcNm7o.js";import{C as F}from"./Content-Cb3yoLz5.js";import{A as r}from"./Action-C8SSnKxx.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-C6V65Cj9.js";import"./Dialog-hqEaC_v2.js";import"./Button-CmNC7e_S.js";import"./utils-CLxMEgR2.js";import"./index-Cry2UgUa.js";import"./clsx-B-dksMZM.js";import"./index-BO3AnCjb.js";import"./ProgressBar-R9Q052Y1.js";import"./Label-BhzG_WzN.js";import"./Hidden-D3BnJIdN.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C5txBCfY.js";import"./context-CrHSUJ76.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BhJiygMU.js";import"./useFocus-CG8bKOp6.js";import"./useFocusRing-Cf40KqTj.js";import"./useFocusable-6mL9jMN5.js";import"./RSPContexts-DW-Mep96.js";import"./OverlayArrow-CX4Z7_7Y.js";import"./useControlledState-48Ld73MP.js";import"./Collection-BHxA-DrM.js";import"./CollectionBuilder-DoPbpSH9.js";import"./SelectionIndicator-yei3WI6a.js";import"./Separator-BBzznqX8.js";import"./Text-cuBcImQE.js";import"./SelectionManager-BkRtV5Co.js";import"./useEvent-CPz9WXw8.js";import"./useCollator-Doi6oCed.js";import"./FocusScope-CxdKQmWN.js";import"./useLocalizedStringFormatter-DWczizNw.js";import"./VisuallyHidden-DaiW9JEZ.js";import"./flowComponent-c6eRnhhg.js";import"./context-DgSiNkYd.js";import"./useStatic-i-ZCX3ob.js";import"./OverlayContextProvider-FOEyue6v.js";import"./DialogTriggerView-DOtuJtGs.js";import"./dynamic-I4mA0X6x.js";import"./Overlay-CthK8Mzz.js";import"./useOverlayController-C-ffow-t.js";import"./LoadingSpinner-DPjJtv8A.js";import"./IconWarning-BZbEOivs.js";import"./remote-jZTk_Znj.js";import"./ButtonView-22oYLQp2.js";import"./Flex-CEXF9Y1S.js";import"./Text-yAUoHBmv.js";import"./browser-DxGxcnNA.js";import"./EmulatedBoldText-B0MH6cxw.js";import"./getActionGroupSlot-CPzpUO6W.js";import"./Heading-CHcXaZb2.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
