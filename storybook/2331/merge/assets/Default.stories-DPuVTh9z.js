import{j as r,R as a}from"./iframe-BDFzVZbC.js";import{P as i}from"./Popover-DEUzSgQe.js";import{B as n}from"./Button-C7bK1-uf.js";import{P as c}from"./PopoverTrigger-OYDYaPiO.js";import"./flowComponent-CcRyJRwo.js";import{u as l}from"./useOverlayController-Bb-vbpCY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-ClMrYLWB.js";import"./Dialog-C2-FJ5MR.js";import"./Button-ibrCxHHX.js";import"./utils-DRqoG6OW.js";import"./index-P1fb0se1.js";import"./index-CcbRX2xZ.js";import"./ProgressBar-BO2kVTFg.js";import"./Label-CHSQ9cWG.js";import"./Hidden-HzHXzaYV.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D8fV0T39.js";import"./context-sVk6h2Ud.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DJEnnjGh.js";import"./useFocus-BE-kuowd.js";import"./useFocusRing-CxM1MJ0B.js";import"./useFocusable-nLh15Hem.js";import"./RSPContexts-CK_xwACt.js";import"./OverlayArrow-BhJrUQVC.js";import"./useControlledState-CxpqxoPE.js";import"./Collection-C1wNqiGx.js";import"./CollectionBuilder-DtnVmW1Z.js";import"./SelectionIndicator-S2R90Jld.js";import"./Separator-DZXWrML2.js";import"./Text-5CWdwzmY.js";import"./SelectionManager-BvzKXH6i.js";import"./useEvent-DOEbfCcC.js";import"./useCollator-DGEP0NQr.js";import"./FocusScope-Djn4bjzo.js";import"./useLocalizedStringFormatter-BejhQiE3.js";import"./VisuallyHidden-DL89d0r2.js";import"./IconWarning-aDXn3__r.js";import"./remote-C6miTdu_.js";import"./Text-DCO-oE1a.js";import"./browser-D6pVd-JB.js";import"./EmulatedBoldText-qk6rk8uL.js";import"./LoadingSpinner-CPBqqCdo.js";import"./OverlayTrigger-BwyAupi1.js";import"./DialogTriggerView-Cjt2-PSq.js";import"./useStatic-DKe6XZbW.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const nr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,nr as __namedExportsOrder,sr as default};
