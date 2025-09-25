import{j as o}from"./iframe-DSMxFmCo.js";import{a as d,c as u,b as E,s as R}from"./lib-D8bS4qdh.js";import{M as q}from"./Modal-33fTMXW7.js";import{A as z}from"./ActionGroup-BvInu9__.js";import{B as p}from"./Button-B4iADtHJ.js";import{H as I}from"./Heading-5UcSZr4b.js";import{C as J}from"./Content-B4So6lz0.js";import{A as r}from"./Action-BWiQvpwE.js";import"./index-Cun1SEai.js";import"./DialogTriggerView-CRRade0J.js";import"./context-eOFRYD3C.js";import"./PropsContextProvider-DVyBiVg_.js";import"./mergeRefs-R9qg0vBI.js";import"./index-GrlXgZoZ.js";import"./clsx-B-dksMZM.js";import"./useStatic-Bf1fNjch.js";import"./Button-a5-NScD1.js";import"./utils-V6gMnCgM.js";import"./ProgressBar-X6kaEndn.js";import"./Label-BX8mTcFT.js";import"./Hidden-D2GOYXns.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CGRenFpR.js";import"./context-64LigRkb.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CpWBfHNM.js";import"./useFocus-rqOLNBQE.js";import"./useFocusRing-B0fHsvyn.js";import"./useFocusable-CWTiV4pp.js";import"./RSPContexts-yTBIWgKj.js";import"./ClearPropsContextView-DgWNLgLQ.js";import"./useControlledState-Bd9qDCZc.js";import"./FocusScope-DaPMN8_C.js";import"./useCollator-CouZLuEw.js";import"./useLocalizedStringFormatter-Dk8jStlZ.js";import"./VisuallyHidden-D9pE8D_t.js";import"./Collection-BjFS4X2Q.js";import"./CollectionBuilder-Csq46UyD.js";import"./context-n-efbKpz.js";import"./Separator-BzacB-Ho.js";import"./Text-CUE1Abh-.js";import"./SelectionManager-DnqUUNzH.js";import"./useEvent-CC0ROtua.js";import"./dynamic-BKY_zed6.js";import"./Overlay-CS7AYEbP.js";import"./IconWarning-BVk6tlGE.js";import"./ButtonView-BABbJnWM.js";import"./getActionGroupSlot-DXwV-t9Z.js";import"./Text-D_0LfN4x.js";import"./browser-R7FwPwL5.js";import"./EmulatedBoldText-DCelI_Fa.js";import"./LoadingSpinner-DrTN5ZSN.js";import"./Heading-Bt4IwNny.js";const Po={title:"Actions/Action",component:r,render:_=>o.jsx(r,{..._,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:R,children:E})}},i={args:{action:d,children:o.jsx(r,{action:d,children:E})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(q,{slot:"actionConfirm",children:[o.jsx(I,{children:"Delete customer"}),o.jsx(J,{children:"Do you really want to delete the customer?"}),o.jsxs(z,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};var l,g,y;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,A,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(G=(O=m.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const Qo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,c as Nested,i as NestedAsync,m as WithConfirmationModal,Qo as __namedExportsOrder,Po as default};
