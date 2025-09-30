import{j as o}from"./iframe-Cb4Rgx0e.js";import{a as d,c as u,b as E,s as R}from"./lib-DZY-BSeL.js";import{M as q}from"./Modal-Cv5ELzj2.js";import{A as z}from"./ActionGroup-BrsKJefO.js";import{B as p}from"./Button-H4sh-QDS.js";import{H as I}from"./Heading-DkmYDwus.js";import{C as J}from"./Content-B6MoTXef.js";import{A as r}from"./Action-DcFJ4Fb5.js";import"./index-Cun1SEai.js";import"./DialogTriggerView-BiIifotB.js";import"./context-DxjXV7eH.js";import"./PropsContextProvider-CbnVRX13.js";import"./mergeRefs-FGc6ILVF.js";import"./index-BCJuwVXE.js";import"./clsx-B-dksMZM.js";import"./useStatic-CfZfNe1T.js";import"./Button-CEnLKZ0o.js";import"./utils-ClJ9kHS9.js";import"./ProgressBar-DhcjamRH.js";import"./Label-BSwFIexW.js";import"./Hidden-WIE7yK1s.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-YUMynDBh.js";import"./context-CW2oe5vS.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Q8MCvqvF.js";import"./useFocus-DShqRyJ9.js";import"./useFocusRing-BzqCweW_.js";import"./useFocusable-Dx7vOlYc.js";import"./RSPContexts-WcRCGlYY.js";import"./ClearPropsContextView-CBJyDj7P.js";import"./useControlledState-CQK5P4gM.js";import"./FocusScope-soGnmPtw.js";import"./useCollator-BXysv4D3.js";import"./useLocalizedStringFormatter-DhwOH6Jh.js";import"./VisuallyHidden-CjQvb6dT.js";import"./Collection-CuwOpF0o.js";import"./CollectionBuilder-BboySDMU.js";import"./context-DsHIbBn4.js";import"./Separator-BKeFtAeg.js";import"./Text-U_OSpJmR.js";import"./SelectionManager-CDVGcynV.js";import"./useEvent-DD3xMrdQ.js";import"./dynamic-PM36Lxvz.js";import"./Overlay-CfZPEVlU.js";import"./IconWarning-BnvsEgCq.js";import"./ButtonView-4sMclYav.js";import"./getActionGroupSlot-CMriNb6k.js";import"./Text-B7bLqwrq.js";import"./browser-GZXaf9ZM.js";import"./EmulatedBoldText-BOxB1C6V.js";import"./LoadingSpinner-CjRzs_7S.js";import"./Heading-Bdg4szuX.js";const Po={title:"Actions/Action",component:r,render:_=>o.jsx(r,{..._,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:R,children:E})}},i={args:{action:d,children:o.jsx(r,{action:d,children:E})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(q,{slot:"actionConfirm",children:[o.jsx(I,{children:"Delete customer"}),o.jsx(J,{children:"Do you really want to delete the customer?"}),o.jsxs(z,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};var l,g,y;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,A,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
