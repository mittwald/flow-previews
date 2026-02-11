import{j as r,R as a}from"./iframe-CtuK0rEJ.js";import{P as i}from"./Popover-fZyy-KqV.js";import{B as n}from"./Button-CC2cGGC1.js";import{P as c}from"./PopoverTrigger-DuAdsCYN.js";import{u as l}from"./useOverlayController-B6-IGISv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BsiSvDfm.js";import"./index-DyfnOEiT.js";import"./index-DPf65gvx.js";import"./OverlayContextProvider-C66rhlmO.js";import"./context-CuLUjLGN.js";import"./useStatic-M0CnbsK2.js";import"./Dialog-DqwEKDxA.js";import"./Button-CSRC_w1a.js";import"./utils-C1DNWP44.js";import"./ProgressBar-D8lgnq4k.js";import"./Label-BIhxl5Mj.js";import"./Hidden-lRNITHFC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DJNpTGh1.js";import"./context-BLHFXQwL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Da2cRPrr.js";import"./useFocus-N-Pc0sLJ.js";import"./useFocusRing-Dq2x8hiG.js";import"./useFocusable-AhKszEdS.js";import"./RSPContexts-Ci8ojbfD.js";import"./OverlayArrow-D5uKmzPJ.js";import"./useControlledState-Cc_BEFH0.js";import"./Collection-B0ADhrnF.js";import"./CollectionBuilder-DAn9FB1h.js";import"./SelectionIndicator-Ds2JAiCA.js";import"./Separator-CEf8TdmS.js";import"./Text-DmIZo_mX.js";import"./SelectionManager-CRpdvIdx.js";import"./useEvent-D8j21rfZ.js";import"./useCollator-BzRay_B5.js";import"./FocusScope-Cm3IhtBV.js";import"./useLocalizedStringFormatter-C0fwd0wV.js";import"./VisuallyHidden-D1Q1E2fL.js";import"./IconWarning-BSe4G4Pm.js";import"./remote-DD8nhYq_.js";import"./Text-CyAseKfN.js";import"./browser-Up8UMddv.js";import"./EmulatedBoldText-BeUk81Jn.js";import"./LoadingSpinner-CJNtrFTB.js";import"./OverlayTrigger-Bu3GFQ-B.js";import"./DialogTriggerView-BE2kVzJ4.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
