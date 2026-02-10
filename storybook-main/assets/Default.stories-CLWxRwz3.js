import{j as r,R as a}from"./iframe-CKZ3lvbD.js";import{P as i}from"./Popover-BaFxU9kE.js";import{B as n}from"./Button-CJlIPsW5.js";import{P as c}from"./PopoverTrigger-DSPpis6_.js";import{u as l}from"./useOverlayController-CXRFu3Cx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CG3eh15W.js";import"./index-C7ZQKQyg.js";import"./index-4RPaTPNn.js";import"./OverlayContextProvider-CR_6hmPV.js";import"./context-Ca4O4Dr-.js";import"./useStatic-B8hmur2r.js";import"./Dialog-C-Rr13fs.js";import"./Button-BHDMacWQ.js";import"./utils-BvJRIsTz.js";import"./ProgressBar-aA2LYAol.js";import"./Label-CNWA-9aF.js";import"./Hidden-CSZFPuze.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-GmF_fUr4.js";import"./context-C9x0o2NL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BdqAXD8t.js";import"./useFocus-C_IvCZ_Q.js";import"./useFocusRing-BEfvRwzV.js";import"./useFocusable-C7EwfmGM.js";import"./RSPContexts-lOz_fmPr.js";import"./OverlayArrow-Dn7uJ_Mq.js";import"./useControlledState-DyEi02IX.js";import"./Collection-8TFUhRy4.js";import"./CollectionBuilder-DlZiYq_X.js";import"./SelectionIndicator-Lac2coO-.js";import"./Separator-CX2sLzIc.js";import"./Text-CCMj3K8Y.js";import"./SelectionManager-BD0CXj_-.js";import"./useEvent-BnoBTd1m.js";import"./useCollator-DWyyMPNk.js";import"./FocusScope-WJghiIyT.js";import"./useLocalizedStringFormatter-DIxPxHlf.js";import"./VisuallyHidden-CqTmIJ-k.js";import"./IconWarning-C7p1kK8i.js";import"./remote-CtPArtkt.js";import"./Text-C_6aanp2.js";import"./browser-burL9SPa.js";import"./EmulatedBoldText-DqsKkhpE.js";import"./LoadingSpinner-D6ABJv6G.js";import"./OverlayTrigger-C1yyJzXM.js";import"./DialogTriggerView-C3l-2Kzw.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
