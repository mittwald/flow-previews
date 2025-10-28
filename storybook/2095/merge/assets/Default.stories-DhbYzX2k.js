import{j as r,R as a}from"./iframe-DGdLAJHm.js";import{P as i,u as c}from"./Popover-BS8ngNUm.js";import{B as n}from"./Button-B6Mqr-fI.js";import{P as l}from"./PopoverTrigger-XoLWGVGN.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-B3SgFMfx.js";import"./flowComponent-D7HGs2AA.js";import"./index-JbK8SDWv.js";import"./index-BZginMRh.js";import"./useStatic-BT4grvBi.js";import"./OverlayContextProvider-BFOV3Eqf.js";import"./Dialog-CzLVI3sy.js";import"./Button-De2YyQVb.js";import"./utils-DMxNMt2r.js";import"./ProgressBar-NfwVy8TS.js";import"./Label-DCzhvZl0.js";import"./Hidden-DDvTcAlv.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLeCNjtK.js";import"./context-CokKTPHD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B2gRAimw.js";import"./useFocus-Cj45nHC3.js";import"./useFocusRing-Caix2y0_.js";import"./useFocusable-DBd_8M_L.js";import"./RSPContexts-4eF2sDK2.js";import"./OverlayArrow-DsaarUgr.js";import"./useControlledState-C-kX1e6O.js";import"./Collection-BVDIRVc_.js";import"./CollectionBuilder--BI9tvyg.js";import"./SelectionIndicator-vtyMezuP.js";import"./Separator-C_iWvMGV.js";import"./Text-C5DwW8tZ.js";import"./SelectionManager-Bowb6aZq.js";import"./useEvent-CSYpBGU5.js";import"./useCollator--gwTay33.js";import"./FocusScope-Bl39wWwG.js";import"./useLocalizedStringFormatter-CSQJExWC.js";import"./VisuallyHidden-Cu1Uufsu.js";import"./ClearPropsContextView-Dpaa2bCU.js";import"./ClearPropsContext-DfqGN335.js";import"./IconWarning-BY1Q-g8P.js";import"./Text-DFxon6If.js";import"./browser-DtJMxQoE.js";import"./EmulatedBoldText-l3o70VD0.js";import"./LoadingSpinner-Cx_Ae53U.js";import"./OverlayTrigger-DmNswj_n.js";import"./ControlledNotification-CkQKgv8a.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=c("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
