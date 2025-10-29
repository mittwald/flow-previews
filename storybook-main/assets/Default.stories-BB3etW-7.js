import{j as r,R as a}from"./iframe-BO4how7V.js";import{P as i,u as c}from"./Popover-DBKwSEaj.js";import{B as n}from"./Button-BRSyykRx.js";import{P as l}from"./PopoverTrigger-CE3wCi53.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-DS1PliZx.js";import"./flowComponent-_BWaP51b.js";import"./index-B3PYSYUw.js";import"./index-CzMnHAtb.js";import"./useStatic-BYOxqZVF.js";import"./OverlayContextProvider-B4IpX5aH.js";import"./Dialog-9TwJqweV.js";import"./Button-T2VJnm-n.js";import"./utils-BpiWkIEZ.js";import"./ProgressBar-Cb_Q8Aey.js";import"./Label-HRe2PJ1I.js";import"./Hidden-cuI6d2d2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-R_XjJcRU.js";import"./context-n99Hur2q.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C-n8mYYh.js";import"./useFocus-CFrGhCIR.js";import"./useFocusRing-cZUm55wA.js";import"./useFocusable-Dm6zCBge.js";import"./RSPContexts-C8zlTsZJ.js";import"./OverlayArrow-6T1AUm1N.js";import"./useControlledState-Dy2CU0s2.js";import"./Collection-7Jhx6ozR.js";import"./CollectionBuilder-NvmcR0Ec.js";import"./SelectionIndicator-qPgcj5gy.js";import"./Separator-CDyVGVx6.js";import"./Text-BwppUNzg.js";import"./SelectionManager-CUJzsbBx.js";import"./useEvent-BsUSX18g.js";import"./useCollator-fJkQzVou.js";import"./FocusScope-BDHPNMgd.js";import"./useLocalizedStringFormatter-Byhh4L4X.js";import"./VisuallyHidden-BldPGQAk.js";import"./ClearPropsContextView-BZw5hC3x.js";import"./ClearPropsContext-Cr48Xe01.js";import"./IconWarning-riXPckyc.js";import"./Text-k4VuksKp.js";import"./browser-9RCZAQdm.js";import"./EmulatedBoldText-B4e_rnhx.js";import"./LoadingSpinner-Bt5VpGJB.js";import"./OverlayTrigger-CxD_iiL6.js";import"./ControlledNotification-2HQhcMSc.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=c("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
