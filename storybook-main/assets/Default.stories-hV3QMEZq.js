import{R as o}from"./index-Cs7sjTYM.js";import{a as u,c as l,s as j,b as R}from"./lib-D6V46wOU.js";import{M as q}from"./ModalTrigger-8PCRvOuU.js";import{A as z}from"./ActionGroup-D9rY_pkq.js";import{B as p}from"./Button-DiD_FILt.js";import{H as I}from"./Heading-yxhj2XEF.js";import{C as J}from"./Content-CM2PzR_H.js";import{A as t}from"./Action-hM0YxVE7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./flowComponent-Cj8AjSn2.js";import"./index-BU4L-DQy.js";import"./OverlayTrigger-XF11aZ7M.js";import"./utils-CgpzwoFP.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-B9aGSeR2.js";import"./useFocusable-DdFCD-YN.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./useControlledState-B7K2eYzO.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-C9_maMb0.js";import"./FocusScope-jwB0dEBj.js";import"./Hidden-BsXGu--s.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-Bx6BLr_2.js";import"./context-DynGahZS.js";import"./useSelector-B1H-qoc7.js";import"./Header-TxQ0llKZ.js";import"./IconApp-D7SRtdnL.js";import"./IconWarning-C39p2-2n.js";import"./dynamic-DKDa4OpU.js";import"./Wrap-DQq6jo70.js";import"./Text-DaiPF-AG.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-BgIWd_-0.js";import"./LoadingSpinner-DfOzCRsp.js";import"./Button-B_pBO4HW.js";import"./Heading-2-efPYe9.js";import"./Activity-CPnWONG0.js";const Go={title:"Actions/Action",component:t,render:_=>o.createElement(t,{..._},o.createElement(p,null,"Button")),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},e={},r={args:{action:u}},n={args:{action:l}},a={args:{action:u,showFeedback:!0}},c={args:{action:l,showFeedback:!0}},s={args:{children:o.createElement(t,{action:j},R)}},i={args:{action:u,children:o.createElement(t,{action:u},R)}},m={render:()=>o.createElement(t,{action:l},o.createElement(q,{slot:"actionConfirm"},o.createElement(I,null,"Delete customer"),o.createElement(J,null,"Do you really want to delete the customer?"),o.createElement(z,null,o.createElement(p,{color:"danger"},"Confirm"),o.createElement(p,{color:"secondary",variant:"soft"},"Abort"))),o.createElement(p,{color:"secondary",variant:"soft"},"Delete customer"))};var d,g,y;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var A,f,F;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(G=(x=m.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};const Ro=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{r as Async,n as AsyncLong,c as AsyncLongWithFeedback,a as AsyncWithFeedback,e as Default,s as Nested,i as NestedAsync,m as WithConfirmationModal,Ro as __namedExportsOrder,Go as default};
