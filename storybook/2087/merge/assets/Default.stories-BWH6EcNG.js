import{j as r,R as a}from"./iframe-DwkHntCQ.js";import{P as i}from"./Popover-DvylaOgQ.js";import{B as n}from"./Button-DN4_LEM9.js";import{P as c}from"./PopoverTrigger-CGV492CL.js";import{u as l}from"./useOverlayController-Dk9bMBr8.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CDVCCqgo.js";import"./index-90CY5obj.js";import"./index-Cx9MYi32.js";import"./OverlayContextProvider-DEtKF3P2.js";import"./context-DyX3upIJ.js";import"./useStatic-BqeeL3zA.js";import"./Dialog-Cj1dv_FM.js";import"./Button-BrfRNilt.js";import"./utils-Di7WFWpe.js";import"./ProgressBar-BJChhODk.js";import"./Label-CkXLKyn5.js";import"./Hidden-CTKHA4Af.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DPc8RWv0.js";import"./context-BkqugFd7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BCP8B4jj.js";import"./utils-BgD92WZP.js";import"./useFocus-GoSUCcJ3.js";import"./useFocusWithin-tqcFW1Po.js";import"./useFocusable-Bnl-RQKa.js";import"./useFocusRing-B6zRS2mI.js";import"./RSPContexts-CHr_tkrx.js";import"./OverlayArrow-BCGgH0Vq.js";import"./useControlledState-DyDKUpf4.js";import"./Collection-C9EPSj0q.js";import"./CollectionBuilder-CpTUcuaV.js";import"./SelectionIndicator-BmVEKeRD.js";import"./Separator-D5X37L1x.js";import"./Text-BtFh1iC6.js";import"./SelectionManager-BDJUyJ7N.js";import"./useEvent-N-KGhH9j.js";import"./useCollator-DA-keOw9.js";import"./FocusScope-wRqNTiuk.js";import"./useLocalizedStringFormatter-ClJgDr8F.js";import"./VisuallyHidden-CVpyzdGa.js";import"./ClearPropsContextView-CxP4Y2-5.js";import"./ClearPropsContext-D7-qaIYX.js";import"./IconWarning-CscgxAB5.js";import"./Text-DBgNVic9.js";import"./browser-DfU0u7Y9.js";import"./EmulatedBoldText-CNqdjroB.js";import"./LoadingSpinner-Bd24wSd4.js";import"./OverlayTrigger-Dz-k30Wm.js";import"./ControlledNotification-B20ejBs1.js";import"./DialogTriggerView-CIpO0wl_.js";const ur={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const dr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,dr as __namedExportsOrder,ur as default};
