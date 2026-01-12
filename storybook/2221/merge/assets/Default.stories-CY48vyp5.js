import{j as r,R as a}from"./iframe-Ca6Y6Qbd.js";import{P as i}from"./Popover-DUAQfyPS.js";import{B as n}from"./Button-Cmpvhu71.js";import{P as c}from"./PopoverTrigger-BpHyXArv.js";import{u as l}from"./useOverlayController-D-zjYsKH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9fMwVbm.js";import"./index-Dtyg9OU-.js";import"./index-dqS1_mS3.js";import"./OverlayContextProvider-Bf0QUNhT.js";import"./context-BIxaIE9W.js";import"./useStatic-CLFM6Rz8.js";import"./Dialog-B1e_uHMT.js";import"./Button-BwNAbkAI.js";import"./utils-CgPiupY7.js";import"./ProgressBar-CbWR67C5.js";import"./Label-oMJsQOKa.js";import"./Hidden-B5n9q6va.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DSKkVaVQ.js";import"./context-BSVjMcq9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-7njUzVdk.js";import"./useFocus-YlOppDM-.js";import"./useFocusRing-DB26dgIQ.js";import"./useFocusable-DsA9Nlin.js";import"./RSPContexts-CuMU_eQB.js";import"./OverlayArrow-BonLfIYe.js";import"./useControlledState-CsFJYMR6.js";import"./Collection-C7E6DkxT.js";import"./CollectionBuilder-CQicpO9a.js";import"./SelectionIndicator-Cqdhise0.js";import"./Separator-BkDE-Ve8.js";import"./Text-XI5tIYL5.js";import"./SelectionManager-08rbWnYj.js";import"./useEvent-CONOGrCj.js";import"./useCollator-BHsGRBEt.js";import"./FocusScope-g3u6sbgU.js";import"./useLocalizedStringFormatter-DPFID8Bg.js";import"./VisuallyHidden-DA0DNDbd.js";import"./IconWarning-DE1Emhrq.js";import"./remote-B__m5VQE.js";import"./Text-BEUemzSa.js";import"./browser-CbMIui3y.js";import"./EmulatedBoldText-B497YwdM.js";import"./LoadingSpinner-iW8gx6_Q.js";import"./OverlayTrigger-ONQN5d76.js";import"./DialogTriggerView-B6u8zdXJ.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
