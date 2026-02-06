import{j as r,R as a}from"./iframe-Cs0JkT9Q.js";import{P as i}from"./Popover-CCN0hkVy.js";import{B as n}from"./Button-BS2N-oft.js";import{P as c}from"./PopoverTrigger-bvJnyKeX.js";import{u as l}from"./useOverlayController-Dl_TlRS7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DnhH9c8U.js";import"./index-CF0rrQKO.js";import"./index-BDmaB34G.js";import"./OverlayContextProvider-zlrNbl-W.js";import"./context-DmALYfE_.js";import"./useStatic-BOH6EX5_.js";import"./Dialog-n12IRs92.js";import"./Button-CoGTRo7z.js";import"./utils-BvIIGzqK.js";import"./ProgressBar-CG2kSUer.js";import"./Label-CQSgfv4f.js";import"./Hidden-BvtrxWwl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CfslMsP4.js";import"./context-CtFpEE6p.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-y02TS-RC.js";import"./useFocus-DNqIDWYA.js";import"./useFocusRing-Cldy4Slr.js";import"./useFocusable-Cn5DQ2tI.js";import"./RSPContexts-BDhxiX2p.js";import"./OverlayArrow-B2W5aB6f.js";import"./useControlledState-DrKGwN1m.js";import"./Collection-BVBA565q.js";import"./CollectionBuilder-BDz0phXE.js";import"./SelectionIndicator-36GmvFRO.js";import"./Separator-BWqNxSAD.js";import"./Text-Dd1xy9_M.js";import"./SelectionManager-DK8tNpRO.js";import"./useEvent-DfZ5FDj0.js";import"./useCollator-JQWc_WGD.js";import"./FocusScope-BXTpAFiu.js";import"./useLocalizedStringFormatter-CQ-MJvxZ.js";import"./VisuallyHidden-BGmnCuXu.js";import"./IconWarning-wVjX2Q6D.js";import"./remote-bYaNzVPL.js";import"./Text-l9LtklMs.js";import"./browser-Cphwy2_f.js";import"./EmulatedBoldText-C1XQaUUR.js";import"./LoadingSpinner-FnXgTY4T.js";import"./OverlayTrigger-zQW25Tpm.js";import"./DialogTriggerView-DZ6tvxu4.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
