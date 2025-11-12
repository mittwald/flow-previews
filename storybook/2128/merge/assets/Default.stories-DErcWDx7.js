import{j as r,R as a}from"./iframe-DvmgUBW7.js";import{P as s,u as c}from"./Popover-CeOTq_Ov.js";import{B as n}from"./Button-C1BHOQWK.js";import{P as l}from"./PopoverTrigger-lijkOxV4.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-BiUxtsr9.js";import"./flowComponent-iNmw-pXL.js";import"./index-CaPeyytj.js";import"./index-BNqf21ov.js";import"./useStatic-Jt5HUTTZ.js";import"./OverlayTrigger-BwLKLDhB.js";import"./Dialog-BHVsz8CY.js";import"./Button-mFUbi7ER.js";import"./utils-BtCbht9n.js";import"./ProgressBar-CrOV3NyN.js";import"./Hidden-9CBDywx2.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DzqJJy5k.js";import"./useFocusRing-BavcHLfj.js";import"./useFocusable-CKxgRqhR.js";import"./RSPContexts-DdvBd_E1.js";import"./OverlayArrow-DmicGHSR.js";import"./useControlledState-7pcPESrW.js";import"./Collection-BxeXiNok.js";import"./CollectionBuilder-DyXjZa--.js";import"./SelectionIndicator-C5hL4auF.js";import"./Separator-5Yj5luET.js";import"./browser-DnTWaRxE.js";import"./useLocalizedStringFormatter-xkNVf5KH.js";import"./ControlledNotification-Bo0kmDiq.js";import"./ClearPropsContextView-DIwnN3mE.js";import"./IconWarning-Dv-oLMD9.js";import"./Text-Dbew3mLe.js";import"./EmulatedBoldText-xJj6r1Ey.js";import"./LoadingSpinner-DLZner8z.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
