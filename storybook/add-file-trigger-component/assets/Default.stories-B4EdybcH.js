import{R as o}from"./index-Cs7sjTYM.js";import{a as u,c as l,s as j,b as R}from"./lib-c8cKyaq5.js";import{M as q}from"./ModalTrigger-B0pK5Met.js";import{A as z}from"./ActionGroup-BFxZDqF9.js";import{B as p}from"./Button-Bq7y9BIZ.js";import{H as I}from"./Heading-i4QpT3vc.js";import{C as J}from"./Content-SctQ_6lp.js";import{A as t}from"./Action-DQr6rgUQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXo7lD_U.js";import"./index-j_f0pOtZ.js";import"./flowComponent-Bg40pdZw.js";import"./index-Cf-03bMR.js";import"./OverlayTrigger-CuDFj76r.js";import"./utils-GKDLJ2vO.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-HdKIwz3h.js";import"./useFocusRing-Cx5sZpw_.js";import"./ProgressBar-CpzbYRLN.js";import"./Label-qcDNDzhS.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./PressResponder-Bhz1UQIJ.js";import"./usePress-IYK5Xs6I.js";import"./FocusScope-Dq1DdGw4.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-sPIK_yL0.js";import"./context-BnMUo41h.js";import"./useSelector-DiJHxpbu.js";import"./Header-dj3Po25X.js";import"./IconApp-CKfGrMYq.js";import"./IconWarning-DoqSRZU1.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DLuT6VQZ.js";import"./Wrap-DQq6jo70.js";import"./Text-DZmFXo-e.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-DP1y2Dk0.js";import"./LoadingSpinner-9k8jsvZY.js";import"./Button-CB57Q0FS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BZB42ELj.js";import"./Heading-Ys7-2L7-.js";const zo={title:"Actions/Action",component:t,render:_=>o.createElement(t,{..._},o.createElement(p,null,"Button")),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},r={},e={args:{action:u}},n={args:{action:l}},a={args:{action:u,showFeedback:!0}},c={args:{action:l,showFeedback:!0}},s={args:{children:o.createElement(t,{action:j},R)}},i={args:{action:u,children:o.createElement(t,{action:u},R)}},m={render:()=>o.createElement(t,{action:l},o.createElement(q,{slot:"actionConfirm"},o.createElement(I,null,"Delete customer"),o.createElement(J,null,"Do you really want to delete the customer?"),o.createElement(z,null,o.createElement(p,{color:"danger"},"Confirm"),o.createElement(p,{color:"secondary",variant:"soft"},"Abort"))),o.createElement(p,{color:"secondary",variant:"soft"},"Delete customer"))};var d,g,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var A,f,F;e.parameters={...e.parameters,docs:{...(A=e.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    action: asyncFunction
  }
}`,...(F=(f=e.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var h,b,E;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction
  }
}`,...(E=(b=n.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var k,C,B;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    showFeedback: true
  }
}`,...(B=(C=a.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var D,L,S;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction,
    showFeedback: true
  }
}`,...(S=(L=c.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var v,w,M;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: <Action action={syncFunction}>{button}</Action>
  }
}`,...(M=(w=s.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var W,H,N;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    children: <Action action={asyncFunction}>{button}</Action>
  }
}`,...(N=(H=i.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var O,x,G;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(G=(x=m.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};const Io=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{e as Async,n as AsyncLong,c as AsyncLongWithFeedback,a as AsyncWithFeedback,r as Default,s as Nested,i as NestedAsync,m as WithConfirmationModal,Io as __namedExportsOrder,zo as default};
