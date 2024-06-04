import{R as o}from"./index-uCp2LrAq.js";import{s as O,b as u,a as p,c as l}from"./lib-B-nJjqrL.js";import{M as q}from"./ModalTrigger-DFpEtzij.js";import{A as z}from"./ActionGroup-C1YOOeEG.js";import{B as d}from"./Button-D7wTG3Tl.js";import{H as I}from"./Heading-DwIZ-iup.js";import{C as J}from"./Content-CkjKSVuV.js";import{A as t}from"./Action-C3j7efGy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CtgwYsrm.js";import"./index-CFQDndEx.js";import"./flowComponent-DS-CA8-x.js";import"./index-BOkhicXD.js";import"./ModalOverlay-BtF-6p0A.js";import"./utils-DZgOXw50.js";import"./OverlayTrigger-BuDIYu9H.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-BDeolAmD.js";import"./useFocusable-rZ2Ly5zk.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-B-dVD-xw.js";import"./FocusScope-DHvs1HAk.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-dBh8p4gE.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-BV7Ig1No.js";import"./IconWarning-Zqgkiek5.js";import"./Wrap-DQq6jo70.js";import"./Text-CHxK_XzJ.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-D6Zjnbf0.js";import"./LoadingSpinner-BR3bu-Cw.js";import"./Button-Dy16a6a4.js";import"./Activity-Ck-RMSDT.js";const Ho={title:"Actions/Action",component:t,render:j=>o.createElement(t,{...j}),args:{action:O,children:u},parameters:{controls:{exclude:["children","action","closeModal","openModal","toggleModal","feedback"]}}},e={},r={args:{action:p}},n={args:{action:l}},a={args:{action:p,showFeedback:!0}},c={args:{action:l,showFeedback:!0}},s={args:{children:o.createElement(t,{action:O},u)}},i={args:{action:p,children:o.createElement(t,{action:p},u)}},m={render:()=>o.createElement(t,{action:l},o.createElement(q,{slot:"actionConfirm"},o.createElement(I,null,"Delete customer"),o.createElement(J,null,"Do you really want to delete the customer?"),o.createElement(z,null,o.createElement(d,{color:"danger"},"Confirm"),o.createElement(d,{color:"secondary",variant:"soft"},"Abort"))),o.createElement(d,{color:"secondary",variant:"soft"},"Delete customer"))};var g,y,A;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(A=(y=e.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var f,F,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    action: asyncFunction
  }
}`,...(h=(F=r.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var b,E,C;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction
  }
}`,...(C=(E=n.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var k,M,B;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    showFeedback: true
  }
}`,...(B=(M=a.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var D,L,S;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction,
    showFeedback: true
  }
}`,...(S=(L=c.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var w,W,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: <Action action={syncFunction}>{button}</Action>
  }
}`,...(v=(W=s.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var H,N,x;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    children: <Action action={asyncFunction}>{button}</Action>
  }
}`,...(x=(N=i.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var G,R,_;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(_=(R=m.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const No=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{r as Async,n as AsyncLong,c as AsyncLongWithFeedback,a as AsyncWithFeedback,e as Default,s as Nested,i as NestedAsync,m as WithConfirmationModal,No as __namedExportsOrder,Ho as default};
