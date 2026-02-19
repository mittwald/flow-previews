import{j as r,R as a}from"./iframe-Cbm1tYQ5.js";import{P as i}from"./Popover-DTr9x_xz.js";import{B as n}from"./Button-Cqfz7zcL.js";import{P as c}from"./PopoverTrigger-BTBtpIDH.js";import"./flowComponent-BdgFVdCI.js";import{u as l}from"./useOverlayController-BSdz9lOP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-DDpjWSCr.js";import"./Dialog-DOWWi4PD.js";import"./Button-DMDpRFJa.js";import"./utils-CwSfACxU.js";import"./index-DnzctHoT.js";import"./index-cwYx15Z_.js";import"./ProgressBar-BRc7Paog.js";import"./Label-z3gRbOqe.js";import"./Hidden-Ct3-vkmZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BhJmZsby.js";import"./context-CpUEkiXT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D-cWxohr.js";import"./useFocus-DGTwh-gS.js";import"./useFocusRing-2ds-u5nI.js";import"./useFocusable-DfxkJnS0.js";import"./RSPContexts-BN50OY8k.js";import"./OverlayArrow-DLVTOKg_.js";import"./useControlledState-CcdBsJdv.js";import"./Collection-My4n8esd.js";import"./CollectionBuilder-BRfzWkKh.js";import"./SelectionIndicator-oJF9tjaE.js";import"./Separator-DziD0EOf.js";import"./Text-CRfwxtsq.js";import"./SelectionManager-Xen2pH3E.js";import"./useEvent-CIGBudko.js";import"./useCollator-D1MkjfpC.js";import"./FocusScope-BGzNCZ_B.js";import"./useLocalizedStringFormatter-DOOHcy82.js";import"./VisuallyHidden--ZEPdGNY.js";import"./IconWarning-HRESMERf.js";import"./remote-CNywZcFz.js";import"./Text-K6yu7K7n.js";import"./browser-BO2LE4a1.js";import"./EmulatedBoldText-DOwlcjUH.js";import"./LoadingSpinner-CziFUZ0y.js";import"./OverlayTrigger-CQGtynqr.js";import"./DialogTriggerView-owN25DMO.js";import"./useStatic-CSSB8BCl.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
