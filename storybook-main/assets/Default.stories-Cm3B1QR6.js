import{j as r,R as a}from"./iframe-1XlmVqd5.js";import{P as i}from"./Popover-DWs4oiku.js";import{B as n}from"./Button-QkNnHSXc.js";import{P as c}from"./PopoverTrigger-DUiZGFGk.js";import{u as l}from"./useOverlayController-NHPQla43.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Uz-OX7bY.js";import"./index-Ba7AqYg5.js";import"./index-TUds5Kez.js";import"./OverlayContextProvider-D7BkXl4r.js";import"./context-DAZ5ICmo.js";import"./useStatic-BBkG9kKa.js";import"./Dialog-RsR3YLab.js";import"./Button-DLO0tbpP.js";import"./utils-DcI_f0WL.js";import"./ProgressBar-DD_sZ9Wb.js";import"./Label-Dzg72Lo7.js";import"./Hidden-D2eIjlR0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWL3lRor.js";import"./context-cVtndIAK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CBxBnL8r.js";import"./useFocus-B3hq9TNr.js";import"./useFocusRing-nXz5Fj6s.js";import"./useFocusable-BsD1LxMy.js";import"./RSPContexts-Dq529x8m.js";import"./OverlayArrow-DrpYygg_.js";import"./useControlledState-DjEU-0mZ.js";import"./Collection-BIbHEmyb.js";import"./CollectionBuilder-D7UVwhHW.js";import"./SelectionIndicator-qE_U9bCq.js";import"./Separator-CgzWDgSR.js";import"./Text-DC6xHoyY.js";import"./SelectionManager-_Sb55NGi.js";import"./useEvent-pApi9dyH.js";import"./useCollator-CY9Dy9g3.js";import"./FocusScope-cwCTJx2V.js";import"./useLocalizedStringFormatter--9VaGy1Y.js";import"./VisuallyHidden-Dm6nphJv.js";import"./IconWarning-B1VVAKEh.js";import"./remote-BMRYc7VB.js";import"./Text-DoMRIGKc.js";import"./browser-BzXr98QP.js";import"./EmulatedBoldText-BjX1lTTJ.js";import"./LoadingSpinner-BDWb_Uug.js";import"./OverlayTrigger-DCCWO6LH.js";import"./DialogTriggerView-DtLXkt2U.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
