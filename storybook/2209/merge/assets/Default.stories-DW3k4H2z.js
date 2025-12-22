import{j as r,R as a}from"./iframe-CcUuYubL.js";import{P as i}from"./Popover-DmUHZ-tA.js";import{B as n}from"./Button-hsF3uCN8.js";import{P as c}from"./PopoverTrigger-atO59rVW.js";import{u as l}from"./useOverlayController-fROC4phl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BzXwfnR4.js";import"./index-01_sGRec.js";import"./index-C6oVqO8J.js";import"./OverlayContextProvider-Br3sAK21.js";import"./context-BjvrdVaN.js";import"./useStatic-DtEAcyvY.js";import"./Dialog-mDFWR8fO.js";import"./Button-D-Fqqf34.js";import"./utils-B3A9CwVo.js";import"./ProgressBar-Cx5KzXiF.js";import"./Label-ISSVaHBY.js";import"./Hidden-JctcoGsF.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-4jeMa91n.js";import"./context-BiAKFHSE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BQdte7r9.js";import"./useFocus-tKANsd5T.js";import"./useFocusRing-CorDS6JG.js";import"./useFocusable-D38UQMpJ.js";import"./RSPContexts-CCIxlK1Q.js";import"./OverlayArrow-LMNtsg17.js";import"./useControlledState-Cd7zGKC9.js";import"./Collection-DrwZoIdd.js";import"./CollectionBuilder-B_ze3f0a.js";import"./SelectionIndicator-DgBShxS7.js";import"./Separator-CC01ZKOL.js";import"./Text-B0FzOrzN.js";import"./SelectionManager-Cr3dwni9.js";import"./useEvent-BHYxhhiC.js";import"./useCollator-z0uw1QeA.js";import"./FocusScope-BV2sx_oo.js";import"./useLocalizedStringFormatter-BCaxxAx_.js";import"./VisuallyHidden-DlLFaNIr.js";import"./IconWarning-BDjC6xOL.js";import"./remote-DfJLRaxN.js";import"./Text-DY9Wsurd.js";import"./browser-DepVz5kj.js";import"./EmulatedBoldText-IgYc1KUF.js";import"./LoadingSpinner-BSrbl83B.js";import"./OverlayTrigger-DwWDWrw1.js";import"./DialogTriggerView-CdXktG9k.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
