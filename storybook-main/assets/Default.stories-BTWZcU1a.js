import{j as r,R as a}from"./iframe-GtWYOLNc.js";import{P as i}from"./Popover-BloSQfLN.js";import{B as n}from"./Button-DAMH2RQe.js";import{P as c}from"./PopoverTrigger-icLuBVYh.js";import{u as l}from"./useOverlayController-Cm_PeV9X.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BhbvfIbA.js";import"./index-DroEwyNc.js";import"./index-Do7K3gX4.js";import"./OverlayContextProvider-C3tl0ORG.js";import"./context-B79p2l6c.js";import"./useStatic-BUau0uD4.js";import"./Dialog-E17SkaPF.js";import"./Button-DAFfpCNE.js";import"./utils-DD5Sc9KY.js";import"./ProgressBar-CdTHAJ2Y.js";import"./Label-CQFAMqNH.js";import"./Hidden-BU9Lcw6n.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DTE1dj4A.js";import"./context-D40YBGtd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B3Z_0YqL.js";import"./useFocus-DFp-sRZK.js";import"./useFocusRing-DOaM9YXN.js";import"./useFocusable-jI0DLtpW.js";import"./RSPContexts-prl6X50T.js";import"./OverlayArrow-DIM14olf.js";import"./useControlledState-DlI3gMwx.js";import"./Collection-Ce3y52jr.js";import"./CollectionBuilder-Dp0_4f88.js";import"./SelectionIndicator-PIsyHCAq.js";import"./Separator-BLTRkzm5.js";import"./Text-CjcFKgn5.js";import"./SelectionManager-BxJ0cmnl.js";import"./useEvent-9aIM_XKO.js";import"./useCollator-CosXWie8.js";import"./FocusScope-CmjH0BfW.js";import"./useLocalizedStringFormatter-DE7ldODK.js";import"./VisuallyHidden-CMXGnTyG.js";import"./ClearPropsContextView-C2nQoxxe.js";import"./ClearPropsContext-DAA0VQnf.js";import"./IconWarning-D3qu7dXh.js";import"./Text-Bh_VtmGj.js";import"./browser-Dfdmz1Vs.js";import"./EmulatedBoldText-CB08elGP.js";import"./LoadingSpinner-BgxzSWV-.js";import"./OverlayTrigger-C3VeFBdc.js";import"./ControlledNotification-YDt7-Pno.js";import"./DialogTriggerView-DBksM5sq.js";const cr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
