import{j as r,R as a}from"./iframe-BxshUsxH.js";import{P as s,u as c}from"./Popover-D8mPu2R9.js";import{B as n}from"./Button-HRLIFp2S.js";import{P as l}from"./PopoverTrigger-Cwh_kwTN.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-Dpzgqk2_.js";import"./flowComponent-De-qO8FI.js";import"./index-CCtjSUo0.js";import"./index-DKGU8PvL.js";import"./useStatic-B3TheZVH.js";import"./OverlayTrigger-DqSMwG9L.js";import"./Dialog-g1S8F0Mk.js";import"./Button-BSW16sZi.js";import"./utils-CVs5O02N.js";import"./ProgressBar-BPkB7WeA.js";import"./Hidden-7g9wVqvD.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-jrbRSF4x.js";import"./useFocusRing-DAO3A_Iq.js";import"./useFocusable-BZtorROf.js";import"./RSPContexts-B9j1N_uk.js";import"./OverlayArrow-DTdsHQge.js";import"./useControlledState-DZ1PCkag.js";import"./Collection-CF5-K3AD.js";import"./CollectionBuilder-CV9rF_PB.js";import"./SelectionIndicator-BLryBQpM.js";import"./Separator-6zjLgCNw.js";import"./browser-CjJK-aFI.js";import"./useLocalizedStringFormatter-C0TDBAcX.js";import"./ControlledNotification-BKvhz06W.js";import"./ClearPropsContextView-Bx13vTxG.js";import"./IconWarning-B98y0Q8s.js";import"./Text-18K6QUAV.js";import"./EmulatedBoldText-DJOIRjYG.js";import"./LoadingSpinner-CLA14IJX.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("Popover");
    const triggerRef = React.useRef(null);
    return <>
        <Button ref={triggerRef} onPress={controller.open}>
          Trigger popover
        </Button>
        <Popover triggerRef={triggerRef} {...props} controller={controller}>
          I am a popover.
        </Popover>
      </>;
  }
}`,...t.parameters?.docs?.source}}};const V=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,V as __namedExportsOrder,U as default};
