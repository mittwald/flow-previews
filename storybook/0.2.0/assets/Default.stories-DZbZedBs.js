import{R as o}from"./index-BbMBc-iG.js";import{a as u,c as l,s as j,b as R}from"./lib-DQFOeLSt.js";import{M as q}from"./ModalTrigger-Bzgp12W6.js";import{A as z}from"./ActionGroup-h4TxZ6ye.js";import{B as p}from"./Button-1rw05oyV.js";import{H as I}from"./Heading-CHAikoJ1.js";import{C as J}from"./Content-BbJKCc-f.js";import{A as t}from"./Action-CReouxgX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-D5ZWXAHU-DlerbUHg.js";import"./v4-CtRu48qb.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BgoMLKZk.js";import"./index-CPTjWdH1.js";import"./flowComponent-CaEd1ouJ.js";import"./index-U7Evrs-N.js";import"./Overlay-CfRcz_ow.js";import"./OverlayTrigger-CO8vF-4q.js";import"./context-PpKQHRcf.js";import"./useSelector-CI2pTLXu.js";import"./utils-D4Vol65q.js";import"./Dialog-BQ_biHhV.js";import"./Button-8ZRRpxMH.js";import"./ProgressBar-tRLoFn7O.js";import"./Label-BybFgH_Q.js";import"./Hidden-BN0YEbzJ.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-C5NcpKQ2.js";import"./useLocalizedStringFormatter-DYdTqA_9.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-BA3lYSOI.js";import"./useFocusRing-DA2rHHrb.js";import"./usePress-DotMbixf.js";import"./RSPContexts-CBHfX6hb.js";import"./OverlayArrow-CrZGdHWF.js";import"./useControlledState-CMnoB41k.js";import"./Collection-BUbbDiz9.js";import"./CollectionBuilder-DOwRmyqO.js";import"./Separator-CpmRlxds.js";import"./Text-oWh285ma.js";import"./SelectionManager-DnQnei6w.js";import"./FocusScope-TaiHum7E.js";import"./useEvent-D1lr70i2.js";import"./useCollator-CzQekWjs.js";import"./VisuallyHidden-CAwLSgYE.js";import"./Header-3DYqUgou.js";import"./IconApp-B_zPpa1A.js";import"./react-children-utilities-BBO5HXrA.js";import"./IconWarning-CceziLlX.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CHxkKRmy.js";import"./Wrap-DQq6jo70.js";import"./Text-D6naXSDy.js";import"./browser-DXl7VCm2.js";import"./EmulatedBoldText-ZO8wNulR.js";import"./LoadingSpinner-y4xqeSCe.js";import"./Heading-B6bd_0m7.js";const Vo={title:"Actions/Action",component:t,render:_=>o.createElement(t,{..._},o.createElement(p,null,"Button")),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},r={},e={args:{action:u}},n={args:{action:l}},a={args:{action:u,showFeedback:!0}},c={args:{action:l,showFeedback:!0}},s={args:{children:o.createElement(t,{action:j},R)}},i={args:{action:u,children:o.createElement(t,{action:u},R)}},m={render:()=>o.createElement(t,{action:l},o.createElement(q,{slot:"actionConfirm"},o.createElement(I,null,"Delete customer"),o.createElement(J,null,"Do you really want to delete the customer?"),o.createElement(z,null,o.createElement(p,{color:"danger"},"Confirm"),o.createElement(p,{color:"secondary",variant:"soft"},"Abort"))),o.createElement(p,{color:"secondary",variant:"soft"},"Delete customer"))};var d,g,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var A,f,F;e.parameters={...e.parameters,docs:{...(A=e.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(G=(x=m.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};const Xo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{e as Async,n as AsyncLong,c as AsyncLongWithFeedback,a as AsyncWithFeedback,r as Default,s as Nested,i as NestedAsync,m as WithConfirmationModal,Xo as __namedExportsOrder,Vo as default};
