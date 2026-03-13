import{j as r,R as a}from"./iframe-BFddea_x.js";import{P as i}from"./Popover-BbCf_utC.js";import{B as n}from"./Button-DmFob37h.js";import{P as c}from"./PopoverTrigger-D8YKWyHU.js";import"./flowComponent-BHBUnD7I.js";import{u as l}from"./useOverlayController-D1CCctag.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BO6i0G2D.js";import"./Dialog-Dko8Qxf5.js";import"./Button-uqpwtIjO.js";import"./utils-D-aZUMcZ.js";import"./index-C2Q_zaaP.js";import"./index-CcOYdQtn.js";import"./ProgressBar-GJhSB3Xp.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C__elmJN.js";import"./context-CaZH5px0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DZQSLH7U.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocusable-D-17EkqH.js";import"./RSPContexts-DrvlE6Qo.js";import"./OverlayArrow-CVHTB2zR.js";import"./useControlledState-lfI_swTV.js";import"./Collection-2_PEsREq.js";import"./CollectionBuilder-CCaeaC6n.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./Separator-7xqgbQ15.js";import"./Text-DndMRLn5.js";import"./SelectionManager-BwPLSKUJ.js";import"./useCollator-CHE9npsz.js";import"./FocusScope-QY6lrLAj.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./IconWarning-Cwahpn-Q.js";import"./remote-DmjGOFpp.js";import"./Text-B70YymId.js";import"./browser-PH3BUHM2.js";import"./EmulatedBoldText-C15EfUg3.js";import"./LoadingSpinner-BTSUDAP0.js";import"./OverlayTrigger-Yb2ddAp1.js";import"./DialogTriggerView-D9jblR2E.js";import"./useStatic-4M_8h910.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
