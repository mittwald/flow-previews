import{j as o}from"./iframe-CxmXe-_O.js";import{a as d,c as u,b as E,s as R}from"./lib-NhvX3qRN.js";import{M as q}from"./Modal-Bo8kVPsA.js";import{A as z}from"./ActionGroup-JupVt7-E.js";import{B as p}from"./Button-DVo7WD-1.js";import{H as I}from"./Heading-BYEzDO2o.js";import{C as J}from"./Content-_tnemRfJ.js";import{A as r}from"./Action-CKP9QlTZ.js";import"./index-Cun1SEai.js";import"./DialogTriggerView-BttboI6J.js";import"./context-CxNyIzEe.js";import"./PropsContextProvider-D0hpqFCU.js";import"./mergeRefs-DrFPU8wS.js";import"./index-D4JkFdbd.js";import"./clsx-B-dksMZM.js";import"./useStatic-8bLBY8Gb.js";import"./Button-DXwv69Ey.js";import"./utils-Cd13syVz.js";import"./ProgressBar-FqWf0sr1.js";import"./Label-2vh9UW-y.js";import"./Hidden-fABZRyqD.js";import"./filterDOMProps-CghfNOdR.js";import"./context-BaUvMDTJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BIfsm19n.js";import"./useFocus-BpzuXZ8X.js";import"./useFocusRing-D7TcncFW.js";import"./useFocusable-CZtfPtCy.js";import"./RSPContexts-RLIssCdn.js";import"./ClearPropsContextView-DkF-i5cN.js";import"./useControlledState-y5DploKZ.js";import"./FocusScope-DfTm09Tq.js";import"./useCollator-Crzbf2Ra.js";import"./useLocalizedStringFormatter-D3SJZW6Q.js";import"./VisuallyHidden--eIM32hM.js";import"./Collection-DWMrbndQ.js";import"./CollectionBuilder-BDxApjdE.js";import"./context-DGTiufFM.js";import"./Separator-zPxV8vEZ.js";import"./Text-DV04N56Q.js";import"./SelectionManager-wV6Nrrvy.js";import"./useEvent-CrG2vQ4Z.js";import"./dynamic-5AyxyhbL.js";import"./Overlay-CtXJuiDo.js";import"./IconWarning-DZNLduw-.js";import"./ButtonView-B6Fq-EgG.js";import"./getActionGroupSlot-IO6DOTZ-.js";import"./Text-BT2KT2kR.js";import"./browser-fsrkaBj_.js";import"./EmulatedBoldText-D2nyMxZT.js";import"./LoadingSpinner-DUEgH9Lr.js";import"./Heading-CGtduReE.js";const Ko={title:"Actions/Action",component:r,render:_=>o.jsx(r,{..._,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:R,children:E})}},i={args:{action:d,children:o.jsx(r,{action:d,children:E})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(q,{slot:"actionConfirm",children:[o.jsx(I,{children:"Delete customer"}),o.jsx(J,{children:"Do you really want to delete the customer?"}),o.jsxs(z,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};var l,g,y;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,A,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    action: asyncFunction
  }
}`,...(f=(A=n.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var F,x,b;e.parameters={...e.parameters,docs:{...(F=e.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction
  }
}`,...(b=(x=e.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var j,k,C;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    showFeedback: true
  }
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var B,D,L;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction,
    showFeedback: true
  }
}`,...(L=(D=a.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var S,v,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: <Action action={syncFunction}>{button}</Action>
  }
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var M,W,H;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    children: <Action action={asyncFunction}>{button}</Action>
  }
}`,...(H=(W=i.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var N,O,G;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(G=(O=m.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const Po=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,c as Nested,i as NestedAsync,m as WithConfirmationModal,Po as __namedExportsOrder,Ko as default};
