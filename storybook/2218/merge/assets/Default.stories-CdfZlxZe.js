import{j as r,R as a}from"./iframe-VTkEMv55.js";import{P as i}from"./Popover-DMia4ia0.js";import{B as n}from"./Button-B9lvy9yg.js";import{P as c}from"./PopoverTrigger-ZoESUanR.js";import{u as l}from"./useOverlayController-BPG62MgI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-PEtegy.js";import"./index-DtZzACyH.js";import"./index-D_xlAiD1.js";import"./OverlayContextProvider-CbIHT6gb.js";import"./context-CeKSAP77.js";import"./useStatic-OVy-y77u.js";import"./Dialog-Qb8RaXBy.js";import"./Button-BKfoJr1S.js";import"./utils-DPKXOmt2.js";import"./ProgressBar-6h4xV7_x.js";import"./Label-BRaJlgoE.js";import"./Hidden-d-f11Ccs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C-geoXZs.js";import"./context-BVezW8pN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cb2XrqKT.js";import"./useFocus-JgmAf8eL.js";import"./useFocusRing-BeV8_2Yg.js";import"./useFocusable-CzgiUJAu.js";import"./RSPContexts-wdKGWz4J.js";import"./OverlayArrow-CyTNZBgT.js";import"./useControlledState-CxodNXny.js";import"./Collection-xr8-TVrR.js";import"./CollectionBuilder-DhJAnH_i.js";import"./SelectionIndicator-CYSMLMH7.js";import"./Separator-BE0n3_oB.js";import"./Text-DB2BTtqM.js";import"./SelectionManager-G-GDhrqF.js";import"./useEvent-Cgy893y9.js";import"./useCollator-BSc2XrT4.js";import"./FocusScope-CTtHroqL.js";import"./useLocalizedStringFormatter-CUJ-Z77y.js";import"./VisuallyHidden-DjbItwE4.js";import"./IconWarning-D408DR62.js";import"./remote-pRnbNSGs.js";import"./Text-DlbRcSah.js";import"./browser-_Qir5MkB.js";import"./EmulatedBoldText-BYZc_oy6.js";import"./LoadingSpinner-BWeGH-7c.js";import"./OverlayTrigger-DkpyXFVa.js";import"./DialogTriggerView-CPJKS_ai.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
