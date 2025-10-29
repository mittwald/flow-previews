import{j as r,R as a}from"./iframe-B8r8XrPb.js";import{P as i,u as c}from"./Popover-CHTa2a8I.js";import{B as n}from"./Button-x8S8uZ_3.js";import{P as l}from"./PopoverTrigger-DNtm3jwL.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-tqHfsDuk.js";import"./flowComponent-CWjpVcP-.js";import"./index-CVBgNbzf.js";import"./index-ChMccDi0.js";import"./useStatic-Qi3p0Ena.js";import"./OverlayContextProvider-C-xiKcZu.js";import"./Dialog-DJ22CsqV.js";import"./Button-DOtSsu3o.js";import"./utils-B2sHMxfy.js";import"./ProgressBar-9fERUQ0g.js";import"./Label-DhvUjtv7.js";import"./Hidden-C0uurl-T.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bn_yI2FK.js";import"./context-d7knuPTA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BPC_OlSs.js";import"./useFocus-Co_XlsN_.js";import"./useFocusRing-DGaivw0f.js";import"./useFocusable-USAcjdfT.js";import"./RSPContexts-Do_0M-hc.js";import"./OverlayArrow-Cf4VI4sB.js";import"./useControlledState-Dhb_P5xS.js";import"./Collection-Dst8UlSd.js";import"./CollectionBuilder-C1D-HmCC.js";import"./SelectionIndicator-BHwOxkNR.js";import"./Separator-BqgRmmFG.js";import"./Text-DsIbOJYe.js";import"./SelectionManager-kzjy3-H4.js";import"./useEvent-BY3XUUFC.js";import"./useCollator-CG3LD3jQ.js";import"./FocusScope-DHLNAyY7.js";import"./useLocalizedStringFormatter-B1bOogGx.js";import"./VisuallyHidden-DvNHrLSk.js";import"./ClearPropsContextView-CH1TrHU5.js";import"./ClearPropsContext-BX2g1WFh.js";import"./IconWarning-BnpSGPSL.js";import"./Text-CxxNxEUo.js";import"./browser-5JWtNQpe.js";import"./EmulatedBoldText-DH8-rljC.js";import"./LoadingSpinner-bZO-WOXG.js";import"./OverlayTrigger-e3uC-u8g.js";import"./ControlledNotification-DGY7ssQ6.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=c("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
