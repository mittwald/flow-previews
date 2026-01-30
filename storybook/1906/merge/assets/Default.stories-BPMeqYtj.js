import{j as r,R as a}from"./iframe-B_TkxfTi.js";import{P as i}from"./Popover-Dk2IZtcP.js";import{B as n}from"./Button-RJdr80c6.js";import{P as c}from"./PopoverTrigger-BLNMsfx9.js";import{u as l}from"./useOverlayController-2wquljYS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BIniq_3P.js";import"./index-CrnjZTlk.js";import"./index-B6XMVbfI.js";import"./OverlayContextProvider-lGzaaamO.js";import"./context-D9DgwULu.js";import"./useStatic-cRv7_xgS.js";import"./Dialog-ChZYysky.js";import"./Button-n3CPGMPO.js";import"./utils-CEh0pYpN.js";import"./ProgressBar-DY5wp8p-.js";import"./Label-CQzZBBgV.js";import"./Hidden-B4qu7a2v.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D2pyCI0i.js";import"./context-Bqo0meff.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DqvJUCRP.js";import"./useFocus-CWYeHEaO.js";import"./useFocusRing-Bb1Hz9wK.js";import"./useFocusable-DUuU0sbS.js";import"./RSPContexts-CP1vSDTy.js";import"./OverlayArrow-DmLbnMba.js";import"./useControlledState-CYdArkzJ.js";import"./Collection-DsLwUV-E.js";import"./CollectionBuilder-De4-ApJw.js";import"./SelectionIndicator-SPKWDPFJ.js";import"./Separator-Ck_PPi-8.js";import"./Text-CBbNcQAF.js";import"./SelectionManager-CXzqm88-.js";import"./useEvent-CBTrASFt.js";import"./useCollator-Dzxw0xLX.js";import"./FocusScope-BxLI0wxf.js";import"./useLocalizedStringFormatter-BrZnZPcM.js";import"./VisuallyHidden-BGokW8gm.js";import"./IconWarning-C-Vc31bm.js";import"./remote-BarzyRQ7.js";import"./Text-DZTN4U6B.js";import"./browser-CLjLvoWS.js";import"./EmulatedBoldText-9YPP8018.js";import"./LoadingSpinner-CjHOYBjr.js";import"./OverlayTrigger-De9wNpqE.js";import"./DialogTriggerView-BpsYPQEu.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
