import{j as r,R as a}from"./iframe-ICCBaEZ0.js";import{P as i}from"./Popover-BznUFd8V.js";import{B as n}from"./Button-BPUjkcWl.js";import{P as c}from"./PopoverTrigger-CxCW0DKs.js";import{u as l}from"./useOverlayController-CTkEh9O7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BP2zunxu.js";import"./index-Bz_4mo81.js";import"./index-Dbcsq1pl.js";import"./OverlayContextProvider-DutSGNyV.js";import"./context-CFn3lEGQ.js";import"./useStatic-EBffme0U.js";import"./Dialog-YdLNLYvV.js";import"./Button-CEB885Bq.js";import"./utils-Bdyed02U.js";import"./ProgressBar-DNR75UAD.js";import"./Label-AJl99fin.js";import"./Hidden-DZAoEMIQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrekXyf_.js";import"./context-BA_6GkxW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bkx3Up2v.js";import"./useFocus-sIQn0Mmu.js";import"./useFocusRing-C-l0oxpd.js";import"./useFocusable-Da3kr2d3.js";import"./RSPContexts-yVX-lDWS.js";import"./OverlayArrow-BzKyLQdS.js";import"./useControlledState-0-xiytms.js";import"./Collection-CXuidDK4.js";import"./CollectionBuilder-D1MQIG8v.js";import"./SelectionIndicator-6JK-VVYS.js";import"./Separator-Npr-6AmU.js";import"./Text-6VRpzXYD.js";import"./SelectionManager-CgsCNKwD.js";import"./useEvent-DVme5dXh.js";import"./useCollator-hfiTQ-EU.js";import"./FocusScope-BgxYME-V.js";import"./useLocalizedStringFormatter-CSoJHnbm.js";import"./VisuallyHidden-CIUq3upT.js";import"./IconWarning-DNTau7lk.js";import"./remote-CrBsxa38.js";import"./Text-wotACWdr.js";import"./browser-BXZux_wF.js";import"./EmulatedBoldText-CJhsU2oU.js";import"./LoadingSpinner-DZTaEi_R.js";import"./OverlayTrigger-CZVSbWDN.js";import"./DialogTriggerView-CX_Wmf8Y.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
