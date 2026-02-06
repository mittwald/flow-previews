import{j as r,R as a}from"./iframe-CTX0Bv2_.js";import{P as i}from"./Popover-CrXi74XC.js";import{B as n}from"./Button--JyduJMj.js";import{P as c}from"./PopoverTrigger-B3CDs9zS.js";import{u as l}from"./useOverlayController-DZ6rN5UT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CqO4Js9m.js";import"./index-BFwThDrE.js";import"./index-Cuy-twEi.js";import"./OverlayContextProvider-DQ_-g1_x.js";import"./context-DDqdITge.js";import"./useStatic-CPXlsR2u.js";import"./Dialog-B47KQ7WD.js";import"./Button-C6E7IXzn.js";import"./utils-DEP6wxfF.js";import"./ProgressBar-KcEl-cak.js";import"./Label-B9GQQ3x4.js";import"./Hidden-LDMxuxmc.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CflB3N3A.js";import"./context-BlMA_qTH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BBVfaVqb.js";import"./useFocus-Brpf5vcF.js";import"./useFocusRing-jdOUMH5T.js";import"./useFocusable-C46UWCUq.js";import"./RSPContexts-FayjYhqz.js";import"./OverlayArrow-B_Rckldo.js";import"./useControlledState-BSzbNF-6.js";import"./Collection-C9AhhR6W.js";import"./CollectionBuilder-DIcncGvh.js";import"./SelectionIndicator-BIEwPYk3.js";import"./Separator-Bna16C5N.js";import"./Text-CfE4Vxx5.js";import"./SelectionManager-BPzTX_0m.js";import"./useEvent-CpnFGpfj.js";import"./useCollator-Ac6OChDz.js";import"./FocusScope-Dney2d0V.js";import"./useLocalizedStringFormatter-Ci9fYHdG.js";import"./VisuallyHidden-DBqpLolF.js";import"./IconWarning-nHMyX661.js";import"./remote-Dp_KpE6s.js";import"./Text-DLhfgo2a.js";import"./browser-NwcAgtgI.js";import"./EmulatedBoldText-EuanT-4h.js";import"./LoadingSpinner-Ch_rD6BR.js";import"./OverlayTrigger-DD_Axl8O.js";import"./DialogTriggerView-DGkAPB_7.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
