import{j as r,R as a}from"./iframe-Dnm846PF.js";import{P as i}from"./Popover-D8u9A93l.js";import{B as n}from"./Button-D3IXyzzj.js";import{P as c}from"./PopoverTrigger-nZYiSqXR.js";import{u as l}from"./useOverlayController-D7G3MHJE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-S63Cq1sy.js";import"./index-Db1dbbsL.js";import"./index-sBHKlQZD.js";import"./OverlayContextProvider-e7mKKUrq.js";import"./context-CfRQ154N.js";import"./useStatic-D4cjHvMF.js";import"./Dialog-BfuTmdIH.js";import"./Button-B-4mNKoj.js";import"./utils-VDIU0BnD.js";import"./ProgressBar-BIFWcEy_.js";import"./Label-B2apKb0w.js";import"./Hidden-1UUWpuD7.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-pLNL7Cvk.js";import"./context-CoOH5oCy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CU4gAXU4.js";import"./useFocus-D-7SE4fF.js";import"./useFocusRing-CANRw9LC.js";import"./useFocusable-DgTTkttD.js";import"./RSPContexts-DkLfIxB1.js";import"./OverlayArrow-B81MSBvx.js";import"./useControlledState-CkFAdRGn.js";import"./Collection-CfmXzWv2.js";import"./CollectionBuilder-1cEuD-Tq.js";import"./SelectionIndicator-B7sCGTL_.js";import"./Separator-D5s42kTO.js";import"./Text-1v5GZWlz.js";import"./SelectionManager-Bx2R39VR.js";import"./useEvent-CkeCMC1K.js";import"./useCollator-mQoUFjwt.js";import"./FocusScope-DH4o0wc_.js";import"./useLocalizedStringFormatter-BqtI09-_.js";import"./VisuallyHidden-C6zUvnKf.js";import"./IconWarning-CExbEpDP.js";import"./remote-XcyFsW5Q.js";import"./Text-DtZxu6g8.js";import"./browser-DEiAhc6G.js";import"./EmulatedBoldText-DH6NWkOG.js";import"./LoadingSpinner-DASF7rgv.js";import"./OverlayTrigger-D2F_jz3v.js";import"./DialogTriggerView-By1KcQyW.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
