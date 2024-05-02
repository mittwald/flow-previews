import{A as u}from"./index-BcFq7X7a.js";import{R as e}from"./index-BwDkhjyp.js";import"./index-Bvj9sSMo.js";import{a as y}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{B as d}from"./Button-BViRxOm6.js";import{M as I}from"./index-CJ2rlPOV.js";import"./index-CYr4DoOo.js";import"./index-EXyjxhm4.js";import"./index-DGd3cwV7.js";import{H as J}from"./Heading-B_Xdk3YQ.js";import{C as K}from"./Content-GAEXbwDP.js";import{B as Q}from"./ButtonGroup-DFAP0P-9.js";const l=()=>new Promise(t=>window.setTimeout(t,700)),T=y("sync"),z=y("asyncStart"),q=y("asyncEnd"),p=async(...t)=>{z(...t),await l(),q()},g=async(...t)=>{z(...t),await l(),await l(),await l(),q()},A=e.createElement(d,{variant:"accent"},"Create customer"),U={title:"Actions/Action",component:u,render:t=>e.createElement(u,{...t}),args:{action:T,children:A},parameters:{controls:{exclude:["children","action","closeModal","openModal","toggleModal","feedback"]}}},n={},o={args:{action:p}},a={args:{action:g}},r={args:{action:p,showFeedback:!0}},c={args:{action:g,showFeedback:!0}},s={args:{children:e.createElement(u,{action:T},A)}},i={args:{action:p,children:e.createElement(u,{action:p},A)}},m={render:()=>e.createElement(u,{action:g},e.createElement(I,{slot:"actionConfirm"},e.createElement(J,null,"Delete customer"),e.createElement(K,null,"Do you really want to delete the customer?"),e.createElement(Q,null,e.createElement(d,{variant:"danger"},"Delete customer"),e.createElement(d,{variant:"secondary",style:"soft"},"Abort"))),e.createElement(d,{variant:"secondary",style:"soft"},"Delete customer"))};var f,F,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(F=n.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var h,E,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    action: asyncFunction
  }
}`,...(w=(E=o.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var B,D,S;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction
  }
}`,...(S=(D=a.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var M,k,C;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    showFeedback: true
  }
}`,...(C=(k=r.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var v,L,_;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction,
    showFeedback: true
  }
}`,...(_=(L=c.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var W,H,N;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
          <Button variant="danger">Delete customer</Button>
          <Button variant="secondary" style="soft">
            Abort
          </Button>
        </ButtonGroup>
      </Modal>
      <Button variant="secondary" style="soft">
        Delete customer
      </Button>
    </Action>
}`,...(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const V=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"],ie=Object.freeze(Object.defineProperty({__proto__:null,Async:o,AsyncLong:a,AsyncLongWithFeedback:c,AsyncWithFeedback:r,Default:n,Nested:s,NestedAsync:i,WithConfirmationModal:m,__namedExportsOrder:V,default:U},Symbol.toStringTag,{value:"Module"}));export{ie as D,p as a,A as b,U as m,T as s};
