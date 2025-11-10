import{j as r,R as a}from"./iframe-Bzotfv2d.js";import{P as s,u as c}from"./Popover-DIj_9e80.js";import{B as n}from"./Button-B5Yu3Ofr.js";import{P as l}from"./PopoverTrigger-Q37AsHcH.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-DytNMng2.js";import"./flowComponent-Ce43WGqS.js";import"./index-Dtu7UrbV.js";import"./index-s2lSSiFB.js";import"./useStatic-CUbPzepq.js";import"./OverlayTrigger-DYCZz7an.js";import"./Dialog-DRtGMcXs.js";import"./Button-DKhocf4j.js";import"./utils-F6vOfgTC.js";import"./ProgressBar-DrjjCA4M.js";import"./Hidden-A2gmu8PL.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CZ6Qg3vv.js";import"./useFocusRing-Bwoimiux.js";import"./useFocusable-DtwtCMr6.js";import"./RSPContexts-94nDykOv.js";import"./OverlayArrow-w3VLB_7G.js";import"./useControlledState-BqxXkR6q.js";import"./Collection-BBYs79dF.js";import"./CollectionBuilder-BcriWVNa.js";import"./SelectionIndicator-CkQFqim6.js";import"./Separator-D-my95s-.js";import"./browser-Da6kOqay.js";import"./useLocalizedStringFormatter-CEUFB_Kk.js";import"./ControlledNotification-TPI0xyld.js";import"./ClearPropsContextView-CsYOqVLr.js";import"./IconWarning-DA_wmemp.js";import"./Text-C-DP5r93.js";import"./EmulatedBoldText-CowooJQh.js";import"./LoadingSpinner-B7Dg5gJY.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const V=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,V as __namedExportsOrder,U as default};
