import{j as r,R as a}from"./iframe-CGL3Ztd8.js";import{P as i}from"./Popover-xu2ddB-n.js";import{B as n}from"./Button-CdFi_Gvp.js";import{P as c}from"./PopoverTrigger-CZeY4SXv.js";import{u as l}from"./useOverlayController-C-uD8HEe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-WiCTTjdG.js";import"./index-P9tp8qCw.js";import"./index-eHspQkB2.js";import"./OverlayContextProvider-vRTj2eZJ.js";import"./context-B-HkcFzY.js";import"./useStatic-aF_CYkuk.js";import"./Dialog-D5rIpj4K.js";import"./Button-CySqxiup.js";import"./utils-BPLHaINM.js";import"./ProgressBar-C4R_ruZv.js";import"./Label-BHYpf9e5.js";import"./Hidden-CROh8dKk.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dh-HsBYa.js";import"./context-BN4qQIb1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BpWTOkQr.js";import"./useFocus-XDda6gbt.js";import"./useFocusRing-BtxSiiWP.js";import"./useFocusable-MZ2jhLFm.js";import"./RSPContexts-Dbu6eLkb.js";import"./OverlayArrow-BX1C_Ifh.js";import"./useControlledState-DjoZo3jd.js";import"./Collection-De-gN1c8.js";import"./CollectionBuilder-DX9xRdaS.js";import"./SelectionIndicator-CKCmLDiO.js";import"./Separator-CQ2yo0aI.js";import"./Text-BKxs7Hdx.js";import"./SelectionManager-BkQuw4FT.js";import"./useEvent-C3Ld1mH0.js";import"./useCollator-COOm3BGU.js";import"./FocusScope-CzHXyZUV.js";import"./useLocalizedStringFormatter-BjebV3sn.js";import"./VisuallyHidden-DvGmoJqV.js";import"./IconWarning-CMBZCdTm.js";import"./remote-DEzwzibY.js";import"./Text-_sa0OuU0.js";import"./browser-Dk-cIrUN.js";import"./EmulatedBoldText-CAg0SlO2.js";import"./LoadingSpinner-ChXboWO2.js";import"./OverlayTrigger-BmiisdnS.js";import"./DialogTriggerView-D_UzvFUS.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
