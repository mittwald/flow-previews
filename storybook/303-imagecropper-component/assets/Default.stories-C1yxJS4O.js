import{R as o}from"./index-BwDkhjyp.js";import{a as u,c as l,s as j,b as R}from"./lib-e9su9h-L.js";import{M as q}from"./ModalTrigger-BRfOkqxL.js";import{A as z}from"./ActionGroup-3ytB5zzr.js";import{B as p}from"./Button-CGYujOOx.js";import{H as I}from"./Heading-CYnWOiGh.js";import{C as J}from"./Content-D12a__op.js";import{A as t}from"./Action-DJglBR0x.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DR_AoDrQ.js";import"./index-D1Z7wIYD.js";import"./flowComponent-pf1ZT_RA.js";import"./index-B8XB3FuZ.js";import"./OverlayTrigger-CcMw9uE5.js";import"./utils-_0I8Kdxf.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-CTAo9QmE.js";import"./useFocusable-Di1f8vLw.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BgjAeG81.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./PressResponder-CS6YBkA6.js";import"./usePress-CipJ8IEr.js";import"./FocusScope-h9apr_hQ.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-h5MY4Xo1.js";import"./VisuallyHidden-CctDujdB.js";import"./context-ZkthLU-2.js";import"./useSelector-Pyc-engy.js";import"./Header-0z1MCI7V.js";import"./IconApp-C-B10zNi.js";import"./IconWarning-D08KcEGW.js";import"./dynamic-DKDa4OpU.js";import"./Wrap-DQq6jo70.js";import"./Text-OHQxmlAI.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Text-YaHrFsZr.js";import"./LoadingSpinner-BjsJqdEZ.js";import"./Button-j9P20aTv.js";import"./Activity-DsHdYeGi.js";const xo={title:"Actions/Action",component:t,render:_=>o.createElement(t,{..._},o.createElement(p,null,"Button")),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},e={},r={args:{action:u}},n={args:{action:l}},a={args:{action:u,showFeedback:!0}},c={args:{action:l,showFeedback:!0}},s={args:{children:o.createElement(t,{action:j},R)}},i={args:{action:u,children:o.createElement(t,{action:u},R)}},m={render:()=>o.createElement(t,{action:l},o.createElement(q,{slot:"actionConfirm"},o.createElement(I,null,"Delete customer"),o.createElement(J,null,"Do you really want to delete the customer?"),o.createElement(z,null,o.createElement(p,{color:"danger"},"Confirm"),o.createElement(p,{color:"secondary",variant:"soft"},"Abort"))),o.createElement(p,{color:"secondary",variant:"soft"},"Delete customer"))};var d,g,y;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var A,f,F;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(G=(x=m.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};const Go=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{r as Async,n as AsyncLong,c as AsyncLongWithFeedback,a as AsyncWithFeedback,e as Default,s as Nested,i as NestedAsync,m as WithConfirmationModal,Go as __namedExportsOrder,xo as default};
