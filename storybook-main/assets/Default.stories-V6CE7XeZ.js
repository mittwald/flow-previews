import{j as o}from"./iframe-BjQgS_dl.js";import{a as d,c as u,b as l,s as y}from"./lib-CAt-0sxi.js";import{M as h}from"./TimeField-DmBCIGkd.js";import{A}from"./ActionGroup-CR4mXt-z.js";import{B as p}from"./Button-mR6tCl9f.js";import{H as f}from"./Heading-DmijLSYI.js";import{C as F}from"./Content-B-6ROZD8.js";import{A as r}from"./Section-BeaFJCve.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-B3msEGiP.js";import"./mergeRefs-BqcSeRH_.js";import"./index-CCcXhUlF.js";import"./clsx-B-dksMZM.js";import"./Accordion-HUQJDa8a.js";import"./dynamic-CTQIFy3Y.js";import"./IconWarning-wUhw_T8r.js";import"./Alert-dt7Crh6d.js";import"./AlertIcon-CKkF89KF.js";import"./useLocalizedStringFormatter-Dg6sdA5Z.js";import"./context-3TgVXJa8.js";import"./AlertBadge-BuoAO-EF.js";import"./Text-hFF5yDpy.js";import"./browser-D8Ytpe6r.js";import"./utils-C6Mwuf68.js";import"./EmulatedBoldText-CmEhCy_I.js";import"./Align-whB8MF17.js";import"./Popover-DNrzHtdF.js";import"./context-C9CRIziz.js";import"./Button-CWLE3PAH.js";import"./ProgressBar-DBLE5koh.js";import"./Hidden-CbsoacY0.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BWD7k8n6.js";import"./useFocusable-CMVEVLbf.js";import"./RSPContexts-JWS-CQt4.js";import"./Collection-Uuc2P1Rm.js";import"./CollectionBuilder-SW3JOyLp.js";import"./SelectionIndicator-DDS3Avz9.js";import"./Separator-DKQ5QqW9.js";import"./useStatic-CbhvCGnA.js";import"./OverlayTrigger-BZYsa2Ar.js";import"./TableFooterRow-DIeYbuw8.js";import"./SkeletonText-CYyiBvSU.js";import"./Avatar-BzNSebrE.js";import"./AvatarStack-B41TTh57.js";import"./Badge-CWhMpUJo.js";import"./BigNumber-DelUDah8.js";import"./Breadcrumb-W_Ta7J5l.js";import"./Link-toGczOVY.js";import"./Legend-CJxX7Jjd.js";import"./FileCardList-DxtvYBZN.js";import"./Image-D2Uh7TNb.js";import"./Color-CkV5zOWc.js";import"./Label-BioMMRbR.js";import"./ContextualHelpTrigger-GCKXkGjA.js";import"./CounterBadge-BVTBh7o7.js";import"./DonutChart-CxTDQKuL.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-s0Iy2v7I.js";import"./Header-CccJlXz1.js";import"./Initials-BQ1BPtAw.js";import"./InlineCode-DubGci4q.js";import"./PopoverTrigger-vpZCTXgF.js";import"./LoadingSpinner-BVWf40cO.js";import"./Separator-V7QUjuvc.js";import"./Message-B_08b52f.js";import"./MessageSeparator-a9jr4f53.js";import"./NavigationGroup-DACyTvZZ.js";import"./Notification-CufI5Fok.js";import"./NotificationProvider-Ba5bESUN.js";import"./ProgressBar-C_67UiSI.js";import"./Rating-CzDqBwDX.js";import"./Skeleton-CgTPZh5a.js";const qo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},i={args:{children:o.jsx(r,{action:y,children:l})}},c={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
