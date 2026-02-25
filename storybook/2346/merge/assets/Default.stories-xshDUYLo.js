import{j as r,R as a}from"./iframe-teIxY4wP.js";import{P as i}from"./Popover-Bc-eSFBz.js";import{B as n}from"./Button-CCmGuoae.js";import{P as c}from"./PopoverTrigger-DD8r5PUn.js";import"./flowComponent-B3BP6Vj1.js";import{u as l}from"./useOverlayController-2V9dFGfh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BhqlYdhN.js";import"./Dialog-CPTLkUM-.js";import"./Button-DPcEERaP.js";import"./utils-C8wUhSun.js";import"./index-Ctx6H3Hx.js";import"./index-SbFVnFKt.js";import"./ProgressBar-uiVLSJyQ.js";import"./Label-CnpPAxdS.js";import"./Hidden-CVxq3czE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BwGc14jy.js";import"./context-Bkxu1haQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Znh85jsw.js";import"./useFocus-Pnl5w-Ue.js";import"./useFocusRing-DM5Gti31.js";import"./useFocusable-C4kMCM88.js";import"./RSPContexts-DVypfZug.js";import"./OverlayArrow-BnOVUBMe.js";import"./useControlledState-Dnjkc9fO.js";import"./Collection-CPWnsoE7.js";import"./CollectionBuilder-6gbuY_L9.js";import"./SelectionIndicator-DFQRQ6iO.js";import"./Separator-BaKjxxxO.js";import"./Text-BEd6-Qqe.js";import"./SelectionManager-Th26CzKh.js";import"./useEvent-BcVdyav8.js";import"./useCollator-Dsy6DAyA.js";import"./FocusScope-Crjq_ymp.js";import"./useLocalizedStringFormatter-cjXC4-Kw.js";import"./VisuallyHidden-BEOGf6u-.js";import"./IconWarning-C8c-iA3p.js";import"./remote-DC3yMzFm.js";import"./Text-CB74-0Ir.js";import"./browser-ClA0f7pc.js";import"./EmulatedBoldText-C0BZfzN3.js";import"./LoadingSpinner-CKqfIoaL.js";import"./OverlayTrigger-DxY4DuAp.js";import"./DialogTriggerView-BtIzNN9l.js";import"./useStatic-JzrpAx77.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
