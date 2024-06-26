import{A as u}from"./index-JfntgTh2.js";import{R as e}from"./index-BwDkhjyp.js";import"./index-DzE_Eh0U.js";import{a as g}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{B as l}from"./Button-D7-eBhv0.js";import{M as I}from"./index-DWBidwvD.js";import"./index-CLxSJn0c.js";import"./index-7pHJL0pz.js";import"./index-CbGrRnEJ.js";import{H as J}from"./Heading-DsFi8idn.js";import{C as K}from"./Content-DvzNxvwK.js";import{B as Q}from"./ButtonGroup-CBhz8FCj.js";const d=()=>new Promise(t=>window.setTimeout(t,700)),T=g("sync"),z=g("asyncStart"),q=g("asyncEnd"),p=async(...t)=>{z(...t),await d(),q()},y=async(...t)=>{z(...t),await d(),await d(),await d(),q()},A=e.createElement(l,{color:"accent"},"Create customer"),U={title:"Actions/Action",component:u,render:t=>e.createElement(u,{...t}),args:{action:T,children:A},parameters:{controls:{exclude:["children","action","closeModal","openModal","toggleModal","feedback"]}}},o={},n={args:{action:p}},a={args:{action:y}},r={args:{action:p,showFeedback:!0}},c={args:{action:y,showFeedback:!0}},s={args:{children:e.createElement(u,{action:T},A)}},i={args:{action:p,children:e.createElement(u,{action:p},A)}},m={render:()=>e.createElement(u,{action:y},e.createElement(I,{slot:"actionConfirm"},e.createElement(J,null,"Delete customer"),e.createElement(K,null,"Do you really want to delete the customer?"),e.createElement(Q,null,e.createElement(l,{color:"danger"},"Delete customer"),e.createElement(l,{color:"secondary",variant:"soft"},"Abort"))),e.createElement(l,{color:"secondary",variant:"soft"},"Delete customer"))};var f,F,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(F=o.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var h,E,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    action: asyncFunction
  }
}`,...(w=(E=n.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var B,D,S;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction
  }
}`,...(S=(D=a.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var M,k,C;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    showFeedback: true
  }
}`,...(C=(k=r.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var L,_,W;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const V=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"],ie=Object.freeze(Object.defineProperty({__proto__:null,Async:n,AsyncLong:a,AsyncLongWithFeedback:c,AsyncWithFeedback:r,Default:o,Nested:s,NestedAsync:i,WithConfirmationModal:m,__namedExportsOrder:V,default:U},Symbol.toStringTag,{value:"Module"}));export{ie as D,p as a,A as b,U as m,T as s};
