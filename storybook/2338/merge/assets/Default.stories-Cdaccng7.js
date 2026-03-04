import{j as r,R as a}from"./iframe-CBpAxFwW.js";import{P as i}from"./Popover-CbjXFr2h.js";import{B as n}from"./Button-DJILh_tx.js";import{P as c}from"./PopoverTrigger-CNOzaUan.js";import"./flowComponent-DZOc4zxt.js";import{u as l}from"./useOverlayController-lEjhNgxt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-Djk0FNiv.js";import"./Dialog-r9nlMSfh.js";import"./Button-B6LJ-bNf.js";import"./utils-DlBHsIHw.js";import"./index-Dap5aG_0.js";import"./index-RPWHkLuG.js";import"./ProgressBar-82eG7dwm.js";import"./Label-D79gfyvC.js";import"./Hidden-CJdIoNgI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-VON6CJHg.js";import"./context-BCPYrVw6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-IARhWfJB.js";import"./useFocus-DWD5MHlE.js";import"./useFocusRing-DhcP44Or.js";import"./useFocusable-YEU6YEqR.js";import"./RSPContexts-C97_Ku7o.js";import"./OverlayArrow-B4tyB_eB.js";import"./useControlledState-cot2auG7.js";import"./Collection-CNOjz3d8.js";import"./CollectionBuilder-s21Em_Eq.js";import"./SelectionIndicator-DmDMXkvM.js";import"./Separator-BGJ98pV4.js";import"./Text-CVgfjhJb.js";import"./SelectionManager-D9wpoI9v.js";import"./useCollator-bX69lL-k.js";import"./FocusScope-cF8Pb5h6.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./VisuallyHidden-BLMNvyRL.js";import"./IconWarning-gYJb7yiz.js";import"./remote-Bqh6MTep.js";import"./Text-DmIlada7.js";import"./browser-Bc0l3UGu.js";import"./EmulatedBoldText-CvSlY-lg.js";import"./LoadingSpinner-kKg7jHcI.js";import"./OverlayTrigger-BoEnaKfv.js";import"./DialogTriggerView-iLVIyfJi.js";import"./useStatic-CDkGs2jt.js";const mr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const sr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,sr as __namedExportsOrder,mr as default};
