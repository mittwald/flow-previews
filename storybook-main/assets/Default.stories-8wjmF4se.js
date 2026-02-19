import{j as r,R as a}from"./iframe-C9fwoqx7.js";import{P as i}from"./Popover-BDNR50NM.js";import{B as n}from"./Button-C7pOzOnK.js";import{P as c}from"./PopoverTrigger-DNN-K7ir.js";import"./flowComponent-BaaAZbNJ.js";import{u as l}from"./useOverlayController-CqYUXVnh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-DAx33Jid.js";import"./Dialog-yhzZwH_k.js";import"./Button-DDn45mdd.js";import"./utils-Cx2L-iDs.js";import"./index-DH86ko7l.js";import"./index-CbFgIt9G.js";import"./ProgressBar-Dby2U7oR.js";import"./Label-CbDOwA25.js";import"./Hidden-CVIEiZ4o.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BNdvaiV7.js";import"./context-C2ecxi5G.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-tgKXO9PL.js";import"./useFocus-CMKZ5vES.js";import"./useFocusRing-s7_3pCWo.js";import"./useFocusable-CQiYog1P.js";import"./RSPContexts-mF4XBTs4.js";import"./OverlayArrow-DDmkn5_8.js";import"./useControlledState-BJuMvqvK.js";import"./Collection-C29JJn0j.js";import"./CollectionBuilder-ta_UQL8r.js";import"./SelectionIndicator-nEc_xgxs.js";import"./Separator-ykHU2h0d.js";import"./Text-xqSfQxLT.js";import"./SelectionManager-D2Ty-b9W.js";import"./useEvent-bSDrPC6p.js";import"./useCollator-CTWpXcx6.js";import"./FocusScope-Ci8EWXmX.js";import"./useLocalizedStringFormatter-G4KNW0M0.js";import"./VisuallyHidden-1IKUNS-e.js";import"./IconWarning-slnz76yl.js";import"./remote-B-ZPT6P_.js";import"./Text-D7jvp7G5.js";import"./browser-B4JTTu9h.js";import"./EmulatedBoldText-CtQh5tnB.js";import"./LoadingSpinner-BWPVzhoG.js";import"./OverlayTrigger-BodK83ZQ.js";import"./DialogTriggerView-B0ztqFBx.js";import"./useStatic-9-ugXzKa.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
