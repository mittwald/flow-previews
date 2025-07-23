import{j as o}from"./iframe-CYUlilGp.js";import{a as d,c as u,b as E,s as R}from"./lib-Cb68LThe.js";import{M as q}from"./Modal-Ct6E-SmT.js";import{A as z}from"./ActionGroup-DGiDrFu2.js";import{B as p}from"./Button-BfM0n2Gx.js";import{H as I}from"./Heading-BPEr9Phm.js";import{C as J}from"./Content-D9n0C2XY.js";import{A as r}from"./Action-W129oGJ4.js";import"./DialogTriggerView-vjAZqBKE.js";import"./context-CPlmB9Cj.js";import"./PropsContextProvider-CDe6Qqh3.js";import"./mergeRefs-R35jcO_1.js";import"./index-BQ87YLqe.js";import"./clsx-B-dksMZM.js";import"./useStatic-CaXlYNsR.js";import"./Dialog-E3oWZOKb.js";import"./Button-DY4YyasG.js";import"./utils-IwmXOWz0.js";import"./ProgressBar-CLAf1-ry.js";import"./Label-BzlJ5vcG.js";import"./Hidden-CtQ_5AUI.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BQ0P6uHm.js";import"./context-D26uRp-g.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-JEo6mDJS.js";import"./useFocus-6n3T7pEK.js";import"./useFocusRing-Bl1ft2NQ.js";import"./useFocusable-hSKUHOaq.js";import"./RSPContexts-8GpZLPll.js";import"./OverlayArrow-DFgxRKys.js";import"./useControlledState-D9dJQ2qs.js";import"./Collection-D4l8encG.js";import"./CollectionBuilder-B8Luejyn.js";import"./Separator-CYwUbqtz.js";import"./Text-DsFZoYY-.js";import"./Input-CJk741gA.js";import"./SearchField-B0kT3X35.js";import"./FieldError-BpkjstJ1.js";import"./Form-CJHBPzNS.js";import"./Group-_cQVCYDW.js";import"./useLocalizedStringFormatter-MUhpNbFs.js";import"./useTextField-BchAki_m.js";import"./useFormReset-BKFhzP-_.js";import"./TextField-BqCOguPh.js";import"./SelectionManager-BA-kOSfV.js";import"./useEvent-BKYwrgSI.js";import"./useCollator-BxGQV5d9.js";import"./FocusScope-AdChhofX.js";import"./VisuallyHidden-D7ZslAb9.js";import"./Overlay-DAQ7hsCk.js";import"./IconWarning-ghAEmGH8.js";import"./Header-CrzKPtBF.js";import"./ButtonView-BF0NiKSL.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-QiwrXWOU.js";import"./Text-ot4TW2RP.js";import"./browser-BP1SPJnQ.js";import"./EmulatedBoldText-CMJy8lEl.js";import"./LoadingSpinner-CJLXwe_9.js";import"./Heading-BcvtGSv_.js";const $o={title:"Actions/Action",component:r,render:_=>o.jsx(r,{..._,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:R,children:E})}},i={args:{action:d,children:o.jsx(r,{action:d,children:E})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(q,{slot:"actionConfirm",children:[o.jsx(I,{children:"Delete customer"}),o.jsx(J,{children:"Do you really want to delete the customer?"}),o.jsxs(z,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};var l,g,y;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,A,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(G=(O=m.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const or=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,c as Nested,i as NestedAsync,m as WithConfirmationModal,or as __namedExportsOrder,$o as default};
