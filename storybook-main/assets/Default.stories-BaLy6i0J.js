import{j as r,R as a}from"./iframe-C2cGCWBO.js";import{P as i}from"./Popover-DJnPn-3r.js";import{B as n}from"./Button-B41LUuF3.js";import{P as c}from"./PopoverTrigger-BwbTMnCd.js";import"./flowComponent-C6jxxEVz.js";import{u as l}from"./useOverlayController-CtyPLm8k.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BBwaePGz.js";import"./Dialog-BW6BpcVd.js";import"./Button-BneP87GG.js";import"./utils-CPzpSZL2.js";import"./index-rbmoV-yM.js";import"./index-Du1kNfMe.js";import"./ProgressBar-DV5MetAr.js";import"./Label-DeWWh5Nd.js";import"./Hidden-C_zHVHDn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DicB4RC2.js";import"./context-2EfdQWx2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BrmD8Kf2.js";import"./useFocus-O4uYrVbU.js";import"./useFocusRing-wtbg8X8X.js";import"./useFocusable-DwbuT13T.js";import"./RSPContexts-YUPb13EG.js";import"./OverlayArrow-DkMjnDr5.js";import"./useControlledState-MMDjipcl.js";import"./Collection-BNpysMuG.js";import"./CollectionBuilder-Bu0heHOT.js";import"./SelectionIndicator-vr7baVWi.js";import"./Separator-Dz7Bhpa-.js";import"./Text-D1LgYL-c.js";import"./SelectionManager-BVOuQNja.js";import"./useEvent-Brb253L4.js";import"./useCollator-CsE89UJT.js";import"./FocusScope-7k8F4i3d.js";import"./useLocalizedStringFormatter-BAIjrI3d.js";import"./VisuallyHidden-C7EnMW_k.js";import"./IconWarning-C4LD0r9W.js";import"./remote-w8RrxnGT.js";import"./Text-D3xXIOyH.js";import"./browser-BGhQMCSV.js";import"./EmulatedBoldText-CQEy9dVT.js";import"./LoadingSpinner-DIaaAh-V.js";import"./OverlayTrigger-C08PeZoT.js";import"./DialogTriggerView-CAilZ6MB.js";import"./useStatic-DUMwmPN3.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
