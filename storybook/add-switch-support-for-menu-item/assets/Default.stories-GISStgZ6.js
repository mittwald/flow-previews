import{R as o}from"./index-BwDkhjyp.js";import{a as u,c as l,s as j,b as R}from"./lib-BCa9szDc.js";import{M as q}from"./ModalTrigger-CKw6HMJS.js";import{A as z}from"./ActionGroup-QGSbT3tx.js";import{B as p}from"./Button-CE1BCqF-.js";import{H as I}from"./Heading-lKANVE1O.js";import{C as J}from"./Content-D_cH_z01.js";import{A as e}from"./Action-CGXqiLzQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./flowComponent-L8FZPC_o.js";import"./index-B8XB3FuZ.js";import"./OverlayTrigger-DAcHIpQJ.js";import"./utils-B-mS0hjG.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-74RQSP_w.js";import"./useFocusable-CKMlalor.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BNeRQeib.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-YR3pmEr9.js";import"./FocusScope-DW-lXgh3.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-kg7v6Afk.js";import"./VisuallyHidden-BSWHffzG.js";import"./context-apusqW7x.js";import"./useSelector-BudK-1xR.js";import"./Header-CEScQpqB.js";import"./IconApp-D9YGKrkS.js";import"./IconWarning-B77fLmlz.js";import"./dynamic-DKDa4OpU.js";import"./Wrap-DQq6jo70.js";import"./Text-CKjZYOWy.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Text-C_suByGF.js";import"./LoadingSpinner-WO6qy2zn.js";import"./Button-BTMfZQLF.js";import"./Activity-Cov3f-FH.js";const Oo={title:"Actions/Action",component:e,render:_=>o.createElement(e,{..._},o.createElement(p,null,"Button")),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},r={args:{action:u}},n={args:{action:l}},a={args:{action:u,showFeedback:!0}},c={args:{action:l,showFeedback:!0}},s={args:{children:o.createElement(e,{action:j},R)}},i={args:{action:u,children:o.createElement(e,{action:u},R)}},m={render:()=>o.createElement(e,{action:l},o.createElement(q,{slot:"actionConfirm"},o.createElement(I,null,"Delete customer"),o.createElement(J,null,"Do you really want to delete the customer?"),o.createElement(z,null,o.createElement(p,{color:"danger"},"Confirm"),o.createElement(p,{color:"secondary",variant:"soft"},"Abort"))),o.createElement(p,{color:"secondary",variant:"soft"},"Delete customer"))};var d,g,y;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var A,f,F;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    action: asyncFunction
  }
}`,...(F=(f=r.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var h,b,E;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(G=(x=m.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};const xo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{r as Async,n as AsyncLong,c as AsyncLongWithFeedback,a as AsyncWithFeedback,t as Default,s as Nested,i as NestedAsync,m as WithConfirmationModal,xo as __namedExportsOrder,Oo as default};
