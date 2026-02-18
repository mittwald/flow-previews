import{j as r,R as a}from"./iframe-Bz3NPU1o.js";import{P as i}from"./Popover-BJF5ngPZ.js";import{B as n}from"./Button-DmREI3b0.js";import{P as c}from"./PopoverTrigger-D_3_b97n.js";import"./flowComponent-CjhBP1Cm.js";import{u as l}from"./useOverlayController-BTsOQKJk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-ve6dYabZ.js";import"./Dialog-DrbZDX-D.js";import"./Button-BMxU8wWi.js";import"./utils-DuUJF5nC.js";import"./index-4Y7PW7MZ.js";import"./index-FgoIhbmz.js";import"./ProgressBar-Dn9Yutju.js";import"./Label-QJAE-TAD.js";import"./Hidden-DRSFEG3Y.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C5lED9IT.js";import"./context-pgk2HPHJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BmxXpscc.js";import"./useFocus-DMRfkGw8.js";import"./useFocusRing-BLuP37PT.js";import"./useFocusable-DZRtaeEQ.js";import"./RSPContexts-BgkP6bIF.js";import"./OverlayArrow-Co0kQ8lC.js";import"./useControlledState-e4YYsLZE.js";import"./Collection-CtHLpY8r.js";import"./CollectionBuilder-CSsN_D43.js";import"./SelectionIndicator-DWP2zhMc.js";import"./Separator-4S0Txhk8.js";import"./Text-ClD1r8b1.js";import"./SelectionManager-DtXYtKU8.js";import"./useEvent-DV66xCP2.js";import"./useCollator-DX6ShHbl.js";import"./FocusScope-Bk96q2B-.js";import"./useLocalizedStringFormatter-DZI71IG_.js";import"./VisuallyHidden-DkJ66lZ_.js";import"./IconWarning-Cqqx4tMU.js";import"./remote-D_M7roLC.js";import"./Text-ByJancxD.js";import"./browser-BaNqvzaa.js";import"./EmulatedBoldText-DUXivwa1.js";import"./LoadingSpinner-C6XGp2xl.js";import"./OverlayTrigger-DNmemUFh.js";import"./DialogTriggerView-DbMKjStP.js";import"./useStatic-hPs_nES1.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
