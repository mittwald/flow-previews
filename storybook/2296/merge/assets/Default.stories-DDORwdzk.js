import{j as r,R as a}from"./iframe-DdPUg3l1.js";import{P as i}from"./Popover-MzjGOrse.js";import{B as n}from"./Button-BArDp6jY.js";import{P as c}from"./PopoverTrigger-_-ZZ4G3U.js";import{u as l}from"./useOverlayController-CNjuPWf4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B28SqkEE.js";import"./index-DRxXhfH_.js";import"./index-DfF1Hh-7.js";import"./OverlayContextProvider-CWnaXv7P.js";import"./context-Dvh-zisW.js";import"./useStatic-BSymBvZm.js";import"./Dialog-B4itYT93.js";import"./Button-CezSw_uu.js";import"./utils-CZc2hRnH.js";import"./ProgressBar-CbaeLh44.js";import"./Label-DhA6S4Mt.js";import"./Hidden-9XxNu-Hn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DfTMKk9x.js";import"./context-eo9HPzgD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C4aurJT7.js";import"./useFocus-DOBDf5za.js";import"./useFocusRing-B1QHji0w.js";import"./useFocusable-Dd42TuHo.js";import"./RSPContexts-DWbGf7NE.js";import"./OverlayArrow-CejAifjZ.js";import"./useControlledState-vD92hbDx.js";import"./Collection-C0yC48YX.js";import"./CollectionBuilder-dja0_mRS.js";import"./SelectionIndicator-DB3-93Os.js";import"./Separator-DPd0--zN.js";import"./Text-JRLUlLnO.js";import"./SelectionManager-CZbTqcCP.js";import"./useEvent-ZVXwlSCj.js";import"./useCollator-C9Olqd5e.js";import"./FocusScope-DY6t_O03.js";import"./useLocalizedStringFormatter-uZq7iOxf.js";import"./VisuallyHidden-DYHUXKrU.js";import"./IconWarning-CBjvo3Bl.js";import"./remote-C_Lvi_2k.js";import"./Text-DjGrgiDc.js";import"./browser-CdIpgqNn.js";import"./EmulatedBoldText-DdQb5yyc.js";import"./LoadingSpinner-CrAIHNN2.js";import"./OverlayTrigger-Dxt_ykXt.js";import"./DialogTriggerView-DsjI-Iar.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
