import{j as r,R as a}from"./iframe-CCgutS5t.js";import{P as i}from"./Popover-CYSy3wGz.js";import{B as n}from"./Button-CB_SQlxf.js";import{P as c}from"./PopoverTrigger-DnuHcZSF.js";import{u as l}from"./useOverlayController-DW7fwhRo.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C78Jb5L6.js";import"./index-h_ilVZmN.js";import"./index-Bp2d_id4.js";import"./OverlayContextProvider-zefoD_gg.js";import"./context-_S3VUPKr.js";import"./useStatic-MsaSckAb.js";import"./Dialog-BFfcJUiM.js";import"./Button-DxAPDldv.js";import"./utils-N6USVjPQ.js";import"./ProgressBar-Pqb-SOG6.js";import"./Label-B2_Qc07C.js";import"./Hidden-BtuehT5t.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C2LzTSEt.js";import"./context-3TjxBBiZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C_WBS1_H.js";import"./useFocus-qWLnYmls.js";import"./useFocusRing-DetKeZ0w.js";import"./useFocusable-C1wexJX5.js";import"./RSPContexts-D8ixlOLf.js";import"./OverlayArrow-D_Aj7zmL.js";import"./useControlledState-C-pLTCEb.js";import"./Collection-DHibalOY.js";import"./CollectionBuilder-BmvqiF6i.js";import"./SelectionIndicator-BSAaVuJo.js";import"./Separator-CdSBB1Je.js";import"./Text-DSftVrdI.js";import"./SelectionManager-CyYCav6z.js";import"./useEvent-rTmmTfmz.js";import"./useCollator-Cks0Ndw_.js";import"./FocusScope-1cqgO8JZ.js";import"./useLocalizedStringFormatter-BjHcrzpH.js";import"./VisuallyHidden-upAad0zi.js";import"./ClearPropsContextView-CYIHyMV-.js";import"./ClearPropsContext-CZ_w58Ag.js";import"./IconWarning-BIjPfZ_7.js";import"./Text-C-3mWHEt.js";import"./browser-Cx9TdPw4.js";import"./EmulatedBoldText-BfzgnQm3.js";import"./LoadingSpinner-CbAXLLLD.js";import"./OverlayTrigger-2i5uyzps.js";import"./ControlledNotification-C8Yc-FwQ.js";import"./DialogTriggerView-BF7YMpO5.js";const cr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const lr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,lr as __namedExportsOrder,cr as default};
