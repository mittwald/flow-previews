import{j as r,R as a}from"./iframe-BOfxQ126.js";import{P as i}from"./Popover-BeNB5A8p.js";import{B as n}from"./Button-y6FeYCBC.js";import{P as c}from"./PopoverTrigger-zXQQJf6c.js";import"./flowComponent-sv_DULJq.js";import{u as l}from"./useOverlayController-NqoHBo9l.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BWPPKQaI.js";import"./Dialog-CCDN7DJz.js";import"./Button-6yn426ID.js";import"./utils-Ca0-H8MP.js";import"./index-BJ7B_kXa.js";import"./index-X6kmY2GD.js";import"./ProgressBar-BM4farBg.js";import"./Label-CbvEG18U.js";import"./Hidden-BUteoyFO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-5EK40Aa-.js";import"./context-Bpmop-v_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-up0eurfY.js";import"./useFocus-CUROCE8M.js";import"./useFocusRing-i6kyKwnh.js";import"./useFocusable-C918yQby.js";import"./RSPContexts-8t9TLuqJ.js";import"./OverlayArrow-DOAKdHdF.js";import"./useControlledState-DE1u8yHr.js";import"./Collection-B3wPaI_q.js";import"./CollectionBuilder-D0zf41op.js";import"./SelectionIndicator-DVX-Gi0p.js";import"./Separator-BU8JOY49.js";import"./Text-OoL-eb0_.js";import"./SelectionManager-ItpN5XhA.js";import"./useEvent-BMn21gml.js";import"./useCollator-CnlvukHk.js";import"./FocusScope-CCHjHw-t.js";import"./useLocalizedStringFormatter-DE5_GH3M.js";import"./VisuallyHidden-DfBCvB4u.js";import"./IconWarning-BoBPkWIf.js";import"./remote-DjEyU7NV.js";import"./Text-kIO13lDY.js";import"./browser-Ch4oJYG9.js";import"./EmulatedBoldText-LIZTvG-s.js";import"./LoadingSpinner-BjosoRSs.js";import"./OverlayTrigger-ClVCYjM8.js";import"./DialogTriggerView-Cp6VmI0E.js";import"./useStatic-DMadDPeg.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
