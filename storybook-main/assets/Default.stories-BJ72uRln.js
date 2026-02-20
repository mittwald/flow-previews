import{j as r,R as a}from"./iframe-DGnxviCN.js";import{P as i}from"./Popover-6gSZV124.js";import{B as n}from"./Button-BVsKVkL8.js";import{P as c}from"./PopoverTrigger-CxH0LYa6.js";import"./flowComponent-BKDhK7wE.js";import{u as l}from"./useOverlayController-5kwf29Lw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-DWOAvC95.js";import"./Dialog-4LBd4V1R.js";import"./Button-BPmMTYs3.js";import"./utils-BkfS5ksp.js";import"./index-BGEs2x-a.js";import"./index-CLLV6gyd.js";import"./ProgressBar-BzVgRhsE.js";import"./Label-5xK8AOcv.js";import"./Hidden-v-Wf_Hux.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BPNr7xBu.js";import"./context-UPqYfqWR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CyY11qHx.js";import"./useFocus--s-Wd8Ep.js";import"./useFocusRing-Bv9AUNti.js";import"./useFocusable-Qpttz7ZN.js";import"./RSPContexts-DVx2WDHj.js";import"./OverlayArrow-Cl6eJh3Y.js";import"./useControlledState-Tnf2yuXg.js";import"./Collection-SZbXc0LG.js";import"./CollectionBuilder-DEOfwI8d.js";import"./SelectionIndicator-BVYQMpc5.js";import"./Separator-BN8d0XAg.js";import"./Text-DvHtl8Bn.js";import"./SelectionManager-C4F6MNyw.js";import"./useEvent-BwKzZdM2.js";import"./useCollator-2w2DhYsq.js";import"./FocusScope-CggPEhUf.js";import"./useLocalizedStringFormatter-ClYonFTS.js";import"./VisuallyHidden-BQzdTzN8.js";import"./IconWarning-B9r0STX6.js";import"./remote-B6BjMgpw.js";import"./Text-VNnveGPv.js";import"./browser-Cb_u6_6F.js";import"./EmulatedBoldText-DzMWb8wu.js";import"./LoadingSpinner-DowiBEwh.js";import"./OverlayTrigger-BRKr18-D.js";import"./DialogTriggerView-Beb76ZLI.js";import"./useStatic-BeisnKXD.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
