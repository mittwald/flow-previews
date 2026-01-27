import{j as r,R as a}from"./iframe-DcHapM8k.js";import{P as i}from"./Popover-8k6-3DAC.js";import{B as n}from"./Button-C1DQEdG6.js";import{P as c}from"./PopoverTrigger-BcysQslz.js";import{u as l}from"./useOverlayController-CLiM05Jw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-F2rlWCYo.js";import"./index-DtEczAXX.js";import"./index-Ba4Wgmch.js";import"./OverlayContextProvider-By_DTOub.js";import"./context-C5BkLhj5.js";import"./useStatic-lCMR7rr_.js";import"./Dialog-gML-GktL.js";import"./Button-DGX0xFqX.js";import"./utils-BN-Wf9GB.js";import"./ProgressBar-Dz7b_e2x.js";import"./Label-Cc29pwI9.js";import"./Hidden-BBxp_Bwo.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DVAEGcEm.js";import"./context-Camfekg3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DRRwHOXQ.js";import"./useFocus-ZXD30Rmm.js";import"./useFocusRing-Dt3gTaal.js";import"./useFocusable-CPQk5Kbw.js";import"./RSPContexts-DXTQnhuO.js";import"./OverlayArrow-Ct2arrPt.js";import"./useControlledState-CD18I4-6.js";import"./Collection-y5T8eap-.js";import"./CollectionBuilder-edhcBSCU.js";import"./SelectionIndicator-nDWEY-Pb.js";import"./Separator-DyT19d9_.js";import"./Text-KTnK0cez.js";import"./SelectionManager-cayBw_JG.js";import"./useEvent-FsYqvuuv.js";import"./useCollator-CvGBdlrR.js";import"./FocusScope-DwQWTV3n.js";import"./useLocalizedStringFormatter--D1phWvd.js";import"./VisuallyHidden-ZuD5qc8D.js";import"./IconWarning-8t1q80cl.js";import"./remote-CrHpKc5j.js";import"./Text-BqUUaAMX.js";import"./browser-BhJkGPhR.js";import"./EmulatedBoldText-BsmORSBd.js";import"./LoadingSpinner-DeuQI20n.js";import"./OverlayTrigger-2_tOKmYE.js";import"./DialogTriggerView-DPMzhCJ9.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
