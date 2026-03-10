import{j as r,R as a}from"./iframe-BJFPIndf.js";import{P as i}from"./Popover-DcH799mS.js";import{B as n}from"./Button-CMLIz8EV.js";import{P as c}from"./PopoverTrigger-DRbitvVz.js";import"./flowComponent-BKaxWUSl.js";import{u as l}from"./useOverlayController-BY9uU74J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BuTLd76h.js";import"./Dialog-eRNfCnmO.js";import"./Button-DuameHsj.js";import"./utils-WT8FFEB4.js";import"./index-Bb49SoEB.js";import"./index-Bg9RtLBP.js";import"./ProgressBar-Dl8T8y8K.js";import"./Label-CeUzUCbC.js";import"./Hidden-CMdNoXJX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-lMRjDAnL.js";import"./context-Dnh7V-Fy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BHGoooY9.js";import"./useFocus-DPdw3svt.js";import"./useFocusRing-BgEwvKKQ.js";import"./useFocusable-DGQMpBVb.js";import"./RSPContexts-BXfCPyGV.js";import"./OverlayArrow-BSkSIfQ7.js";import"./useControlledState-DywfuSZK.js";import"./Collection-DFCRYzeG.js";import"./CollectionBuilder-DvmLsXRf.js";import"./SelectionIndicator-DE1Bz2O5.js";import"./Separator-xreemKox.js";import"./Text-D3Y_kc1g.js";import"./SelectionManager-BZZ9zPIN.js";import"./useEvent-BToADvjV.js";import"./useCollator-m51r9XzI.js";import"./FocusScope-shVJmAPD.js";import"./useLocalizedStringFormatter-DgoEP7JS.js";import"./VisuallyHidden-DpM8Q2HK.js";import"./IconWarning-BUqpCqdO.js";import"./remote-BMkebNs4.js";import"./Text-CGF68X8s.js";import"./browser-DqcTc9Nr.js";import"./EmulatedBoldText-CbQqBSV_.js";import"./LoadingSpinner-mc2sXUEG.js";import"./OverlayTrigger-CKuXx8bv.js";import"./DialogTriggerView-CjNJF2Ka.js";import"./useStatic-BUxz8dmg.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
