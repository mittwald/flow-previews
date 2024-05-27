import{R as e}from"./index-uCp2LrAq.js";import{B as u}from"./Button-xNu6u6Ea.js";import{a as g}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{M as I}from"./ModalTrigger-BQYNnThH.js";import{A as J}from"./ActionGroup-DEO6z0-3.js";import{H as K}from"./Heading-CGdJxKkH.js";import{C as Q}from"./Content-iLOHErEb.js";import{A as l}from"./Action-B7TTr-fl.js";const d=()=>new Promise(o=>window.setTimeout(o,700)),T=g("sync"),z=g("asyncStart"),q=g("asyncEnd"),p=async(...o)=>{z(...o),await d(),q()},y=async(...o)=>{z(...o),await d(),await d(),await d(),q()},A=e.createElement(u,{color:"accent"},"Create customer"),U={title:"Actions/Action",component:l,render:o=>e.createElement(l,{...o}),args:{action:T,children:A},parameters:{controls:{exclude:["children","action","closeModal","openModal","toggleModal","feedback"]}}},t={},n={args:{action:p}},a={args:{action:y}},r={args:{action:p,showFeedback:!0}},c={args:{action:y,showFeedback:!0}},s={args:{children:e.createElement(l,{action:T},A)}},i={args:{action:p,children:e.createElement(l,{action:p},A)}},m={render:()=>e.createElement(l,{action:y},e.createElement(I,{slot:"actionConfirm"},e.createElement(K,null,"Delete customer"),e.createElement(Q,null,"Do you really want to delete the customer?"),e.createElement(J,null,e.createElement(u,{color:"danger"},"Delete customer"),e.createElement(u,{color:"secondary",variant:"soft"},"Abort"))),e.createElement(u,{color:"secondary",variant:"soft"},"Delete customer"))};var f,F,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(F=t.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var h,E,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    action: asyncFunction
  }
}`,...(w=(E=n.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var D,S,M;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction
  }
}`,...(M=(S=a.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var k,C,B;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    showFeedback: true
  }
}`,...(B=(C=r.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var L,_,W;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction,
    showFeedback: true
  }
}`,...(W=(_=c.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var v,H,N;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: <Action action={syncFunction}>{button}</Action>
  }
}`,...(N=(H=s.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var x,G,O;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    children: <Action action={asyncFunction}>{button}</Action>
  }
}`,...(O=(G=i.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var j,P,R;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Action action={asyncLongFunction}>
      <Modal slot="actionConfirm">
        <Heading>Delete customer</Heading>
        <Content>Do you really want to delete the customer?</Content>
        <ActionGroup>
          <Button color="danger">Delete customer</Button>
          <Button color="secondary" variant="soft">
            Abort
          </Button>
        </ActionGroup>
      </Modal>
      <Button color="secondary" variant="soft">
        Delete customer
      </Button>
    </Action>
}`,...(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const V=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"],ae=Object.freeze(Object.defineProperty({__proto__:null,Async:n,AsyncLong:a,AsyncLongWithFeedback:c,AsyncWithFeedback:r,Default:t,Nested:s,NestedAsync:i,WithConfirmationModal:m,__namedExportsOrder:V,default:U},Symbol.toStringTag,{value:"Module"}));export{ae as D,p as a,A as b,U as m,T as s};
