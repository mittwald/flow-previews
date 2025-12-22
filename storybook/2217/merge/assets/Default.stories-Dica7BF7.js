import{j as r,R as a}from"./iframe-Du65Ph_c.js";import{P as i}from"./Popover-a0_blwO0.js";import{B as n}from"./Button-2wmaPnFC.js";import{P as c}from"./PopoverTrigger-BktejYrc.js";import{u as l}from"./useOverlayController-D5h8n75v.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CYbHZhXg.js";import"./index-XI88kJrR.js";import"./index-c0t27COx.js";import"./OverlayContextProvider-CsKpo_xf.js";import"./context-Cb5nHwHn.js";import"./useStatic-B95N-aRU.js";import"./Dialog-BO9iihOE.js";import"./Button-CjwwJrCh.js";import"./utils-xIJEb5Gc.js";import"./ProgressBar-B4qFtVbo.js";import"./Label-D_GXaE34.js";import"./Hidden-BV9iY75y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BdNff0XI.js";import"./context-BMDcuGwa.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CyOin5iy.js";import"./useFocus-mAbeDdRN.js";import"./useFocusRing-B7cLewIC.js";import"./useFocusable-RoNPbAVl.js";import"./RSPContexts-CGKyxyrO.js";import"./OverlayArrow-CbRWYOrW.js";import"./useControlledState-Cdt3oZ6_.js";import"./Collection-C5ltbjdX.js";import"./CollectionBuilder-d6KQwCFJ.js";import"./SelectionIndicator-Cb43LM7W.js";import"./Separator-DKPq8LUH.js";import"./Text-Cl831mKA.js";import"./SelectionManager-BR7dbQPM.js";import"./useEvent-D0wfQKUV.js";import"./useCollator-DYYkh59M.js";import"./FocusScope-DUOtKQcD.js";import"./useLocalizedStringFormatter-Dhvhyrh1.js";import"./VisuallyHidden-rhukFLga.js";import"./IconWarning-CGSd0Gik.js";import"./remote-D3fYDNUY.js";import"./Text-CtX5enn3.js";import"./browser-57tL9X_d.js";import"./EmulatedBoldText-CITvecLd.js";import"./LoadingSpinner-DEfGApvw.js";import"./OverlayTrigger-CM2nLyXn.js";import"./DialogTriggerView-efXOOibV.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
