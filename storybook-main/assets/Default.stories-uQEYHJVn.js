import{j as r,R as a}from"./iframe-B0qqkRSc.js";import{P as i}from"./Popover-Ckp0SCPP.js";import{B as n}from"./Button-DJYlHg31.js";import{P as c}from"./PopoverTrigger-DZ4gCgB4.js";import{u as l}from"./useOverlayController-C7cC56ob.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D28qUuL_.js";import"./index-Bw7Y8sX9.js";import"./index-ByDaWYpT.js";import"./OverlayContextProvider-DBk643TH.js";import"./context-CL6SRMFP.js";import"./useStatic-CDvxHEcU.js";import"./Dialog-Cf8VWc4Y.js";import"./Button-CBrpY8Iv.js";import"./utils-fD_u--Rs.js";import"./ProgressBar-COiaV-p2.js";import"./Label-CSbZp_Tl.js";import"./Hidden-B-z-l7Br.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-sSRBc7PO.js";import"./context-D99v7Uqm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CRF7-NYn.js";import"./useFocus-D6s77d5g.js";import"./useFocusRing-6YYb42D4.js";import"./useFocusable-BBZGyB5D.js";import"./RSPContexts-JwdHw2w4.js";import"./OverlayArrow-B0r4AZS0.js";import"./useControlledState-CB1SzgEG.js";import"./Collection-BezXrWUC.js";import"./CollectionBuilder-CyiVnh3g.js";import"./SelectionIndicator-BJvhD4qq.js";import"./Separator-AYUu4xVa.js";import"./Text-Dr_aqSbj.js";import"./SelectionManager-pQfvjsBD.js";import"./useEvent-BB8Na9jU.js";import"./useCollator-D-k20A4-.js";import"./FocusScope-8IhL3Eed.js";import"./useLocalizedStringFormatter-Hp5e5rkz.js";import"./VisuallyHidden-CQaNZ-oY.js";import"./ClearPropsContextView-D258LB2U.js";import"./ClearPropsContext-HA28kjj1.js";import"./IconWarning-BPZvpYf1.js";import"./Text-BrTaOrXE.js";import"./browser-B1sj-_-y.js";import"./EmulatedBoldText-YngYColk.js";import"./LoadingSpinner-BhtZJAGg.js";import"./OverlayTrigger-CFxq5mHG.js";import"./ControlledNotification-WPO1qXkk.js";import"./DialogTriggerView-K5zIqDqM.js";const cr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const lr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,lr as __namedExportsOrder,cr as default};
