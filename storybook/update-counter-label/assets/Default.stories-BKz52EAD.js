import{R as e}from"./index-uCp2LrAq.js";import{B as u}from"./Button-gt7_py1F.js";import{a as y}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{M as q}from"./ModalTrigger-hjnRNZt4.js";import{B as I}from"./ButtonGroup-B_f1bkYR.js";import{H as J}from"./Heading-DXNM3350.js";import{C as K}from"./Content-v5l3gY0R.js";import{A as l}from"./Action-BCGlQ1KW.js";const d=()=>new Promise(t=>window.setTimeout(t,700)),Q=y("sync"),R=y("asyncStart"),T=y("asyncEnd"),p=async(...t)=>{R(...t),await d(),T()},g=async(...t)=>{R(...t),await d(),await d(),await d(),T()},z=e.createElement(u,{color:"accent"},"Create customer"),U={title:"Actions/Action",component:l,render:t=>e.createElement(l,{...t},e.createElement(u,null,"Button")),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},n={},o={args:{action:p}},a={args:{action:g}},r={args:{action:p,showFeedback:!0}},c={args:{action:g,showFeedback:!0}},s={args:{children:e.createElement(l,{action:Q},z)}},i={args:{action:p,children:e.createElement(l,{action:p},z)}},m={render:()=>e.createElement(l,{action:g},e.createElement(q,{slot:"actionConfirm"},e.createElement(J,null,"Delete customer"),e.createElement(K,null,"Do you really want to delete the customer?"),e.createElement(I,null,e.createElement(u,{color:"danger"},"Delete customer"),e.createElement(u,{color:"secondary",variant:"soft"},"Abort"))),e.createElement(u,{color:"secondary",variant:"soft"},"Delete customer"))};var A,f,F;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(F=(f=n.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var b,h,E;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    action: asyncFunction
  }
}`,...(E=(h=o.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var w,B,D;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction
  }
}`,...(D=(B=a.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var S,k,C;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    showFeedback: true
  }
}`,...(C=(k=r.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var v,L,M;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction,
    showFeedback: true
  }
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var _,O,W;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: <Action action={syncFunction}>{button}</Action>
  }
}`,...(W=(O=s.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var H,N,x;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    children: <Action action={asyncFunction}>{button}</Action>
  }
}`,...(x=(N=i.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var G,j,P;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Action action={asyncLongFunction}>
      <Modal slot="actionConfirm">
        <Heading>Delete customer</Heading>
        <Content>Do you really want to delete the customer?</Content>
        <ButtonGroup>
          <Button color="danger">Delete customer</Button>
          <Button color="secondary" variant="soft">
            Abort
          </Button>
        </ButtonGroup>
      </Modal>
      <Button color="secondary" variant="soft">
        Delete customer
      </Button>
    </Action>
}`,...(P=(j=m.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const V=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"],ae=Object.freeze(Object.defineProperty({__proto__:null,Async:o,AsyncLong:a,AsyncLongWithFeedback:c,AsyncWithFeedback:r,Default:n,Nested:s,NestedAsync:i,WithConfirmationModal:m,__namedExportsOrder:V,default:U},Symbol.toStringTag,{value:"Module"}));export{ae as D,p as a,z as b,U as m,Q as s};
