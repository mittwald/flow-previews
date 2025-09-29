import{j as o}from"./iframe-BIwOddjN.js";import{a as d,c as u,b as E,s as R}from"./lib-Bnoj4sza.js";import{M as q}from"./Modal-CrZWuK72.js";import{A as z}from"./ActionGroup-CROpn8dS.js";import{B as p}from"./Button-DVKpBB_-.js";import{H as I}from"./Heading-Bnq9f_Vp.js";import{C as J}from"./Content-0HMKxXEy.js";import{A as r}from"./Action-DaT8fcnF.js";import"./index-Cun1SEai.js";import"./DialogTriggerView-D6nKQ5a7.js";import"./context-CorlgKQy.js";import"./PropsContextProvider-DqT3XDtE.js";import"./mergeRefs-wvzFS0ov.js";import"./index-CyjKSzst.js";import"./clsx-B-dksMZM.js";import"./useStatic-CAHKYPS0.js";import"./Button-DDY6r886.js";import"./utils-DPukZ4w7.js";import"./ProgressBar-CzA5dAYd.js";import"./Label-CW0KcP1q.js";import"./Hidden-D6potscK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DBHdatlR.js";import"./context-CbJ8Tawl.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-4QX-FuAL.js";import"./useFocus-Cj2Pu7gn.js";import"./useFocusRing-Dx0gNijd.js";import"./useFocusable-CxKBVkW3.js";import"./RSPContexts-CSo-c8h2.js";import"./ClearPropsContextView-CLESuCpt.js";import"./useControlledState-B4IhsBlg.js";import"./FocusScope-CDSFipnx.js";import"./useCollator-vh40vrkm.js";import"./useLocalizedStringFormatter-CJPccLDK.js";import"./VisuallyHidden-En5QTDR8.js";import"./Collection-YqThax3x.js";import"./CollectionBuilder-DWtnsQIQ.js";import"./context-Cplzyq73.js";import"./Separator-DroliD3e.js";import"./Text-D1MRO4dn.js";import"./SelectionManager-CuYmYu-p.js";import"./useEvent-BngoJEfX.js";import"./dynamic-copMXHk7.js";import"./Overlay-CdKWiyMr.js";import"./IconWarning-DNMJ1XNo.js";import"./ButtonView-BJikMrP9.js";import"./getActionGroupSlot-CgWgqcfK.js";import"./Text-3VIHsAGv.js";import"./browser-6nVKIs6I.js";import"./EmulatedBoldText-C5hkPB09.js";import"./LoadingSpinner-CG5b-Kig.js";import"./Heading-CXpceP0M.js";const Po={title:"Actions/Action",component:r,render:_=>o.jsx(r,{..._,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:R,children:E})}},i={args:{action:d,children:o.jsx(r,{action:d,children:E})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(q,{slot:"actionConfirm",children:[o.jsx(I,{children:"Delete customer"}),o.jsx(J,{children:"Do you really want to delete the customer?"}),o.jsxs(z,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};var l,g,y;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,A,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
