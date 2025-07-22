import{j as o}from"./iframe-BKWcqz6w.js";import{a as d,c as u,b as E,s as R}from"./lib-BzGRuZ_s.js";import{M as q}from"./Modal-DhjayjpF.js";import{A as z}from"./ActionGroup-DRyCQKkv.js";import{B as p}from"./Button-CDMbyENh.js";import{H as I}from"./Heading-Bzn4J5ZV.js";import{C as J}from"./Content-CS9wxNna.js";import{A as r}from"./Action-BG2HGkiJ.js";import"./DialogTriggerView-BQEPAYwQ.js";import"./context-fbLD2I4R.js";import"./PropsContextProvider-C5Igvylm.js";import"./mergeRefs-C4ZbtdaD.js";import"./index-DJrDs1kh.js";import"./clsx-B-dksMZM.js";import"./useStatic-wPZWVCFd.js";import"./Dialog-DhBeDFtI.js";import"./Button-VVXhfFKF.js";import"./utils-CQeLeN4J.js";import"./ProgressBar-C6vJSYrT.js";import"./Label-D6DYt8_O.js";import"./Hidden-CkZKnpKj.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-D1fNKuwy.js";import"./context-QVFAHjz-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BwfaRRJR.js";import"./useFocus-BlH6xcxh.js";import"./useFocusRing-BgI-Wk5t.js";import"./useFocusable-BSIifKXa.js";import"./RSPContexts-DdS6JTeo.js";import"./OverlayArrow-vSfQPgA4.js";import"./useControlledState-D-vJPGY9.js";import"./Collection-C7UaXUW1.js";import"./CollectionBuilder-DDv9MTUl.js";import"./Separator-0bHFPMSf.js";import"./Text-ChPHkoYL.js";import"./Input-BenWenGs.js";import"./SearchField-BUGK_Wf7.js";import"./FieldError-B_JMWavC.js";import"./Form-DoHwQU7E.js";import"./Group-DfxlRKcN.js";import"./useLocalizedStringFormatter-DH0uxzC_.js";import"./useTextField-C8uxY6vr.js";import"./useFormReset-DXZOmU-A.js";import"./TextField-CHY6h4XH.js";import"./SelectionManager-D5GxgTFL.js";import"./useEvent-BzcH6Ltb.js";import"./useCollator-DIoPzu3e.js";import"./FocusScope-uRnVEpI_.js";import"./VisuallyHidden-DSrM5G1n.js";import"./Overlay-PPao1S_W.js";import"./IconWarning-CiiLQ5Id.js";import"./Header-Co9TC2x4.js";import"./ButtonView-DtRcapUT.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DjN4KLUT.js";import"./Text-Fi67VBtl.js";import"./browser-DUKC-94T.js";import"./EmulatedBoldText-BJOxnJTr.js";import"./LoadingSpinner-DjG0OPxh.js";import"./Heading-Brw0cfIy.js";const $o={title:"Actions/Action",component:r,render:_=>o.jsx(r,{..._,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:R,children:E})}},i={args:{action:d,children:o.jsx(r,{action:d,children:E})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(q,{slot:"actionConfirm",children:[o.jsx(I,{children:"Delete customer"}),o.jsx(J,{children:"Do you really want to delete the customer?"}),o.jsxs(z,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};var l,g,y;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,A,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(G=(O=m.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const or=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,c as Nested,i as NestedAsync,m as WithConfirmationModal,or as __namedExportsOrder,$o as default};
