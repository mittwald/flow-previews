import{R as o}from"./index-B-o1Wr-g.js";import{a as u,c as l,s as j,b as R}from"./lib-QY-dlxWa.js";import{M as q}from"./ModalTrigger-DIbejXUz.js";import{A as z}from"./ActionGroup-B843AYgo.js";import{B as p}from"./Button-TH90Unv1.js";import{H as I}from"./Heading-DQ0-u3p0.js";import{C as J}from"./Content-BRrO9N7C.js";import{A as t}from"./Action-nwH1LYxm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./flowComponent-SXQnFwcy.js";import"./index-DolzVqEf.js";import"./Overlay-y6ENboEo.js";import"./OverlayTrigger-DBMCsseW.js";import"./context-HWij4CCA.js";import"./useSelector-iQqgW7gO.js";import"./utils-CCebJm36.js";import"./Dialog-EQBJGkcZ.js";import"./Button-DpaYcQnV.js";import"./ProgressBar-C7LzY9et.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CjESOWAx.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-BMY-498z.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-D4kl22nw.js";import"./Text-CByKVUtS.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./Header-gKSh-KKu.js";import"./IconApp--rto3B0B.js";import"./IconWarning-C7RtCnUV.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Ctir2FTR.js";import"./Wrap-DQq6jo70.js";import"./Text-DPEzzey4.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./LoadingSpinner-D3THsmJZ.js";import"./Heading--STTcIhS.js";const Uo={title:"Actions/Action",component:t,render:_=>o.createElement(t,{..._},o.createElement(p,null,"Button")),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},r={},e={args:{action:u}},n={args:{action:l}},a={args:{action:u,showFeedback:!0}},c={args:{action:l,showFeedback:!0}},s={args:{children:o.createElement(t,{action:j},R)}},i={args:{action:u,children:o.createElement(t,{action:u},R)}},m={render:()=>o.createElement(t,{action:l},o.createElement(q,{slot:"actionConfirm"},o.createElement(I,null,"Delete customer"),o.createElement(J,null,"Do you really want to delete the customer?"),o.createElement(z,null,o.createElement(p,{color:"danger"},"Confirm"),o.createElement(p,{color:"secondary",variant:"soft"},"Abort"))),o.createElement(p,{color:"secondary",variant:"soft"},"Delete customer"))};var d,g,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var A,f,F;e.parameters={...e.parameters,docs:{...(A=e.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(G=(x=m.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};const Vo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{e as Async,n as AsyncLong,c as AsyncLongWithFeedback,a as AsyncWithFeedback,r as Default,s as Nested,i as NestedAsync,m as WithConfirmationModal,Vo as __namedExportsOrder,Uo as default};
