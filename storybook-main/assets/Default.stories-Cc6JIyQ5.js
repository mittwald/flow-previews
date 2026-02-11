import{j as r,R as a}from"./iframe-D8EpHgnQ.js";import{P as i}from"./Popover-BAHX_8HU.js";import{B as n}from"./Button-v3XDTDQm.js";import{P as c}from"./PopoverTrigger-7YHVmcPZ.js";import{u as l}from"./useOverlayController-0DhE6nST.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DshXN_wf.js";import"./index-eO8RjZh1.js";import"./index-CTAMatFU.js";import"./OverlayContextProvider-BwUSFJyo.js";import"./context-CfNS10y1.js";import"./useStatic-BaYU_ZGV.js";import"./Dialog-CkEWxlO6.js";import"./Button-Kox0tnC0.js";import"./utils-DUD9ssEU.js";import"./ProgressBar-CUBLGiqw.js";import"./Label-Dl__ymiy.js";import"./Hidden-BjTu0qYx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-oxfSZqnP.js";import"./context-XjBPUYFu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CilZkf8w.js";import"./useFocus-BoCERcfz.js";import"./useFocusRing-DyG-PWur.js";import"./useFocusable-BTi6De5a.js";import"./RSPContexts-D9_YYEmh.js";import"./OverlayArrow-Dy1GJrBM.js";import"./useControlledState-XjABDLiW.js";import"./Collection-tHQuiu82.js";import"./CollectionBuilder-DEptz4hs.js";import"./SelectionIndicator-DYxlXw3H.js";import"./Separator-HrrYEwzP.js";import"./Text-BH6HQaIi.js";import"./SelectionManager-DHCb6qwA.js";import"./useEvent-BJb2xoQw.js";import"./useCollator-BLLhI1Uc.js";import"./FocusScope-2M3u1eHn.js";import"./useLocalizedStringFormatter-DVql_2Gh.js";import"./VisuallyHidden-maxPxeqi.js";import"./IconWarning-lLcAh7ID.js";import"./remote-DkgoZmNz.js";import"./Text-Dkvkf5JK.js";import"./browser-CYlhW0g_.js";import"./EmulatedBoldText-1uP-q_AR.js";import"./LoadingSpinner-BgyqdyMI.js";import"./OverlayTrigger-Df6W5haQ.js";import"./DialogTriggerView-DVLpYSIx.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
