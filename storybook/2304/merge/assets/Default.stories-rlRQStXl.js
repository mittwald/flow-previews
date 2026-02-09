import{j as r,R as a}from"./iframe-DsvUdpXw.js";import{P as i}from"./Popover-CqiNCQcV.js";import{B as n}from"./Button-Bh17vETd.js";import{P as c}from"./PopoverTrigger-BkEPNXGa.js";import{u as l}from"./useOverlayController-DxWxo43I.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BHKkbUKe.js";import"./index-CAxJgE7t.js";import"./index-BOZmgZtE.js";import"./OverlayContextProvider-DlpSiBKI.js";import"./context-ya2kPvzB.js";import"./useStatic-B4i3epQD.js";import"./Dialog-DDWgyAFS.js";import"./Button-RLHEBlnW.js";import"./utils-elFy1-Tx.js";import"./ProgressBar-iQ50i7yu.js";import"./Label-E9gf7XUf.js";import"./Hidden-CTz_rsXv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CEPtaVyT.js";import"./context-BSJoRVhT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BFT-1ljl.js";import"./useFocus-DN2AExbL.js";import"./useFocusRing-DkxfWW5E.js";import"./useFocusable-CD1pLlOX.js";import"./RSPContexts-C2fytUZa.js";import"./OverlayArrow-BaL5B_Kp.js";import"./useControlledState-HbpZAl0m.js";import"./Collection-Da99ROgL.js";import"./CollectionBuilder-CzjqfU1x.js";import"./SelectionIndicator-CDySPjGG.js";import"./Separator-BomnlaZI.js";import"./Text-qH9eQPgP.js";import"./SelectionManager-Buucfd3A.js";import"./useEvent-DL_JcHww.js";import"./useCollator-DXJOSFu6.js";import"./FocusScope-eXu984DB.js";import"./useLocalizedStringFormatter-CuRFYkX4.js";import"./VisuallyHidden-Ds80HbqR.js";import"./IconWarning-DeQxeoQB.js";import"./remote-Bzinmuoi.js";import"./Text-DX5v3ksG.js";import"./browser-BtOTkQbR.js";import"./EmulatedBoldText-7KsmeNIZ.js";import"./LoadingSpinner-DQcVqwZx.js";import"./OverlayTrigger-iXNxq1oc.js";import"./DialogTriggerView-DmrydrJr.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
