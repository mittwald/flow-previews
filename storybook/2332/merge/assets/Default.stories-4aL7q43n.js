import{j as r,R as a}from"./iframe-CXQlTNqj.js";import{P as i}from"./Popover-Dd_o8eTz.js";import{B as n}from"./Button-BlafpMbq.js";import{P as c}from"./PopoverTrigger-0mBDEz3x.js";import"./flowComponent-C6ZYuDSe.js";import{u as l}from"./useOverlayController-E6hXP07l.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-97FigBld.js";import"./Dialog-D3U2a9zn.js";import"./Button-BcwVzCcr.js";import"./utils-DV_byzth.js";import"./index-BSs4nRRG.js";import"./index-AYGk-Z4X.js";import"./ProgressBar-DkaBE4Rp.js";import"./Label-DrfdLf3_.js";import"./Hidden-CKkXVPeJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DrjDs4EL.js";import"./context-CCBj18N5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C3E8Ss2p.js";import"./useFocus-DfPsdBQQ.js";import"./useFocusRing-D1AlgOvW.js";import"./useFocusable-D7YkDf-E.js";import"./RSPContexts-CaXq0cAk.js";import"./OverlayArrow-sIEanX_d.js";import"./useControlledState-CC0ueLns.js";import"./Collection-TmQT-68Q.js";import"./CollectionBuilder-9Nd9UEc1.js";import"./SelectionIndicator-DQZUhYCh.js";import"./Separator-Bs-03xzt.js";import"./Text-QCBVP_aW.js";import"./SelectionManager-CqkX1Rni.js";import"./useEvent-AkpP6oW4.js";import"./useCollator-BFpQRgzB.js";import"./FocusScope-Dqueyleg.js";import"./useLocalizedStringFormatter-B9SYg2k8.js";import"./VisuallyHidden-bRUw4X6B.js";import"./IconWarning-qWu7I_Pu.js";import"./remote-aElBUAr6.js";import"./Text-B3somVi7.js";import"./browser-C0g7jXxm.js";import"./EmulatedBoldText-DjcO8VHN.js";import"./LoadingSpinner-Wa1FVRzC.js";import"./OverlayTrigger-CeJmnxGE.js";import"./DialogTriggerView-BqG-pPuD.js";import"./useStatic-D-kx8TMY.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
