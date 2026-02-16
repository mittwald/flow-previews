import{j as r,R as a}from"./iframe-H3UGI_HB.js";import{P as i}from"./Popover-gha9Pxgv.js";import{B as n}from"./Button-fzixWt9q.js";import{P as c}from"./PopoverTrigger-WeHm-f8Z.js";import"./flowComponent-RxwhG80E.js";import{u as l}from"./useOverlayController-3aktaPy5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BiL0j1tu.js";import"./Dialog-DKMSACkI.js";import"./Button-5W_fyVDJ.js";import"./utils-DSogMYdc.js";import"./index-D6GAEjHP.js";import"./index-BJWFQYe5.js";import"./ProgressBar-Diyn8Lqp.js";import"./Label-CZuC8vWV.js";import"./Hidden-DoBcQ2Eg.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CtoVShGG.js";import"./context-BGVDv2KD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CSCW4wCL.js";import"./useFocus-DQ3i5Klp.js";import"./useFocusRing-DrWQa_14.js";import"./useFocusable-BYwgOLI_.js";import"./RSPContexts-BrswSFX-.js";import"./OverlayArrow-C-E8ydRe.js";import"./useControlledState-DkMic-Ic.js";import"./Collection-WGKH_Dnj.js";import"./CollectionBuilder-Ba2_Q0LP.js";import"./SelectionIndicator-BgUtvt2H.js";import"./Separator-Q9pbsAsV.js";import"./Text-UIHj6j-v.js";import"./SelectionManager-Bqz8XsWW.js";import"./useEvent-ChUOYfSF.js";import"./useCollator--V7CwpxI.js";import"./FocusScope-DjcW1lzL.js";import"./useLocalizedStringFormatter-w61_e3zI.js";import"./VisuallyHidden-BGP1Ifbj.js";import"./IconWarning-D9BgjB6B.js";import"./remote-uffOWPGy.js";import"./Text-B0lwY8q7.js";import"./browser-xqq3Xy_w.js";import"./EmulatedBoldText-DRHBUbf1.js";import"./LoadingSpinner-r6z_bU0O.js";import"./OverlayTrigger-D9X0XEF5.js";import"./DialogTriggerView-rv9ZvCK5.js";import"./useStatic-CxHSWaOd.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
