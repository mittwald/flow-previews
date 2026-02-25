import{j as r,R as a}from"./iframe-5GKEjLm3.js";import{P as i}from"./Popover-DZrgFB6y.js";import{B as n}from"./Button-DbzE4WUt.js";import{P as c}from"./PopoverTrigger-BYIs0ve4.js";import"./flowComponent-BrPxhm-E.js";import{u as l}from"./useOverlayController-DTNq5pfb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-CsuZ0G7f.js";import"./Dialog-BTalxjOJ.js";import"./Button-CslHKHnR.js";import"./utils-DZdTZXxi.js";import"./index-DZHRuSdS.js";import"./index-CxI-AdtT.js";import"./ProgressBar-CehyS7IW.js";import"./Label-CD-Ily5W.js";import"./Hidden-CVK_WTqz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-sguPTXZB.js";import"./context-CYoVNjzy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CYa1OoRC.js";import"./useFocus-BEqaOfOz.js";import"./useFocusRing-CsUwZj84.js";import"./useFocusable-BDWe4YTb.js";import"./RSPContexts-AhaMx3-_.js";import"./OverlayArrow-C_Skf-4I.js";import"./useControlledState-D9ovZV70.js";import"./Collection-DOmJuy3e.js";import"./CollectionBuilder-DAbTUazM.js";import"./SelectionIndicator-C_xwSetB.js";import"./Separator-BxdVDEg-.js";import"./Text-jTefV10v.js";import"./SelectionManager-rbmArbuf.js";import"./useEvent-_LgPAmJ5.js";import"./useCollator-COkB7H3x.js";import"./FocusScope-BteWf5AP.js";import"./useLocalizedStringFormatter-foHAfgmM.js";import"./VisuallyHidden-BfZLOvo3.js";import"./IconWarning-B10RUVd-.js";import"./remote-DrqTcZe1.js";import"./Text-4Jq61r3V.js";import"./browser-DpyY6Jfh.js";import"./EmulatedBoldText-Dw9vtGzr.js";import"./LoadingSpinner-Bp8vDBpW.js";import"./OverlayTrigger-DMEpenBq.js";import"./DialogTriggerView-DxHd5f4G.js";import"./useStatic-BQSB_Jfu.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
