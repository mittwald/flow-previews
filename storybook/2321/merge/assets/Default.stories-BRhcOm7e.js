import{j as r,R as a}from"./iframe-BfVXcSwu.js";import{P as i}from"./Popover-CcjFjnE9.js";import{B as n}from"./Button-BWaSf0b-.js";import{P as c}from"./PopoverTrigger-Dmo89nUG.js";import{u as l}from"./useOverlayController-DUljrIWa.js";import"./flowComponent-CjS79BQ2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BGRrPnlE.js";import"./context-C_1OFCCp.js";import"./useStatic-DbJ3Jck6.js";import"./Dialog-DclKvE_W.js";import"./Button-DmoQnqed.js";import"./utils-fXq1spu5.js";import"./index-NVTM04Bh.js";import"./index-CeMFBQ52.js";import"./ProgressBar-CsSv4sp0.js";import"./Label-CAf_YUDZ.js";import"./Hidden-B9jAGDqb.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-_iuRLI1y.js";import"./context-BIORzbvt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CZJvw_K-.js";import"./useFocus-YiRiyJqJ.js";import"./useFocusRing-2MdBuBce.js";import"./useFocusable-Ct-dNppG.js";import"./RSPContexts-BvooXi_W.js";import"./OverlayArrow-DmRhraF5.js";import"./useControlledState-DrmC-rK0.js";import"./Collection-BIYmOT8q.js";import"./CollectionBuilder-B88Jj6se.js";import"./SelectionIndicator-DdESkGsw.js";import"./Separator-C-w1woXG.js";import"./Text-DLMHe2l_.js";import"./SelectionManager-DDxW4Xvy.js";import"./useEvent-N7DHQy5M.js";import"./useCollator-BH_ZCLE4.js";import"./FocusScope-DYj4AULV.js";import"./useLocalizedStringFormatter-B7z2a2Dc.js";import"./VisuallyHidden-CW_0epyS.js";import"./IconWarning-DP3Jd3bc.js";import"./remote-cx7SRDrO.js";import"./Text-DuT5OHtj.js";import"./browser-6PMbihrp.js";import"./EmulatedBoldText-D7Dqf59X.js";import"./LoadingSpinner-uBvx8mS0.js";import"./OverlayTrigger-DRzwAl-J.js";import"./DialogTriggerView-DeUjYAOs.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
