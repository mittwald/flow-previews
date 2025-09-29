import{j as o}from"./iframe-JrijvI0G.js";import{a as d,c as u,b as E,s as R}from"./lib-3oJ-NBVN.js";import{M as q}from"./Modal-DIXnFPlB.js";import{A as z}from"./ActionGroup-CtIuQuZb.js";import{B as p}from"./Button-nOLp9HyP.js";import{H as I}from"./Heading-C_XHAp4M.js";import{C as J}from"./Content-BxeQqMi9.js";import{A as r}from"./Action-CunTtwFt.js";import"./index-Cun1SEai.js";import"./DialogTriggerView-DOh3nc4_.js";import"./context-CS_K62PD.js";import"./PropsContextProvider-Bc6JGim9.js";import"./mergeRefs-CbRd_Ras.js";import"./index-BPCP2ZZE.js";import"./clsx-B-dksMZM.js";import"./useStatic-9jHtrOTK.js";import"./Button-Bp13GR3E.js";import"./utils-DhZkrhHH.js";import"./ProgressBar-D10mUZdz.js";import"./Label-1jXHzd37.js";import"./Hidden-CHpGmdBq.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D5nQ4vXC.js";import"./context-CnkMg4nA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-JaoXEhrO.js";import"./useFocus-DA61-eEI.js";import"./useFocusRing-DCbTuOGO.js";import"./useFocusable-DIk21gkV.js";import"./RSPContexts-bEimFc0k.js";import"./ClearPropsContextView-Dl_oHLSA.js";import"./useControlledState-DQPwS-UF.js";import"./FocusScope-Bwbpfbbo.js";import"./useCollator-ChdaOTfc.js";import"./useLocalizedStringFormatter-M08v5G9w.js";import"./VisuallyHidden-B4SYhrOy.js";import"./Collection-yP15xrib.js";import"./CollectionBuilder-CnCpguDd.js";import"./context-SLDg-fw2.js";import"./Separator-D6-9qD1D.js";import"./Text-Bm8Zb_oa.js";import"./SelectionManager-C2kTlReE.js";import"./useEvent-BTKtfW_h.js";import"./dynamic-BUc0KwfX.js";import"./Overlay-BTMFOnNL.js";import"./IconWarning-B3U3_U2s.js";import"./ButtonView-XNSqWzM1.js";import"./getActionGroupSlot-BuUDRoIK.js";import"./Text-9s7Vdafx.js";import"./browser-eHAjn9uV.js";import"./EmulatedBoldText-BVZ71ko2.js";import"./LoadingSpinner-BpDSxo2f.js";import"./Heading-BW0daRbe.js";const Po={title:"Actions/Action",component:r,render:_=>o.jsx(r,{..._,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:R,children:E})}},i={args:{action:d,children:o.jsx(r,{action:d,children:E})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(q,{slot:"actionConfirm",children:[o.jsx(I,{children:"Delete customer"}),o.jsx(J,{children:"Do you really want to delete the customer?"}),o.jsxs(z,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};var l,g,y;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,A,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    action: asyncFunction
  }
}`,...(f=(A=n.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var F,x,b;e.parameters={...e.parameters,docs:{...(F=e.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction
  }
}`,...(b=(x=e.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var j,k,C;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    showFeedback: true
  }
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var B,D,L;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction,
    showFeedback: true
  }
}`,...(L=(D=a.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var S,v,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: <Action action={syncFunction}>{button}</Action>
  }
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var M,W,H;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    children: <Action action={asyncFunction}>{button}</Action>
  }
}`,...(H=(W=i.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var N,O,G;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(G=(O=m.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const Qo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,c as Nested,i as NestedAsync,m as WithConfirmationModal,Qo as __namedExportsOrder,Po as default};
