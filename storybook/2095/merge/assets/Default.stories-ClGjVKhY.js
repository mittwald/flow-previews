import{j as r,R as a}from"./iframe-BvCo0Jms.js";import{P as i,u as c}from"./Popover-sopU_0Up.js";import{B as n}from"./Button-BdRFLyHU.js";import{P as l}from"./PopoverTrigger-Cc-Z0y2h.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-Dhm9rN8k.js";import"./flowComponent-D-_a8eO4.js";import"./index-DAXCiU9B.js";import"./index-DV2r3peR.js";import"./useStatic-BT5cYh4l.js";import"./OverlayContextProvider-CRRzvlsl.js";import"./Dialog-Bn7Do3Cm.js";import"./Button-pJkeE9x7.js";import"./utils-Cw2xzcbV.js";import"./ProgressBar-Upnvx2FX.js";import"./Label-DMgJ6fuj.js";import"./Hidden-Bxmlm1r5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLhdFYyT.js";import"./context-EIbK-86q.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BZrRujBy.js";import"./useFocus-C5EW73ar.js";import"./useFocusRing-D8FCXLiH.js";import"./useFocusable-BxQ2X-GC.js";import"./RSPContexts-DqErA_gH.js";import"./OverlayArrow-CPNbfpB1.js";import"./useControlledState-C0Hm7DMH.js";import"./Collection-DPawhEbh.js";import"./CollectionBuilder-BCns4Ten.js";import"./SelectionIndicator-CnEt238s.js";import"./Separator-CzBpIsK8.js";import"./Text-BvqGhHlZ.js";import"./SelectionManager-BEbqbhJ2.js";import"./useEvent-CQT5QNCL.js";import"./useCollator-B2HFQgM0.js";import"./FocusScope-Dcb5J3f3.js";import"./useLocalizedStringFormatter-CtRq2A2D.js";import"./VisuallyHidden-ch7dD1y0.js";import"./ClearPropsContextView-C48HQbuq.js";import"./ClearPropsContext-BXwgDp0Q.js";import"./IconWarning-DF-Lhcnu.js";import"./Text-CM7-JVVa.js";import"./browser-DOebU0pA.js";import"./EmulatedBoldText-BsN5iyXq.js";import"./LoadingSpinner-6N6Rbt89.js";import"./OverlayTrigger-UXgCK67L.js";import"./ControlledNotification-DPGunEdj.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=c("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const ar=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,ar as __namedExportsOrder,nr as default};
