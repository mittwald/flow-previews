import{R as o}from"./index-Cs7sjTYM.js";import{a as u,c as l,s as j,b as R}from"./lib-DkuMWhnu.js";import{M as q}from"./ModalTrigger-CUJuZdh9.js";import{A as z}from"./ActionGroup-CYJ4gYME.js";import{B as p}from"./Button-HXKu8JZI.js";import{H as I}from"./Heading-Cs03TZSA.js";import{C as J}from"./Content-BGnekowb.js";import{A as e}from"./Action-3wslkoqS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-58HgA8rU.js";import"./index-C8LjR2Bd.js";import"./flowComponent-CmFvo3FE.js";import"./index-BMdlDBjA.js";import"./OverlayTrigger-CQB85vT6.js";import"./utils-Ca6JWPXc.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-DEf4p40l.js";import"./useFocusable-CMUHH7RC.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-J1nK3MOF.js";import"./useControlledState-B7K2eYzO.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BgSaJexe.js";import"./FocusScope-CYj0PTxA.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-DOEjDcNd.js";import"./context-BnTmsIr7.js";import"./useSelector-57VmxYcA.js";import"./Header-DxopgWd6.js";import"./IconApp-Cq2nF_H2.js";import"./IconWarning-CT4MKmtH.js";import"./dynamic-DKDa4OpU.js";import"./Wrap-DQq6jo70.js";import"./Text-CKRVNL4F.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-Bu-3W4UG.js";import"./LoadingSpinner-DmXq9kUh.js";import"./Button-ImYwklq8.js";import"./Activity-CPnWONG0.js";const Oo={title:"Actions/Action",component:e,render:_=>o.createElement(e,{..._},o.createElement(p,null,"Button")),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},r={args:{action:u}},n={args:{action:l}},a={args:{action:u,showFeedback:!0}},c={args:{action:l,showFeedback:!0}},s={args:{children:o.createElement(e,{action:j},R)}},i={args:{action:u,children:o.createElement(e,{action:u},R)}},m={render:()=>o.createElement(e,{action:l},o.createElement(q,{slot:"actionConfirm"},o.createElement(I,null,"Delete customer"),o.createElement(J,null,"Do you really want to delete the customer?"),o.createElement(z,null,o.createElement(p,{color:"danger"},"Confirm"),o.createElement(p,{color:"secondary",variant:"soft"},"Abort"))),o.createElement(p,{color:"secondary",variant:"soft"},"Delete customer"))};var d,g,y;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var A,f,F;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
