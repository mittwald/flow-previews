import{j as r,R as a}from"./iframe-BFuSR0CY.js";import{P as i,u as c}from"./Popover-DHySGxM6.js";import{B as n}from"./Button-B8_RMB4T.js";import{P as l}from"./PopoverTrigger-DC4auP7K.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-CFFRtyxF.js";import"./flowComponent-Czyught-.js";import"./index-DyDKJP2K.js";import"./index-D8dET2XL.js";import"./useStatic-BcQq_-tU.js";import"./OverlayContextProvider-CfKGEq1m.js";import"./Dialog-D9CJ_WbB.js";import"./Button-CV2egPhG.js";import"./utils-CEuw8CkJ.js";import"./ProgressBar-D1Sp6uIf.js";import"./Label-Dl8lfN0K.js";import"./Hidden-BoaT9a_j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DzVjSD7h.js";import"./context-6pf_efel.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BYMimxLy.js";import"./useFocus-Dfi_0tQM.js";import"./useFocusRing-CdpePOyD.js";import"./useFocusable-Or0L-1Mb.js";import"./RSPContexts-Df5wrtNL.js";import"./OverlayArrow-wdl515fE.js";import"./useControlledState-Y8_jrThy.js";import"./Collection-C9ImqwdO.js";import"./CollectionBuilder-ZO6bxSPM.js";import"./SelectionIndicator-DEvuKTnp.js";import"./Separator-BLwDKZm_.js";import"./Text-CVe1O8QA.js";import"./SelectionManager-DrJQTmKT.js";import"./useEvent-D6E-W8z_.js";import"./useCollator-D7Ttiyl_.js";import"./FocusScope-Dzg120-u.js";import"./useLocalizedStringFormatter-CXcIdBbj.js";import"./VisuallyHidden-_YfAavcM.js";import"./ClearPropsContextView-BzCLuTLO.js";import"./ClearPropsContext-DVOTNhZJ.js";import"./IconWarning-BDLPxpKm.js";import"./Text-BXhKPUqX.js";import"./browser-h3r-jBf1.js";import"./EmulatedBoldText-BrOu3vHP.js";import"./LoadingSpinner-CF0vj0R_.js";import"./OverlayTrigger-CApgQhCu.js";import"./ControlledNotification-4GKhJW90.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=c("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
